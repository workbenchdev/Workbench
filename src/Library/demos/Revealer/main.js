const button = workbench.builder.get_object("button");
const revealer = workbench.builder.get_object("revealer");

button.connect("clicked", () => {
  revealer.reveal_child = !revealer.reveal_child;
  switch (button.label) {
    case "Show":
      button.label = "Hide";
      return;
    case "Hide":
      button.label = "Show";
      return;
  }
});
