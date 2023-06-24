// item {
//   label: _("Open a Project…");
//   action: "app.open_folder";
// }

const action_open_folder = new Gio.SimpleAction({
  name: "open_folder",
  parameter_type: null,
});
action_open_folder.connect("activate", () => {
  const dialog = new Gtk.FileDialog();

  dialog
    .select_folder(application.get_active_window(), null)
    .then((file) => {
      Window({ application, data_dir, file });
    })
    .catch(logError);
});
application.add_action(action_open_folder);
