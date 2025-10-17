/* eslint-disable no-restricted-globals */

import Gio from "gi://Gio";

import { getLanguage } from "../common.js";
import { checkFile, diagnose } from "./util.js";

const languageId = "vala";

export default async function vala({ file, lspc, demo_dir }) {
  print(`  ${file.get_path()}`);

  const file_api = Gio.File.new_for_path(pkg.pkgdatadir).get_child(
    "workbench.vala",
  );
  file_api.copy(
    demo_dir.get_child("workbench.vala"),
    Gio.FileCopyFlags.OVERWRITE,
    null,
    null,
  );

  await diagnose({
    file,
    lspc,
    languageId,
    filter(diagnostic) {
      // FIXME: deprecated features, no replacement?
      if (demo_dir.get_basename() === "Text Fields") {
        const ignore_for_text_fields = [
          "`Gtk.EntryCompletion' has been deprecated since 4.10",
          "`Gtk.Entry.completion' has been deprecated since 4.10",
          "`Gtk.ListStore' has been deprecated since 4.10",
          "`Gtk.TreeIter' has been deprecated since 4.10",
        ];
        return !ignore_for_text_fields.includes(diagnostic.message);
        // Gtk.StyleContext class is deprecated but not the following methods
        // gtk_style_context_add_provider_for_display
        // gtk_style_context_remove_provider_for_display
      } else if (demo_dir.get_basename() === "CSS Gradients") {
        return (
          diagnostic.message !==
          "`Gtk.StyleContext' has been deprecated since 4.10"
        );
      }
      return true;
    },
  });

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
}
