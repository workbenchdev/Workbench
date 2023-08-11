#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private bool ctrl_pressed = false;

public void main () {
  // Gtk.Window hides Gtk.Widget's add_controller method, thus we need to access it as a Widget.
  Gtk.Widget window = workbench.window;

  var pic1 = (Gtk.Picture) workbench.builder.get_object ("pic1");
  var pic2 = (Gtk.Picture) workbench.builder.get_object ("pic2");

  pic1.file = File.new_for_uri (workbench.resolve ("image1.png"));
  pic2.file = File.new_for_uri (workbench.resolve ("image2.png"));

  var stack = (Gtk.Stack) workbench.builder.get_object ("stack");
  var primary_button = (Gtk.Button) workbench.builder.get_object ("primary_button");
  var middle_button = (Gtk.Button) workbench.builder.get_object ("middle_button");
  var secondary_button = (Gtk.Button) workbench.builder.get_object ("secondary_button");
  var ctrl_button = (Gtk.Button) workbench.builder.get_object ("ctrl_button");

  var key_controller = new Gtk.EventControllerKey ();
  window.add_controller (key_controller);

  key_controller.key_pressed.connect ((keyval, keycode, state) => {
    if (keyval == Gdk.Key.Control_L || keyval == Gdk.Key.Control_R) {
      ctrl_pressed = true;
    }
    return true;
  });

  key_controller.key_released.connect ((keyval, keycode, state) => {
    if (keyval == Gdk.Key.Control_L || keyval == Gdk.Key.Control_R) {
      ctrl_pressed = false;
    }
  });

  ctrl_button.clicked.connect (() => {
    if (ctrl_pressed) {
      ctrl_button.label = "Click to Deactivate";
      ctrl_button.add_css_class ("suggested-action");
    } else {
      ctrl_button.label = "Ctrl + Click to Activate";
      ctrl_button.remove_css_class ("suggested-action");
    }
  });

  var gesture_click = new Gtk.GestureClick () {
    button = 0
  };
  window.add_controller (gesture_click);

  gesture_click.pressed.connect ((gesture, n_press, x, y) => {
    switch (gesture.get_current_button ()) {
      case Gdk.BUTTON_PRIMARY:
        primary_button.add_css_class ("suggested-action");
        break;
      case Gdk.BUTTON_MIDDLE:
        middle_button.add_css_class ("suggested-action");
        break;
      case Gdk.BUTTON_SECONDARY:
        secondary_button.add_css_class ("suggested-action");
        break;
    }
  });

  gesture_click.released.connect ((gesture, n_press, x, y) => {
    switch (gesture.get_current_button ()) {
      case Gdk.BUTTON_PRIMARY:
        primary_button.remove_css_class ("suggested-action");
        break;
      case Gdk.BUTTON_MIDDLE:
        middle_button.remove_css_class ("suggested-action");
        break;
      case Gdk.BUTTON_SECONDARY:
        secondary_button.remove_css_class ("suggested-action");
        break;
    }
  });

  var gesture_swipe = new Gtk.GestureSwipe ();
  stack.add_controller (gesture_swipe);

  gesture_swipe.swipe.connect ((vel_x, vel_y) => {
    if (vel_x > 0) {
      stack.visible_child_name = "pic1";
    } else {
      stack.visible_child_name = "pic2";
    }
  });
}
