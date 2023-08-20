mod code;
pub(crate) mod workbench;

use std::ffi::{c_char, CStr};

use glib::translate::FromGlibPtrFull;
use gtk::glib;
use libc::{c_int, EXIT_FAILURE, EXIT_SUCCESS};

static mut BUILDER: Option<gtk::Builder> = None;
static mut WINDOW: Option<gtk::Window> = None;
static mut URI: Option<String> = None;

#[no_mangle]
extern "C" fn main() -> c_int {
    code::main();
    EXIT_SUCCESS
}

#[no_mangle]
extern "C" fn set_builder(builder_ptr: *mut gtk::ffi::GtkBuilder) -> c_int {
    unsafe {
        let builder = gtk::Builder::from_glib_full(builder_ptr);
        BUILDER = Some(builder.clone());
    }
    EXIT_SUCCESS
}

#[no_mangle]
extern "C" fn set_window(window_ptr: *mut gtk::ffi::GtkWindow) -> c_int {
    unsafe {
        let window = gtk::Window::from_glib_full(window_ptr);
        WINDOW = Some(window.clone());
    }
    EXIT_SUCCESS
}

#[no_mangle]
extern "C" fn set_base_uri(c_string: *const c_char) -> c_int {
    unsafe {
        if c_string.is_null() {
            return EXIT_FAILURE;
        }

        let c_str = CStr::from_ptr(c_string);
        if let Ok(str_slice) = c_str.to_str() {
            URI = Some(str_slice.to_string());
        }
    }
    EXIT_SUCCESS
}
