import Gtk from 'gi://Gtk';
import Gio from 'gi://Gio';

import About from "./about.js";
import ShortcutsWindow from "./ShortcutsWindow.js";
import {relativePath} from './util.js';


export default function Actions({application, datadir, version}) {
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
    ShortcutsWindow({ application });
  });
  application.add_action(showShortCutsWindow);

  // const file_filter = Gtk.Builder.new_from_file(relativePath("./window.ui")).get_object('file_filter');
  const action_open_file = new Gio.SimpleAction({
    name: "open",
    parameter_type: null,
  });
  action_open_file.connect("activate", () => {
    const file_chooser = new Gtk.FileChooserNative({
      title: "Open File",
      action: Gtk.FileChooserAction.OPEN
    });
    // file_chooser.set_filter(file_filter);

    file_chooser.connect('response', (self, response) => {
      if (response === Gtk.ResponseType.ACCEPT) {
        const file = file_chooser.get_file();
        application.open([file], 'open');
      }

      file_chooser.destroy();
    })

    file_chooser.show();
  });
  application.add_action(action_open_file);
}
