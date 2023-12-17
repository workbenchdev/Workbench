import Gio from "gi://Gio";

import Document from "../../Document.js";

export class RustDocument extends Document {
  async format() {
    const code = await formatRustCode(this.buffer.text);
    this.code_view.replaceText(code, true);
  }
}

function formatRustCode(text) {
  const rustfmtLauncher = Gio.SubprocessLauncher.new(
    Gio.SubprocessFlags.STDIN_PIPE |
      Gio.SubprocessFlags.STDOUT_PIPE |
      Gio.SubprocessFlags.STDERR_PIPE,
  );

  const rustfmtProcess = rustfmtLauncher.spawnv([
    "rustfmt",
    "--quiet",
    "--emit",
    "stdout",
    "--edition",
    "2021",
  ]);

  const [success, stdout, stderr] = rustfmtProcess.communicate_utf8(text, null);

  if (!success || stderr !== "") {
    console.error(`Error running rustfmt: ${stderr}`);
    return text;
  }

  return stdout;
}
