const third = workbench.builder.get_object("button_third");
const fourth = workbench.builder.get_object("button_fourth");
const terminal = workbench.builder.get_object("console");

let toggle_count_camera = 0;
let toggle_count_flashlight = 0;
let toggle_count_terminal = 0;

third.connect("toggled", () => {
  toggle_count_camera++;
  console.log(toggle_count_camera % 2 !== 0 ? "Camera On" : "Camera Off");
});
fourth.connect("toggled", () => {
  toggle_count_flashlight++;
  console.log(
    toggle_count_flashlight % 2 !== 0 ? "Flashlight On" : "Flashlight Off",
  );
});
terminal.connect("toggled", () => {
  toggle_count_terminal++;
  console.log(
    toggle_count_terminal % 2 !== 0 ? "Entered Console" : "Exited Console",
  );
});
