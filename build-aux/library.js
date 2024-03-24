#!/usr/bin/env -S gjs -m

import Gio from "gi://Gio";
import GLib from "gi://GLib";

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

Gio._promisify(Gio.File.prototype, "copy_async", "copy_finish");

const [pkgdatadir] = ARGV;
GLib.mkdir_with_parents(pkgdatadir, 0o755);

const demos_dir = Gio.File.new_for_path(
  GLib.getenv("MESON_SOURCE_ROOT"),
).get_child("demos/src");
const demos = [];

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

  const languages = [];
  if (demo_dir.get_child("main.js").query_exists(null)) {
    languages.push("javascript");
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

  await copyDirectory(
    demo_dir,
    Gio.File.new_for_path(pkgdatadir)
      .get_child("demos")
      .get_child(demo_dir.get_basename()),
  );

  demos.push(demo);
}

await Gio.File.new_for_path(pkgdatadir)
  .get_child("demos/index.json")
  .replace_contents_async(
    new TextEncoder().encode(JSON.stringify(demos)),
    null,
    false,
    Gio.FileCreateFlags.NONE,
    null,
  );

export async function copyDirectory(source, destination) {
  const enumerator = await source.enumerate_children_async(
    `${Gio.FILE_ATTRIBUTE_STANDARD_NAME},${Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN}`,
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );

  for await (const file_info of enumerator) {
    if (file_info.get_is_hidden()) continue;
    if (file_info.get_file_type() === Gio.FileType.DIRECTORY) continue;

    const child = enumerator.get_child(file_info);
    if (
      [
        "Cargo.lock",
        "Cargo.toml",
        "lib.rs",
        "workbench.rs",
        "workbench.vala",
        "libworkbenchcode.so",
        "settings",
        "main.ui",
      ].includes(child.get_basename())
    ) {
      continue;
    }

    try {
      await child.copy_async(
        destination.get_child(child.get_basename()), // destination
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
