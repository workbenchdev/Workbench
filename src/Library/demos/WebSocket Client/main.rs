// NOTE: soup is used here to stay consistent with the demos in the other languages
// For real applications, you probably want to use a different HTTP library in Rust

use crate::workbench;
use adw::prelude::*;
use gio::Cancellable;
use glib::{clone, MainContext, Priority};
use gtk::{gio, glib};
use soup::prelude::*;
use soup::WebsocketConnection;

enum Message {
    NewConnection(WebsocketConnection),
    CloseConnection,
    SendMessage,
}

pub fn main() {
    let button_connect: gtk::Button = workbench::builder().object("button_connect").unwrap();
    let button_disconnect: gtk::Button = workbench::builder().object("button_disconnect").unwrap();
    let button_send: gtk::Button = workbench::builder().object("button_send").unwrap();
    let entry_url: gtk::Entry = workbench::builder().object("entry_url").unwrap();

    let (sender, receiver) = MainContext::channel(Priority::default());

    button_connect.connect_clicked(clone!(@strong sender => move |_| {
        let session = soup::Session::new();
        let message = soup::Message::new("GET", entry_url.text().as_str()).unwrap();

        let sender = sender.clone();
        session.websocket_connect_async(
            &message,
            None,
            &[],
            Priority::DEFAULT,
            Cancellable::NONE,
            move |connection| {
                if let Ok(connection) = connection {
                    sender.send(Message::NewConnection(connection)).unwrap();
                }
            },
        );
    }));

    button_disconnect.connect_clicked(clone!(@strong sender => move |_| {
        sender.send(Message::CloseConnection).unwrap();
    }));

    button_send.connect_clicked(clone!(@strong sender => move |_| {
        sender.send(Message::SendMessage).unwrap();
    }));

    let mut connection = None;
    receiver.attach(None, move |message| {
        match message {
            Message::NewConnection(c) => {
                on_websocket_connect(&c);
                connection = Some(c);
            }
            Message::CloseConnection => {
                connection.as_ref().map(|c| c.close(0, None));
            }
            Message::SendMessage => {
                connection.as_ref().map(send_message);
            }
        };
        glib::ControlFlow::Continue
    });
}

fn on_websocket_connect(connection: &WebsocketConnection) {
    let button_connect: gtk::Button = workbench::builder().object("button_connect").unwrap();
    let button_disconnect: gtk::Button = workbench::builder().object("button_disconnect").unwrap();
    let button_send: gtk::Button = workbench::builder().object("button_send").unwrap();
    connection.connect_closed(
        clone!(@weak button_connect, @weak button_disconnect, @weak button_send =>
            move |_| {
                println!("closed");
                button_connect.set_sensitive(true);
                button_disconnect.set_sensitive(false);
                button_send.set_sensitive(false);
        }),
    );
    connection.connect_error(|_, err| {
        println!("error");
        eprintln!("{err}");
    });
    connection.connect_message(|_, _, message| {
        if let Ok(message) = std::str::from_utf8(message) {
            println!("received: {message}");
        }
    });

    println!("open");
    button_connect.set_sensitive(false);
    button_disconnect.set_sensitive(true);
    button_send.set_sensitive(true);
}

fn send_message(connection: &WebsocketConnection) {
    let entry_message: gtk::Entry = workbench::builder().object("entry_message").unwrap();
    let message = entry_message.text().as_str().to_owned();
    connection.send_text(&message);
    println!("sent: {message}");
}
