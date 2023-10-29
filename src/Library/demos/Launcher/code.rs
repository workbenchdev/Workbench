use crate::workbench;
use glib::clone;
use gtk::prelude::*;
use gtk::{gio, glib};

pub fn main() {
    gtk::init().unwrap();

    // File Launcher
    let file = gio::File::for_uri(&workbench::resolve("workbench.txt"));
    let file_launcher = gtk::FileLauncher::new(Some(&file));
    file_launcher.set_always_ask(true);

    let launch_file: gtk::Button = workbench::builder().object("launch_file").unwrap();
    launch_file.connect_clicked(clone!(@strong file_launcher => move |_| {
        file_launcher.launch(Some(workbench::window()), gio::Cancellable::NONE, |_| ())
    }));

    file_launcher.connect_notify_local(Some("file"), |file_launcher, _| {
        let file_name: gtk::Label = workbench::builder().object("file_name").unwrap();
        let details = file_launcher
            .file()
            .unwrap()
            .query_info(
                "standard::display-name",
                gio::FileQueryInfoFlags::NONE,
                gio::Cancellable::NONE,
            )
            .unwrap();
        file_name.set_label(details.display_name().as_str());
    });

    let file_location: gtk::Button = workbench::builder().object("file_location").unwrap();
    file_location.connect_clicked(clone!(@weak file_launcher => move |_| {
        file_launcher.open_containing_folder(
            Some(workbench::window()),
            gio::Cancellable::NONE,
            |_| (),
        );
    }));

    let change_file: gtk::Button = workbench::builder().object("change_file").unwrap();
    change_file.connect_clicked(clone!(@weak file_launcher => move |_| {
        gtk::FileDialog::new().open(Some(workbench::window()), gio::Cancellable::NONE, move |file| {
            if let Ok(file) = file {
                file_launcher.set_file(Some(&file));
            }
        })
    }));

    // URI Launcher
    let uri_launch: gtk::Button = workbench::builder().object("uri_launch").unwrap();
    let uri_details: gtk::Entry = workbench::builder().object("uri_details").unwrap();

    uri_launch.connect_clicked(clone!(@weak uri_details => move |_| {
        gtk::UriLauncher::new(uri_details.text().as_str()).launch(
            Some(crate::workbench::window()),
            gio::Cancellable::NONE,
            |_| (),
        );
    }));

    uri_details.connect_changed(move |uri_details| {
        if glib::Uri::is_valid(uri_details.text().as_str(), glib::UriFlags::NONE).is_ok() {
            uri_launch.set_sensitive(true);
        } else {
            uri_launch.set_sensitive(false);
        }
    });
}
