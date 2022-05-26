import Adw from "gi://Adw?version=1";
import Gio from "gi://Gio";
import logger from "../logger.js";
import DBusPreviewer from "./DBusPreviewer.js";

export default function Previewer({ builder, onWindowChange }) {
  const stack = builder.get_object("stack_preview");

  (function start_process() {
    Gio.Subprocess.new(
      ["workbench-vala-previewer"],
      Gio.SubprocessFlags.NONE
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
  dbus_proxy.connectSignal("WindowOpen", (proxy, name_owner, [open]) => {
    onWindowChange(open);
  });

  function start() {
    builder.get_object("button_screenshot").visible = false;
  }

  function open() {
    updateColorScheme();
    stack.set_visible_child_name("close_window");
    try {
      dbus_proxy.OpenWindowSync();
    } catch (err) {
      logger.debug(err);
    }
  }

  function close() {
    try {
      dbus_proxy.CloseWindowSync();
      // eslint-disable-next-line no-empty
    } catch (err) {
      logger.debug(err);
    }
    stack.set_visible_child_name("open_window");
  }

  function stop() {
    close();
  }

  function updateXML({ xml, target_id }) {
    try {
      dbus_proxy.UpdateUiSync(xml, target_id);
    } catch (err) {
      logger.debug(err);
    }
  }

  const style_manager = Adw.StyleManager.get_default();
  function updateColorScheme() {
    try {
      dbus_proxy.ColorScheme = style_manager.color_scheme;
    } catch (err) {
      logger.debug(err);
    }
  }
  style_manager.connect("notify::color-scheme", updateColorScheme);

  return {
    start,
    stop,
    open,
    close,
    updateXML,
    updateCSS(css) {
      try {
        dbus_proxy.UpdateCssSync(css);
      } catch (err) {
        logger.debug(err);
      }
    },
    screenshot() {},
  };
}
