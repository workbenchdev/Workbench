#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main() {
  var notifications_page = workbench.builder.get_object("page3") as Adw.ViewStackPage;
  var notification_list = workbench.builder.get_object("notification_list") as Gtk.ListBox;

  int notification_count = 5;

  notifications_page.badge_number = notification_count;

  for (int i = 0; i < notification_count; i++) {
    var notification_row = new Adw.ActionRow(){
      title = "Notification",
      selectable = false,
    };

    var button = new Gtk.Button(){
      halign = Gtk.Align.CENTER,
      valign = Gtk.Align.CENTER,
      margin_top = 10,
      margin_bottom = 10,
      icon_name = "check-plain-symbolic"
    };

    button.clicked.connect( () => {
      notifications_page.badge_number = --notification_count;
      notification_list.remove(notification_row);

      if (notifications_page.badge_number == 0)
        notifications_page.needs_attention = false;
    });

    notification_row.add_suffix(button);

    notification_list.append(notification_row);
  }
}
