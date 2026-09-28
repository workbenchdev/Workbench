import workbench
import math

drawing_area = workbench.builder.get_object("drawing_area")
scale_rotate = workbench.builder.get_object("scale")

triangle = [[100, 100], [0, -100], [-100, 100]]
angle = 0


def draw(_self, cr, _width, _height):
    # Draw triangle in context
    cr.translate(150, 150)
    cr.rotate(angle)

    cr.move_to(triangle[2][0], triangle[2][1])
    for vertex in triangle:
        cr.line_to(vertex[0], vertex[1])

    cr.set_source_rgba(1, 0, 1, 1)
    cr.stroke()


def on_angle_changed(_self):
    global angle
    angle = math.radians(scale_rotate.get_value())

    drawing_area.queue_draw()


drawing_area.set_draw_func(draw)
scale_rotate.connect("value-changed", on_angle_changed)

# https://www.cairographics.org/tutorial/
