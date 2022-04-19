import Adw from "gi://Adw";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

const overlay = workbench.builder.get_object("overlay");

const button_simple = workbench.builder.get_object("button_simple");
function simple() {
  const toast = new Adw.Toast({
    title: "Toasts are delicious!",
    timeout: 1,
  });
  toast.connect("dismissed", () => {
    button_simple.sensitive = true;
  });
  overlay.add_toast(toast);
  button_simple.sensitive = false;
}
button_simple.connect("clicked", simple);

simple();

function advanced() {
  const message_id = "42";
  const toast = new Adw.Toast({
    title: "Message sent",
    button_label: "Undo",
    action_name: "win.undo",
    action_target: GLib.Variant.new_string(message_id),
    priority: Adw.ToastPriority.HIGH,
  });
  overlay.add_toast(toast);
}

workbench.builder.get_object("button_advanced").connect("clicked", advanced);

const action_console = new Gio.SimpleAction({
  name: "undo",
  parameter_type: new GLib.VariantType("s"),
});
action_console.connect("activate", (self, target) => {
  const value = target.unpack();
  console.log("undo " + value);
});
workbench.window.add_action(action_console);
