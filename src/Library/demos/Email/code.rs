use crate::workbench;
use ashpd::desktop::email::EmailRequest;
use glib::MainContext;
use gtk::glib;
use gtk::prelude::*;

pub fn main() {
    let button: gtk::Button = workbench::builder().object("button").unwrap();
    button.connect_clicked(|_| {
        MainContext::default().spawn_local(async {
            if let Err(err) = send_email().await {
                eprintln!("Could not send email: {err}")
            }
        });
    });
}

async fn send_email() -> ashpd::Result<()> {
    let entry: gtk::Entry = workbench::builder().object("entry").unwrap();
    let request = EmailRequest::default()
        .address(entry.text().as_str())
        .subject("Email from Workbench")
        .body("Hello World!")
        .send()
        .await?;

    if let Err(err) = request.response() {
        eprintln!("Could not send email: {err}.");
    } else {
        println!("Success");
    })
    Ok(())
}

