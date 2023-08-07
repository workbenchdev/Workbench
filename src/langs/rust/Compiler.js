import Gio from "gi://Gio";
import dbus_previewer from "../../Previewer/DBusPreviewer.js";
import { decode } from "../../util.js";

export default function Compiler({ session }) {
  const { file } = session;

  async function compile() {

    const cargo_launcher = new Gio.SubprocessLauncher();
    cargo_launcher.set_cwd(file.get_path());
    const cargo = cargo_launcher.spawnv([
      "cargo",
      "build"
    ]);

    await cargo.wait_async(null);

    const result = cargo.get_successful();
    cargo_launcher.close();
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

