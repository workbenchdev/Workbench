import Adw from "gi://Adw";
import dbus_previewer from "./DBusPreviewer.js";

export default function External({ output, builder, onWindowChange }) {
  const stack = builder.get_object("stack_preview");
  let dbus_proxy;

  dbus_previewer.onWindowOpen = ([open]) => {
    onWindowChange(open);
  };

  dbus_previewer.onCssParserError = (error) => {
    builder
      .get_object("code_view_css")
      .handleDiagnostics([getCssDiagnostic(error)]);
  };

  async function start() {
    try {
      dbus_proxy = await dbus_previewer.getProxy();
    } catch (err) {
      logError(err);
    }
  }

  async function open() {
    updateColorScheme();
    stack.set_visible_child_name("close_window");
    try {
      await dbus_proxy.OpenWindowAsync(
        output.get_allocated_width(),
        output.get_allocated_height(),
      );
    } catch (err) {
      console.debug(err);
    }
  }

  async function close() {
    try {
      await dbus_proxy.CloseWindowAsync();
    } catch (err) {
      logger.debug(err);
      return;
    }
    stack.set_visible_child_name("open_window");
  }

  function stop() {
    close()
      .then(() => {
        return dbus_previewer.stop();
      })
      .catch(logError);
  }

  async function updateXML({ xml, target_id, original_id }) {
    try {
      await dbus_proxy.UpdateUiAsync(xml, target_id, original_id || "");
    } catch (err) {
      console.debug(err);
    }
  }

  async function openInspector() {
    try {
      await dbus_proxy.EnableInspectorAsync(true);
    } catch (err) {
      console.debug(err);
    }
  }

  async function closeInspector() {
    try {
      await dbus_proxy.EnableInspectorAsync(false);
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
    async updateCSS(css) {
      try {
        await dbus_proxy.UpdateCssAsync(css);
      } catch (err) {
        console.debug(err);
      }
    },
    async screenshot({ path }) {
      return dbus_proxy.ScreenshotAsync(path);
    },
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
