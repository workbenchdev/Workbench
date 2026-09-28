import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")

from gi.repository import GObject, Gdk, Gtk, Adw
import workbench


def on_drop(_drop, value, _x, y):
    target_row = list.get_row_at_y(y)
    target_index = target_row.get_index()

    # If value or the target row is null, do not accept the drop
    if not value or not target_row:
        return False

    list.remove(value)
    list.insert(value, target_index)
    target_row.set_state_flags(Gtk.StateFlags.NORMAL, True)

    # If everything is successful, return True to accept the drop
    return True


def on_prepare(_source, x, y, row):
    global drag_x, drag_y
    drag_x = x
    drag_y = y

    value = GObject.Value()
    value.init(Gtk.ListBoxRow)
    value.set_object(row)

    return Gdk.ContentProvider.new_for_value(value)


def on_drag_begin(_source, drag, row):
    global drag_x, drag_y
    allocation = row.get_allocation()
    drag_widget = Gtk.ListBox()

    drag_widget.set_size_request(allocation.width, allocation.height)
    drag_widget.add_css_class("boxed-list")

    drag_row = Adw.ActionRow(title=row.get_title())
    drag_row.add_prefix(
        Gtk.Image(
            icon_name="list-drag-handle-symbolic",
            css_classes=["dim-label"],
        ),
    )

    drag_widget.append(drag_row)
    drag_widget.drag_highlight_row(drag_row)

    icon = Gtk.DragIcon.get_for_drag(drag)
    icon.set_child(drag_widget)

    drag.set_hotspot(drag_x, drag_y)


list = workbench.builder.get_object("list")
drop_target = Gtk.DropTarget.new(Gtk.ListBoxRow, Gdk.DragAction.MOVE)

list.add_controller(drop_target)

# Iterate over ListBox children
for row in list:
    drop_controller = Gtk.DropControllerMotion()

    drag_source = Gtk.DragSource(
        actions=Gdk.DragAction.MOVE,
    )

    row.add_controller(drag_source)
    row.add_controller(drop_controller)

    # Drag handling
    drag_source.connect("prepare", on_prepare, row)

    drag_source.connect("drag-begin", on_drag_begin, row)

    # Update row visuals during DnD operation
    drop_controller.connect(
        "enter", lambda _target, _x, _y, row: list.drag_highlight_row(row), row
    )

    drop_controller.connect("leave", lambda _target: list.drag_unhighlight_row())


# Drop Handling
drop_target.connect("drop", on_drop)
