import Vte from "gi://Vte?version=4-2.91";
import GLib from "gi://GLib";
import GObject from "gi://GObject";

// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
const ERASE_ENTIRE_SCREEN = "\u001b[2J";
const ERASE_SAVED_LINES = "\u001b[3J";
const MOVE_CURSOR_HOME = "\u001b[H"; // 0,0
const MAKE_CURSOR_INVISIBLE = "\u001b[?25l";

export default function Terminal({ devtools, builder }) {
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
  devtools.bind_property(
    "visible",
    button_clear,
    "visible",
    GObject.BindingFlags.SYNC_CREATE
  );

  devtools.connect("notify::visible", (self) => {
    if (self.reveal_child) {
      scrollToEnd();
    }
  });

  return {
    clear,
    scrollToEnd,
    terminal,
  };
}
