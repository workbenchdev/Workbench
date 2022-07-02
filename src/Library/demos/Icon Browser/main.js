import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";
import Adw from "gi://Adw";

const display = Gdk.Display.get_default();
const icon_theme = Gtk.IconTheme.get_for_display(display);
const clipboard = display.get_clipboard();

const toasts = new Set();

log(icon_theme.get_resource_path());
log(icon_theme.get_search_path());

const overlay = workbench.builder.get_object("overlay");
const flow_box = workbench.builder.get_object("flow_box");
const search_entry = workbench.builder.get_object("search_entry");

const IconWidget = GObject.registerClass(
  {
    GTypeName: "IconWidget",
    Template: workbench.template,
    InternalChildren: ["image"],
    Properties: {
      icon_name: GObject.ParamSpec.string(
        "icon_name", // Name
        "icon_name", // Nick
        "", // Blurb
        GObject.ParamFlags.READWRITE, // Flags
        null // Default value
      ),
    },
  },
  class IconWidget extends Gtk.Button {
    _init(params = {}) {
      super._init(params);
      this.bind_property(
        "icon_name",
        this._image,
        "icon-name",
        GObject.BindingFlags.SYNC_CREATE
      );
      // https://gitlab.gnome.org/GNOME/gtk/-/issues/4941
      // this.bind_property(
      //   "icon_name",
      //   this,
      //   "tooltip_text",
      //   GObject.BindingFlags.SYNC_CREATE,
      // );
    }
    onClicked() {
      clipboard.set(this.icon_name);

      for (const toast of toasts) {
        toast.dismiss();
      }
      const toast = new Adw.Toast({
        title: `“${this.icon_name}” copied to clipboard`,
        priority: Adw.ToastPriority.HIGH,
      });
      toast.connect("dismissed", onToastDismissed);
      toasts.add(toast);
      overlay.add_toast(toast);
    }
  }
);

function onToastDismissed(toast) {
  toasts.delete(toast);
}

const symbolic_icons = icon_theme
  .get_icon_names()
  .filter((icon_name) => {
    return (
      !icon_name.startsWith("workbench") &&
      !icon_name.startsWith("re.sonny") &&
      icon_name.endsWith("-symbolic")
    );
  })
  .sort((a, b) => a.localeCompare(b));

for (const icon_name of symbolic_icons) {
  const icon = new IconWidget({
    icon_name,
  });
  flow_box.append(icon);
}

function filter_func(child) {
  return child.get_child().icon_name.includes(search_entry.text);
}
flow_box.set_filter_func(filter_func);

search_entry.connect("search-changed", () => {
  flow_box.invalidate_filter();
});

workbench.preview(workbench.builder.get_object("overlay"));
