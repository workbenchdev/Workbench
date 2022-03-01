import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gdk from "gi://Gdk";

import About from "./about.js";
import shortcutsWindow from "./shortcutsWindow.js";

export default function Actions({ application, datadir, version }) {
  const quit = new Gio.SimpleAction({
    name: "quit",
    parameter_type: null,
  });
  quit.connect("activate", () => {
    application.quit();
  });
  application.add_action(quit);

  const showAboutDialog = new Gio.SimpleAction({
    name: "about",
    parameter_type: null,
  });
  showAboutDialog.connect("activate", () => {
    About({ application, datadir, version });
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

  const action_open_file = new Gio.SimpleAction({
    name: "open",
    parameter_type: null,
  });
  action_open_file.connect("activate", () => {
    const builder = Gtk.Builder.new_from_resource(
      "/re/sonny/Workbench/window.ui"
    );
    const file_filter = builder.get_object("file_filter");

    const file_chooser = new Gtk.FileChooserNative({
      title: "Open File",
      action: Gtk.FileChooserAction.OPEN,
      modal: true,
      transient_for: application.get_active_window(),
    });
    file_chooser.set_filter(file_filter);

    file_chooser.connect("response", (self, response) => {
      if (response === Gtk.ResponseType.ACCEPT) {
        const file = file_chooser.get_file();
        application.open([file], "open");
      }

      file_chooser.destroy();
    });

    file_chooser.show();
  });
  application.add_action(action_open_file);

  const open_uri = new Gio.SimpleAction({
    name: "open_uri",
    parameter_type: new GLib.VariantType("s"),
  });
  open_uri.connect("activate", (self, target) => {
    Gtk.show_uri(
      application.get_active_window(),
      target.unpack(),
      Gdk.CURRENT_TIME
    );
  });
  application.add_action(open_uri);
}
