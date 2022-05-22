import GLib from "gi://GLib";

const LOG_DOMAIN = "Workbench";

function _makeLogFunction(level) {
  return (message) => {
    const stack = new Error().stack;
    let caller = stack.split("\n")[1];

    // Map from resource to source location
    caller = caller.replace("resource:///re/sonny/Workbench/js", "src");

    const [code, line] = caller.split(":");
    const [func, file] = code.split(/\W*@/);
    GLib.log_structured(LOG_DOMAIN, level, {
      MESSAGE: `${message}`,
      SYSLOG_IDENTIFIER: "re.sonny.Workbench",
      CODE_FILE: file,
      CODE_FUNC: func,
      CODE_LINE: line,
    });
  };
}

// Log all messages when connected to the journal
if (GLib.log_writer_is_journald(2)) {
  GLib.setenv("G_MESSAGES_DEBUG", LOG_DOMAIN, false);
}

export default {
  log: _makeLogFunction(GLib.LogLevelFlags.LEVEL_MESSAGE),
  debug: _makeLogFunction(GLib.LogLevelFlags.LEVEL_DEBUG),
  info: _makeLogFunction(GLib.LogLevelFlags.LEVEL_INFO),
  warning: _makeLogFunction(GLib.LogLevelFlags.LEVEL_WARNING),
  critical: _makeLogFunction(GLib.LogLevelFlags.LEVEL_CRITICAL),
  error: _makeLogFunction(GLib.LogLevelFlags.LEVEL_ERROR),
};
