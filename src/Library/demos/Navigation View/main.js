import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const nav_view = workbench.builder.get_object("nav_view");
const nav_pageone = workbench.builder.get_object("nav_pageone");
const next_button = workbench.builder.get_object("next_button");
const previous_button = workbench.builder.get_object("previous_button");
const nav_pagetwo = workbench.builder.get_object("nav_pagetwo");
const nav_pagethree = workbench.builder.get_object("nav_pagethree");
const nav_pagefour = workbench.builder.get_object("nav_pagefour");
const yes_button = workbench.builder.get_object("yes_button");
const no_button = workbench.builder.get_object("no_button");

next_button.connect("clicked", () => {
  previous_button.sensitive = true;
  if (nav_view.get_visible_page() === nav_pageone) {
    nav_view.push(nav_pagetwo);
  } else if (nav_view.get_visible_page() === nav_pagetwo) {
    nav_view.push(nav_pagethree);
  } else if (nav_view.get_visible_page() === nav_pagethree) {
    nav_view.push(nav_pagefour);
    next_button.sensitive = false;
  }
});

previous_button.connect("clicked", () => {
  nav_view.pop();
  next_button.sensitive = true;
  if (nav_view.get_visible_page() === nav_pageone) {
    previous_button.sensitive = false;
  }
});

yes_button.connect("notify::active", () => {
  nav_view.animate_transitions = true;
});

no_button.connect("notify::active", () => {
  nav_view.animate_transitions = false;
});
