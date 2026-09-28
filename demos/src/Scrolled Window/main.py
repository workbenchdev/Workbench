import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")

from gi.repository import Gtk, Adw
import workbench

scrolled_window = workbench.builder.get_object("scrolled_window")
container = workbench.builder.get_object("container")
toggle_orientation = workbench.builder.get_object("toggle_orientation")
button_start = workbench.builder.get_object("button_start")
button_end = workbench.builder.get_object("button_end")
auto_scrolling = False

button_start.sensitive = False

scrollbars = {
    Gtk.Orientation.HORIZONTAL: scrolled_window.get_hscrollbar(),
    Gtk.Orientation.VERTICAL: scrolled_window.get_vscrollbar(),
}


def on_toggled(_button):
    if toggle_orientation.get_active():
        container.set_orientation(Gtk.Orientation.HORIZONTAL)
    else:
        container.set_orientation(Gtk.Orientation.VERTICAL)


def on_animation_done(_animation):
    global auto_scrolling
    auto_scrolling = False


def create_scrollbar_anim(scrollbar, direction):
    # direction = 0 -> Animates to Start
    # direction = 1 -> Animates to End
    adjustment = scrollbar.get_adjustment()
    target = Adw.PropertyAnimationTarget.new(adjustment, "value")
    animation = Adw.TimedAnimation(
        widget=scrollbar,
        value_from=adjustment.get_value(),
        value_to=adjustment.get_upper() - adjustment.get_page_size()
        if direction
        else 0,
        duration=1000,
        easing=Adw.Easing.LINEAR,
        target=target,
    )

    animation.connect("done", on_animation_done)
    return animation


def on_button_clicked(_button, direction):
    global auto_scrolling
    auto_scrolling = True
    scrollbar = scrollbars[container.get_orientation()]
    anim = create_scrollbar_anim(scrollbar, direction)
    anim.play()


def populate_container(container, label):
    item = Adw.Bin(
        margin_top=6,
        margin_bottom=6,
        margin_start=6,
        margin_end=6,
        child=Gtk.Label(
            label=label,
            width_request=100,
            height_request=100,
        ),
        css_classes=["card"],
    )
    container.append(item)


def on_value_changed(adj):
    if adj.get_value() == adj.get_lower():
        button_end.set_sensitive(True)
        button_start.set_sensitive(False)
    elif adj.get_value() == adj.get_upper() - adj.get_page_size():
        button_end.set_sensitive(False)
        button_start.set_sensitive(True)
    else:
        # Disable buttons if scrollbar is auto-scrolling
        button_end.set_sensitive(not auto_scrolling)
        button_start.set_sensitive(not auto_scrolling)


toggle_orientation.connect("toggled", on_toggled)

num_items = 20
for i in range(num_items):
    populate_container(container, f"Item {i + 1}")


for _orientation, scrollbar in scrollbars.items():
    adj = scrollbar.get_adjustment()
    adj.connect("value-changed", on_value_changed)

scrolled_window.connect(
    "edge-reached", lambda _window, _position: print("Edge Reached")
)

button_start.connect("clicked", on_button_clicked, 0)
button_end.connect("clicked", on_button_clicked, 1)
