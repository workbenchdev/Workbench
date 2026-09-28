const switch_on = workbench.builder.get_object("switch_on");
const label_on = workbench.builder.get_object("label_on");

const switch_off = workbench.builder.get_object("switch_off");
const label_off = workbench.builder.get_object("label_off");

switch_on.connect("notify::active", () => {
  label_on.label = switch_on.active ? "On" : "Off";
  switch_off.active = !switch_on.active;
});

switch_off.connect("notify::active", () => {
  label_off.label = switch_off.active ? "On" : "Off";
  switch_on.active = !switch_off.active;
});
