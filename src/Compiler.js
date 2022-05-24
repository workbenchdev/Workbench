import Gio from "gi://Gio";
import GLib from "gi://GLib";
import logger from "./logger.js";
import DBusPreviewer from "./Previewer/DBusPreviewer.js";
import { promiseTask } from "./troll/src/util.js";

const proxy = DBusPreviewer();

export default function Compiler(data_dir) {
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
        "--pkg",
        "libadwaita-1",
        "--vapi",
        "/dev/null",
      ],
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
      logger.debug(error);
      return false;
    }
    return true;
  }

  return { compile, run };
}
