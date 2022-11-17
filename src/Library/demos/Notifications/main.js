import Gio from "gi://Gio";

const { application, builder } = workbench;

const notification = new Gio.Notification();

notification.set_title("Lunch is ready");
notification.set_body(
  "Today we have pancakes and salad, and fruit and cake for dessert",
);
notification.set_default_action("app.notification-reply");
notification.add_button("Accept", "app.notification-accept");
notification.add_button("Decline", "app.notification-decline");

const icon = new Gio.ThemedIcon({ name: "object-rotate-right-symbolic" });
notification.set_icon(icon);

builder.get_object("button_simple").connect("clicked", () => {
  application.send_notification("lunch-is-ready", notification);
});

const action_reply = new Gio.SimpleAction({ name: "notification-reply" });
action_reply.connect("activate", () => {
  console.log("Reply");
});
application.add_action(action_reply);

const action_accept = new Gio.SimpleAction({ name: "notification-accept" });
action_accept.connect("activate", () => {
  console.log("Accept");
});
application.add_action(action_accept);

const action_decline = new Gio.SimpleAction({ name: "notification-decline" });
action_decline.connect("activate", () => {
  console.log("Decline");
});
application.add_action(action_decline);
