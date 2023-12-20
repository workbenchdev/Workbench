import GLib from "gi://GLib";
import Gio from "gi://Gio";

import { LSPError } from "./LSP.js";

import { getPid } from "../../troll/src/util.js";
import { once } from "../../troll/src/async.js";

// eslint-disable-next-line no-restricted-globals
const { addSignalMethods } = imports.signals;

const encoder_utf8 = new TextEncoder("utf8");
const decoder_utf8 = new TextDecoder("utf8");
const decoder_ascii = new TextDecoder("ascii");

const processId = getPid();
const clientInfo = {
  name: pkg.name,
  version: pkg.version,
};

export default class LSPClient {
  constructor(
    argv,
    { rootUri, uri, languageId, buffer, env = {}, quiet = true },
  ) {
    this.ready = false;
    this.started = false;
    this.proc = null;
    this.version = 0;

    this.argv = argv;
    this.rootUri = rootUri;
    this.uri = uri;
    this.languageId = languageId;
    this.buffer = buffer;
    this.env = env;
    this.quiet = quiet;

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#clientCapabilities
    this.capabilities = {
      textDocument: {
        publishDiagnostics: {},
      },
    };
  }

  async start() {
    this._start_process();

    await this._initialize();
    await this._didOpen();

    this.ready = true;
    this.emit("ready");

    // For testing blueprint language server restart
    // setTimeout(() => {
    //   this.stop()
    // }, 5000);
  }

  async _ready() {
    if (this.ready) return;
    return once(this, "ready");
  }

  async _initialize() {
    const { capabilities, rootUri } = this;

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialize
    const result = await this._request("initialize", {
      processId,
      clientInfo,
      capabilities,
      rootUri,
      locale: "en",
    });

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialized
    await this._notify("initialized", {});

    return result;
  }

  async stop() {
    await Promise.all([
      this.stdin.close_async(null),
      this.stdout.close_async(null),
    ]);
    // this.proc?.force_exit();
    this.proc.send_signal(15);
  }

  async send(...args) {
    await this._ready();
    return this._send(...args);
  }

  async notify(...args) {
    await this._ready();
    return this._notify(...args);
  }

  async request(...args) {
    await this._ready();
    return this._request(...args);
  }

  async didChange(...args) {
    await this._ready();
    return this._didChange(...args);
  }

  _didOpen() {
    const { uri, languageId, version, buffer } = this;
    return this._notify("textDocument/didOpen", {
      textDocument: {
        uri,
        languageId,
        version,
        text: buffer.text,
      },
    });
  }

  _didChange() {
    const { uri, buffer } = this;
    return this._notify("textDocument/didChange", {
      textDocument: {
        uri,
        version: ++this.version,
      },
      contentChanges: [{ text: buffer.text }],
    });
  }

  _start_process() {
    let flags =
      Gio.SubprocessFlags.STDIN_PIPE | Gio.SubprocessFlags.STDOUT_PIPE;
    if (this.quiet) {
      flags = flags | Gio.SubprocessFlags.STDERR_SILENCE;
    }

    const subprocess_launcher = Gio.SubprocessLauncher.new(flags);
    for (const [key, value] of Object.entries(this.env)) {
      subprocess_launcher.setenv(key, value, true);
    }

    this.proc = subprocess_launcher.spawnv(this.argv);
    this.proc
      .wait_async(null)
      .then(() => {
        this.emit("exit");
        // this._start_process();
      })
      .catch(console.error);
    this.stdin = this.proc.get_stdin_pipe();
    this.stdout = new Gio.DataInputStream({
      base_stream: this.proc.get_stdout_pipe(),
      close_base_stream: true,
    });

    this._read().catch(console.error);
  }

  async _read_headers() {
    const headers = Object.create(null);

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const [bytes] = await this.stdout.read_line_async(
        GLib.PRIORITY_DEFAULT,
        null,
      );
      if (!bytes) break;
      const line = decoder_ascii.decode(bytes).trim();
      if (!line) break;

      const idx = line.indexOf(": ");
      const key = line.substring(0, idx);
      const value = line.substring(idx + 2);
      headers[key] = value;
    }

    return headers;
  }

  async _read_content(length) {
    // read_bytes is limited by some underlying max buffer size
    // see https://github.com/workbenchdev/Workbench/issues/240#issuecomment-1475387647
    // read_all is not supported in GJS so we do this instead
    // https://gitlab.gnome.org/GNOME/gjs/-/issues/501
    const uint8 = new Uint8Array(length);
    let read = 0;
    while (read < length) {
      const bytes = await this.stdout.read_bytes_async(
        length - read,
        GLib.PRIORITY_DEFAULT,
        null,
      );
      uint8.set(bytes.toArray(), read);
      read += bytes.get_size();
    }

    // When the LSP responds witha non-conformant JSON,
    // the message get's logged.
    const str = decoder_utf8.decode(uint8).trim();
    try {
       return JSON.parse(str);
    } catch (e) {
      console.debug("LSP responded with:", str);
      throw e;
    }
  }

  // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#baseProtocol
  async _read() {
    const headers = await this._read_headers();

    // IF the LSP does not send any headers,
    // do not try to decode the message.
    if(Object.keys(headers).length != 0) {
      const length = headers["Content-Length"];
      const content = await this._read_content(length);
      if (content) {
        this._onmessage(content);
      }
    }

    // Wait for a bit before recursively calling _read, so Gargbage Collection
    // can catch up.
    await new Promise((resolve, _) => {
      setTimeout(() => resolve(), 100);
   });


    this._read().catch(console.error);
  }

  _onmessage(message) {
    this.emit("input", message);

    if ("result" in message) {
      this.emit(`result::${message.id}`, message.result);
    } else if ("error" in message) {
      const err = new LSPError(message.error);
      this.emit(`error::${message.id}`, err);
    } else if ("id" in message) {
      this.emit(`request::${message.method}`, message);
    } else {
      this.emit(`notification::${message.method}`, message.params);
    }
  }

  async _send(json) {
    const message = { ...json, jsonrpc: "2.0" };

    const str = JSON.stringify(message);
    const body = encoder_utf8.encode(str);
    const header = encoder_utf8.encode(
      `Content-Length: ${body.byteLength}\r\n\r\n`,
    );

    const buffer = new Uint8Array(header.length + body.length);
    buffer.set(header, 0);
    buffer.set(body, header.length);

    if (this.stdin.clear_pending()) {
      this.stdin.flush();
    }

    await this.stdin.write_all_async(buffer, GLib.PRIORITY_DEFAULT, null);

    this.emit("output", message);
  }

  async _request(method, params = {}) {
    const id = rid();
    await this._send({
      id,
      method,
      params,
    });
    const [result] = await once(this, `result::${id}`, {
      error: `error::${id}`,
      timeout: 5000,
    });
    return result;
  }

  async _notify(method, params = {}) {
    return this._send({
      method,
      params,
    });
  }
}
addSignalMethods(LSPClient.prototype);

function rid() {
  return Math.random().toString().substring(2);
}
