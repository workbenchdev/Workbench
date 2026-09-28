#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Chessboard chessboard;
private Gtk.Box box;
private Gtk.Label label;

public class Chessboard : Gtk.Widget {
    const int SQUARE_SIZE = 70;
    const int BOARD_SIZE = 8 * SQUARE_SIZE;
    const float PIECE_SIZE = 1.5f * SQUARE_SIZE;

    private Gdk.RGBA black_squares_color;
    private Gdk.RGBA white_squares_color;
    private Gdk.RGBA knight_color;

    private float x;
    private float y;
    private float initial_x;
    private float initial_y;
    private Gsk.Path knight_path;
    private Gsk.Stroke knight_stroke;
    private Graphene.Rect knight_bounds;
    private Gtk.GestureDrag gesture;
    private bool gesture_started = false;

    public Chessboard() {
        // Initialize colors
        black_squares_color = Gdk.RGBA();
        black_squares_color.parse("Gray");
        white_squares_color = Gdk.RGBA();
        white_squares_color.parse("LightGray");
        knight_color = Gdk.RGBA();
        knight_color.parse("SaddleBrown");

        // Initialize knight position and contour
        x = y = (float) 4 * SQUARE_SIZE - PIECE_SIZE / 2;
        initial_x = x;
        initial_y = y;
        // Made by SVG Repo: https://www.svgrepo.com/svg/380957/chess-piece-knight-strategy
        knight_path = Gsk.Path.parse(
                                     "M47.26,22.08c-.74-3.36-5.69-5.27-7.74-5.92l.34-4.5a1,1,0,0,0-1.74-.74L33.9,15.66c-6.45,2.23-11,6-13.39,11.19-2.9,6.19-2.2,12.94-1.29,17.06H13.71l-1.27,9.5H50.08l-1.27-9.5h-8c.85-4.13-3-10.63-5.59-14.53A5.93,5.93,0,0,0,39,28.1c2.85,1.17,9.48,2.29,10.77,2,1-.19,1.3-1.33,1.5-2.09,0-.12,0-.22,0-.23C52.4,25.82,49.64,23.63,47.26,22.08Zm-.2,23.83.74,5.5H14.72l.74-5.5h31.6Zm2.27-18.35a4.87,4.87,0,0,1-.19.63c-1.6,0-7.92-1.13-9.8-2.13a1,1,0,0,0-1.11.11,4.25,4.25,0,0,1-3.06,1.2A3.65,3.65,0,0,1,33,26.23a1,1,0,0,0-1.39-.16,1,1,0,0,0-.17,1.4C34,30.74,40.19,40,38.78,43.91H21.28c-.87-3.79-1.7-10.37,1-16.21,2.22-4.76,6.42-8.2,12.47-10.23a1,1,0,0,0,.43-.29l2.43-2.72-.18,2.36a1,1,0,0,0,.74,1c1.78.47,6.92,2.39,7.13,4.9a1,1,0,0,0,.46.76,15.42,15.42,0,0,1,3.25,2.54,2.06,2.06,0,0,1,.51.8A3,3,0,0,0,49.33,27.56Z"
        );
        knight_stroke = new Gsk.Stroke(2.0f);
        knight_path.get_stroke_bounds(knight_stroke, out knight_bounds);

        // Add drag gesture and connect it to signals
        gesture = new Gtk.GestureDrag();
        add_controller(gesture);

        gesture.drag_begin.connect(() => {
            var knight_hitbox = Graphene.Rect();
            knight_hitbox.init(initial_x, initial_y, PIECE_SIZE, PIECE_SIZE);
            var cursor_pos = Graphene.Point();
            cursor_pos.init((float) x, (float) y);
            gesture_started = knight_hitbox.contains_point(cursor_pos);
        });

        gesture.drag_end.connect((offset_x, offset_y) => {
            if (!gesture_started)return;
            initial_x += (float) offset_x;
            initial_y += (float) offset_y;
            queue_draw();
            gesture_started = false;
        });
        gesture.drag_update.connect((offset_x, offset_y) => {
            if (!gesture_started)return;
            x = initial_x + (float) offset_x;
            y = initial_y + (float) offset_y;
            queue_draw();
        });
    }

    public override void snapshot(Gtk.Snapshot snapshot) {
        // Draw chessboard by repeating a 2x2 block of squares
        var bounds = Graphene.Rect();
        bounds.init(0, 0, BOARD_SIZE, BOARD_SIZE);
        var child_bounds = Graphene.Rect();
        child_bounds.init(0, 0, 2 * SQUARE_SIZE, 2 * SQUARE_SIZE);
        snapshot.push_repeat(bounds, child_bounds); // start of repeated part

        var r11 = Graphene.Rect();
        r11.init(0, 0, SQUARE_SIZE, SQUARE_SIZE);
        snapshot.append_color(white_squares_color, r11);

        var r12 = Graphene.Rect();
        r12.init(0, SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        snapshot.append_color(black_squares_color, r12);

        var r21 = Graphene.Rect();
        r21.init(SQUARE_SIZE, 0, SQUARE_SIZE, SQUARE_SIZE);
        snapshot.append_color(black_squares_color, r21);

        var r22 = Graphene.Rect();
        r22.init(SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        snapshot.append_color(white_squares_color, r22);

        snapshot.pop(); // end of repeated part

        // Draw knight anchored on position (x, y)
        var anchor = Graphene.Point();
        anchor.init(x, y);
        float factor = (float) PIECE_SIZE / knight_bounds.get_width();
        var transformation = new Gsk.Transform().translate(anchor).scale(factor, factor);
        snapshot.transform(transformation);
        snapshot.append_stroke(knight_path, knight_stroke, knight_color);
    }

    public override void measure(Gtk.Orientation orientation, int for_size, out int minimum, out int natural, out int minimum_baseline, out int natural_baseline) {
        minimum = BOARD_SIZE;
        natural = BOARD_SIZE;
        minimum_baseline = -1;
        natural_baseline = -1;
    }
}


public void main() {
    box = (Gtk.Box) workbench.builder.get_object("box");
    label = (Gtk.Label) workbench.builder.get_object("label");
    chessboard = new Chessboard(){
        hexpand = true, vexpand = true
    };
    box.insert_child_after(chessboard, label);
}
