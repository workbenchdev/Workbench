import Vte from "gi://Vte?version=4-2.91";
import GLib from "gi://GLib";

// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
const ERASE_ENTIRE_SCREEN = "\u001b[2J";
const ERASE_SAVED_LINES = "\u001b[3J";
const MOVE_CURSOR_HOME = "\u001b[H"; // 0,0
const MAKE_CURSOR_INVISIBLE = "\u001b[?25l";

export default function Terminal({ builder }) {
  const terminal = builder.get_object("terminal");

  terminal.feed(MAKE_CURSOR_INVISIBLE);
  // terminal.set_cursor_blink_mode(Vte.CursorBlinkMode.ON);
  // terminal.set_input_enabled(true);
  terminal.spawn_sync(
    Vte.PtyFlags.DEFAULT,
    "/",
    // +2 so we skip the line written by "script"
    // Script started on ...
    ["/bin/tail", "-f", "-n", "+2", "/var/tmp/workbench"],
    [],
    GLib.SpawnFlags.DO_NOT_REAP_CHILD,
    null,
    null
  );

  function clear() {
    terminal.feed(
      `${ERASE_ENTIRE_SCREEN}${ERASE_SAVED_LINES}${MOVE_CURSOR_HOME}`
    );
    // terminal.reset(true, true);
  }

  return {
    clear,
  };
}
