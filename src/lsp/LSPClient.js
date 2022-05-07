import GLib from "gi://GLib";
import Gio from "gi://Gio";

import { promiseTask, once } from "../troll/src/util.js";

const { addSignalMethods } = imports.signals;

export default class LSPClient {
  constructor(argv) {
    const proc = Gio.Subprocess.new(
      argv,
      Gio.SubprocessFlags.STDIN_PIPE | Gio.SubprocessFlags.STDOUT_PIPE
    );

    const stdin = proc.get_stdin_pipe();
    const stdout = new Gio.DataInputStream({
      base_stream: proc.get_stdout_pipe(),
      close_base_stream: true,
    });

    const that = this;
    function readOutput() {
      stdout.read_line_async(0, null, (self, res) => {
        try {
          const [line] = stdout.read_line_finish_utf8(res);
          if (line === null) return;

          if (line.startsWith("{")) {
            try {
              that._onmessage(JSON.parse(line));
              // eslint-disable-next-line no-empty
            } catch (err) {
              console.log(err);
            }
          }

          readOutput();
        } catch (e) {
          logError(e);
        }
      });
    }
    readOutput();

    proc.wait_async(null, (proc, res) => {
      try {
        proc.wait_finish(res);
        console.debug("done", proc.get_exit_status());
      } catch (e) {
        logError(e);
      }
    });

    Object.assign(this, { proc, stdin, stdout });
  }

  _onmessage(message) {
    this.emit("input", message);

    if (message.result) {
      this.emit(`result::${message.id}`, message.result);
    }
  }

  send(json) {
    const message = { ...json, jsonrpc: "2.0" };
    const str = JSON.stringify(message);
    const length = [...str].length;

    console.debug("out\n", str);
    return promiseTask(
      this.stdin,
      "write_bytes_async",
      "write_bytes_finish",
      new GLib.Bytes(`Content-Length: ${length}\r\n\r\n${str}`),
      GLib.PRIORITY_DEFAULT,
      null
    ).then(() => {
      this.emit("output", message);
    });
  }

  async request(method, params = {}) {
    const id = rid();
    await this.send({
      id,
      method,
      params,
    });
    const [result] = await once(this, `result::${id}`);
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
