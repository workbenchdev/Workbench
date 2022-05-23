public void main () {
  var application = workbench.window.application as GLib.Application;

  var notification = new Notification ("Lunch is ready");
  notification.set_body (
    "Today we have pancakes and salad, and fruit and cake for dessert"
  );
  notification.set_default_action ("app.notification-reply");
  notification.add_button ("Accept", "app.notification-accept");
  notification.add_button ("Decline", "app.notification-decline");

  var icon = new ThemedIcon ("object-rotate-right-symbolic");
  notification.set_icon (icon);

  var simple_button = workbench.builder.get_object ("button_simple") as Gtk.Button;
  simple_button.clicked.connect (() => {
    application.send_notification ("lunch-is-ready", notification);
  });

  var action_reply = new SimpleAction ("notification-reply", null);
  action_reply.activate.connect (() => {
    stdout.printf ("Reply");
  });
  application.add_action (action_reply);

  var action_accept = new SimpleAction ("notification-accept", null);
  action_accept.activate.connect (() => {
    stdout.printf ("Accept");
  });
  application.add_action (action_accept);

  var action_decline = new SimpleAction ("notification-decline", null);
  action_decline.activate.connect (() => {
    stdout.printf ("Decline");
  });
  application.add_action (action_decline);
}

