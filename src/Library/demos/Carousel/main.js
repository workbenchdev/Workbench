import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const carousel = workbench.builder.get_object("carousel");
const ls_switch = workbench.builder.get_object("ls_switch");
const sw_switch = workbench.builder.get_object("sw_switch");

sw_switch.connect("notify::active", () => {
    carousel.allow_scroll_wheel = sw_switch.active ? true : false;
});
