import "../src/init.js";

import tst, { assert } from "../troll/tst/tst.js";
import { getObjectClass } from "../src/Previewer/utils.js";

const test = tst("previewer");

test("getObjectClass", () => {
  assert.equal(getObjectClass("WebKitWebView"), imports.gi.WebKit.WebView);
  assert.equal(
    getObjectClass("GtkSourceCompletionProvider"),
    imports.gi.GtkSource.CompletionProvider,
  );
});

export default test;
