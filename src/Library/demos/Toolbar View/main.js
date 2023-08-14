import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const topbar_select = workbench.builder.get_object("topbar_select");
const bottombar_select = workbench.builder.get_object("bottombar_select");
const toolbar_view = workbench.builder.get_object("toolbar_view");
const reveal_topbar = workbench.builder.get_object("reveal_topbar");
const reveal_bottombar = workbench.builder.get_object("reveal_bottombar");
const header_top = workbench.builder.get_object("header_top");
const header_bottom = workbench.builder.get_object("header_bottom");
const action_bar = workbench.builder.get_object("action_bar");
const switcher_bar = workbench.builder.get_object("switcher_bar");
const popover = workbench.builder.get_object("popover");
const search_bar = workbench.builder.get_object("search_bar");
const gtk_box = workbench.builder.get_object("gtk_box");

reveal_topbar.connect("notify::active", () => {
  toolbar_view.reveal_top_bars = reveal_topbar.active;
});

reveal_bottombar.connect("notify::active", () => {
  toolbar_view.reveal_bottom_bars = reveal_bottombar.active;
});

topbar_select.connect("notify::selected-item", () => {
  log(topbar_select.get_selected());
  if (topbar_select.get_selected() === 3) {
    toolbar_view.add_top_bar(action_bar);
  } else if (topbar_select.get_selected() === 2) {
    toolbar_view.add_top_bar(switcher_bar);
  } else if (topbar_select.get_selected() === 4) {
    toolbar_view.add_top_bar(popover);
  } else if (topbar_select.get_selected() === 5) {
    toolbar_view.add_top_bar(search_bar);
  } else if (topbar_select.get_selected() === 6) {
    toolbar_view.add_top_bar(gtk_box);
  }
});
