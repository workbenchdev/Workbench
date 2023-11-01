#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.FileLauncher file_launcher;
private Gtk.Entry uri_details;

public void main () {
  var launch_file = (Gtk.Button) workbench.builder.get_object ("launch_file");
  var change_file = (Gtk.Button) workbench.builder.get_object ("change_file");
  var file_location = (Gtk.Button) workbench.builder.get_object ("file_location");
  var file_name = (Gtk.Label) workbench.builder.get_object ("file_name");
  uri_details = (Gtk.Entry) workbench.builder.get_object ("uri_details");
  var uri_launch = (Gtk.Button) workbench.builder.get_object ("uri_launch");

  // File Launcher
  var file = File.new_for_uri (workbench.resolve ("workbench.txt"));
  file_launcher = new Gtk.FileLauncher (file) {
    always_ask = true
  };

  launch_file.clicked.connect (on_launch_file);
  file_launcher.notify["file"].connect (() => {
    try {
      FileInfo info = file_launcher.file.query_info ("standard::display-name", NONE, null);
      file_name.label = info.get_display_name ();
    } catch (Error e) {
      critical (e.message);
    }
  });

  file_location.clicked.connect (open_file_location);
  change_file.clicked.connect (select_file);

  // URI Launcher
  uri_launch.clicked.connect (launch_uri);
  uri_details.changed.connect (() => {
    try {
      uri_launch.sensitive = Uri.is_valid (uri_details.text, NONE);
    } catch (Error e) {
      uri_launch.sensitive = false;
    }
  });
}

private async void on_launch_file () {
  try {
    bool success = yield file_launcher.launch (workbench.window, null);
    if (!success) {
      critical (@"Failed to open $(file_launcher.file.get_uri ())");
    }
  } catch (Error e) {
    critical (e.message);
  }
}

private async void open_file_location () {
  try {
    bool success = yield file_launcher.open_containing_folder (workbench.window, null);
    if (!success) {
      critical ("Failed to open containing folder");
    }
  } catch (Error e) {
    critical (e.message);
  }
}

private async void select_file () {
  var file_dialog = new Gtk.FileDialog ();
  try {
    file_launcher.file = yield file_dialog.open (workbench.window, null);
  } catch (Error e) {
    critical (e.message);
  }
}

private async void launch_uri () {
  var uri_launcher = new Gtk.UriLauncher (uri_details.text);
  try {
    bool success = yield uri_launcher.launch (workbench.window, null);
    if (!success) {
      critical (@"Failed to launch $(uri_launcher.uri)");
    }
  } catch (Error e) {
    critical (e.message);
  }
}
