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

const demos_dir = Gio.File.new_for_path(
  GLib.getenv("MESON_SOURCE_ROOT"),
).get_child("src/Library/demos/demos");
const demos = [];

for (const file_info of demos_dir.enumerate_children(
  "",
  Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
  null,
)) {
  if (file_info.get_file_type() !== Gio.FileType.DIRECTORY) continue;

  const demo_name = file_info.get_name();
  const demo_dir = demos_dir.get_child(demo_name);

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

  demos.push(demo);
}

const [pkgdatadir] = ARGV;

GLib.mkdir_with_parents(pkgdatadir, 0o755);
await Gio.File.new_for_path(pkgdatadir)
  .get_child("Library/index.json")
  .replace_contents_async(
    new TextEncoder().encode(JSON.stringify(demos)),
    null,
    false,
    Gio.FileCreateFlags.NONE,
    null,
  );
