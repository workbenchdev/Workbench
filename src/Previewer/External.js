import Adw from "gi://Adw";
import Gio from "gi://Gio";
import DBusPreviewer from "./DBusPreviewer.js";

export default function Previewer({ output, builder, onWindowChange }) {
  const stack = builder.get_object("stack_preview");

  (function start_process() {
    Gio.Subprocess.new(
      ["workbench-vala-previewer"],
      Gio.SubprocessFlags.NONE,
    ).wait_async(null, (proc, res) => {
      try {
        proc.wait_finish(res);
      } catch (err) {
        logError(err);
      }
      start_process();
    });
  })();

  const dbus_proxy = DBusPreviewer();
  dbus_proxy.connectSignal("WindowOpen", (_proxy, _name_owner, [open]) => {
    onWindowChange(open);
  });

  dbus_proxy.connectSignal("CssParserError", (_proxy, _name_owner, error) => {
    builder
      .get_object("code_view_css")
      .handleDiagnostics([getCssDiagnostic(error)]);
  });

  function start() {
    builder.get_object("button_screenshot").visible = false;
  }

  async function open() {
    updateColorScheme();
    stack.set_visible_child_name("close_window");
    try {
      dbus_proxy.OpenWindowSync(
        output.get_allocated_width(),
        output.get_allocated_height(),
      );
    } catch (err) {
      console.debug(err);
    }
  }

  async function close() {
    try {
      dbus_proxy.CloseWindowSync();
    } catch (err) {
      console.debug(err);
    }
    stack.set_visible_child_name("open_window");
  }

  function stop() {
    close();
  }

  function updateXML({ xml, target_id, original_id }) {
    try {
      dbus_proxy.UpdateUiSync(xml, target_id, original_id || "");
    } catch (err) {
      console.debug(err);
    }
  }

  function openInspector() {
    try {
      dbus_proxy.EnableInspectorSync(true);
    } catch (err) {
      console.debug(err);
    }
  }

  function closeInspector() {
    try {
      dbus_proxy.EnableInspectorSync(false);
    } catch (err) {
      console.debug(err);
    }
  }

  const style_manager = Adw.StyleManager.get_default();
  function updateColorScheme() {
    try {
      dbus_proxy.ColorScheme = style_manager.color_scheme;
    } catch (err) {
      console.debug(err);
    }
  }
  style_manager.connect("notify::color-scheme", updateColorScheme);

  return {
    start,
    stop,
    open,
    close,
    openInspector,
    closeInspector,
    updateXML,
    updateCSS(css) {
      try {
        dbus_proxy.UpdateCssSync(css);
      } catch (err) {
        console.debug(err);
      }
    },
    screenshot() {},
  };
}

// Converts a CssParserError to an LSP diagnostic object
function getCssDiagnostic([
  message,
  start_line,
  start_char,
  end_line,
  end_char,
]) {
  return {
    message,
    range: {
      start: {
        line: start_line,
        character: start_char,
      },
      end: {
        line: end_line,
        character: end_char,
      },
    },
    severity: 1,
  };
}
