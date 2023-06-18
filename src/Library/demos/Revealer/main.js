const button = workbench.builder.get_object("button");
const revealer = workbench.builder.get_object("revealer");

button.connect("toggled", () => {
  revealer.reveal_child = button.active;
  revealer_crossfade.reveal_child = button.active;
  switch (button.active) {
    case true:
      button.label = "Hide";
      return;
    case false:
      button.label = "Show";
      return;
  }
});
