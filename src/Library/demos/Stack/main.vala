#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1 --pkg gio-2.0

Gtk.Box root_box;
Gtk.Stack stack;
Adw.ComboRow navigation_row;
Adw.ComboRow transition_row;
Gtk.StackSwitcher? stack_switcher = null;
Gtk.StackSidebar? stack_sidebar = null;
Gtk.Separator? separator = null;

public void main() {
  root_box = (Gtk.Box) workbench.builder.get_object("root_box");
  stack = (Gtk.Stack) workbench.builder.get_object("stack");
  navigation_row = (Adw.ComboRow) workbench.builder.get_object("navigation_row");
  transition_row = (Adw.ComboRow) workbench.builder.get_object("transition_row");

  on_navigation_row_changed();

  navigation_row.notify["selected"].connect(on_navigation_row_changed);
}

public void on_navigation_row_changed() {
  var selected_item = navigation_row.get_selected_item();

  // Ensure selected_item is not null
  if (selected_item == null) {
    return;
  }

  // Cast selected_item to Gtk.StringObject and get the string
  var item_string = ((Gtk.StringObject) selected_item).get_string();

  if (item_string == "Switcher") {
    if (stack_sidebar != null) {
      root_box.remove(stack_sidebar);
      root_box.remove(separator);
    }

    stack_switcher = new Gtk.StackSwitcher();
    stack_switcher.stack = stack;
    root_box.prepend(stack_switcher);
    root_box.set_orientation(Gtk.Orientation.VERTICAL);
  } else if (item_string == "Sidebar") {
    if (stack_switcher != null) {
      root_box.remove(stack_switcher);
    }

    separator = new Gtk.Separator(Gtk.Orientation.HORIZONTAL);
    stack_sidebar = new Gtk.StackSidebar();
    stack_sidebar.stack = stack;
    root_box.prepend(separator);
    root_box.prepend(stack_sidebar);
    root_box.set_orientation(Gtk.Orientation.HORIZONTAL);
  }
}

