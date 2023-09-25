import Gtk from "gi://Gtk";
import resource from "./Shortcuts.blp";

export { resource };

export default function Shortcuts({
  window,
  onGoForward,
  onGoBack,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onFocusGlobalSearch,
}) {
  const shortcuts = [
    [
      ["<Primary>question"],
      () => {
        const builder = Gtk.Builder.new_from_resource(resource);
        const shortcutsWindow = builder.get_object("shortcuts-window");
        shortcutsWindow.present();
      },
    ],
    [["<Control>w"], () => window.close()],
    [["<Alt>Right"], onGoForward],
    [["<Alt>Left"], onGoBack],
    [["<Control>plus", "<Control>equal"], onZoomIn],
    [["<Control>minus", "<Control>underscore"], onZoomOut],
    [["<Control>0"], onResetZoom],
    [["<Control>K"], onFocusGlobalSearch],
  ];

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
