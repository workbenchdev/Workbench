import gi

gi.require_version("Xdp", "1.0")
gi.require_version("XdpGtk4", "1.0")
from gi.repository import Gio, Xdp, XdpGtk4
import workbench

portal = Xdp.Portal()
parent = XdpGtk4.parent_new_gtk(workbench.window)

button = workbench.builder.get_object("button")
entry = workbench.builder.get_object("entry")


def on_compose_opened(portal, result):
    success = portal.compose_email_finish(result)

    if success:
        print("Success")
    else:
        print("Failure, verify that you have an email application.")


def on_clicked(_button):
    email_address = entry.get_text()

    portal.compose_email(
        parent,
        [email_address],  # addresses
        None,  # cc
        None,  # bcc
        "Email from Workbench",  # subject
        "Hello World!",  # body
        None,  # attachments
        Xdp.EmailFlags.NONE,  # flags
        None,  # cancellable
        on_compose_opened,  # callback
    )


button.connect("clicked", on_clicked)
