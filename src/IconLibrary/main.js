import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";

import Adw from "gi://Adw";
import Gio from "gi://Gio";

import IconWidget from "./IconWidget.js";
import resource from "./main.blp";

const toasts = new Set();

export default function IconLibrary() {
  const display = Gdk.Display.get_default();
  const clipboard = display.get_clipboard();

  const dev_kit_icons = getDevKitIcons();
  const platform_icons = getPlatformIcons(dev_kit_icons);
  const icons = Object.assign(
    Object.create(null),
    platform_icons,
    dev_kit_icons,
  );

  const builder = Gtk.Builder.new_from_resource(resource);

  const overlay = builder.get_object("overlay");
  const search_entry = builder.get_object("search_entry");

  function selectIcon(icon_name) {
    clipboard.set(icon_name);

    for (const toast of toasts) {
      toast.dismiss();
    }
    const toast = new Adw.Toast({
      title: `“${icon_name}” copied to clipboard`,
      priority: Adw.ToastPriority.HIGH,
    });
    toast.connect("dismissed", onToastDismissed);
    toasts.add(toast);
    overlay.add_toast(toast);
  }

  const flow_box_devkit = builder.get_object("flow_box_devkit");
  const flow_box_platform = builder.get_object("flow_box_platform");

  function filter_func({ icon_name }) {
    return icons[icon_name]?.some((tag) => tag.includes(search_entry.text));
  }
  flow_box_devkit.set_filter_func(filter_func);
  flow_box_platform.set_filter_func(filter_func);

  search_entry.connect("search-changed", () => {
    flow_box_devkit.invalidate_filter();
    flow_box_platform.invalidate_filter();
  });

  function populateIconDevKit() {
    for (const icon_name of Object.keys(dev_kit_icons).sort((a, b) =>
      a.localeCompare(b),
    )) {
      const icon = new IconWidget({
        icon_name,
      });
      icon.connect("clicked", () => selectIcon(icon_name));
      flow_box_devkit.append(icon);
    }
    flow_box_devkit.visible = true;
  }

  function populatePlatformIcons() {
    for (const icon_name of Object.keys(platform_icons).sort((a, b) =>
      a.localeCompare(b),
    )) {
      const icon = new IconWidget({
        icon_name,
      });
      icon.connect("clicked", () => selectIcon(icon_name));
      flow_box_platform.append(icon);
    }
    flow_box_platform.visible = true;
  }

  populateIconDevKit();
  populatePlatformIcons();

  const window = builder.get_object("window");
  return window;
}

function onToastDismissed(toast) {
  toasts.delete(toast);
}

function getDevKitIcons() {
  const icons = Object.create(null);

  const [bytes] = Gio.File.new_for_path(
    "/app/share/icon-development-kit/icons.json",
  ).load_bytes(null);

  const icons_dev_kit = JSON.parse(new TextDecoder().decode(bytes.get_data()));
  for (const icon of icons_dev_kit) {
    // https://gitlab.gnome.org/Teams/Design/icon-development-kit/-/issues/62
    if (icon.context === "noexport-bits") continue;

    icons[`${icon.filename}-symbolic`] = [
      icon.filename,
      icon.context,
      ...icon.tags,
    ];
  }

  return icons;
}

function getPlatformIcons(dev_kit_icons) {
  const display = Gdk.Display.get_default();
  const icons = Object.create(null);

  const icon_theme = Gtk.IconTheme.get_for_display(display);
  const icons_theme = icon_theme.get_icon_names();

  for (const icon of icons_theme) {
    if (
      icon.startsWith("re.sonny.Workbench") ||
      !icon.endsWith("-symbolic") ||
      icon in dev_kit_icons
    )
      continue;

    if (!(icon in icons)) icons[icon] = [icon.split("-symbolic")[0]];
  }

  return icons;
}
