import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Pango from "gi://Pango";

const label = workbench.builder.get_object("label");

const text_group = new Gio.SimpleActionGroup();
label.insert_action_group("text", text_group);

const text_state = { italic: false, bold: false, foreground: "green" };

const italic_action = new Gio.SimpleAction({
  name: "italic",
  state: GLib.Variant.new_boolean(false),
});

italic_action.connect("notify::state", (action) => {
  if (action.state.unpack()) text_state["italic"] = true;
  else text_state["italic"] = false;
  label.attributes = stateToAttr(text_state);
});
text_group.add_action(italic_action);

const bold_action = new Gio.SimpleAction({
  name: "bold",
  state: GLib.Variant.new_boolean(false),
});

bold_action.connect("notify::state", (action) => {
  if (action.state.unpack()) text_state["bold"] = true;
  else text_state["bold"] = false;
  label.attributes = stateToAttr(text_state);
});
text_group.add_action(bold_action);

const color_action = new Gio.SimpleAction({
  name: "color",
  state: GLib.Variant.new_string("green"),
  parameter_type: new GLib.VariantType("s"),
});

color_action.connect("notify::state", (action) => {
  text_state["foreground"] = action.state.unpack();
  label.attributes = stateToAttr(text_state);
});

text_group.add_action(color_action);

// Helper function to create a PangoAttrList from text_state
function stateToAttr(state) {
  const attrs = [];
  if (state["bold"]) attrs.push("0 -1 weight bold");
  if (state["italic"]) attrs.push("0 -1 style italic");
  attrs.push(`0 -1 foreground ${state["foreground"]}`);
  const attr_string = attrs.join(", ");
  return Pango.attr_list_from_string(attr_string);
}
