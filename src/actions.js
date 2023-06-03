import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gdk from "gi://Gdk";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import { gettext as _ } from "gettext";

import About from "./about.js";
import shortcutsWindow from "./shortcutsWindow.js";
import { portal, languages, settings } from "./util.js";

import IconLibrary from "./IconLibrary/main.js";

export default function Actions({ application }) {
  const quit = new Gio.SimpleAction({
    name: "quit",
    parameter_type: null,
  });
  quit.connect("activate", () => {
    application.quit();
  });
  application.add_action(quit);
  application.set_accels_for_action("app.quit", ["<Control>Q"]);

  const showAboutDialog = new Gio.SimpleAction({
    name: "about",
    parameter_type: null,
  });
  showAboutDialog.connect("activate", () => {
    About({ application });
  });
  application.add_action(showAboutDialog);

  const showShortCutsWindow = new Gio.SimpleAction({
    name: "shortcuts",
    parameter_type: null,
  });
  showShortCutsWindow.connect("activate", () => {
    shortcutsWindow({ application });
  });
  application.add_action(showShortCutsWindow);
  application.set_accels_for_action("app.shortcuts", ["<Control>question"]);

  const action_open_file = new Gio.SimpleAction({
    name: "open",
    parameter_type: null,
  });
  action_open_file.connect("activate", () => {
    openFile({ application }).catch(logError);
  });
  application.add_action(action_open_file);
  application.set_accels_for_action("app.open", ["<Control>O"]);

  const action_icon_library = new Gio.SimpleAction({
    name: "icon_library",
  });
  let window_icon_browser;
  action_icon_library.connect("activate", (_self, _target) => {
    window_icon_browser ??= IconLibrary();
    window_icon_browser.present();
  });
  application.add_action(action_icon_library);

  const action_open_uri = new Gio.SimpleAction({
    name: "open_uri",
    parameter_type: new GLib.VariantType("s"),
  });
  action_open_uri.connect("activate", (_self, target) => {
    // This is not using the portal but we silence the GVFS warnings
    // in `log_handler.js`
    Gtk.show_uri(
      application.get_active_window(),
      target.unpack(),
      Gdk.CURRENT_TIME,
    );
    // an other option is to use libportal:
    // const parent = XdpGtk.parent_new_gtk(application.get_active_window());
    // portal.open_uri(
    //   parent,
    //   target.unpack(),
    //   Xdp.OpenUriFlags.NONE,
    //   null, // cancellable
    //   (self, res) => {
    //     try {
    //       portal.open_uri_finish(res);
    //     } catch (err) {
    //       logError(err);
    //       return;
    //     }
    //   }
    // );
  });
  application.add_action(action_open_uri);

  const action_platform_tools = new Gio.SimpleAction({
    name: "platform_tools",
    parameter_type: new GLib.VariantType("s"),
  });
  action_platform_tools.connect("activate", (_self, target) => {
    const name = target.unpack();

    if (
      !["adwaita-1-demo", "gtk4-demo", "gtk4-widget-factory"].includes(name)
    ) {
      return;
    }

    try {
      GLib.spawn_command_line_async(`sh -c "/bin/${name} > /dev/null 2>&1"`);
    } catch (err) {
      logError(err);
    }
  });
  application.add_action(action_platform_tools);

  application.add_action(settings.create_action("color-scheme"));
  application.add_action(settings.create_action("safe-mode"));
  application.add_action(settings.create_action("auto-preview"));

  const action_show_screenshot = new Gio.SimpleAction({
    name: "show-screenshot",
    parameter_type: new GLib.VariantType("s"),
  });
  action_show_screenshot.connect("activate", (_self, target) => {
    const uri = target.unpack();
    showScreenshot({ application, uri }).catch(logError);
  });
  application.add_action(action_show_screenshot);
}

const lang_filters = languages.map((language) => {
  const globs = language.extensions.map((extension) => [0, `*${extension}`]);
  const mimetypes = language.types.map((type) => [1, type]);
  return [language.name, [...globs, ...mimetypes]];
});

const filters = new GLib.Variant("a(sa(us))", [
  [_("All supported"), lang_filters.flatMap(([, types]) => types)],
  ...lang_filters,
]);

async function openFile({ application }) {
  const parent = XdpGtk.parent_new_gtk(application.get_active_window());

  let uri;

  try {
    const results = await portal.open_file(
      parent,
      _("Import File"),
      filters,
      null, // current_filter
      null, // choices
      Xdp.OpenFileFlags.NONE,
      null, // cancellable
    );
    [uri] = results.recursiveUnpack().uris;
  } catch (err) {
    if (err.code !== Gio.IOErrorEnum.CANCELLED) throw err;
  }

  application.open([Gio.File.new_for_uri(uri)], "open");
}

async function showScreenshot({ application, uri }) {
  const parent = XdpGtk.parent_new_gtk(application.get_active_window());
  await portal.open_directory(
    parent,
    uri,
    Xdp.OpenUriFlags.NONE,
    null, // cancellable
  );
}
