const action_bar = workbench.builder.get_object("action_bar");
const button = workbench.builder.get_object("button");
const start_widget = workbench.builder.get_object("start_widget");
const end_widget = workbench.builder.get_object("end_widget");

button.connect("notify::active", () => {
  console.log(`ActionBar toggled ${button.active ? "Off" : "On"}`);
  action_bar.revealed = !button.active;
});

start_widget.connect("clicked", () => {
  console.log("I am start widget");
});

end_widget.connect("clicked", () => {
  console.log("I am end widget");
});
