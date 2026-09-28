import gi

gi.require_version("Gtk", "4.0")
gi.require_version("GtkSource", "5")
from gi.repository import GtkSource
import workbench

# Strictly speaking we don't _have_ to do this here since WorkBench does this for us.
# However, you _have_ to call this once during the startup in your application - e.g. in GApplication::startup
GtkSource.init()

buffer = workbench.builder.get_object("buffer")

# Set the language we want to use
language_manager = GtkSource.LanguageManager.get_default()
language = language_manager.get_language("js")
buffer.set_language(language)

# The buffer holds the text that's used in the SourceView
buffer.set_text('print "Hello World"', -1)
