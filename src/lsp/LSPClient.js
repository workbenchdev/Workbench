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

    const decoder = new TextDecoder();
    const stdin = proc.get_stdin_pipe();
    const stdout = new Gio.DataInputStream({
      base_stream: proc.get_stdout_pipe(),
      close_base_stream: true,
    });

    // Here we create a GLib.Source using Gio.PollableInputStream.create_source(),
    // set the priority and callback, then add it to main context
    const stdin_source = stdin.create_source(null);
    stdin_source.set_priority(GLib.PRIORITY_DEFAULT_IDLE);
    stdin_source.set_callback(() => {
      try {
        const [data] = stdout.read_line(null);
        if (!data) {
          return GLib.SOURCE_CONTINUE;
        }
        const line = decoder.decode(data).trim();
        console.debug("in\n", line);

        if (line.startsWith("{")) {
          try {
            this._onmessage(JSON.parse(line));
            // eslint-disable-next-line no-empty
          } catch {}
        }

        return GLib.SOURCE_CONTINUE;
      } catch (err) {
        logError(err);
        return GLib.SOURCE_REMOVE;
      }
    });

    const source_id = stdin_source.attach(null);

    proc.wait_async(null, (proc, res) => {
      try {
        proc.wait_finish(res);
        console.debug("done", proc.get_exit_status());
      } catch (e) {
        logError(e);
      }

      GLib.Source.remove(source_id);
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
