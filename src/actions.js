import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gdk from "gi://Gdk";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

import About from "./about.js";
import { portal, settings } from "./util.js";

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
    // portal
    //   .open_uri(
    //     parent,
    //     target.unpack(),
    //     Xdp.OpenUriFlags.NONE,
    //     null, // cancellable
    //   )
    //   .catch(console.error);
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
      console.error(err);
    }
  });
  application.add_action(action_platform_tools);

  application.add_action(settings.create_action("color-scheme"));
  // application.add_action(settings.create_action("safe-mode"));
  // application.add_action(settings.create_action("auto-preview"));

  const action_open_file = new Gio.SimpleAction({
    name: "open",
    parameter_type: new GLib.VariantType("s"),
  });
  action_open_file.connect("activate", (_self, target) => {
    const hint = target.unpack();
    open({ application, hint }).catch(console.error);
  });
  application.add_action(action_open_file);
  application.set_accels_for_action("app.open('project')", ["<Control>O"]);

  const action_show_screenshot = new Gio.SimpleAction({
    name: "show-screenshot",
    parameter_type: new GLib.VariantType("s"),
  });
  action_show_screenshot.connect("activate", (_self, target) => {
    const uri = target.unpack();
    showScreenshot({ application, uri }).catch(console.error);
  });
  application.add_action(action_show_screenshot);
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

async function open({ application, hint }) {
  const file_dialog = new Gtk.FileDialog();

  let file;
  try {
    file = await file_dialog.select_folder(
      application.get_active_window(),
      null,
    );
  } catch (err) {
    if (!err.matches(Gtk.DialogError, Gtk.DialogError.DISMISSED)) {
      throw err;
    }
    return;
  }

  application.open([file], hint);
}
