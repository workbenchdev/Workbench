import GLib from "gi://GLib";
import Gio from "gi://Gio";

import { promiseTask, once } from "../troll/src/util.js";

const { addSignalMethods } = imports.signals;

const text_encoder = new TextEncoder();

export class LSPError extends Error {
  constructor({ message, code, data }) {
    super(message);
    this.name = "LSPError";
    this.code = code;
    this.data = data;
  }
}

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
    this._read();
  }

  _read() {
    this.stdout.read_line_async(0, null, (self, res) => {
      let line;
      try {
        [line] = this.stdout.read_line_finish_utf8(res);
      } catch (err) {
        logError(err);
        return;
      }

      if (line === null) return;
      if (line.startsWith("{")) {
        try {
          this._onmessage(JSON.parse(line));
          // eslint-disable-next-line no-empty
        } catch (err) {
          logError(err);
        }
      }

      this._read();
    });
  }

  _onmessage(message) {
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
    const length = text_encoder.encode(str).byteLength;
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
