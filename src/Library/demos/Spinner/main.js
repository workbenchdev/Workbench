const button = workbench.builder.get_object("button");
const spinner = workbench.builder.get_object("spinner");

button.connect("clicked", () => {
  if (spinner.spinning === true) {
    button.icon_name = "media-playback-start";
    spinner.spinning = false;
  } else {
    button.icon_name = "media-playback-stop";
    spinner.spinning = true;
  }
});
