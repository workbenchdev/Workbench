import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

emoji_chooser: Gtk.EmojiChooser = workbench.builder.get_object("emoji_chooser")
button: Gtk.Button = workbench.builder.get_object("button")

emoji_chooser.connect("emoji-picked", lambda _chooser, emoji: button.set_label(emoji))
