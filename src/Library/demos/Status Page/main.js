import Gtk from "gi://Gtk?version=4.0";

Gtk.init();

const content = workbench.builder.get_object("content");
const entry = workbench.builder.get_object("entry_1");
const button = workbench.builder.get_object("submit_button");

button.connect("clicked", () => {
  const text = entry.get_text();
  if (text === "Error") {
    content.title = "Error 404";
  } else if (text === "No Results") {
    content.title = content.title;
  } else {
    content.title = "No content available for this keyword.";
  }
});

