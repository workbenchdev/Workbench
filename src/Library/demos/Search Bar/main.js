import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const button = workbench.builder.get_object("button_search");
const searchbar = workbench.builder.get_object("searchbar");
const searchentry = workbench.builder.get_object("searchentry");
const headerbar = workbench.builder.get_object("headerbar");
const stack = workbench.builder.get_object("stack");
const main_page = workbench.builder.get_object("main_page");
const search_page = workbench.builder.get_object("search_page");
const status_page = workbench.builder.get_object("status_page");
const listbox = workbench.builder.get_object("listbox");

button.connect("clicked", () => {
  searchbar.search_mode_enabled = !searchbar.search_mode_enabled;
});

searchbar.connect("notify::search-mode-enabled", () => {
  switch (searchbar.search_mode_enabled) {
    case true:
      stack.visible_child = search_page;
      break;
    case false:
      stack.visible_child = main_page;
      break;
  }
});

const words = [
  "Apple 🍎️",
  "Orange 🍊️",
  "Pear 🍐️",
  "Watermelon 🍉️",
  "Melon 🍈️",
  "Pineapple 🍍️",
  "Grape 🍇️",
  "Kiwi 🥝️",
  "Banana 🍌️",
  "Peach 🍑️",
  "Cherry 🍒️",
  "Strawberry 🍓️",
  "Blueberry 🫐️",
  "Mango 🥭️",
  "Bell Pepper 🫑️",
];

words.forEach((name) => {
  const row = new Adw.ActionRow({
    title: name,
  });
  listbox.append(row);
});

const filter = (row) => {
  const re = new RegExp(searchentry.text, "i");
  return re.test(row.title);
};

listbox.set_filter_func(filter);

searchentry.connect("search-changed", () => {
  listbox.invalidate_filter();
});
