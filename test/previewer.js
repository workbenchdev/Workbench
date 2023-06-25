import "../src/init.js";

import tst, { assert } from "../troll/tst/tst.js";
import { getObjectClass } from "../src/Previewer/utils.js";

const test = tst("previewer");

test("getObjectClass", () => {
  assert.equal(getObjectClass("WebKitWebView"), imports.gi.WebKit.WebView);
});

export default test;
