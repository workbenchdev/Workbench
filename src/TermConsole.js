import Vte from "gi://Vte";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import Adw from "gi://Adw";

import { settings } from "./util.js";

// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
const ERASE_ENTIRE_SCREEN = "\u001b[2J";
const ERASE_SAVED_LINES = "\u001b[3J";
const MOVE_CURSOR_HOME = "\u001b[H"; // 0,0
const MAKE_CURSOR_INVISIBLE = "\u001b[?25l";

const style_manager = Adw.StyleManager.get_default();

export default function TermConsole({ builder, window, application }) {
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
    null, // child_setup
  );

  function clear() {
    terminal.feed(
      `${ERASE_ENTIRE_SCREEN}${ERASE_SAVED_LINES}${MOVE_CURSOR_HOME}`,
    );
    terminal.reset(true, true);
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
    Gio.SettingsBindFlags.DEFAULT,
  );

  terminal.connect("notify::visible", (_self) => {
    if (terminal.visible) {
      scrollToEnd();
    }
  });

  const action_clear = new Gio.SimpleAction({
    name: "clear",
    parameter_type: null,
  });
  action_clear.connect("activate", clear);
  window.add_action(action_clear);
  application.set_accels_for_action("win.clear", ["<Control>K"]);

  style_manager.connect("notify::color-scheme", () =>
    updateTerminalColors(terminal),
  );
  updateTerminalColors(terminal);

  return {
    clear,
    scrollToEnd,
    terminal,
  };
}

function rgba(value) {
  const rgba = new Gdk.RGBA();
  rgba.parse(value);
  return rgba;
}

// Adapted from https://gitlab.gnome.org/GNOME/console/-/blob/87c6ae3b55dc399f052db251202ce0d6c122e98d/src/kgx-terminal.c#L110
function updateTerminalColors(terminal) {
  const palette = [
    rgba("#241f31"), // Black
    rgba("#c01c28"), // Red
    rgba("#2ec27e"), // Green
    rgba("#f5c211"), // Yellow
    rgba("#1e78e4"), // Blue
    rgba("#9841bb"), // Magenta
    rgba("#0ab9dc"), // Cyan
    rgba("#c0bfbc"), // White
    rgba("#5e5c64"), // Bright Black
    rgba("#ed333b"), // Bright Red
    rgba("#57e389"), // Bright Green
    rgba("#f8e45c"), // Bright Yellow
    rgba("#51a1ff"), // Bright Blue
    rgba("#c061cb"), // Bright Magenta
    rgba("#4fd2fd"), // Bright Cyan
    rgba("#f6f5f4"), // Bright White
  ];

  let fg;
  let bg;
  if (style_manager.dark) {
    fg = new Gdk.RGBA({ red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0 });
    bg = new Gdk.RGBA({ red: 0.05, green: 0.05, blue: 0.05, alpha: 1.0 });
  } else {
    fg = new Gdk.RGBA({ red: 0, green: 0, blue: 0, alpha: 0 });
    bg = new Gdk.RGBA({ red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0 });
  }

  terminal.set_colors(fg, bg, palette);
}
