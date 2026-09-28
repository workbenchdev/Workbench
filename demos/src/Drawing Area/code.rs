use crate::workbench;
use glib::clone;
use gtk::glib;
use gtk::prelude::*;
use std::cell::RefCell;
use std::f64::consts::PI;
use std::rc::Rc;

pub fn main() {
    let drawing_area: gtk::DrawingArea = workbench::builder().object("drawing_area").unwrap();
    let scale_rotate: gtk::Scale = workbench::builder().object("scale").unwrap();

    // Create the main triangle data structure using arrays
    let triangle = [[100.0, 100.0], [0.0, -100.0], [-100.0, 100.0]];

    let angle = Rc::new(RefCell::new(0.));

    drawing_area.set_draw_func(clone!(@weak angle => move |_area, cr, _width, _height| {
        // Draw triangle in context
        cr.translate(150., 150.);

        cr.rotate(*angle.borrow());
        cr.move_to(triangle[2][0], triangle[2][1]);
        for vertex in triangle {
            cr.line_to(vertex[0], vertex[1]);
        }

        cr.set_source_rgba(1., 0., 1., 1.);
        cr.stroke().unwrap();
    }));

    scale_rotate.connect_value_changed(clone!(@strong angle => move |scale_rotate| {
        *angle.borrow_mut() = scale_rotate.value() / 180. * PI;
        drawing_area.queue_draw();
    }));
}
