const camera = workbench.builder.get_object("button_third");
const flashlight = workbench.builder.get_object("button_fourth");
const terminal = workbench.builder.get_object("console");

camera.connect("toggled", () => {
  console.log(camera.get_active() ? "Camera On" : "Camera Off");
});
flashlight.connect("toggled", () => {
  console.log(flashlight.get_active() ? "Flashlight On" : "Flashlight Off");
});
terminal.connect("toggled", () => {
  console.log(terminal.get_active() ? "Entered Console" : "Exited Console");
});
