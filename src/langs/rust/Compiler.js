import Gio from "gi://Gio";
import GLib from "gi://GLib";
import dbus_previewer from "../../Previewer/DBusPreviewer.js";

export default function Compiler({ session }) {
  const { file } = session;
  const cacheDir = GLib.get_user_cache_dir();
  const targetPath = `${cacheDir}/rust_build_cache`;

  async function compile() {
    const cargo_launcher = new Gio.SubprocessLauncher();
    cargo_launcher.set_cwd(file.get_path());

    const cargo = cargo_launcher.spawnv([
      "cargo",
      "build",
      "--locked",
      "--target-dir",
      targetPath,
    ]);
    await cargo.wait_async(null);

    const result = cargo.get_successful();
    cargo_launcher.close();
    return result;
  }

  async function run() {
    try {
      const proxy = await dbus_previewer.getProxy();
      const sharedLibrary = `${targetPath}/debug/libdemo.so`;
      await proxy.RunAsync(sharedLibrary, session.file.get_uri());
    } catch (err) {
      logError(err);
      return false;
    }

    return true;
  }

  return { compile, run };
}
