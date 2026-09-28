import gi

gi.require_version("Gtk", "4.0")
gi.require_version("GtkSource", "5")
from gi.repository import Gtk, GtkSource, Spelling
import workbench

GtkSource.init()

buffer: GtkSource.Buffer = workbench.builder.get_object("buffer")
text_view: Gtk.TextView = workbench.builder.get_object("text_view")

# Spell checking setup
checker = Spelling.Checker.get_default()
checker.set_language("en_US")  # set to U.S English
adapter = Spelling.TextBufferAdapter.new(buffer, checker)
extra_menu = adapter.get_menu_model()

text_view.set_extra_menu(extra_menu)
text_view.insert_action_group("spelling", adapter)

adapter.set_enabled(True)
