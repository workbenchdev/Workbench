#!/usr/bin/env python
"""
This is the previewer for Python demos. It connects via DBus back to
Workbench and loads demos, providing them with a "workbench" module for
the Workbench API.
"""
from __future__ import annotations

import importlib.util
import os
import sys
from types import ModuleType
from typing import cast

import gi

from gdbus_ext import DBusTemplate

gi.require_version("Gdk", "4.0")
gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
gi.require_version("Graphene", "1.0")
gi.require_version("Gsk", "4.0")
gi.require_version("GtkSource", "5")
gi.require_version("Workbench", "0")

from gi.repository import GLib, Gdk, Gtk, Adw, Graphene, Gio, GtkSource, Workbench
from gi.repository.Gio import DBusConnection, DBusConnectionFlags

# Make sure all libraries are properly initialized
Gtk.init()
Adw.init()
GtkSource.init()

resource = Gio.Resource.load(
    f'/app/share/{os.environ["FLATPAK_ID"]}/re.sonny.Workbench.libworkbench.gresource'
)
Gio.resources_register(resource)

# Table of Contents
# =================
#
# 1. DBus object for Workbench communication
# 2. Python loader to load modules by URI
# 3. API for demos
# 4. main entrypoint


# 1. DBus object for Workbench communication
# ------------------------------------------


@DBusTemplate(filename=sys.argv[1])
class Previewer:
    window: Gtk.Window | None
    builder: Gtk.Builder | None
    target: Gtk.Widget | None
    css: Gtk.CssProvider | None
    uri = str | None
    style_manager: Adw.StyleManager

    def __init__(self):
        self.style_manager = Adw.StyleManager.get_default()
        self.css = None
        self.window = None
        self.builder = None
        self.target = None
        self.uri = None

    @DBusTemplate.Method()
    def update_ui(self, content: str, target_id: str, original_id: str = ""):
        self.builder = Gtk.Builder.new_from_string(content, len(content))
        target = self.builder.get_object(target_id)
        if target is None:
            print(
                f"Widget with target_id='{target_id}' could not be found.",
                file=sys.stderr,
            )
            return

        self.target = cast(Gtk.Widget, target)

        if original_id != "":
            self.builder.expose_object(original_id, target)

        # Not a Root/Window
        if not isinstance(self.target, Gtk.Root):
            self.ensure_window()
            self.window.set_content(self.target)
            return

        # Set target as window directly
        if self.window is None or self.window.__class__ != self.target.__class__:
            self.set_window(cast(Gtk.Window, self.target))
            return

        if isinstance(self.target, Adw.Window) or isinstance(
            self.target, Adw.ApplicationWindow
        ):
            child = self.target.get_content()
            self.target.set_content(None)
            # self.window is also either Adw.Window or Adw.ApplicationWindow.
            self.window.set_content(child)  # type: ignore
        elif isinstance(self.target, Gtk.Window):
            child = self.target.get_child()
            self.target.set_child(None)
            self.window.set_child(child)

        # Toplevel windows returned by these functions will stay around
        # until the user explicitly destroys them with gtk_window_destroy().
        # https://docs.gtk.org/gtk4/class.Builder.html
        if isinstance(self.target, Gtk.Window):
            self.target.destroy()

    @DBusTemplate.Method()
    def update_css(self, content: str):
        if self.css is not None:
            Gtk.StyleContext.remove_provider_for_display(
                Gdk.Display.get_default(), self.css
            )
        self.css = Gtk.CssProvider()
        self.css.connect("parsing-error", self.on_css_parsing_error)
        self.css.load_from_data(content, len(content))
        Gtk.StyleContext.add_provider_for_display(
            Gdk.Display.get_default(), self.css, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
        )

    @DBusTemplate.Method()
    def run(self, filename: str, uri: str):
        # TODO:
        #  Once https://peps.python.org/pep-0554/ is part of Python's stdlib (and that release is part of a
        #  GNOME Flatpak Platform), we should use subintepreters to sandbox the demos.
        #  This will also allow us to destroy the interpreter and thus (hopefully) properly unload the module.
        self.uri = uri

        module_name = "__workbench__module__"
        if module_name in sys.modules:
            # this will NOT unload the previous module, unless it can be GC.
            del sys.modules[module_name]
        spec = importlib.util.spec_from_file_location(
            module_name, os.path.join(filename, "main.py")
        )
        assert spec is not None
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)

    @DBusTemplate.Method()
    def close_window(self):
        if self.window is not None:
            self.window.close()

    @DBusTemplate.Method()
    def open_window(self, width: int, height: int):
        self.window.set_default_size(width, height)
        self.window.present()
        self.window_open(True)

    @DBusTemplate.Method()
    def screenshot(self, path: str) -> bool:
        paintable = Gtk.WidgetPaintable(widget=self.target)
        width = self.target.get_allocated_width()
        height = self.target.get_allocated_height()
        snapshot = Gtk.Snapshot()
        paintable.snapshot(snapshot, width, height)
        node = snapshot.to_node()
        if node is None:
            print(f"Could not get node snapshot, width: {width}, height: {height}")
            return False
        renderer = self.target.get_native().get_renderer()
        # For some unholy reason PyGObject has no high level constructor for Graphene types.
        rect = Graphene.rect_alloc()
        rect.origin = Graphene.Point.zero()
        size = Graphene.Size.alloc()
        size.width = float(width)
        size.height = float(height)
        rect.size = size
        texture = renderer.render_texture(node, rect)
        texture.save_to_png(path)
        return True

    @DBusTemplate.Method()
    def enable_inspector(self, enabled: bool):
        Gtk.Window.set_interactive_debugging(enabled)

    @DBusTemplate.Signal()
    def window_open(self, open: bool):
        ...

    @DBusTemplate.Signal()
    def css_parser_error(
        self,
        message: str,
        start_line: int,
        start_char: int,
        end_line: int,
        end_char: int,
    ):
        ...

    @DBusTemplate.Property()
    def color_scheme(self) -> int:
        return int(self.style_manager.get_color_scheme())

    @color_scheme.setter
    def color_scheme(self, value: int):
        self.style_manager.set_color_scheme(Adw.ColorScheme(value))

    def ensure_window(self):
        if self.window is not None:
            return
        new_window = Workbench.PreviewWindow()
        self.set_window(new_window)

    def set_window(self, the_window: Gtk.Window):
        if self.window is not None:
            self.window.destroy()
        self.window = the_window
        self.window.connect("close-request", self.on_window_closed)

    def on_window_closed(self, *args):
        self.window_open(False)
        self.window = None
        return False

    def on_css_parsing_error(self, _css, section: Gtk.CssSection, error: GLib.Error):
        start = section.get_start_location()
        end = section.get_end_location()
        self.css_parser_error(
            error.message, start.lines, start.line_chars, end.lines, end.line_chars
        )

    def resolve(self, path: str):
        return Gio.File.new_for_uri(self.uri).resolve_relative_path(path).get_uri()


