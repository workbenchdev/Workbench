import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const list = workbench.builder.get_object("list");
const drop_target = Gtk.DropTarget.new(Gtk.ListBoxRow, Gdk.DragAction.MOVE);

list.add_controller(drop_target);

// Iterate over ListBox children
for (const row of list) {
  let drag_x;
  let drag_y;

  const drop_controller = new Gtk.DropControllerMotion();

  const drag_source = new Gtk.DragSource({
    actions: Gdk.DragAction.MOVE,
  });

  row.add_controller(drag_source);
  row.add_controller(drop_controller);

  // Drag handling
  drag_source.connect("prepare", (_source, x, y) => {
    drag_x = x;
    drag_y = y;

    const value = new GObject.Value();
    value.init(Gtk.ListBoxRow);
    value.set_object(row);

    return Gdk.ContentProvider.new_for_value(value);
  });

  drag_source.connect("drag-begin", (_source, drag) => {
    const allocation = row.get_allocation();
    const drag_widget = new Gtk.ListBox();

    drag_widget.set_size_request(allocation.width, allocation.height);
    drag_widget.add_css_class("boxed-list");

    const drag_row = new Adw.ActionRow({ title: row.title });
    drag_row.add_prefix(
      new Gtk.Image({
        icon_name: "list-drag-handle-symbolic",
        css_classes: ["dim-label"],
      }),
    );

    drag_widget.append(drag_row);
    drag_widget.drag_highlight_row(drag_row);

    const icon = Gtk.DragIcon.get_for_drag(drag);
    icon.child = drag_widget;

    drag.set_hotspot(drag_x, drag_y);
  });

  // Update row visuals during DnD operation
  drop_controller.connect("enter", () => {
    list.drag_highlight_row(row);
  });

  drop_controller.connect("leave", () => {
    list.drag_unhighlight_row();
  });
}

// Drop Handling
drop_target.connect("drop", (_drop, value, _x, y) => {
  const target_row = list.get_row_at_y(y);
  const target_index = target_row.get_index();

  // If value or the target row is null, do not accept the drop
  if (!value || !target_row) {
    return false;
  }

  list.remove(value);
  list.insert(value, target_index);
  target_row.set_state_flags(Gtk.StateFlags.NORMAL, true);

  // If everything is successful, return true to accept the drop
  return true;
});
