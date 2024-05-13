import Gio from "gi://Gio";
import GLib from "gi://GLib";

import { buildRuntimePath, copy } from "../../util.js";

export default function Compiler({ session }) {
  const { file } = session;

  async function compile() {
    const tsc_launcher = new Gio.SubprocessLauncher();
    tsc_launcher.set_cwd(file.get_path());

    const tsc = tsc_launcher.spawnv(["tsc", "--project", file.get_path()]);
    await tsc.wait_async(null);

    const result = tsc.get_successful();
    tsc_launcher.close();
    return result;
  }

  async function run() {
    // We have to create a new file each time
    // because gjs doesn't appear to use etag for module caching
    // ?foo=Date.now() also does not work as expected
    // TODO: File a bug
    const path = buildRuntimePath(`workbench-${Date.now()}`);
    const compiled_dir = Gio.File.new_for_path(path);
    if (!compiled_dir.query_exists(null)) {
      await compiled_dir.make_directory_async(GLib.PRIORITY_DEFAULT, null);
    }
    await copy(
      "main.js",
      file.get_child("compiled_javascript"),
      compiled_dir,
      Gio.FileCopyFlags.NONE,
    );
    const compiled_file = compiled_dir.get_child("main.js");

    let exports;
    try {
      exports = await import(`file://${compiled_file.get_path()}`);
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      compiled_file
        .delete_async(GLib.PRIORITY_DEFAULT, null)
        .catch(console.error);
    }

    return exports;
  }

  return { compile, run };
}
