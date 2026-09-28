#! /usr/bin/env -S vala workbench.vala --pkg gtk4

double to_radians (double degrees) {
    return degrees * (Math.PI / 180);
}

public void main () {
    var drawing_area = (Gtk.DrawingArea) workbench.builder.get_object ("drawing_area");
    var scale_rotate = (Gtk.Scale) workbench.builder.get_object ("scale");

    double[,] triangle = { { 100.0, 100.0 },
                           { 0.0, -100.0 },
                           { -100.0, 100.0 } };

    double angle = 0.0;

    drawing_area.set_draw_func ((area, cairo_context, width, height) => {
        cairo_context.translate (height / 2, width / 2);

        cairo_context.rotate (angle);
        cairo_context.move_to (triangle[2, 0], triangle[2, 1]);
        for (int i = 0; i < 3; i++) {
            cairo_context.line_to (triangle[i, 0], triangle[i, 1]);
        }

        cairo_context.set_source_rgba (1,
                                       0,
                                       1,
                                       1);
        cairo_context.stroke ();
    });

    scale_rotate.value_changed.connect (() => {
        angle = to_radians (scale_rotate.get_value ());
        drawing_area.queue_draw ();
    });
}
