use crate::workbench;
use gtk::{glib, subclass::prelude::*};

mod imp {
    use super::*;

    #[derive(Debug, Default, gtk::CompositeTemplate)]
    // The file will be provided by Workbench when the demo compiles, it just contains the template.
    #[template(file = "workbench_template.ui")]
    pub struct AwesomeButton {}

    #[glib::object_subclass]
    impl ObjectSubclass for AwesomeButton {
        const NAME: &'static str = "AwesomeButton";
        type Type = super::AwesomeButton;
        type ParentType = gtk::Button;

        fn class_init(klass: &mut Self::Class) {
            klass.bind_template();
        }

        fn instance_init(obj: &glib::subclass::InitializingObject<Self>) {
            obj.init_template();
        }
    }

    #[gtk::template_callbacks]
    impl AwesomeButton {
        #[template_callback]
        fn onclicked(_button: &gtk::Button) {
            println!("Clicked")
        }
    }

    impl ObjectImpl for AwesomeButton {}
    impl WidgetImpl for AwesomeButton {}
    impl ButtonImpl for AwesomeButton {}
}

glib::wrapper! {
    pub struct AwesomeButton(ObjectSubclass<imp::AwesomeButton>) @extends gtk::Widget, gtk::Button;
}

impl AwesomeButton {
    pub fn new() -> Self {
        glib::Object::new()
    }
}

pub fn main() {
    gtk::init().unwrap();

    let container = gtk::ScrolledWindow::new();
    let flow_box = gtk::FlowBox::builder().hexpand(true).build();
    container.set_child(&flow_box);

    let mut widgets = Vec::with_capacity(100);
    for _ in 0..100 {
        widgets.push(AwesomeButton::new());
    }
    for widget in &widgets {
        flow_box.append(widget);
    }

    workbench::preview(&container)
}
