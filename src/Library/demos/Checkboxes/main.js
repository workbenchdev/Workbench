const checkbox_1 = workbench.builder.get_object("checkbox_1");
const checkbox_2 = workbench.builder.get_object("checkbox_2");

checkbox_1.connect("toggled", () => {
  if (checkbox_1.active) console.log("Notifications Enabled");
  else console.log("Notifications Disabled");
});

checkbox_2.connect("toggled", () => {
  if (checkbox_2.active) console.log("Changes will be auto-saved");
  else console.log("Changes will not be auto-saved");
});
