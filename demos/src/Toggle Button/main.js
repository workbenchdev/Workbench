const buttons = {
  button_no_look: "Don't look",
  button_look: "Look",
  button_camera: "Camera",
  button_flashlight: "Flashlight",
  button_console: "Console",
};

for (const [id, name] of Object.entries(buttons)) {
  const button = workbench.builder.get_object(id);
  button.connect("notify::active", () => {
    console.log(`${name} ${button.active ? "On" : "Off"}`);
  });
}