# 3. API for demos
# ----------------


class WorkbenchModule(ModuleType):
    def __init__(self, previewer: Previewer):
        super().__init__(
            "workbench",
            """The workbench API. Use `window`, `builder` and `resolve` to interact with Workbench.""",
        )
        self._previewer = previewer

    def __getattr__(self, name):
        # Getting `window` or `builder` will transparently forward to calls
        # `window`/`builder` attributes of the previewer.

        # We do this to make the API in the demos a bit simpler. Just using a normal module's dict and
        # setting window/builder to the fields in previewer may later lead to problems
        # when the values for those are replaced on the previewer. However, if we switch to subinterpreters,
        # we can just generate this module in Previewer.run directly, then we can just
        # put the window, builder and resolve reference in a normal module dict directly.
        if name == "window":
            return self._previewer.window
        if name == "builder":
            return self._previewer.builder
        if name == "resolve":
            return self._previewer.resolve
        raise KeyError


# This module only exposes no attributes. This is to make sure demos
# don't get weird ideas of trying to interact with the previewer.
__all__ = []


# 3. main entrypoint
# ------------------

if __name__ == "__main__":
    loop = GLib.MainLoop()

    connection = DBusConnection.new_for_address_sync(
        sys.argv[2], DBusConnectionFlags.AUTHENTICATION_CLIENT
    )

    previewer = Previewer()

    # Add a workbench module as API to the global modules.
    # We will not need to do this anymore when switching to subinterpreters.
    sys.modules["workbench"] = WorkbenchModule(previewer)

    DBusTemplate.register_object(
        connection,
        "re.sonny.Workbench.previewer_module",
        "/re/sonny/workbench/previewer_module",
        previewer,
    )

    connection.set_exit_on_close(True)
    loop.run()
