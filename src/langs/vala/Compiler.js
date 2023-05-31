import Gio from "gi://Gio";
import GLib from "gi://GLib";
import dbus_previewer from "../../Previewer/DBusPreviewer.js";

import { data_dir } from "../../util.js";

export default function Compiler() {
  const code_file = data_dir.get_child("code.vala");
  const module_file = data_dir.get_child("libworkbenchcode.so");

  async function compile(code) {
    let args;
    try {
      args = getValaCompilerArguments(code);
    } catch (error) {
      console.debug(error);
      return;
    }
    await Promise.all([
      code_file.replace_contents_async(
        new GLib.Bytes(code || " "),
        null,
        false,
        Gio.FileCreateFlags.NONE,
        null,
      ),
      module_file.delete_async(GLib.PRIORITY_DEFAULT, null).catch(() => {}),
    ]);

    const valac_launcher = new Gio.SubprocessLauncher();
    valac_launcher.set_cwd(data_dir.get_path());
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

    await valac.wait_async(null);

    const result = valac.get_successful();
    valac_launcher.close();
    return result;
  }

  async function run() {
    try {
      const proxy = await dbus_previewer.getProxy();
      await proxy.RunAsync(
        module_file.get_path(),
        "main",
        "set_builder",
        "set_window",
      );
    } catch (err) {
      logError(err);
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
