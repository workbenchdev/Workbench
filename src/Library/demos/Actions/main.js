import Gio from "gi://Gio";
import GLib from "gi://GLib";

const demo = workbench.builder.get_object("demo");

const demo_group = new Gio.SimpleActionGroup();
demo.insert_action_group("demo", demo_group);

// Action with no state or parameters
const simple_action = new Gio.SimpleAction({
  name: "simple",
});

simple_action.connect("activate", (action) => {
  console.log(`${action.name} action activated`);
});

demo_group.add_action(simple_action);

// Action with parameter
const bookmarks_action = new Gio.SimpleAction({
  name: "open-bookmarks",
  parameter_type: new GLib.VariantType("s"),
});

bookmarks_action.connect("activate", (action, parameter) => {
  console.log(`${action.name} activated with ${parameter.unpack()}`);
});

demo_group.add_action(bookmarks_action);

// Action with state
const toggle_action = new Gio.SimpleAction({
  name: "toggle",
  // Boolean actions dont need parameters for activation
  state: GLib.Variant.new_boolean(false),
});

toggle_action.connect("notify::state", (action) => {
  console.log(`${action.name} action set to ${action.state.unpack()}`);
});

demo_group.add_action(toggle_action);

// Action with state and parameter
const scale_action = new Gio.SimpleAction({
  name: "scale",
  state: GLib.Variant.new_string("100%"),
  parameter_type: new GLib.VariantType("s"),
});

scale_action.connect("notify::state", (action) => {
  console.log(`${action.name} action set to ${action.state.unpack()}`);
});

demo_group.add_action(scale_action);

const text = workbench.builder.get_object("text");

const alignment_action = new Gio.PropertyAction({
  name: "text-align",
  object: text,
  property_name: "halign",
});

demo_group.add_action(alignment_action);
