import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")

from gi.repository import Gtk, Adw

import workbench

notifications_page: Adw.ViewStackPage = workbench.builder.get_object("page3")
notification_list: Gtk.ListBox = workbench.builder.get_object("notification_list")

notifications_count = 5
# object.props.<property_name> can be used also instead of get and set functions
notifications_page.props.badge_number = notifications_count


def on_button_clicked(button: Gtk.Button, *_):
    notifications_page.props.badge_number -= 1
    notification_list.remove(button.get_ancestor(Adw.ActionRow))
    # get_ancestor method gets the most recent parent of the type provided

    if notifications_page.props.badge_number == 0:
        notifications_page.props.needs_attention = False


for i in range(notifications_count):
    notification_row = Adw.ActionRow(title="Notification", selectable=False)

    button = Gtk.Button(
        halign=Gtk.Align.CENTER,
        valign=Gtk.Align.CENTER,
        margin_top=10,
        margin_bottom=10,
        icon_name="check-plain-symbolic",
    )

    button.connect("clicked", on_button_clicked)

    notification_row.add_suffix(button)
    notification_list.append(notification_row)
