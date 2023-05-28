const button = workbench.builder.get_object("button");

button.connect("clicked", () => {
  if (button.has_css_class("accent")) {
    button.remove_css_class("accent");
    button.set_label("click");
  } else {
    button.add_css_class("accent");
    button.set_label("clicked");
  }
});
