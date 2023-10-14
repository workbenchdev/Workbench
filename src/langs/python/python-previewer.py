#!/usr/bin/env python
# Some of this code is based on the mpris interface implementation of GNOME Music,
# see: https://gitlab.gnome.org/GNOME/gnome-music/-/blob/e15e8c43/gnomemusic/mpris.py
"""
This is the previewer for Python demos. It connects via DBus back to
Workbench and loads demos.

This module also provides itself to demos via importing "workbench"
with the fields defined in __all__.
"""
import re
import sys
from abc import ABC
from typing import ClassVar, Optional

import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")

from gi.repository import GLib, Gio, Gtk, Adw
from gi.repository.Gio import DBusConnection, DBusConnectionFlags

DBUS_INTERFACE_XML = None  # set in main code at the end.


# Table of Contents
# =================
#
# 0. DBus boilerplate
# 1. DBus object for Workbench communication
# 2. API for demos
# 3. main entrypoint


# 0. DBus boilerplate
# -------------------

# Source: https://gitlab.gnome.org/GNOME/gnome-music/-/blob/e15e8c43/gnomemusic/mpris.py
# Slightly modified on reading the XML string and how the connection is handled.
class DBusInterface(ABC):
    def __init__(self, connection: DBusConnection, interface_xml: str, name: str, path: str):
        self._path = path
        self._signals = None
        self._con = connection

        Gio.bus_own_name_on_connection(
            self._con, name, Gio.BusNameOwnerFlags.NONE, None, None)

        method_outargs = {}
        method_inargs = {}
        signals = {}
        for interface in Gio.DBusNodeInfo.new_for_xml(interface_xml).interfaces:

            for method in interface.methods:
                method_outargs[method.name] = "(" + "".join(
                    [arg.signature for arg in method.out_args]) + ")"
                method_inargs[method.name] = tuple(
                    arg.signature for arg in method.in_args)

            for signal in interface.signals:
                args = {arg.name: arg.signature for arg in signal.args}
                signals[signal.name] = {
                    'interface': interface.name, 'args': args}

            self._con.register_object(
                object_path=self._path, interface_info=interface,
                method_call_closure=self._on_method_call)

        self._method_inargs = method_inargs
        self._method_outargs = method_outargs
        self._signals = signals

    def _on_method_call(
        self, connection, sender, object_path, interface_name, method_name,
            parameters, invocation):
        """GObject.Closure to handle incoming method calls.

        :param Gio.DBusConnection connection: D-Bus connection
        :param str sender: bus name that invoked the method
        :param srt object_path: object path the method was invoked on
        :param str interface_name: name of the D-Bus interface
        :param str method_name: name of the method that was invoked
        :param GLib.Variant parameters: parameters of the method invocation
        :param Gio.DBusMethodInvocation invocation: invocation
        """
        args = list(parameters.unpack())
        for i, sig in enumerate(self._method_inargs[method_name]):
            if sig == 'h':
                msg = invocation.get_message()
                fd_list = msg.get_unix_fd_list()
                args[i] = fd_list.get(args[i])

        method_snake_name = DBusInterface.camelcase_to_snake_case(method_name)
        try:
            result = getattr(self, method_snake_name)(*args)
        except ValueError as e:
            invocation.return_dbus_error(interface_name, str(e))
            return

        # out_args is at least (signature1). We therefore always wrap the
        # result as a tuple.
        # Reference:
        # https://bugzilla.gnome.org/show_bug.cgi?id=765603
        result = (result,)

        out_args = self._method_outargs[method_name]
        if out_args != '()':
            variant = GLib.Variant(out_args, result)
            invocation.return_value(variant)
        else:
            invocation.return_value(None)

    def _dbus_emit_signal(self, signal_name, values):
        if self._signals is None:
            return

        signal = self._signals[signal_name]
        parameters = []
        for arg_name, arg_signature in signal['args'].items():
            value = values[arg_name]
            parameters.append(GLib.Variant(arg_signature, value))

        variant = GLib.Variant.new_tuple(*parameters)
        self._con.emit_signal(
            None, self._path, signal['interface'], signal_name, variant)

    @staticmethod
    def camelcase_to_snake_case(name):
        s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
        return '_' + re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()


# 1. DBus object for Workbench communication
# ------------------------------------------

class Previewer(DBusInterface):
    INSTANCE: ClassVar[Optional["Previewer"]] = None

    active_window: None  # todo
    active_builder: None  # todo

    def __new__(cls, *args, **kwargs):
        # This is a singleton.
        if cls.INSTANCE is not None:
            raise AttributeError("multiple Previewer instances can not be created")
        cls.INSTANCE = super().__new__(cls)
        return cls.INSTANCE

    def __init__(self, conn):
        name = "re.sonny.Workbench.python_previewer"
        path = '/re/sonny/workbench/python_previewer'
        super().__init__(conn, DBUS_INTERFACE_XML, name, path)

    def _update_ui(self, content: str, target_id: str, original_id: str):
        raise NotImplementedError()

    def _update_css(self, content: str):
        raise NotImplementedError()

    def _run(self, uri: str):
        raise NotImplementedError()

    def _close_window(self):
        raise NotImplementedError()

    def _open_window(self, width: int, height: int):
        raise NotImplementedError()

    def _screenshot(self, path: int) -> bool:
        raise NotImplementedError()

    def _enable_inspector(self, enabled: bool):
        raise NotImplementedError()

    def _set_color_scheme(self, value: int):
        raise NotImplementedError()

    def _indow_open(self, open: bool):
        raise NotImplementedError()

    def _css_parser_error(self, message: str, start_line: int, start_char: int, end_line: int, end_char: int):
        raise NotImplementedError()


# 2. API for demos
# ----------------

class MainProxyDescriptor:
    """
    A data descriptor (https://docs.python.org/3/howto/descriptor.html)
    that proxies to the given function via call.
    """

    def __init__(self, function):
        self.function = function

    def __get__(self, instance, owner):
        return self.function()

    def __set__(self, instance, value):
        raise AttributeError("setting this value is not supported")


# Getting `window` or `builder` will transparently forward to calls
# `active_window`/`active_builder` attributes of the previewer.
# We do this to make the API in the demos a bit simpler.
window = MainProxyDescriptor(lambda: Previewer.INSTANCE.active_window)
builder = MainProxyDescriptor(lambda: Previewer.INSTANCE.active_builder)

# This module only exposes these two attributes.
# The module exposes itself to demos by registering as "workbench"
# in sys.modules.
__all__ = ["window", "builder"]


# 3. main entrypoint
# ------------------

if __name__ == "__main__":
    # Add this module as "workbench" to the global imports.
    sys.modules["workbench"] = sys.modules[__name__]

    # Load the interface XML
    with open(sys.argv[1], "r") as f:
        DBUS_INTERFACE_XML = f.read()

    loop = GLib.MainLoop()

    connection = DBusConnection.new_for_address_sync(
        sys.argv[2],
        DBusConnectionFlags.AUTHENTICATION_CLIENT
    )

    # constructing this binds it to the bus.
    obj = Previewer(connection)

    connection.set_exit_on_close(True)
    loop.run()
