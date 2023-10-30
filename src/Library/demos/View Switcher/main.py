import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench

notifications_page: Adw.ViewStackPage = workbench.builder.get_object("page3")
notification_list: Gtk.ListBox = workbench.builder.get_object("notification_list")

notification_count = 5
notifications_page.set_badge_number(notification_count)


def on_clicked(button):
    notifications_page.set_badge_number(notifications_page.get_badge_number() - 1)
    notification_list.remove(button.parent_row)

    if not notifications_page.get_badge_number():
        notifications_page.set_needs_attention(False)


for i in range(notification_count):
    notification_row = Adw.ActionRow(title="Notification", selectable=False)

    button = Gtk.Button(
        halign=Gtk.Align.CENTER,
        valign=Gtk.Align.CENTER,
        margin_top=10,
        margin_bottom=10,
        icon_name="check-plain-symbolic",
    )

    button.parent_row = notification_row
    button.connect("clicked", on_clicked)

    notification_row.add_suffix(button)

    notification_list.append(notification_row)
