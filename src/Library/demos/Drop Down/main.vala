#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1 --pkg gio-2.0

using Gtk;
using GLib;

// Define our class for our custom model
public class KeyValuePair : Object {
  public string key { get; set; default = ""; }
  public string value { get; set; default = ""; }

  public KeyValuePair(string key, string value) {
    this.key = key;
    this.value = value;
  }
}

public void main() {

  Gtk.DropDown drop_down = workbench.builder.get_object("drop_down") as Gtk.DropDown;
  Gtk.DropDown advanced_drop_down = workbench.builder.get_object("advanced_drop_down") as Gtk.DropDown;

  drop_down.notify["selected"].connect(() => {
    var selected_index = drop_down.get_selected();
    if (selected_index != -1) {
      var model = drop_down.get_model() as Gtk.StringList;
      var selected_item = model.get_string(selected_index);
      print("%s\n", selected_item);
    }
  });

  // Create the model
  var model = new GLib.ListStore(typeof(KeyValuePair));

  model.append(new KeyValuePair("win7", "Windows 7"));
  model.append(new KeyValuePair("win10", "Windows 10"));
  model.append(new KeyValuePair("win11", "Windows 11"));
  model.append(new KeyValuePair("ubuntu", "Ubuntu"));
  model.append(new KeyValuePair("fedora", "Fedora"));
  model.append(new KeyValuePair("debian", "Debian"));
  model.append(new KeyValuePair("mint", "Mint"));
  model.append(new KeyValuePair("arch", "Arch Linux"));
  model.append(new KeyValuePair("popos", "Pop!_OS"));
  model.append(new KeyValuePair("opensuse", "OpenSUSE"));
  model.append(new KeyValuePair("gentoo", "Gentoo"));
  model.append(new KeyValuePair("freebsd", "FreeBSD"));
  model.append(new KeyValuePair("macos", "macOS"));
  model.append(new KeyValuePair("ios", "iOS"));
  model.append(new KeyValuePair("android", "Android"));

  // Create expression for displaying the value in the advanced drop-down
  var expression = new Gtk.PropertyExpression(typeof(KeyValuePair), null, "value");

  // Set the model and expression for the advanced drop-down
  advanced_drop_down.set_expression(expression);
  advanced_drop_down.set_model(model);

  // Handle selected item change in the advanced drop-down
  advanced_drop_down.notify["selected-item"].connect(() => {
    var selected_item = advanced_drop_down.get_selected_item() as KeyValuePair;
    if (selected_item != null) {
      print("%s\n", selected_item.key);
    }
  });
}
