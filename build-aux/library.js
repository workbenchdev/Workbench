#!/usr/bin/env -S gjs -m

import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { programArgs, exit } from "system";

Gio._promisify(
  Gio.File.prototype,
  "enumerate_children_async",
  "enumerate_children_finish",
);

Gio._promisify(
  Gio.File.prototype,
  "replace_contents_async",
  "replace_contents_finish",
);

Gio._promisify(
  Gio.File.prototype,
  "make_directory_async",
  "make_directory_finish",
);

Gio._promisify(Gio.File.prototype, "copy_async", "copy_finish");

const loop = new GLib.MainLoop(null, false);

const [pkgdatadir] = programArgs;
GLib.mkdir_with_parents(
  Gio.File.new_for_path(pkgdatadir).get_child("demos").get_path(),
  0o755,
);

const demos_dir = Gio.File.new_for_path(
  GLib.getenv("MESON_SOURCE_ROOT"),
).get_child("demos/src");
const demos = [];

(async () => {
  const enumerator = await demos_dir.enumerate_children_async(
    `${Gio.FILE_ATTRIBUTE_STANDARD_NAME},${Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN}`,
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );
  for (const file_info of enumerator) {
    if (file_info.get_is_hidden()) continue;
    if (file_info.get_file_type() !== Gio.FileType.DIRECTORY) continue;

    const demo_dir = enumerator.get_child(file_info);

    let str;
    try {
      str = new TextDecoder().decode(
        demo_dir.get_child("main.json").load_contents(null)[1],
      );
    } catch (err) {
      console.warn(err);
      continue;
    }

    const demo = JSON.parse(str);
    demo.name = file_info.get_name();

    if (!isDemoCompatible(demo)) {
      continue;
    }

    const languages = [];
    if (demo_dir.get_child("main.js").query_exists(null)) {
      languages.push("javascript");
    }
    if (demo_dir.get_child("main.ts").query_exists(null)) {
      languages.push("typescript");
    }
    if (demo_dir.get_child("main.vala").query_exists(null)) {
      languages.push("vala");
    }
    if (demo_dir.get_child("code.rs").query_exists(null)) {
      languages.push("rust");
    }
    if (demo_dir.get_child("main.py").query_exists(null)) {
      languages.push("python");
    }
    demo.languages = languages;

    await copyDemo(
      demo_dir,
      Gio.File.new_for_path(pkgdatadir)
        .get_child("demos")
        .get_child(demo_dir.get_basename()),
    );

    demos.push(demo);
  }

  demos.sort((a, b) => {
    if (a.name === "Welcome") return -1;
    if (b.name === "Welcome") return 1;
    if (a.name === "Platform Tools") return -1;
    if (b.name === "Platform Tools") return 1;
    else return a.name.localeCompare(b.name);
  });

  await Gio.File.new_for_path(pkgdatadir)
    .get_child("demos/index.json")
    .replace_contents_async(
      new TextEncoder().encode(JSON.stringify(demos)),
      null,
      false,
      Gio.FileCreateFlags.NONE,
      null,
    );
})()
  .catch((err) => {
    loop.quit();
    console.error(err);
    exit(1);
  })
  .then(() => {
    loop.quit();
  });

async function copyDemo(source, destination) {
  try {
    destination.make_directory_with_parents(null);
  } catch (err) {
    if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS)) {
      throw err;
    }
  }

  const enumerator = await source.enumerate_children_async(
    `${Gio.FILE_ATTRIBUTE_STANDARD_NAME},${Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN}`,
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );

  for await (const file_info of enumerator) {
    if (file_info.get_is_hidden()) continue;

    const child = enumerator.get_child(file_info);
    if (
      // Sync with demos "make clean" and .gitignore
      [
        "Cargo.lock",
        "Cargo.toml",
        "lib.rs",
        "workbench.rs",
        "workbench.vala",
        "libworkbenchcode.so",
        "settings",
        "main.ui",
        "icons.gresource",
        "icons.gresource.xml",
      ].includes(child.get_basename())
    ) {
      continue;
    }

    const child_dest = destination.get_child(child.get_basename());

    if (file_info.get_file_type() === Gio.FileType.DIRECTORY) {
      await copyDirectory(child, child_dest);
      continue;
    }

    try {
      await child.copy_async(
        child_dest, // destination
        Gio.FileCopyFlags.NONE, // flags
        GLib.PRIORITY_DEFAULT, // priority
        null, // cancellable
        null, // progress_callback
      );
    } catch (err) {
      if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS)) {
        throw err;
      }
    }
  }
}

async function copyDirectory(source, destination) {
  try {
    await destination.make_directory_async(GLib.PRIORITY_DEFAULT, null);
  } catch (err) {
    if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS)) {
      throw err;
    }
  }

  const enumerator = await source.enumerate_children_async(
    `${Gio.FILE_ATTRIBUTE_STANDARD_NAME},${Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN}`,
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );

  for await (const file_info of enumerator) {
    if (file_info.get_is_hidden()) continue;

    const child = enumerator.get_child(file_info);
    const child_dest = destination.get_child(child.get_basename());

    if (file_info.get_file_type() === Gio.FileType.DIRECTORY) {
      await copyDirectory(child, child_dest);
      continue;
    }

    try {
      await child.copy_async(
        child_dest, // destination
        Gio.FileCopyFlags.NONE, // flags
        GLib.PRIORITY_DEFAULT, // priority
        null, // cancellable
        null, // progress_callback
      );
    } catch (err) {
      if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS)) {
        throw err;
      }
    }
  }
}

const key_file = new GLib.KeyFile();
key_file.load_from_file("/.flatpak-info", GLib.KeyFileFlags.NONE);
// runtime/org.gnome.Sdk/x86_64/master
const [, , , runtime_version] = key_file
  .get_string("Application", "runtime")
  .split("/");

function isDemoCompatible(demo) {
  const demo_runtime_version = demo["runtime-version"];

  if (demo_runtime_version === "master") {
    return runtime_version === "master";
  } else if (runtime_version === "master") {
    return true;
  } else if (!demo_runtime_version) {
    return true;
  }

  return +runtime_version >= +demo_runtime_version;
}

loop.run();
