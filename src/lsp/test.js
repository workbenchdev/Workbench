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

  Label {
    label: "Welcome to Workbench";
    margin-bottom: 24;

    styles [
      "title-1",
    ]
  }

  Label {
    label: "A sandbox to learn and prototype with\nGNOME technologies";
    margin-bottom: 24;
    justify: center;
  }

  Box {
    margin-bottom: 12;

    Image {
      icon-name: "update-symbolic";
      margin-end: 12;
      icon-size: normal;
    }

    Label {
      label: "Edit Style and UI to reload the Preview";
    }
  }

  Box {
    margin-bottom: 12;

    Image {
      icon-name: "media-playback-start-symbolic";
      margin-end: 12;
      icon-size: normal;
    }

    Label {
      label: "Hit";
    }

    ShortcutsShortcut {
      accelerator: "<Primary>Return";
      margin-start: 12;
    }

    Label {
      label: "to format and run Code";
    }
  }

  Box {
    margin-bottom: 12;

    Image {
      icon-name: "user-bookmarks-symbolic";
      margin-end: 12;
      icon-size: normal;
    }

    Label {
      label: "Checkout the bookmarks to learn";
    }
  }

  Box {
    margin-bottom: 12;

    Image {
      icon-name: "media-floppy-symbolic";
      margin-end: 12;
      icon-size: normal;
    }

    Label {
      label: "Changes are automatically saved and restored";
    }
  }
}
`.trim();

(async () => {
  console.time("compile");
  await lsp_client.request("x-blueprintcompiler/compile", {
    text: blueprint,
  });
  console.timeEnd("compile");
})().catch(logError);

loop.run();
