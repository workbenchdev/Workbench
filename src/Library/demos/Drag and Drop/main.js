import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const list = workbench.builder.get_object("list");
const drop_target = Gtk.DropTarget.new(Gtk.ListBoxRow, Gdk.DragAction.MOVE);

list.add_controller(drop_target);

// Iterate over ListBox children
for (const row of list) {
  let _drag_x;
  let _drag_y;

  const drop_controller = new Gtk.DropControllerMotion();

  const drag_source = new Gtk.DragSource({
    actions: Gdk.DragAction.MOVE,
  });

  row.add_controller(drag_source);
  row.add_controller(drop_controller);

  // Drag handling
  drag_source.connect("prepare", (source, _x, _y) => {
    _drag_x = _x;
    _drag_y = _y;

    const value = new GObject.Value();
    value.init(Gtk.ListBoxRow);
    value.set_object(row);

    return Gdk.ContentProvider.new_for_value(value);
  });

  drag_source.connect("drag-begin", (_drag_source, drag) => {
    const allocation = row.get_allocation();
    const drag_widget = new Gtk.ListBox();

    drag_widget.set_size_request(allocation.width, allocation.height);
    drag_widget.add_css_class("boxed-list");

    const drag_row = new Adw.ActionRow({ title: row.title });
    drag_row.add_prefix(
      new Gtk.Image({
        icon_name: "list-drag-handle-symbolic",
        css_classes: "dim-label",
      }),
    );

    drag_widget.append(drag_row);
    drag_widget.drag_highlight_row(drag_row);

    const icon = Gtk.DragIcon.get_for_drag(drag);
    icon.child = drag_widget;

    drag.set_hotspot(_drag_x, _drag_y);
  });

  // Update row visuals during DnD operation
  drop_controller.connect("enter", (_x, _y) => {
    row.set_state_flags(Gtk.StateFlags.DROP_ACTIVE, false);
  });

  drop_controller.connect("leave", (_x, _y) => {
    row.set_state_flags(Gtk.StateFlags.NORMAL, true);
  });
}

// Drop Handling
drop_target.connect("drop", (drop, value, _x, _y) => {
  const value_row = value;
  const target_index = list.get_row_at_y(_y).get_index();
  const target_row = list.get_row_at_index(target_index);

  // If value or the target row is null, do not accept the drop
  if (!value || !target_row) {
    return false;
  }

  list.remove(value_row);
  list.insert(value_row, target_index);
  target_row.set_state_flags(Gtk.StateFlags.NORMAL, true);

  // If everything is successful, return true to accept the drop
  return true;
});
