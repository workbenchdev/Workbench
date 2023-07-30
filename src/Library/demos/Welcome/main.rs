use adw::prelude::*;
use adw::traits::MessageDialogExt;
use gtk::Button;
use gtk::Window;

fn main() {
    // Initialize Gtk application
    let application = gtk::Application::builder()
        .application_id("com.example.workbench")
        .build();

    application.connect_activate(|app| {
        build_ui(app);
    });

    application.run();
}

fn build_ui(application: &gtk::Application) {
    let builder = gtk::Builder::from_string(include_str!("main.xml"));

    // Fetch the 'subtitle' box from the builder
    let subtitle_box: gtk::Box = builder.object("subtitle").expect("Subtitle box not found");

    // Create the button
    let button = Button::with_label("Press me");
    button.set_margin_top(6);
    button.style_context().add_class("suggested-action");

    // Connect the 'clicked' signal to the greet function
    button.connect_clicked(|_| greet());

    // Append the button to the 'subtitle' box
    subtitle_box.append(&button);

    // Print a message
    println!("Welcome to Workbench!");
}

fn greet() {
    // Create a transient parent for the message dialog (replace this with your actual parent window)
    let parent_window = Window::new();

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
