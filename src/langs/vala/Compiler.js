import Gio from "gi://Gio";
import dbus_previewer from "../../Previewer/DBusPreviewer.js";
import { createTmpDir, copy } from "../../util.js";
import { setupValaProject } from "./vala.js";

let ready_to_build = false;
const session_build_dir = await createTmpDir("vala");

export default function ValaCompiler({ session }) {
  const { file } = session;

  const meson_builddir = "builddir";
  const module_file = session_build_dir
    .get_child(meson_builddir)
    .get_child("libworkbenchcode.so");

  async function compile() {
    if (!ready_to_build) {
      try {
        await setupValaProject(session_build_dir);
        ready_to_build = true;
      } catch (err) {
        console.error(err);
        return false;
      }
    }

    await copy(
      "main.vala",
      file,
      session_build_dir,
      Gio.FileCopyFlags.OVERWRITE | Gio.FileCopyFlags.ALL_METADATA,
    );

    // TODO: Do not run setup if the build directory is already
    // configured
    const meson_launcher = new Gio.SubprocessLauncher();
    meson_launcher.set_cwd(session_build_dir.get_path());
    const meson_setup = meson_launcher.spawnv([
      "meson",
      "setup",
      meson_builddir,
    ]);

    await meson_setup.wait_async(null);
    const setup_result = meson_setup.get_successful();
    if (!setup_result) {
      return false;
    }

    const meson_clean = meson_launcher.spawnv([
      "meson",
      "compile",
      "--clean",
      "-C",
      meson_builddir,
    ]);

    await meson_clean.wait_async(null);
    if (!meson_clean.get_successful()) {
      return false;
    }

    const meson_compile = meson_launcher.spawnv([
      "meson",
      "compile",
      "-C",
      meson_builddir,
    ]);

    await meson_compile.wait_async(null);
    const compile_result = meson_compile.get_successful();

    meson_launcher.close();

    return compile_result;
  }

  async function run() {
    try {
      const proxy = await dbus_previewer.getProxy("vala");
      await proxy.RunAsync(module_file.get_path(), session.file.get_uri());
    } catch (err) {
      console.error(err);
      return false;
    }

    return true;
  }

  return { compile, run };
}
