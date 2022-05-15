import Vte from "gi://Vte";
import GLib from "gi://GLib";
import Gio from "gi://Gio";

import { settings } from "./util.js";

// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
const ERASE_ENTIRE_SCREEN = "\u001b[2J";
const ERASE_SAVED_LINES = "\u001b[3J";
const MOVE_CURSOR_HOME = "\u001b[H"; // 0,0
const MAKE_CURSOR_INVISIBLE = "\u001b[?25l";

export default function Console({ builder, window, application }) {
  const terminal = builder.get_object("terminal");

  terminal.feed(MAKE_CURSOR_INVISIBLE);
  // terminal.set_cursor_blink_mode(Vte.CursorBlinkMode.ON);
  // terminal.set_input_enabled(true);

  terminal.spawn_async(
    Vte.PtyFlags.DEFAULT, // pty_flags
    null, // working_directory
    ["/bin/tail", "--line=0", "--follow", "/var/tmp/workbench"], // argv
    [], // envv
    GLib.SpawnFlags.DEFAULT, // spawn_flags
    null,
    -1, // timeout
    null, // cancellable
    null // child_setup
  );

  function clear() {
    terminal.feed(
      `${ERASE_ENTIRE_SCREEN}${ERASE_SAVED_LINES}${MOVE_CURSOR_HOME}`
    );
    // terminal.reset(true, true);
  }

  function scrollToEnd() {
    const adj = terminal.get_vadjustment();
    adj.set_value(adj.get_upper());
  }

  const button_clear = builder.get_object("button_clear");
  settings.bind(
    "show-console",
    button_clear,
    "visible",
    Gio.SettingsBindFlags.DEFAULT
  );

  terminal.connect("notify::visible", (self) => {
    if (terminal.visible) {
      scrollToEnd();
    }
  });

  const action_clear = new Gio.SimpleAction({
    name: "clear",
    parameter_type: null,
  });
  action_clear.connect("activate", console.clear);
  window.add_action(action_clear);
  application.set_accels_for_action("win.clear", ["<Control>K"]);

  return {
    clear,
    scrollToEnd,
    terminal,
  };
}
