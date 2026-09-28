const shortcuts_window = workbench.builder.get_object("shortcuts_window");
const button = workbench.builder.get_object("button");

button.connect("clicked", () => {
  shortcuts_window.present();
});
