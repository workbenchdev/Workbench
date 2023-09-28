import Gtk from "gi://Gtk";
import resource from "./Shortcuts.blp";

export default function Shortcuts({
  application,
  window,
  button_shortcuts,
  onGoForward,
  onGoBack,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onFocusGlobalSearch,
}) {
  let window_shortcuts;

  function open() {
    if (!window_shortcuts) {
      const builder = Gtk.Builder.new_from_resource(resource);
      window_shortcuts = builder.get_object("window_shortcuts");
      window_shortcuts.set_transient_for(window);
      window_shortcuts.set_application(application);
    }
    window_shortcuts.present();
  }

  const shortcuts = [
    [["<Primary>question"], open],
    [["<Control>w"], () => window.close()],
    [["<Alt>Right"], onGoForward],
    [["<Alt>Left"], onGoBack],
    [["<Control>plus", "<Control>equal"], onZoomIn],
    [["<Control>minus", "<Control>underscore"], onZoomOut],
    [["<Control>0"], onResetZoom],
    [["<Control>K"], onFocusGlobalSearch],
  ];

  button_shortcuts.connect("clicked", open);

  const shortcutController = new Gtk.ShortcutController();
  shortcuts.forEach(([accels, fn]) => {
    const shortcut = new Gtk.Shortcut({
      trigger: Gtk.ShortcutTrigger.parse_string(accels.join("|")),
      action: Gtk.CallbackAction.new(() => {
        fn();
        return true;
      }),
    });
    shortcutController.add_shortcut(shortcut);
  });

  window.add_controller(shortcutController);
}
