use gtk::prelude::*;
use gtk::Button;
use gtk::MessageDialog;
use gtk::MessageType;
use gtk::Window;
use libadwaita::subclass::prelude::*;
use libadwaita::subclass::AdwMessageDialog;
use std::rc::Rc;

fn main() {
    // Initialize Gtk application
    let application = gtk::Application::new(
        Some("com.example.workbench"),
        Default::default(),
    );

    application.connect_activate(|app| {
        build_ui(app);
    });

    application.run();
}

fn build_ui(application: &gtk::Application) {
    let builder = gtk::Builder::from_string(include_str!("path/to/your/glade/ui/file.glade"));

    // Fetch the 'subtitle' box from the builder
    let subtitle_box: gtk::Box = builder.object("subtitle").expect("Subtitle box not found");

    // Create the button
    let button = Button::with_label("Press me");
    button.set_margin_top(6);
    button.get_style_context().add_class("suggested-action");

    // Connect the 'clicked' signal to the greet function
    let greet_func = Rc::new(greet);
    button.connect_clicked(clone!(greet_func => move |_| greet_func()));

    // Append the button to the 'subtitle' box
    subtitle_box.append(&button);

    // Print a message
    println!("Welcome to Workbench!");
}

fn greet() {
    // Create a transient parent for the message dialog (replace this with your actual parent window)
    let parent_window = Window::new(gtk::WindowType::Toplevel);

    // Create the message dialog
    let dialog = MessageDialog::new(Some(&parent_window), gtk::DialogFlags::MODAL, MessageType::Info, gtk::ButtonsType::Ok, "Hello World!");

    // Add 'OK' button to the dialog
    dialog.add_button("OK", gtk::ResponseType::Ok);

    // Connect the 'response' signal to the closure
    dialog.connect_response(|dialog, response| {
        // Print the response (e.g., gtk::ResponseType::Ok)
        println!("{:?}", response);
        // Close the dialog
        dialog.close();
    });

    // Show the dialog
    dialog.show();
}
