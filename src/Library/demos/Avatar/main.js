import Adw from "gi://Adw";

const avatar = workbench.builder.get_object("avatar");
const name = workbench.builder.get_object("name");

avatar.set_text("John Doe");
avatar.set_size(128);
avatar.set_show_initials(true);

name.label = avatar.get_text();
