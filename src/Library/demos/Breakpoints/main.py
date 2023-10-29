import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench

breakpoint: Adw.Breakpoint = workbench.builder.get_object("breakpoint")

breakpoint.connect("apply", lambda _widget: print("Breakpoint Applied"))
breakpoint.connect("unapply", lambda _widget: print("Breakpoint Unapplied"))
