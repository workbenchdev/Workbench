const connectToggleButton = (button, message) =>
  button.connect("toggled", () =>
    console.log(`${message} ${button.active ? "On" : "Off"}`),
  );

const buttons = {
  Camera: workbench.builder.get_object("button_third"),
  Flashlight: workbench.builder.get_object("button_fourth"),
  Console: workbench.builder.get_object("button_console"),
  Eye: workbench.builder.get_object("button_second"),
};

Object.entries(buttons).forEach(([name, button]) =>
  connectToggleButton(button, name),
);
