import GLib from "gi://GLib";

// Does not wok for some reason
// const all_log_levels =
//   GLib.LogLevelFlags.LEVEL_MASK &
//   GLib.LogLevelFlags.FLAG_FATAL &
//   GLib.LogLevelFlags.FLAG_RECURSION;

const all_log_levels =
  GLib.LogLevelFlags.FLAG_FATAL |
  GLib.LogLevelFlags.FLAG_RECURSION |
  GLib.LogLevelFlags.LEVEL_CRITICAL |
  GLib.LogLevelFlags.LEVEL_DEBUG |
  GLib.LogLevelFlags.LEVEL_ERROR |
  GLib.LogLevelFlags.LEVEL_INFO |
  // GLib.LogLevelFlags.LEVEL_MASK |
  GLib.LogLevelFlags.LEVEL_MESSAGE |
  GLib.LogLevelFlags.LEVEL_WARNING;

/* Cannot use GLib.log_set_writer_func because it is not safe to use https://gitlab.gnome.org/GNOME/gjs/-/issues/481 */
// const decoder = new TextDecoder();
// GLib.log_set_writer_func((level, fields) => {
//   const domain = decoder.decode(fields.GLIB_DOMAIN);
//   const message = decoder.decode(fields.MESSAGE);
//   log_handler(domain, level, message);
//   return GLib.LogWriterOutput.HANDLED;
// });

// Not working - Gjs-Console uses structured logging
// GLib.log_set_handler("Gjs-Console", all_log_levels, log_handler);
GLib.log_set_handler("Gdk", all_log_levels, log_handler);
GLib.log_set_handler("Adwaita", all_log_levels, log_handler);
GLib.log_set_handler("GVFS", all_log_levels, log_handler);
GLib.log_set_handler("Workbench", all_log_levels, log_handler);
// Not working - Gtk is probably using structured logging
// GLib.log_set_handler("Gtk", all_log_levels, log_handler);

// https://docs.gtk.org/glib/flags.LogLevelFlags.html
// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
function get_log_level_name(log_level, domain) {
  switch (log_level) {
    case GLib.LogLevelFlags.FLAG_RECURSION:
      return "\x1b[1;31mRecursion\x1b[0m";
    case GLib.LogLevelFlags.FLAG_FATAL:
      return "\x1b[1;31mFatal\x1b[0m";
    case GLib.LogLevelFlags.LEVEL_CRITICAL:
      // This is what console.error use
      return domain === "Gjs-Console"
        ? "\x1b[1;31mError\x1b[0m"
        : "\x1b[1;35mCritical\x1b[0m";
    case GLib.LogLevelFlags.LEVEL_ERROR:
      return "\x1b[1;31mError\x1b[0m";
    case GLib.LogLevelFlags.LEVEL_WARNING:
      return "\x1b[1;33mWarning\x1b[0m";
    // case GLib.LogLevelFlags.LEVEL_MESSAGE:
    // case GLib.LogLevelFlags.LEVEL_INFO:
    // case GLib.LogLevelFlags.LEVEL_DEBUG:
    default:
      return "";
  }
}

function log_handler(domain, level, message) {
  // if (level === GLib.LogLevelFlags.LEVEL_DEBUG) {
  //   return GLib.LogWriterOutput.HANDLED;
  // }

  if (
    domain === "Gdk" &&
    level === GLib.LogLevelFlags.LEVEL_CRITICAL &&
    [
      "gdk_scroll_event_get_direction: assertion 'GDK_IS_EVENT_TYPE (event, GDK_SCROLL)' failed",
      "gdk_scroll_event_get_direction: assertion 'GDK_IS_EVENT (event)' failed",
    ].includes(message)
  ) {
    return GLib.LogWriterOutput.HANDLED;
  }

  if (
    domain === "Gtk" &&
    level === GLib.LogLevelFlags.LEVEL_CRITICAL &&
    message ===
      "Unable to connect to the accessibility bus at 'unix:path=/run/flatpak/at-spi-bus': Could not connect: No such file or directory"
  ) {
    return GLib.LogWriterOutput.HANDLED;
  }

  if (
    domain === "Adwaita" &&
    level === GLib.LogLevelFlags.LEVEL_WARNING &&
    message ===
      "Using GtkSettings:gtk-application-prefer-dark-theme with libadwaita is unsupported. Please use AdwStyleManager:color-scheme instead."
  ) {
    return GLib.LogWriterOutput.HANDLED;
  }

  if (
    domain === "GVFS" &&
    level === GLib.LogLevelFlags.LEVEL_WARNING &&
    message ===
      "The peer-to-peer connection failed: Error when getting information for file “/run/user/1000/gvfsd”: No such file or directory. Falling back to the session bus. Your application is probably missing --filesystem=xdg-run/gvfsd privileges."
  ) {
    return GLib.LogWriterOutput.HANDLED;
  }

  let str = "\n";

  if (!["Gjs", "Gjs-Console"].includes(domain)) {
    str += `${domain}-`;
  }

  const level_name = get_log_level_name(level, domain);
  str += level_name ? `${level_name}: ` : "";
  str += message;
  str += "\n";

  // console.terminal.fork_command(`echo ${str}`);
  print(str);
}
