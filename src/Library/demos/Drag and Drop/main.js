import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const list = workbench.builder.get_object("list");

// Calculate the length of our ListBox
let last_row = list.get_last_child();
let list_length = last_row.get_index() + 1;

// Create a Dragsource and DropTarget for each row
for (let i = 0; i < list_length; i++) {
  let row = list.get_row_at_index(i);
  row.selectable = false;
  let _drag_x;
  let _drag_y;

  let allocation;
  const drag = new Gtk.DragSource();
  const drop = Gtk.DropTarget.new(row.constructor.$gtype, Gdk.DragAction.COPY);

  row.add_controller(drag);
  row.add_controller(drop);

  // Drag controller
  drag.connect("prepare", (source, _x, _y) => {
    _drag_x = _x;
    _drag_y = _y;

    allocation = row.get_allocation();
    let value = new GObject.Value();
    value.init(Gtk.ListBoxRow);
    value.set_object(row);
    return Gdk.ContentProvider.new_for_value(value);
  });

  drag.connect("drag-begin", (drag) => {
    list.remove(row);
    row.set_state_flags(Gtk.StateFlags.DROP_ACTIVE, true);
    let drag_widget = new Gtk.ListBox();
    drag_widget.set_size_request(allocation.width, allocation.height);
    drag_widget.add_css_class("boxed-list");

    let drag_row = new Adw.ActionRow();
    drag_row.title = row.title;
    drag_row.add_css_class("boxed-list");

    drag_widget.append(drag_row);
    drag_widget.drag_highlight_row(drag_row);

    let icon = Gtk.DragIcon.get_for_drag(drag.get_drag());
    icon.child = drag_widget;
  });

  // Drop controller
  drop.connect("drop", (drop, value, _x, _y) => {});

  drop.connect("enter", (_x, _y) => {});
}
