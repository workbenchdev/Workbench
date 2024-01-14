import Gio from "gi://Gio";
import GLib from "gi://GLib";
import dbus_previewer from "../../Previewer/DBusPreviewer.js";
import { copyDirectory, decode, encode } from "../../util.js";

const rust_template_dir = Gio.File.new_for_path(
  pkg.pkgdatadir,
).resolve_relative_path("langs/rust/template");

export default function Compiler({ session }) {
  const { file } = session;
  const cacheDir = GLib.get_user_cache_dir();
  const targetPath = `${cacheDir}/rust_build_cache`;
  const rustcVersionFile = Gio.File.new_for_path(
    `${targetPath}/rustc_version.txt`,
  );

  let rustcVersion;
  let savedRustcVersion;

  async function compile() {
    copyDirectory(rust_template_dir, file);

    rustcVersion ||= await getRustcVersion();
    savedRustcVersion ||= await getSavedRustcVersion({ rustcVersionFile });

    if (rustcVersion !== savedRustcVersion) {
      await cargoClean({ file, targetPath });
      await saveRustcVersion({ targetPath, rustcVersion, rustcVersionFile });
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
      const proxy = await dbus_previewer.getProxy("vala"); // rust uses the Vala previewer.
      const sharedLibrary = `${targetPath}/debug/libdemo.so`;
      await proxy.RunAsync(sharedLibrary, session.file.get_uri());
    } catch (err) {
      console.error(err);
      return false;
    }

    return true;
  }

  return { compile, run };
}

async function getRustcVersion() {
  const cargo_launcher = Gio.SubprocessLauncher.new(
    Gio.SubprocessFlags.STDOUT_PIPE,
  );
  const rustcVersionProcess = cargo_launcher.spawnv(["rustc", "--version"]);
  const stdout = rustcVersionProcess.communicate_utf8(null, null)[1];
  return stdout;
}

async function saveRustcVersion({
  targetPath,
  rustcVersionFile,
  rustcVersion,
}) {
  GLib.mkdir_with_parents(targetPath, 0o755);
  await rustcVersionFile.replace_contents_async(
    encode(rustcVersion),
    null,
    false,
    Gio.FileCreateFlags.NONE,
    null,
  );
}

async function getSavedRustcVersion({ rustcVersionFile }) {
  try {
    const [contents] = await rustcVersionFile.load_contents_async(null);
    return decode(contents);
  } catch (err) {
    if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.NOT_FOUND)) {
      throw err;
    }
    return null;
  }
}

async function cargoClean({ file, targetPath }) {
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
