/* eslint-disable no-restricted-globals */

import Gtk from "gi://Gtk";

import { getLanguage } from "../common.js";
import { parse } from "../langs/xml/xml.js";
import { LSPError } from "../lsp/LSP.js";
import { checkFile, diagnose } from "./util.js";
import { ignore_codes } from "../langs/blueprint/blueprint.js";

const languageId = "blueprint";

// No replacements yet
const ignore_messages = [
  "Gtk.ShortcutsShortcut is deprecated\nhint: This widget will be removed in GTK 5",
  "Gtk.ShortcutLabel is deprecated\nhint: This widget will be removed in GTK 5",
  "Gtk.ShortcutsWindow is deprecated\nhint: This widget will be removed in GTK 5",
  "Gtk.ShortcutsGroup is deprecated\nhint: This widget will be removed in GTK 5",
  "Gtk.ShortcutsSection is deprecated\nhint: This widget will be removed in GTK 5",
];

export default async function blueprint({ file, lspc }) {
  print(`  ${file.get_path()}`);

  await diagnose({
    file,
    lspc,
    languageId,
    filter(diagnostic) {
      if (ignore_codes.includes(diagnostic.code)) return false;
      if (ignore_messages.includes(diagnostic.message)) return false;
      return true;
    },
  });

  const { xml } = await lspc._request("textDocument/x-blueprint-compile", {
    textDocument: {
      uri: file.get_uri(),
    },
  });

  print(`  ✅ compiles`);

  try {
    await lspc._request("x-blueprint/decompile", {
      text: xml,
    });
    print("  ✅ decompiles");
  } catch (err) {
    if (!(err instanceof LSPError)) throw err;
    if (
      ![
        // https://gitlab.gnome.org/GNOME/blueprint-compiler/-/work_items/128
        "unsupported XML tag: <condition>",
        // https://gitlab.gnome.org/GNOME/blueprint-compiler/-/work_items/139
        "unsupported XML tag: <items>",
      ].includes(err.message)
    ) {
      throw err;
    }
  }

  await checkFile({
    lspc,
    file,
    lang: getLanguage(languageId),
    uri: file.get_uri(),
  });

  await lspc._notify("textDocument/didClose", {
    textDocument: {
      uri: file.get_uri(),
    },
  });

  const tree = parse(xml);
  const template_el = tree.getChild("template");

  let template;
  const builder = new Gtk.Builder();
  const blueprint_object_ids = [];

  if (template_el) {
    template = tree.toString();
  } else {
    builder.add_from_string(xml, -1);
    print(`  ✅ instantiates`);
    getXMLObjectIds(tree, blueprint_object_ids);
  }

  return { template, builder, blueprint_object_ids };
}

function getXMLObjectIds(tree, object_ids) {
  for (const object of tree.getChildren("object")) {
    if (object.attrs.id) object_ids.push(object.attrs.id);
    // <child> or <property name="child">
    for (const child of object.getChildElements()) {
      getXMLObjectIds(child, object_ids);
    }
  }
}
