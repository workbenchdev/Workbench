import Gio from "gi://Gio";

const { application, builder } = workbench;

// https://gjs-docs.gnome.org/gio20/gio.notification
const notification = new Gio.Notification({
  title: "Lunch is ready",
  body: "Today we have pancakes and salad, and fruit and cake for dessert",
  default_action: "app.notification-reply",
  buttons: [
    { label: "Accept", action: "app.notification-accept" },
    { label: "Decline", action: "app.notification-decline" },
  ],
  icon: new Gio.ThemedIcon({ name: "object-rotate-right-symbolic" }),
});

builder.get_object("button_simple").connect("clicked", () => {
  application.send_notification("lunch-is-ready", notification);
});

const actions = [
  { name: "notification-reply", callback: () => console.log("Reply") },
  { name: "notification-accept", callback: () => console.log("Accept") },
  { name: "notification-decline", callback: () => console.log("Decline") },
];

for (const { name, callback } of actions) {
  const action = new Gio.SimpleAction({ name });
  action.connect("activate", callback);
  application.add_action(action);
}
application.add_action(action_decline);
