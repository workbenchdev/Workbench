#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg gio-2.0

private FileMonitor monitor_for_dir;
private FileMonitor monitor_for_file;
public void main () {

    var edit_entry = (Gtk.TextView) workbench.builder.get_object ("edit_entry");
    var view_file = (Gtk.Button) workbench.builder.get_object ("view_file");
    var delete_file = (Gtk.Button) workbench.builder.get_object ("delete_file");
    var edit_file = (Gtk.Button) workbench.builder.get_object ("edit_file");
    var file_name = (Gtk.Label) workbench.builder.get_object ("file_name");
    Gtk.TextBuffer buffer = edit_entry.buffer;
    File file = File.new_for_uri (workbench.resolve ("workbench.txt"));
    File file_dir = file.get_parent ();
    var overlay = (Adw.ToastOverlay) workbench.builder.get_object ("overlay");
    var file_launcher = new Gtk.FileLauncher (file);
    try {
        FileInfo details = file.query_info (
                                            "standard::display-name",
                                            FileQueryInfoFlags.NONE,
                                            null);
        file_name.label = details.get_display_name ();
        buffer.text = "Start editing ... ";
        monitor_for_dir = file_dir.monitor (FileMonitorFlags.WATCH_MOVES, null);
        monitor_for_file = file.monitor (FileMonitorFlags.NONE, null);
    } catch (Error e) {
        message (@"$(e.message)");
    }

    delete_file.clicked.connect (() => file.delete_async.begin (Priority.DEFAULT, null));

    view_file.clicked.connect (() => file_launcher.launch.begin (workbench.window, null));

    monitor_for_file.changed.connect ((file, other_file, event) => {
        if (event == FileMonitorEvent.CHANGES_DONE_HINT) {
            var toast = new Adw.Toast ("File modified") {
                timeout = 2
            };
            overlay.add_toast (toast);
        }
    });

    monitor_for_dir.changed.connect ((child, other_file, event) => {
        var toast = new Adw.Toast ("") {
            timeout = 2
        };

        switch (event) {
            case FileMonitorEvent.RENAMED:
                toast.title = @"$(child.get_basename()) was renamed to $(other_file.get_basename())";
                break;
            case FileMonitorEvent.DELETED:
                toast.title = @"$(child.get_basename()) was deleted from the directory";
                break;
            case FileMonitorEvent.CREATED:
                toast.title = @"$(child.get_basename()) created in the directory";
                break;
            default:
                break;
        }

        if (toast.title != "")overlay.add_toast (toast);
    });

    edit_file.clicked.connect (() => replace_handler.begin (buffer, file));
}

async void replace_handler (Gtk.TextBuffer buffer, File file) {
    string byte_string = buffer.text;
    uint8[] bytes = byte_string.data;
    try {
        yield file.replace_contents_async (bytes, // contents
            null, // etag
            false, // make_backup
            FileCreateFlags.REPLACE_DESTINATION, // flags
            null, // new_etag
            null // cancellable
        );
    } catch (Error e) {
        message (@"$(e.message)");
    }
}
