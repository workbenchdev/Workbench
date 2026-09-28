import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk?version=4.0";
import Graphene from "gi://Graphene";
import Gsk from "gi://Gsk";
import GObject from "gi://GObject";

const box = workbench.builder.get_object("box");
const label = workbench.builder.get_object("label");

const Chessboard = GObject.registerClass(
  {
    GTypeName: "Chessboard",
  },

  class Chessboard extends Gtk.Widget {
    square_size = 70;
    board_size = 8 * this.square_size;
    piece_size = 1.5 * this.square_size;

    constructor(kwargs) {
      super(kwargs);
      // initialize colors
      this.black_squares_color = new Gdk.RGBA();
      this.black_squares_color.parse("Gray");
      this.white_squares_color = new Gdk.RGBA();
      this.white_squares_color.parse("LightGray");
      this.knight_color = new Gdk.RGBA();
      this.knight_color.parse("SaddleBrown");

      // initialize knight position and contour
      this.x = this.y = 4 * this.square_size - this.piece_size / 2;
      this.initial_x = this.x;
      this.initial_y = this.y;
      // Made by SVG Repo: https://www.svgrepo.com/svg/380957/chess-piece-knight-strategy
      this.knight_path = Gsk.Path.parse(
        "M47.26,22.08c-.74-3.36-5.69-5.27-7.74-5.92l.34-4.5a1,1,0,0,0-1.74-.74L33.9,15.66c-6.45,2.23-11,6-13.39,11.19-2.9,6.19-2.2,12.94-1.29,17.06H13.71l-1.27,9.5H50.08l-1.27-9.5h-8c.85-4.13-3-10.63-5.59-14.53A5.93,5.93,0,0,0,39,28.1c2.85,1.17,9.48,2.29,10.77,2,1-.19,1.3-1.33,1.5-2.09,0-.12,0-.22,0-.23C52.4,25.82,49.64,23.63,47.26,22.08Zm-.2,23.83.74,5.5H14.72l.74-5.5h31.6Zm2.27-18.35a4.87,4.87,0,0,1-.19.63c-1.6,0-7.92-1.13-9.8-2.13a1,1,0,0,0-1.11.11,4.25,4.25,0,0,1-3.06,1.2A3.65,3.65,0,0,1,33,26.23a1,1,0,0,0-1.39-.16,1,1,0,0,0-.17,1.4C34,30.74,40.19,40,38.78,43.91H21.28c-.87-3.79-1.7-10.37,1-16.21,2.22-4.76,6.42-8.2,12.47-10.23a1,1,0,0,0,.43-.29l2.43-2.72-.18,2.36a1,1,0,0,0,.74,1c1.78.47,6.92,2.39,7.13,4.9a1,1,0,0,0,.46.76,15.42,15.42,0,0,1,3.25,2.54,2.06,2.06,0,0,1,.51.8A3,3,0,0,0,49.33,27.56Z",
      );
      this.knight_stroke = new Gsk.Stroke(2.0);
      this.knight_bounds = this.knight_path.get_stroke_bounds(
        this.knight_stroke,
      )[1];

      // Add drag gesture and connect it to signals
      this.gesture = new Gtk.GestureDrag();
      this.add_controller(this.gesture);
      this.gesture.connect("drag-begin", (_gesture, x, y) => {
        const knight_hitbox = new Graphene.Rect().init(
          this.initial_x,
          this.initial_y,
          this.piece_size,
          this.piece_size,
        );
        const cursor_pos = new Graphene.Point().init(x, y);
        this.gesture_started = knight_hitbox.contains_point(cursor_pos);
      });

      this.gesture.connect("drag-end", (_gesture, offset_x, offset_y) => {
        if (!this.gesture_started) return;
        this.initial_x += offset_x;
        this.initial_y += offset_y;
        this.queue_draw();
        this.gesture_started = false;
      });
      this.gesture.connect("drag-update", (_gesture, offset_x, offset_y) => {
        if (!this.gesture_started) return;
        this.x = this.initial_x + offset_x;
        this.y = this.initial_y + offset_y;
        this.queue_draw();
      });
    }

    vfunc_snapshot(snapshot) {
      // Draw chessboard by repeating a 2x2 block of squares
      const bounds = new Graphene.Rect().init(
        0,
        0,
        this.board_size,
        this.board_size,
      );
      const child_bounds = new Graphene.Rect().init(
        0,
        0,
        2 * this.square_size,
        2 * this.square_size,
      );
      snapshot.push_repeat(bounds, child_bounds); // start of repeated part

      const r11 = new Graphene.Rect().init(
        0,
        0,
        this.square_size,
        this.square_size,
      );
      snapshot.append_color(this.white_squares_color, r11);
      const r12 = new Graphene.Rect().init(
        0,
        this.square_size,
        this.square_size,
        this.square_size,
      );
      snapshot.append_color(this.black_squares_color, r12);
      const r21 = new Graphene.Rect().init(
        this.square_size,
        0,
        this.square_size,
        this.square_size,
      );
      snapshot.append_color(this.black_squares_color, r21);
      const r22 = new Graphene.Rect().init(
        this.square_size,
        this.square_size,
        this.square_size,
        this.square_size,
      );
      snapshot.append_color(this.white_squares_color, r22);

      snapshot.pop(); // end of repeated part

      // Draw knight anchored on position (this.x, this.y)
      const anchor = new Graphene.Point().init(this.x, this.y);
      const factor = this.piece_size / this.knight_bounds.get_width();
      const transformation = new Gsk.Transform()
        .translate(anchor)
        .scale(factor, factor);
      snapshot.transform(transformation);
      snapshot.append_stroke(
        this.knight_path,
        this.knight_stroke,
        this.knight_color,
      );
    }

    vfunc_measure(_orientation, _for_size) {
      return [this.board_size, this.board_size, -1, -1];
    }
  },
);

const chessboard = new Chessboard({ hexpand: true, vexpand: true });
box.insert_child_after(chessboard, label);
