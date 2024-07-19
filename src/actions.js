import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

import About from "./about.js";
import Window from "./window.js";
import { portal, settings } from "./util.js";
import { createSession } from "./sessions.js";

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

  const action_open_uri = new Gio.SimpleAction({
    name: "open_uri",
    parameter_type: new GLib.VariantType("s"),
  });
  action_open_uri.connect("activate", (_self, target) => {
    new Gtk.UriLauncher({
      uri: target.unpack(),
    })
      .launch(application.get_active_window(), null)
      .catch(console.error);
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

  const action_new_project = new Gio.SimpleAction({
    name: "new",
  });
  action_new_project.connect("activate", (_self, _target) => {
    newProject({ application }).catch(console.error);
  });
  application.add_action(action_new_project);
  application.set_accels_for_action("app.new", ["<Control>N"]);

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

async function newProject({ application }) {
  const session = createSession();
  const { load } = Window({ application, session });
  await load();
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
