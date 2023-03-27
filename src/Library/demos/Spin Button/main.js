const spinbutton = workbench.builder.get_object("spinbutton");

spinbutton.connect("value-changed", (button) => {
  // Log new entry to the console
  console.log("New entry:", button.get_value());
});

