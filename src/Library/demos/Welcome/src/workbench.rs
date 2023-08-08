use std::path::{Path, PathBuf};

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
            .expect("Builder instance should already be initialized.")
    }
}

#[allow(dead_code)]
pub(crate) fn resolve(path: impl AsRef<Path>) -> PathBuf {
    unsafe { crate::URI.as_ref().unwrap().join(path) }
}
