/* eslint-disable no-restricted-globals */

import { getLanguage } from "../common.js";
import { checkFile, getCodeObjectIds, diagnose, Interrupt } from "./util.js";

const languageId = "javascript";

export default async function javascript({
  file,
  lspc,
  blueprint_object_ids,
  demo_dir,
  application,
  builder,
  template,
  window,
}) {
  print(`  ${file.get_path()}`);

  const text = await diagnose({ file, lspc, languageId });

  await checkFile({
    lspc,
    file,
    lang: getLanguage(languageId),
    uri: file.get_uri(),
  });

  const js_object_ids = getCodeObjectIds(text);
  for (const object_id of js_object_ids) {
    if (!blueprint_object_ids.includes(object_id)) {
      print(`  ❌ Reference to inexistant object id "${object_id}"`);
      throw new Interrupt();
    }
  }

  globalThis.workbench = {
    window,
    application,
    builder,
    template,
    resolve(path) {
      return demo_dir.resolve_relative_path(path).get_uri();
    },
    preview() {},
  };

  await import(`file://${file.get_path()}`);
  print("  ✅ runs");

  await lspc._notify("textDocument/didClose", {
    textDocument: {
      uri: file.get_uri(),
    },
  });
}
