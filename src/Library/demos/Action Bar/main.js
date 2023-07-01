import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const action_bar = workbench.builder.get_object("action_bar");
const show_content = workbench.builder.get_object("show_content");

const center_widget = new Adw.EntryRow({
  title: _("This is the center widget"),
});

const prefix_widget = new Gtk.Button({
  icon_name: "check-round-outline-whole-symbolic",
});

const suffix_widget = new Gtk.Button({
  icon_name: "x-circular-symbolic",
});

const box = new Gtk.Box({
  orientation: Gtk.Orientation.VERTICAL,
  margin_top: 12,
  margin_bottom: 12,
});

box.append(center_widget);

const buttonsBox = new Gtk.Box({
  orientation: Gtk.Orientation.HORIZONTAL,
  spacing: 10,
  homogeneous: true,
});

buttonsBox.append(prefix_widget);
buttonsBox.append(suffix_widget);

box.append(buttonsBox);

action_bar.set_center_widget(box);

show_content.connect("clicked", () => {
  action_bar.revealed = true;
});

prefix_widget.connect("clicked", () => {
  console.log("This is the start widget");
});

suffix_widget.connect("clicked", () => {
  console.log("This is the end widget");
});
