import "./init.js";

import WebKit from "gi://WebKit";
import Source from "gi://GtkSource";

import tst, { assert } from "../troll/tst/tst.js";
import { getObjectClass } from "../src/Previewer/utils.js";

const test = tst("previewer");

test("getObjectClass", () => {
  assert.equal(getObjectClass("WebKitWebView"), WebKit.WebView);
  assert.equal(
    getObjectClass("GtkSourceCompletionProvider"),
    Source.CompletionProvider,
  );
});

export default test;
