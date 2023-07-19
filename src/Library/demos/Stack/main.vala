#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1 --pkg gio-2.0

using Gtk;
using Adw;
using Gdk;
using GLib;

void main() {
  var root_box = workbench.builder.get_object("root_box") as Box;
  var stack = workbench.builder.get_object("stack") as Stack;
  var navigation_row = workbench.builder.get_object("navigation_row") as ComboRow;
  var transition_row = workbench.builder.get_object("transition_row") as ComboRow;
  var interpolate_switch = workbench.builder.get_object("interpolate_switch") as Switch;
  var transition_spin_button = workbench.builder.get_object("transition_spin_button") as SpinButton;
  Separator separator = null;

  Gtk.StackSwitcher? stackSwitcher = null;
  Gtk.StackSidebar? stackSidebar = null;

  if (navigation_row.selected == 0) {
    stackSwitcher = new Gtk.StackSwitcher();
    stackSwitcher.stack = stack;
    root_box.prepend(stackSwitcher);
  } else {
    stackSidebar = new Gtk.StackSidebar();
    stackSidebar.stack = stack;
    root_box.prepend(stackSidebar);
  }

  navigation_row.notify["selected"].connect(() => {
    if (navigation_row.get_selected() == 0) {
      if (stackSidebar != null) {
        root_box.remove(stackSidebar);
        root_box.remove(separator);
      }
      stackSwitcher = new Gtk.StackSwitcher();
      stackSwitcher.stack = stack;
      root_box.prepend(stackSwitcher);
      root_box.set_orientation(Gtk.Orientation.VERTICAL);
    } else {
      if (stackSwitcher != null) {
        root_box.remove(stackSwitcher);
      }
      separator = new Separator(Gtk.Orientation.HORIZONTAL);
      stackSidebar = new StackSidebar();
      stackSidebar.stack = stack;
      root_box.prepend(separator);
      root_box.prepend(stackSidebar);
      root_box.set_orientation(Gtk.Orientation.HORIZONTAL);
    }
  });

  stack.set_transition_type(transition_row.get_selected());

  transition_row.notify["selected"].connect(() => {
    stack.set_transition_type(transition_row.get_selected());
  });
}
