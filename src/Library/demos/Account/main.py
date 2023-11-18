import gi

gi.require_version("Xdp", "1.0")
gi.require_version("XdpGtk4", "1.0")
from gi.repository import Gdk, Gio, Xdp, XdpGtk4
import workbench

portal = Xdp.Portal()
parent = XdpGtk4.parent_new_gtk(workbench.window)

revealer = workbench.builder.get_object("revealer")
button = workbench.builder.get_object("button")
avatar = workbench.builder.get_object("avatar")
entry = workbench.builder.get_object("entry")
username = workbench.builder.get_object("username")
display = workbench.builder.get_object("name")


def on_information_recieved(_portal, result):
    result = portal.get_user_information_finish(result)

    """
    result is a GVariant dictionary containing the following fields
    id (s): the user ID
    name (s): the users real name
    image (s): the uri of an image file for the users avatar picture
    """

    user_info = result
    id = user_info["id"]
    name = user_info["name"]
    uri = user_info["image"]
    file = Gio.File.new_for_uri(uri)
    texture = Gdk.Texture.new_from_file(file)

    username.set_label(id)
    display.set_label(name)
    avatar.set_custom_image(texture)
    revealer.set_reveal_child(True)

    entry.set_text("")
    print("Information retrieved")


def on_clicked(_button):
    reason = entry.get_text()
    portal.get_user_information(
        parent, reason, Xdp.UserInformationFlags.NONE, None, on_information_recieved
    )


button.connect("clicked", on_clicked)
