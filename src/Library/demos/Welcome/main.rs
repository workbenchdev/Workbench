use adw::prelude::*;
use glib::clone;
use gtk::glib;

fn main() -> glib::ExitCode {
    // Initialize Gtk application
    let app = adw::Application::builder()
        .application_id("com.example.workbench")
        .build();

    app.connect_activate(build_ui);
    app.run()
}

fn build_ui(app: &adw::Application) {
    let builder = gtk::Builder::from_string(include_str!("main.xml"));

    // Fetch the 'subtitle' box from the builder
    let subtitle_box: gtk::Box = builder.object("subtitle").expect("Subtitle box not found");

    // Create the button
    let button = gtk::Button::builder()
        .label("Press me")
        .margin_top(6)
        .css_classes(["suggested-action"])
        .build();

    // Append the button to the 'subtitle' box
    subtitle_box.append(&button);

    let welcome_box: gtk::Box = builder.object("welcome").expect("Welcome box not found");

    let window = adw::ApplicationWindow::builder()
        .application(app)
        .title("Workbench")
        .content(&welcome_box) // Set the welcome_box as the main content
        .build();

    // Connect the 'clicked' signal to the greet function
    button.connect_clicked(clone!(@weak window => move |_| greet(window)));

    // Print a message
    println!("Welcome to Workbench!");
    window.show();
}

fn greet(parent_window: adw::ApplicationWindow) {
    // Create the message dialog
    let dialog = adw::MessageDialog::builder()
        .body("Hello World!")
        .transient_for(&parent_window)
        .build();

    dialog.add_responses(&[("ok", "Cancel")]);

    // Connect the 'response' signal to the closure
    dialog.connect_response(None, |dialog, response| {
        // Print the response (e.g., gtk::ResponseType::Ok)
        println!("{:?}", response);
        // Close the dialog
        dialog.close();
    });

    // Show the dialog
    dialog.show();
}
