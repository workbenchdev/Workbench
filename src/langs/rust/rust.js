import Gio from "gi://Gio";

const rustfmtLauncher = Gio.SubprocessLauncher.new(
  Gio.SubprocessFlags.STDIN_PIPE | Gio.SubprocessFlags.STDOUT_PIPE,
);

export function format(text) {
  const process = rustfmtLauncher.spawnv([
    "rustfmt",
    "--quiet",
    "--emit",
    "stdout",
  ]);

  const [success, stdout, stderr] = process.communicate_utf8(text, null);

  if (!success) {
    logError(`Error running rustfmt: ${stderr}`);
    return text;
  }

  return stdout;
}
