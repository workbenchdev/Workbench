import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")

from gi.repository import Gsk, Graphene, Adw
import workbench


button_timed = workbench.builder.get_object("button_timed")
progress_bar = workbench.builder.get_object("progress_bar")
target_timed = Adw.PropertyAnimationTarget.new(progress_bar, "fraction")

animation_timed = Adw.TimedAnimation(
    widget=progress_bar,
    value_from=0,
    value_to=1,
    duration=1500,
    easing=Adw.Easing.EASE_IN_OUT_CUBIC,
    target=target_timed,
)

button_timed.connect("clicked", lambda _: animation_timed.play())
animation_timed.connect("done", lambda _: animation_timed.reset())

button_spring = workbench.builder.get_object("button_spring")
ball = workbench.builder.get_object("ball")


def get_end_position(widget):
    parent_width = widget.get_parent().get_width()
    width = ball.get_width()

    return parent_width - width


def move_widget(widget, x, y):
    transform = Gsk.Transform.new()
    p = Graphene.Point().init(x, y)
    transform = transform.translate(p)
    widget.allocate(widget.get_width(), widget.get_height(), -1, transform)


def animation_cb(value):
    end = get_end_position(ball)
    x = Adw.lerp(0, end, value)
    move_widget(ball, x, 0)


target_spring = Adw.CallbackAnimationTarget.new(animation_cb)
params = Adw.SpringParams.new(
    damping_ratio=0.5,
    mass=1.0,
    stiffness=50.0,
)
animation_spring = Adw.SpringAnimation(
    widget=ball,
    value_from=0,
    value_to=1,
    spring_params=params,
    target=target_spring,
    initial_velocity=1.0,  # If amplitude of oscillation < epsilon, animation stops
    epsilon=0.001,
    clamp=False,
)

button_spring.connect("clicked", lambda _: animation_spring.play())
