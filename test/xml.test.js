import "gi://Gtk?version=4.0";

import tst, { assert } from "../troll/tst/tst.js";
import { format } from "../src/xml.js";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

const test = tst("xml");

test("format", () => {
  assert.fixture(
    format(
      `
    <hello

    world="foobar">

<bar         hello="wow"/><property name="halign">center</property></hello

>

  `,
      2,
    ),
    `
<?xml version="1.0" encoding="UTF-8"?>
<hello world="foobar">
  <bar hello="wow"/>
  <property name="halign">center</property>
</hello>
  `.trim(),
  );

  assert.fixture(
    format(
      `
<?xml version="1.0" encoding="UTF-8"?>
<requires lib="gtk" version="4.0"/>
<interface>
  <object class="GtkBox"></object>
</interface>
  `.trim(),
      2,
    ),
    `
<?xml version="1.0" encoding="UTF-8"?>
<requires lib="gtk" version="4.0"/>
<interface>
  <object class="GtkBox"></object>
</interface>
  `.trim(),
  );

  assert.fixture(
    format(
      `
<?xml version="1.0" encoding="UTF-8"?>
<interface>
  <object class="GtkBox">
  </object>
</interface>
    `.trim(),
      2,
    ),
    `
<?xml version="1.0" encoding="UTF-8"?>
<interface>
  <object class="GtkBox"></object>
</interface>
    `.trim(),
  );

  assert.fixture(
    format(
      `
<?xml version="1.0" encoding="UTF-8"?>
<child>
  <object class="GtkImage">
    <property name="name">logo</property>
    <property name="icon-name">re.sonny.Workbench</property>
    <property name="pixel-size">196</property>
    <property name="margin-bottom">24</property>
    <style>
      <class name="icon-dropshadow"/>
    </style>
  </object>
</child>`.trim(),
      2,
    ),
    `
<?xml version="1.0" encoding="UTF-8"?>
<child>
  <object class="GtkImage">
    <property name="name">logo</property>
    <property name="icon-name">re.sonny.Workbench</property>
    <property name="pixel-size">196</property>
    <property name="margin-bottom">24</property>
    <style>
      <class name="icon-dropshadow"/>
    </style>
  </object>
</child>
  `.trim(),
  );
});

test("invalid documents", () => {
  assert.throws(() => {
    format("<foo><bar hello/></foo>");
  }, /Invalid XML document/);

  assert.throws(() => {
    format("<foo><bar></foo>");
  }, /Invalid XML document/);

  assert.throws(() => {
    format("<foo></bar>");
  }, /Invalid XML document/);

  assert.throws(() => {
    format("<foo>");
  }, /Invalid XML document/);

  assert.throws(() => {
    format("<foo>hello");
  }, /Invalid XML document/);

  assert.throws(() => {
    format("<foo><bar></end>");
  }, /Invalid XML document/);
});

test("library examples", () => {
  const examples = [
    ...readDirSync(Gio.File.new_for_path("src/Library/demos")),
  ].map((file) => file.get_child("main.blp"));

  let count = 0;

  for (const example of examples) {
    let xml;
    try {
      const [, stdout, stderr, status] = GLib.spawn_command_line_sync(
        `./blueprint-compiler/blueprint-compiler.py compile ${example.get_path()}`,
      );
      if (status !== 0) {
        throw new Error(decode(stderr));
      }
      xml = decode(stdout);
    } catch {}
    if (!xml) continue;

    count++;
    assert.fixture(format(xml).trim(), xml.trim());
  }

  assert.is.not(count, 0);
});

// https://gitlab.gnome.org/GNOME/gjs/-/merge_requests/784
export function* readDirSync(file) {
  const enumerator = file.enumerate_children(
    "standard::name",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );

  while (true) {
    try {
      const info = enumerator.next_file(null);
      if (info === null) break;
      yield enumerator.get_child(info);
    } catch (err) {
      enumerator.close(null);
      throw err;
    }
  }
  enumerator.close(null);
}

export function readTextFileSync(file) {
  const [, contents] = file.load_contents(null);
  return decode(contents);
}

export function writeTextFileSync(file, contents) {
  file.replace_contents(
    contents, // contents
    null, // etag
    false, // make_backup
    Gio.FileCreateFlags.NONE, // flags
    null, // cancellable
  );
}

export function decode(data) {
  if (data instanceof GLib.Bytes) {
    data = data.toArray();
  }
  return new TextDecoder().decode(data);
}

export default test;
