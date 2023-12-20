import Gio from "gi://Gio";

import Document from "../../Document.js";
import { setup } from "./python.js";

export class PythonDocument extends Document {
  constructor(...args) {
    super(...args);

    this.lspc = setup({ document: this });
  }

  async format() {
    const code = await formatPythonCode(this.buffer.text);
    this.code_view.replaceText(code, true);
  }
}

function formatPythonCode(text) {
  const blackLauncher = Gio.SubprocessLauncher.new(
    Gio.SubprocessFlags.STDIN_PIPE |
      Gio.SubprocessFlags.STDOUT_PIPE |
      Gio.SubprocessFlags.STDERR_PIPE,
  );

  const blackProcess = blackLauncher.spawnv(["black", "--quiet", "-"]);

  const [success, stdout, stderr] = blackProcess.communicate_utf8(text, null);

  if (!success || stderr !== "") {
    console.error(`Error running black: ${stderr}`);
    return text;
  }

  return stdout;
}
