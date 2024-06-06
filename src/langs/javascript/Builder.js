import Gio from "gi://Gio";
import GLib from "gi://GLib";

import { buildRuntimePath } from "../../util.js";

export default function JavascriptBuilder() {
  async function run(text) {
    // We have to create a new file each time
    // because gjs doesn't appear to use etag for module caching
    // ?foo=Date.now() also does not work as expected
    // https://gitlab.gnome.org/GNOME/gjs/-/issues/618
    const path = buildRuntimePath(`workbench-${Date.now()}`);
    const file_javascript = Gio.File.new_for_path(path);
    await file_javascript.replace_contents_async(
      new GLib.Bytes(text),
      null,
      false,
      Gio.FileCreateFlags.NONE,
      null,
    );

    let exports;
    try {
      exports = await import(`file://${file_javascript.get_path()}`);
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      file_javascript
        .delete_async(GLib.PRIORITY_DEFAULT, null)
        .catch(console.error);
    }

    return exports;
  }

  return { run };
}
