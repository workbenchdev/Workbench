import Gio from "gi://Gio";
import GLib from "gi://GLib";
import DBusPreviewer from "./Previewer/DBusPreviewer.js";

export default function Compiler(data_dir) {
  const proxy = DBusPreviewer();
  const code_file = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, "code.vala"])
  );
  const module_file = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, "libworkbenchcode.so"])
  );
  const api_file = Gio.File.new_for_path(
    GLib.build_filenamev(["/app/share", "workbench-api.vala"])
  );

  async function compile(code) {
    code_file.replace_contents(
      code,
      null,
      false,
      Gio.FileCreateFlags.NONE,
      null
    );
    try {
      module_file.delete(null);
      // eslint-disable-next-line no-empty
    } catch {}
    const valac = Gio.Subprocess.new(
      [
        "valac",
        code_file.get_path(),
        api_file.get_path(),
        "--hide-internal",
        "-X",
        "-shared",
        "-X",
        "-fpic",
        "--library",
        "workbench",
        "-o",
        module_file.get_path(),
        "--pkg",
        "gtk4",
        "--pkg",
        "gio-2.0",
        "--vapi",
        "/dev/null",
      ],
      Gio.SubprocessFlags.NONE
    );

    valac.wait(null);

    if (!valac.get_successful()) return;

    proxy.RunSync(module_file.get_path(), "main", "set_builder", "set_window");
  }

  return { compile };
}
