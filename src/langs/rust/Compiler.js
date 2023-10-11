import Gio from "gi://Gio";
import GLib from "gi://GLib";
import dbus_previewer from "../../Previewer/DBusPreviewer.js";

export default function Compiler({ session }) {
  const { file } = session;
  const cacheDir = GLib.get_user_cache_dir();
  const targetPath = `${cacheDir}/rust_build_cache`;
  const rustcVersionFilePath = `${targetPath}/rustc_version.txt`;

  async function compile() {
    // Check if the rustc version file exists and has the correct content
    const rustcVersion = await getRustcVersion();
    const decoder = new TextDecoder("utf-8");
    if (
      !GLib.file_test(rustcVersionFilePath, GLib.FileTest.EXISTS) ||
      decoder.decode(GLib.file_get_contents(rustcVersionFilePath, null)[1]) !==
        rustcVersion
    ) {
      // If the file doesn't exist or rustc version doesn't match, perform cleanup
      await cargoClean();
      GLib.mkdir_with_parents(targetPath, 0o755);
      GLib.file_set_contents(rustcVersionFilePath, rustcVersion);
    }

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
      console.error(err);
      return false;
    }

    return true;
  }

  function getRustcVersion() {
    const cargo_launcher = Gio.SubprocessLauncher.new(
      Gio.SubprocessFlags.STDOUT_PIPE,
    );
    cargo_launcher.set_cwd(file.get_path());
    const rustcVersionProcess = cargo_launcher.spawnv(["rustc", "--version"]);
    const stdout = rustcVersionProcess.communicate_utf8(null, null)[1];
    return stdout;
  }

  async function cargoClean() {
    const cargo_launcher = new Gio.SubprocessLauncher();
    cargo_launcher.set_cwd(file.get_path());
    const cargoCleanProcess = cargo_launcher.spawnv([
      "cargo",
      "clean",
      "--target-dir",
      targetPath,
    ]);
    await cargoCleanProcess.wait_async(null);
  }

  return { compile, run };
}
