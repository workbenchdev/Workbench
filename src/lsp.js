import GLib from "gi://GLib";
import Gio from "gi://Gio";

let loop = GLib.MainLoop.new(null, false);

// // This function simply writes the current time to `stdin`
// function writeInput(stdin) {
//   let date = new Date().toLocaleString();

//   stdin.write_bytes_async(
//     new GLib.Bytes(`${date}\n`),
//     GLib.PRIORITY_DEFAULT,
//     null,
//     (stdin, res) => {
//       try {
//         stdin.write_bytes_finish(res);
//         log(`WROTE: ${date}`);
//       } catch (e) {
//         logError(e);
//       }
//     }
//   );
// }

// // This function reads a line from `stdout`, then queues another read/write
// function readOutput(stdout, stdin) {
//   stdout.read_line_async(GLib.PRIORITY_LOW, null, (stdout, res) => {
//     try {
//       let line = stdout.read_line_finish_utf8(res)[0];

//       if (line !== null) {
//         log(`READ: ${line}`);
//         writeInput(stdin);
//         readOutput(stdout, stdin);
//       }
//     } catch (e) {
//       logError(e);
//     }
//   });
// }

let proc = Gio.Subprocess.new(
  [
    "/home/sonny/Projects/GNOME/blueprint-compiler/blueprint-compiler.py",
    "lsp",
  ],
  Gio.SubprocessFlags.STDIN_PIPE | Gio.SubprocessFlags.STDOUT_PIPE
);

// Watch for the process to exit, like normal
proc.wait_async(null, (proc, res) => {
  try {
    proc.wait_finish(res);
  } catch (e) {
    logError(e);
  } finally {
    loop.quit();
  }
});

// Get the `stdin`and `stdout` pipes, wrapping `stdout` to make it easier to
// read lines of text
let stdinStream = proc.get_stdin_pipe();
let stdoutStream = new Gio.DataInputStream({
  base_stream: proc.get_stdout_pipe(),
  close_base_stream: true,
});

setTimeout(() => {
  while (true) {
    const [data] = stdoutStream.read_line(null);
    const line = new TextDecoder().decode(data);
    console.log("1", line);
    // const data = stdoutStream.read_upto("\r\n", -1, null);
    // const str = new TextDecoder().decode(data);
    // console.log(data);
    // let line = "";
    // let content_len = -1;
    // console.log("test", content_len);
    // while (content_len === -1) {
    //   console.log(
    //     "while",
    //     content_len === -1 || (line !== "\n" && line !== "\r\n")
    //   );
    //   const [data] = stdoutStream.read_line(null);
    //   line = new TextDecoder().decode(data);
    //   console.log("1", line);
    //   if (line === "") {
    //     continue;
    //   }
    //   if (line.startsWith("Content-Length")) {
    //     content_len = Number(line.split("Content-Length:")[1].trim());
    //     console.log("cool!", content_len);
    //   }
    // }
    // console.log("to", content_len);
    // line = stdoutStream.read_bytes(content_len, null);
    // console.log("cool", new TextDecoder().decode(line.get_data()));
  }
}, 0);

function buildMessage(json) {
  const str = JSON.stringify(json);
  const length = new TextEncoder().encode(str).length;
  return `Content-Length: ${length}\r\n\r\n${str}`;
}

function send(str) {
  console.log("out", str);
  new Promise((resolve, reject) => {
    stdinStream.write_bytes_async(
      new GLib.Bytes(str),
      GLib.PRIORITY_DEFAULT,
      null,
      (stdin, res) => {
        try {
          resolve(stdin.write_bytes_finish(res));
        } catch (err) {
          reject(err);
        }
      }
    );
  });
}

async function request(method, params) {
  await send(
    buildMessage({
      jsonrpc: "2.0",
      id: Math.random().toString().substring(2),
      method: method,
      params: params,
    })
  );
}

request("initialize", {}).catch(logError);

loop.run();
