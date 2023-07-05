#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main() {
  var list = workbench.builder.get_object("list") as Gtk.ListBox;
  var drop_target = new Gtk.DropTarget(typeof(Adw.ActionRow), Gdk.DragAction.MOVE);

  list.add_controller(drop_target);

  for (int i = 0; list.get_row_at_index(i) != null; i++) {
    var row = list.get_row_at_index(i) as Adw.ActionRow;

    double drag_x = 0.0;
    double drag_y = 0.0;

    var drop_controller = new Gtk.DropControllerMotion();
    var drag_source = new Gtk.DragSource() { actions = Gdk.DragAction.MOVE };

    row.add_controller(drag_source);
    row.add_controller(drop_controller);

    // Drag handling
    drag_source.prepare.connect((x, y) => {
      drag_x = x;
      drag_y = y;

      Value value = Value(typeof(Adw.ActionRow));
      value.set_object(row);

      return new Gdk.ContentProvider.for_value(value);
    });

    drag_source.drag_begin.connect((drag) => {
      Gtk.Allocation allocation;
      row.get_allocation(out allocation);
      var drag_widget = new Gtk.ListBox();

      drag_widget.set_size_request(allocation.width, allocation.height);
      drag_widget.add_css_class("boxed-list");

      var drag_row = new Adw.ActionRow() {title = row.get_title()};

      drag_row.add_prefix (
        new Gtk.Image.from_icon_name("list-drag-handle-symbolic") {css_classes = {"dim-label"}}
      );

      drag_widget.append(drag_row);
      drag_widget.drag_highlight_row(drag_row);

      var icon = Gtk.DragIcon.get_for_drag(drag) as Gtk.DragIcon;
      icon.child = drag_widget;

      drag.set_hotspot((int)drag_x, (int)drag_y);
    });

    // Update row visuals during DnD operation
    drop_controller.enter.connect(() => list.drag_highlight_row(row));
    drop_controller.leave.connect(() => list.drag_unhighlight_row());
  }

  // Drop Handling
  drop_target.drop.connect((drop, value, x, y) => {
    var value_row = value.get_object() as Adw.ActionRow?;
    Gtk.ListBoxRow? target_row = list.get_row_at_y((int)y);
    // If value or the target row is null, do not accept the drop
    if (value_row == null || target_row == null) {
      return false;
    }

    int target_index = target_row.get_index();

    list.remove(value_row);
    list.insert(value_row, target_index);
    target_row.set_state_flags(Gtk.StateFlags.NORMAL, true);

    return true;
  });
}
