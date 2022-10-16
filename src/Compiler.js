import Gio from "gi://Gio";
import GLib from "gi://GLib";
import DBusPreviewer from "./Previewer/DBusPreviewer.js";
import { promiseTask } from "../troll/src/util.js";

const proxy = DBusPreviewer();

export default function Compiler(data_dir) {
  const code_file = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, "code.vala"])
  );
  const module_file = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, "libworkbenchcode.so"])
  );
  const api_file = Gio.File.new_for_path(
    GLib.build_filenamev([pkg.pkgdatadir, "workbench-api.vala"])
  );

  async function compile(code) {
    let args;
    try {
      args = code.split("\n")[0].split("/vala ")[1].split(" ");
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
        null
      ),
      promiseTask(
        module_file,
        "delete_async",
        "delete_finish",
        GLib.PRIORITY_DEFAULT,
        null
      ).catch(() => {}),
    ]);

    GLib.chdir(data_dir);
    const valac = Gio.Subprocess.new(
      [
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
      ].concat(args),
      Gio.SubprocessFlags.NONE
    );

    await promiseTask(valac, "wait_async", "wait_finish", null);
    return valac.get_successful();
  }

  function run() {
    try {
      proxy.RunSync(
        module_file.get_path(),
        "main",
        "set_builder",
        "set_window",
        "set_app"
      );
    } catch (error) {
      console.debug(error);
      return false;
    }
    return true;
  }

  return { compile, run };
}
