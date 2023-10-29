use crate::workbench;
use adw::prelude::*;
use glib::{clone, timeout_future, MainContext, Priority};
use gtk::glib;
use std::time::Duration;
use webkit6::prelude::*;
use webkit6::{LoadEvent, NetworkError, WebView};

pub fn main() {
    let button_back: gtk::Button = workbench::builder().object("button_back").unwrap();
    let button_forward: gtk::Button = workbench::builder().object("button_forward").unwrap();
    let button_reload: gtk::Button = workbench::builder().object("button_reload").unwrap();
    let button_stop: gtk::Button = workbench::builder().object("button_stop").unwrap();
    let url_bar: gtk::Entry = workbench::builder().object("url_bar").unwrap();
    let web_view: WebView = workbench::builder().object("web_view").unwrap();

    web_view.bind_property("uri", &url_bar, "text").build();
    web_view.load_uri("https://www.gnome.org/");

    url_bar.connect_activate(clone!(@weak web_view => move |url_bar| {
        let url = url_bar.buffer().text().as_str().to_string();
        if glib::Uri::peek_scheme(&url).is_some() {
            web_view.load_uri(&url);
        } else {
            web_view.load_uri(&format!("http://{url}"));
        }
    }));

    button_forward.connect_clicked(clone!(@weak web_view => move |_| {
        web_view.go_forward();
    }));

    button_back.connect_clicked(clone!(@weak web_view => move |_| {
        web_view.go_back();
    }));

    button_reload.connect_clicked(clone!(@weak web_view => move |_| {
        web_view.reload();
    }));

    button_stop.connect_clicked(clone!(@weak web_view => move |_| {
        web_view.stop_loading();
    }));

    web_view.connect_load_changed(|_, load_event| {
        match load_event {
            LoadEvent::Started => println!("Page loading started"),
            LoadEvent::Finished => println!("Page loading has finished"),
            _ => (),
        };
    });

    web_view.connect_load_failed(|web_view, _, fail_url, error| {
        // Dont display error page if it is caused by stop_loading()
        if !error.matches(NetworkError::Cancelled) {
            let content = error_page(fail_url, error.message());
            web_view.load_alternate_html(&content, fail_url, None);
        }
        false
    });

    let (sender, receiver) = MainContext::channel(Priority::default());
    web_view.connect_notify(Some("estimated-load-progress"), move |web_view, _| {
        sender.send(web_view.estimated_load_progress()).unwrap();
    });

    receiver.attach(
        None,
        clone!(@weak url_bar => @default-return glib::ControlFlow::Break,
            move |load_progress| {
                url_bar.set_progress_fraction(load_progress);
                if url_bar.progress_fraction() == 1. {
                  MainContext::default().spawn_local(async move {
                    timeout_future(Duration::from_millis(500)).await;
                    url_bar.set_progress_fraction(0.);
                  });
                }
                glib::ControlFlow::Continue
            }
        ),
    );
}

fn error_page(fail_url: &str, msg: &str) -> String {
    format!(
        r#"<div style="text-align:center; margin:24px;">
             <h2>An error occurred while loading {fail_url}</h2>
             <p>{msg}</p>
           </div>"#
    )
}
