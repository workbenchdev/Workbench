#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private int tab_count = 1;
private Adw.TabView tab_view;

public void main () {
  tab_view = (Adw.TabView) workbench.builder.get_object ("tab_view");
  var button_new_tab = (Gtk.Button) workbench.builder.get_object ("button_new_tab");
  var overview = (Adw.TabOverview) workbench.builder.get_object ("overview");
  var button_overview = (Gtk.Button) workbench.builder.get_object ("button_overview");

  overview.create_tab.connect (() => add_page ());
  button_overview.clicked.connect (() => overview.open = true);
  button_new_tab.clicked.connect (() => add_page ());
}

private unowned Adw.TabPage add_page () {
  string title = @"Tab $tab_count";
  var page = new Adw.StatusPage () {
    title = title,
    vexpand = true
  };

  unowned Adw.TabPage tab_page = tab_view.append (page);
  tab_page.title = title;
  tab_page.live_thumbnail = true;

  tab_count++;
  return tab_page;
}
