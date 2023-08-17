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
const tab_bar = workbench.builder.get_object("tab_bar");

let header_bar;
let bottom_bar;

header_bar = header_top;
bottom_bar = header_bottom;

function changeHeaderBar(new_header_bar) {
  toolbar_view.remove(header_bar);
  toolbar_view.add_top_bar(new_header_bar);
  header_bar = new_header_bar;
}

function changeBottomBar(new_bottom_bar) {
  toolbar_view.remove(bottom_bar);
  toolbar_view.add_bottom_bar(new_bottom_bar);
  bottom_bar = new_bottom_bar;
}

topbar_select.connect("notify::selected-item", () => {
  switch (topbar_select.get_selected()) {
    case 1:
      changeHeaderBar(workbench.builder.get_object("header_bar"));
      break;
    case 2:
      changeHeaderBar(workbench.builder.get_object("switcher_bar"));
      break;
    case 3:
      changeHeaderBar(workbench.builder.get_object("action_bar"));
      break;
    case 4:
      changeHeaderBar(workbench.builder.get_object("popover"));
      break;
    case 5:
      changeHeaderBar(workbench.builder.get_object("search_bar"));
      break;
    case 6:
      changeHeaderBar(workbench.builder.get_object("gtk_box"));
      break;
  }
});

bottombar_select.connect("notify::selected-item", () => {
  switch (bottombar_select.get_selected()) {
    case 1:
      changeBottomBar(workbench.builder.get_object("header_bar"));
      break;
    case 2:
      changeBottomBar(workbench.builder.get_object("switcher_bar"));
      break;
    case 3:
      changeBottomBar(workbench.builder.get_object("action_bar"));
      break;
    case 4:
      changeBottomBar(workbench.builder.get_object("popover"));
      break;
    case 5:
      changeBottomBar(workbench.builder.get_object("search_bar"));
      break;
    case 6:
      changeBottomBar(workbench.builder.get_object("gtk_box"));
      break;
  }
});

reveal_topbar.connect("notify::active", () => {
  toolbar_view.reveal_top_bars = reveal_topbar.active;
});

reveal_bottombar.connect("notify::active", () => {
  toolbar_view.reveal_bottom_bars = reveal_bottombar.active;
});
