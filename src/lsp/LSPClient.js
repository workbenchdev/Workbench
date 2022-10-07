import GLib from "gi://GLib";
import Gio from "gi://Gio";

import { LSPError } from "./LSP.js";

import { promiseTask, once } from "../../troll/src/util.js";

const { addSignalMethods } = imports.signals;

const encoder_utf8 = new TextEncoder("utf8");
const decoder_utf8 = new TextDecoder("utf8");
const decoder_ascii = new TextDecoder("ascii");
export default class LSPClient {
  constructor(argv) {
    this.argv = argv;
  }

  start() {
    this._start_process();
    // For testing blueprint language server restart
    // setTimeout(() => {
    //   this.proc.force_exit();
    // }, 5000);
  }

  _start_process() {
    this.proc = Gio.Subprocess.new(
      this.argv,
      Gio.SubprocessFlags.STDIN_PIPE | Gio.SubprocessFlags.STDOUT_PIPE
    );
    this.proc.wait_async(null, (self, res) => {
      try {
        this.proc.wait_finish(res);
      } catch (err) {
        logError(err);
      }
      this.emit("exit");
      this._start_process();
    });
    this.stdin = this.proc.get_stdin_pipe();
    this.stdout = new Gio.DataInputStream({
      base_stream: this.proc.get_stdout_pipe(),
      close_base_stream: true,
    });

    this._read().catch(logError);
  }

  async _read_headers() {
    const headers = Object.create(null);

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const [bytes] = await promiseTask(
        this.stdout,
        "read_line_async",
        "read_line_finish",
        0,
        null
      );
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
    const bytes = await promiseTask(
      this.stdout,
      "read_bytes_async",
      "read_bytes_finish",
      length,
      0,
      null
    );
    const str = decoder_utf8.decode(bytes.toArray());
    try {
      return JSON.parse(str);
      // eslint-disable-next-line no-empty
    } catch (err) {
      logError(err);
    }
  }

  // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#baseProtocol
  async _read() {
    const headers = await this._read_headers();

    const length = headers["Content-Length"];
    const content = await this._read_content(length);
    if (content) {
      this._onmessage(content);
    }

    this._read().catch(logError);
  }

  _onmessage(message) {
    console.log(message);
    this.emit("input", message);

    if (message.result) {
      this.emit(`result::${message.id}`, message.result);
    }
    if (message.error) {
      const err = new LSPError(message.error);
      this.emit(`error::${message.id}`, err);
    } else if (message.params) {
      this.emit(`notification::${message.method}`, message.params);
    }
  }

  async send(json) {
    const message = { ...json, jsonrpc: "2.0" };

    const str = JSON.stringify(message);
    const length = encoder_utf8.encode(str).byteLength;
    const bytes = new GLib.Bytes(`Content-Length: ${length}\r\n\r\n${str}`);

    if (this.stdin.clear_pending()) {
      this.stdin.flush();
    }

    await promiseTask(
      this.stdin,
      "write_bytes_async",
      "write_bytes_finish",
      bytes,
      GLib.PRIORITY_DEFAULT,
      null
    );

    this.emit("output", message);
  }

  async request(method, params = {}) {
    const id = rid();
    await this.send({
      id,
      method,
      params,
    });
    const [result] = await once(this, `result::${id}`, {
      error: `error::${id}`,
      timeout: 1000,
    });
    return result;
  }

  async notify(method, params = {}) {
    return this.send({
      method,
      params,
    });
  }
}
addSignalMethods(LSPClient.prototype);

function rid() {
  return Math.random().toString().substring(2);
}
