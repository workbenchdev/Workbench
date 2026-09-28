import Gtk from "gi://Gtk?version=4.0";

const button = workbench.builder.get_object("button");

button.connect("query-tooltip", (_self, _x, _y, _mode, tooltip) => {
  const custom_tooltip = new Gtk.Box({ spacing: 6 });
  const label = new Gtk.Label({ label: "This is a custom tooltip" });
  const icon = new Gtk.Image({ icon_name: "emoji-body-symbolic" });
  custom_tooltip.append(label);
  custom_tooltip.append(icon);

  tooltip.set_custom(custom_tooltip);
  return true;
});
