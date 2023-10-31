import gi

gi.require_version("Gtk", "4.0")
gi.require_version("GtkSource", "5")
from gi.repository import Gtk, GtkSource
import workbench

# Strictly speaking we don't _have_ to do this here since WorkBench does this for us.
# However, you _have_ to call this once during the startup in your application - e.g. in GApplication::startup
GtkSource.init()

# Get the language we want to use
language_manager = GtkSource.LanguageManager.get_default()
language = language_manager.get_language("js")

# Create the buffer - this holds the text that's used in the SourceView
buffer = GtkSource.Buffer.new_with_language(language)
buffer.set_text('console.log("Hello World!")', -1)

# Create the SourceView which displays the buffer's display
source_view = GtkSource.View(
    auto_indent=True, indent_width=4, buffer=buffer, show_line_numbers=True
)

# Add the SourceView to our ScrolledView so its displayed
scrolled_window: Gtk.ScrolledWindow = workbench.builder.get_object("scrolled_window")
scrolled_window.set_child(source_view)
