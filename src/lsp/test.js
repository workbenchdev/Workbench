import GLib from "gi://GLib";

import LSPClient from "./LSPClient.js";
import { resolve } from "../troll/src/util.js";

const loop = GLib.MainLoop.new(null, false);

const lsp_client = new LSPClient([
  resolve(import.meta.url, "../blueprint-compiler/blueprint-compiler.py"),
  "lsp",
  "--logfile",
  resolve(import.meta.url, "../../blueprint-logs"),
]);

lsp_client.connect("output", (self, message) => {
  console.log("OUT:\n", message);
});

lsp_client.connect("input", (self, message) => {
  console.log("IN:\n", message);
});

const blueprint = `
using Gtk 4.0;

Box welcome {
  orientation: vertical;
  valign: center;
  halign: center;

  Image {
    name: "logo";
    icon-name: "re.sonny.Workbench";
    pixel-size: 196;
    margin-bottom: 24;

    styles [
      "icon-dropshadow",
    ]
  }
}
`.trim();

(async () => {
  await lsp_client.request("initialize");
  // Make Blueprint language server cache Gtk 4
  // to make subsequence call faster (~500ms -> ~3ms)
  await lsp_client.request("x-blueprintcompiler/compile", {
    text: "using Gtk 4.0;\nBox {}",
  });

  console.time("compile");
  await lsp_client.request("x-blueprintcompiler/compile", {
    text: blueprint,
  });
  console.timeEnd("compile");
})().catch(logError);

loop.run();
