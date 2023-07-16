import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const emoji_chooser = workbench.builder.get_object("emoji_chooser");
const button = workbench.builder.get_object("button");

emoji_chooser.connect("emoji-picked", (chooser, emoji) => {
  button.label = emoji;
});
