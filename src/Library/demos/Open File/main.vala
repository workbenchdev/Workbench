#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
  var button_single = (Gtk.Button) workbench.builder.get_object ("button_single");
  var button_multiple = (Gtk.Button) workbench.builder.get_object ("button_multiple");

  button_single.clicked.connect (open_single);
  button_multiple.clicked.connect (open_multiple);
}

private async void open_single () {
  var default_directory = File.new_for_path (
    Environment.get_user_special_dir (DOWNLOAD)
  );
  var file_dialog = new Gtk.FileDialog () {
    initial_folder = default_directory
  };

  try {
    File file = yield file_dialog.open (workbench.window, null);
    FileInfo info = file.query_info ("standard::name", NONE, null);

    message (@"Selected file: $(info.get_name ())");
  } catch (Error e) {
    critical (e.message);
  }
}

private async void open_multiple () {
  var file_dialog = new Gtk.FileDialog ();
  try {
    ListModel files = yield file_dialog.open_multiple (workbench.window, null);
    message (@"No. of selected files: $(files.get_n_items ())");
  } catch (Error e) {
    critical (e.message);
  }
}
