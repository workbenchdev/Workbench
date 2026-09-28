const button = workbench.builder.get_object("button");
const spinner = workbench.builder.get_object("spinner");

button.connect("clicked", () => {
  if (spinner.visible === true) {
    button.icon_name = "media-playback-start";
    spinner.visible = false;
  } else {
    button.icon_name = "media-playback-stop";
    spinner.visible = true;
  }
});
