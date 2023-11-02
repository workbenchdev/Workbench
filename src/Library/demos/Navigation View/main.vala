#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
  var nav_view = (Adw.NavigationView) workbench.builder.get_object ("nav_view");
  var nav_pageone = (Adw.NavigationPage) workbench.builder.get_object ("nav_pageone");
  var nav_pagetwo = (Adw.NavigationPage) workbench.builder.get_object ("nav_pagetwo");
  var nav_pagethree = (Adw.NavigationPage) workbench.builder.get_object ("nav_pagethree");
  var nav_pagefour = (Adw.NavigationPage) workbench.builder.get_object ("nav_pagefour");

  var previous_button = (Gtk.Button) workbench.builder.get_object ("previous_button");
  var next_button = (Gtk.Button) workbench.builder.get_object ("next_button");
  var title = (Gtk.Label) workbench.builder.get_object ("title");

  next_button.clicked.connect (() => {
    if (nav_view.visible_page == nav_pageone) {
      nav_view.push (nav_pagetwo);
    } else if (nav_view.visible_page == nav_pagetwo) {
      nav_view.push (nav_pagethree);
    } else if (nav_view.visible_page == nav_pagethree) {
      nav_view.push (nav_pagefour);
    }
  });

  previous_button.clicked.connect (() => nav_view.pop ());

  nav_view.notify["visible-page"].connect (() => {
    previous_button.sensitive = nav_view.visible_page != nav_pageone;
    next_button.sensitive = nav_view.visible_page != nav_pagefour;
    title.label = nav_view.visible_page.title;
  });
}
