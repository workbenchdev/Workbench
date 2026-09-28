import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk, Gdk, Graphene, Gsk
import workbench

box = workbench.builder.get_object("box")
label = workbench.builder.get_object("label")


class Chessboard(Gtk.Widget):
    SQUARE_SIZE = 70
    BOARD_SIZE = 8 * SQUARE_SIZE
    PIECE_SIZE = 1.5 * SQUARE_SIZE

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        # initialize colors
        self.black_squares_color = Gdk.RGBA()
        self.black_squares_color.parse("Gray")
        self.white_squares_color = Gdk.RGBA()
        self.white_squares_color.parse("LightGray")
        self.knight_color = Gdk.RGBA()
        self.knight_color.parse("SaddleBrown")

        # initialize knight position and contour
        self.x = self.y = 4 * self.SQUARE_SIZE - self.PIECE_SIZE // 2
        self.initial_x, self.initial_y = self.x, self.y
        # Made by SVG Repo: https://www.svgrepo.com/svg/380957/chess-piece-knight-strategy
        self.knight_path = Gsk.Path.parse(
            "M47.26,22.08c-.74-3.36-5.69-5.27-7.74-5.92l.34-4.5a1,1,0,0,0-1.74-.74L33.9,15.66c-6.45,2.23-11,6-13.39,11.19-2.9,6.19-2.2,12.94-1.29,17.06H13.71l-1.27,9.5H50.08l-1.27-9.5h-8c.85-4.13-3-10.63-5.59-14.53A5.93,5.93,0,0,0,39,28.1c2.85,1.17,9.48,2.29,10.77,2,1-.19,1.3-1.33,1.5-2.09,0-.12,0-.22,0-.23C52.4,25.82,49.64,23.63,47.26,22.08Zm-.2,23.83.74,5.5H14.72l.74-5.5h31.6Zm2.27-18.35a4.87,4.87,0,0,1-.19.63c-1.6,0-7.92-1.13-9.8-2.13a1,1,0,0,0-1.11.11,4.25,4.25,0,0,1-3.06,1.2A3.65,3.65,0,0,1,33,26.23a1,1,0,0,0-1.39-.16,1,1,0,0,0-.17,1.4C34,30.74,40.19,40,38.78,43.91H21.28c-.87-3.79-1.7-10.37,1-16.21,2.22-4.76,6.42-8.2,12.47-10.23a1,1,0,0,0,.43-.29l2.43-2.72-.18,2.36a1,1,0,0,0,.74,1c1.78.47,6.92,2.39,7.13,4.9a1,1,0,0,0,.46.76,15.42,15.42,0,0,1,3.25,2.54,2.06,2.06,0,0,1,.51.8A3,3,0,0,0,49.33,27.56Z"
        )
        self.knight_stroke = Gsk.Stroke(line_width=2.0)
        _, self.knight_bounds = self.knight_path.get_stroke_bounds(self.knight_stroke)

        # Add drag gesture and connect it to signals
        self.gesture = Gtk.GestureDrag()
        self.add_controller(self.gesture)
        self.gesture.connect("drag-begin", self.on_drag_begin)
        self.gesture.connect("drag-end", self.on_drag_end)
        self.gesture.connect("drag-update", self.on_drag_update)
        self.gesture_started = False

    def do_snapshot(self, snapshot):
        # Draw chessboard by repeating a 2x2 block of squares
        bounds = Graphene.Rect().init(0, 0, self.BOARD_SIZE, self.BOARD_SIZE)
        child_bounds = Graphene.Rect().init(
            0, 0, 2 * self.SQUARE_SIZE, 2 * self.SQUARE_SIZE
        )
        snapshot.push_repeat(bounds, child_bounds)  # start of repeated part

        r11 = Graphene.Rect()
        r11.init(0, 0, self.SQUARE_SIZE, self.SQUARE_SIZE)
        snapshot.append_color(self.white_squares_color, r11)
        r12 = Graphene.Rect()
        r12.init(0, self.SQUARE_SIZE, self.SQUARE_SIZE, self.SQUARE_SIZE)
        snapshot.append_color(self.black_squares_color, r12)
        r21 = Graphene.Rect()
        r21.init(self.SQUARE_SIZE, 0, self.SQUARE_SIZE, self.SQUARE_SIZE)
        snapshot.append_color(self.black_squares_color, r21)
        r22 = Graphene.Rect()
        r22.init(self.SQUARE_SIZE, self.SQUARE_SIZE, self.SQUARE_SIZE, self.SQUARE_SIZE)
        snapshot.append_color(self.white_squares_color, r22)

        snapshot.pop()  # end of repeated part

        # Draw knight anchored on position (self.x, self.y)
        anchor = Graphene.Point().init(self.x, self.y)
        factor = self.PIECE_SIZE / self.knight_bounds.get_width()
        transformation = Gsk.Transform().translate(anchor).scale(factor, factor)
        snapshot.transform(transformation)
        snapshot.append_stroke(self.knight_path, self.knight_stroke, self.knight_color)

    def do_measure(self, _orientation, _for_size):
        return self.BOARD_SIZE, self.BOARD_SIZE, -1, -1

    def on_drag_begin(self, _gesture, x, y):
        knight_hitbox = Graphene.Rect().init(
            self.initial_x, self.initial_y, self.PIECE_SIZE, self.PIECE_SIZE
        )
        cursor_pos = Graphene.Point().init(x, y)
        self.gesture_started = knight_hitbox.contains_point(cursor_pos)

    def on_drag_end(self, _gesture, offset_x, offset_y):
        if not self.gesture_started:
            return
        self.initial_x += offset_x
        self.initial_y += offset_y
        self.queue_draw()
        self.gesture_started = False

    def on_drag_update(self, _gesture, offset_x, offset_y):
        if not self.gesture_started:
            return
        self.x = self.initial_x + offset_x
        self.y = self.initial_y + offset_y
        self.queue_draw()


chessboard = Chessboard(hexpand=True, vexpand=True)
box.insert_child_after(chessboard, label)
