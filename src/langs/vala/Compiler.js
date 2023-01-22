import Gio from "gi://Gio";
import GLib from "gi://GLib";
import DBusPreviewer from "../../Previewer/DBusPreviewer.js";
import { promiseTask } from "../../../troll/src/util.js";

const proxy = DBusPreviewer();

export default function Compiler(data_dir) {
  const code_file = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, "code.vala"]),
  );
  const module_file = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, "libworkbenchcode.so"]),
  );

  async function compile(code) {
    let args;
    try {
      args = getValaCompilerArguments(code);
    } catch (error) {
      console.debug(error);
      return;
    }
    await Promise.all([
      promiseTask(
        code_file,
        "replace_contents_async",
        "replace_contents_finish",
        new GLib.Bytes(code || " "),
        null,
        false,
        Gio.FileCreateFlags.NONE,
        null,
      ),
      promiseTask(
        module_file,
        "delete_async",
        "delete_finish",
        GLib.PRIORITY_DEFAULT,
        null,
      ).catch(() => {}),
    ]);

    const valac_launcher = new Gio.SubprocessLauncher();
    valac_launcher.set_cwd(data_dir);
    const valac = valac_launcher.spawnv([
      "valac",
      code_file.get_path(),
      "--hide-internal",
      "-X",
      "-shared",
      "-X",
      "-fpic",
      "--library",
      "workbench",
      "-o",
      module_file.get_path(),
      "--vapi",
      "/dev/null",
      ...args,
    ]);

    await promiseTask(valac, "wait_async", "wait_finish", null);

    const result = valac.get_successful();
    valac_launcher.close();
    return result;
  }

  function run() {
    try {
      proxy.RunSync(
        module_file.get_path(),
        "main",
        "set_builder",
        "set_window",
        "set_app",
      );
    } catch (error) {
      console.debug(error);
      return false;
    }
    return true;
  }

  return { compile, run };
}

// Takes a string starting with the line
// #!/usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1
// and return ["--pkg", "gtk4", "--pkg", "libadwaita-1"]
// FIXME: consider using https://docs.gtk.org/glib/struct.OptionContext.html instead
function getValaCompilerArguments(text) {
  return text.split("\n")[0]?.split("-S vala ")[1]?.split(" ") || [];
}
