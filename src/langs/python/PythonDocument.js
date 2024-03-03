import Gio from "gi://Gio";

import Document from "../../Document.js";
import { setup } from "./python.js";

export class PythonDocument extends Document {
  constructor(...args) {
    super(...args);

    /// XXX: We should await setup, but we can't in a Constructor. This would require bigger refactoring.
    this.lspc = setup({ document: this });
  }

  async format() {
    const code = await formatPythonCode(this.buffer.text);
    this.code_view.replaceText(code, true);
  }
}

function formatPythonCode(text) {
  const ruffLauncher = Gio.SubprocessLauncher.new(
    Gio.SubprocessFlags.STDIN_PIPE |
      Gio.SubprocessFlags.STDOUT_PIPE |
      Gio.SubprocessFlags.STDERR_PIPE,
  );

  const ruffProcess = ruffLauncher.spawnv(["ruff", "format", "--quiet", "-"]);

  const [success, stdout, stderr] = ruffProcess.communicate_utf8(text, null);

  if (!success || stderr !== "") {
    console.error(`Error running ruff format: ${stderr}`);
    return text;
  }

  return stdout;
}
