const checkbox1 = workbench.builder.get_object("checkbox1");
const checkbox2 = workbench.builder.get_object("checkbox2");

checkbox1.connect("toggled", () => {
  if (checkbox1.active) console.log("Notifications Enabled");
  else console.log("Notifications Disabled");
});

checkbox2.connect("toggled", () => {
  if (checkbox2.active) console.log("Changes will be auto-saved");
  else console.log("Changes will not be auto-saved");
});

const radiobutton1 = workbench.builder.get_object("radio_button1");
const radiobutton2 = workbench.builder.get_object("radio_button2");

radiobutton1.connect("toggled", () => {
  if (radiobutton1.active) console.log("Force Light Mode");
});

radiobutton2.connect("toggled", () => {
  if (radiobutton2.active) console.log("Force Dark Mode");
});
