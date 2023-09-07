import Gio from "gi://Gio";
import dbus_previewer from "../../Previewer/DBusPreviewer.js";
import { decode } from "../../util.js";

export default function Compiler({ session }) {
  const { file } = session;

  const module_file = file.get_child("libworkbenchcode.so");
  const file_c = file.get_child("main.c");

  async function compile() {
    console.log("compiling!")

    const gcc_launcher = new Gio.SubprocessLauncher();
    gcc_launcher.set_cwd(file.get_path());
    const gcc = gcc_launcher.spawnv([
      "gcc",
      file_c.get_path()
    ]);

    await gcc.wait_async(null);

    const result = gcc.get_successful();
    gcc_launcher.close();
    return result;
  }

  async function run() {
    try {
      const proxy = await dbus_previewer.getProxy();
      await proxy.RunAsync(module_file.get_path(), session.file.get_uri());
    } catch (err) {
      logError(err);
      return false;
    }

    return true;
  }

  return { compile, run };
}

