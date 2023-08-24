use std::path::Path;

use gtk::gio;
use gtk::prelude::*;

#[allow(dead_code)]
pub(crate) fn builder() -> &'static gtk::Builder {
    unsafe {
        crate::BUILDER
            .as_ref()
            .expect("Builder instance should already be initialized.")
    }
}

#[allow(dead_code)]
pub(crate) fn window() -> &'static gtk::Window {
    unsafe {
        crate::WINDOW
            .as_ref()
            .expect("Window instance should already be initialized.")
    }
}

#[allow(dead_code)]
pub(crate) fn resolve(path: impl AsRef<Path>) -> String {
    unsafe {
        let uri = crate::URI
            .as_ref()
            .expect("URI instance should already be initialized.");
        gio::File::for_uri(uri)
            .resolve_relative_path(path)
            .uri()
            .to_string()
    }
}
