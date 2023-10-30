from gi.repository import Gio, GLib, Pango
import workbench

label = workbench.builder.get_object("label")

text_group = Gio.SimpleActionGroup()
label.insert_action_group("text", text_group)

text_state = {"italic": False, "bold": False, "foreground": "green"}


# Helper function to create a PangoAttrList from text_state
def state_to_attr(state):
    attrs = []
    if state["bold"]:
        attrs.append("0 -1 weight bold")
    if state["italic"]:
        attrs.append("0 -1 style italic")
    attrs.append(f"0 -1 foreground {state['foreground']}")
    attr_string = ", ".join(attrs)
    return Pango.attr_list_from_string(attr_string)


def on_state_changed(action, attribute):
    text_state[attribute] = action.get_state().unpack()
    label.set_attributes(state_to_attr(text_state))


italic_action = Gio.SimpleAction(
    name="italic",
    state=GLib.Variant.new_boolean(False),
)

italic_action.connect(
    "notify::state", lambda action, state: on_state_changed(action, "italic")
)
text_group.add_action(italic_action)


bold_action = Gio.SimpleAction(
    name="bold",
    state=GLib.Variant.new_boolean(False),
)

bold_action.connect(
    "notify::state", lambda action, state: on_state_changed(action, "bold")
)
text_group.add_action(bold_action)


color_action = Gio.SimpleAction(
    name="color",
    state=GLib.Variant.new_string("green"),
    parameter_type=GLib.VariantType("s"),
)

color_action.connect(
    "notify::state", lambda action, state: on_state_changed(action, "foreground")
)
text_group.add_action(color_action)
