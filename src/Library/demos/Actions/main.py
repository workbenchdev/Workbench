import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw, GLib, Gio
import workbench

demo: Adw.StatusPage = workbench.builder.get_object("demo")

demo_group = Gio.SimpleActionGroup()
demo.insert_action_group("demo", demo_group)

# Action with no state or parameters
simple_action = Gio.SimpleAction(
  name = "simple"
)

simple_action.connect("activate",
  lambda action, _ : print(f"{action.get_name()} action activated")
)

demo_group.add_action(simple_action)

# Action with parameter
bookmarks_action = Gio.SimpleAction(
  name = "open-bookmarks",
  parameter_type = GLib.VariantType("s"),
)

bookmarks_action.connect("activate",
  lambda action, parameter : print(f"{action.get_name()} activated with {parameter.unpack()}")
)

demo_group.add_action(bookmarks_action)

# Action with state
toggle_action = Gio.SimpleAction(
  name = "toggle",
  # Boolean actions dont need parameters for activation
  state = GLib.Variant.new_boolean(False),
)

toggle_action.connect("notify::state",
  lambda action, _ : print(f"{action.get_name()} action set to {action.get_state().unpack()}")
)

demo_group.add_action(toggle_action)

# Action with state and parameter
scale_action = Gio.SimpleAction(
  name = "scale",
  state = GLib.Variant.new_string("100%"),
  parameter_type = GLib.VariantType("s"),
)

scale_action.connect("notify::state",
  lambda action, _ : print(f"{action.get_name()} action set to {action.get_state().unpack()}")
)

demo_group.add_action(scale_action)

text : Gtk.Label = workbench.builder.get_object("text")

alignment_action = Gio.PropertyAction(
  name = "text-align",
  object = text,
  property_name = "halign",
)

demo_group.add_action(alignment_action)
