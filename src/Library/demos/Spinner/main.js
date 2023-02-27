const btn = workbench.builder.get_object("btn");
const spinner = workbench.builder.get_object("spinner");

btn.connect("clicked", () => {
  if (spinner.get_spinning()) {
    btn.icon_name = "media-playback-start";
    spinner.spinning = false;
  } else {
    btn.icon_name = "media-playback-stop";
    spinner.spinning = true;
  }
});
