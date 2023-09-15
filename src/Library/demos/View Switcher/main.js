import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const notifications_page = workbench.builder.get_object("page3");
const notification_list = workbench.builder.get_object("notification_list");

let notification_count = 5;
notifications_page.badge_number = notification_count;

for (let i = 0; i < notification_count; i++) {
  const notification_row = new Adw.ActionRow({
    title: "Notification",
    selectable: false,
  });

  const button = new Gtk.Button({
    halign: "center",
    valign: "center",
    margin_top: "10",
    margin_bottom: "10",
    icon_name: "check-plain-symbolic",
  });

  button.connect("clicked", () => {
    notifications_page.badge_number = --notification_count;
    notification_list.remove(notification_row);

    if (notifications_page.badge_number === 0) {
      notifications_page.needs_attention = false;
    }
  });

  notification_row.add_suffix(button);

  notification_list.append(notification_row);
}
