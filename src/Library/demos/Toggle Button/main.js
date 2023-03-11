const third = workbench.builder.get_object("button_third");
const fourth = workbench.builder.get_object("button_fourth");
let toggle_count_camera = 0;
let toggle_count_flashlight = 0;

third.connect("toggled", () => {
  toggle_count_camera++;
  console.log(
    toggle_count_camera % 2 !== 0 ? "Camera Toggled On" : "Camera Toggled Off",
  );
});
fourth.connect("toggled", () => {
  toggle_count_flashlight++;
  console.log(
    toggle_count_flashlight % 2 !== 0
      ? "Flashlight Toggled On"
      : "Flashlight Toggled Off",
  );
});
