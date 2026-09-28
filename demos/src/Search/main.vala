#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private int results_count = 0;
private Gtk.ListBox listbox;
private Gtk.SearchEntry search_entry;

public void main () {
    var button = (Gtk.ToggleButton) workbench.builder.get_object ("button_search");
    var search_bar = (Gtk.SearchBar) workbench.builder.get_object ("searchbar");
    var stack = (Gtk.Stack) workbench.builder.get_object ("stack");
    var main_page = (Adw.StatusPage) workbench.builder.get_object ("main_page");
    var search_page = (Gtk.ScrolledWindow) workbench.builder.get_object ("search_page");
    var status_page = (Adw.StatusPage) workbench.builder.get_object ("status_page");
    search_entry = (Gtk.SearchEntry) workbench.builder.get_object ("searchentry");
    listbox = (Gtk.ListBox) workbench.builder.get_object ("listbox");

    button.clicked.connect (() => {
        search_bar.search_mode_enabled = !search_bar.search_mode_enabled;
    });

    search_bar.notify["search-mode-enabled"].connect (() => {
        if (search_bar.search_mode_enabled) {
            stack.visible_child = search_page;
        } else {
            stack.visible_child = main_page;
        }
    });

    string[] fruits = {
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
    };

    foreach (string fruit in fruits) {
        var row = new Adw.ActionRow () {
            title = fruit
        };
        listbox.append (row);
    }
    listbox.set_filter_func (filter);

    search_entry.search_changed.connect (() => {
        results_count = -1;
        listbox.invalidate_filter ();
        if (results_count < 0) {
            stack.visible_child = status_page;
        } else if (search_bar.search_mode_enabled) {
            stack.visible_child = search_page;
        }
    });
}

private bool filter (Gtk.ListBoxRow list_row) {
    var row = (Adw.ActionRow) list_row;
    bool match = search_entry.text.up () in row.title.up ();
    if (match) {
        results_count++;
    }
    return match;
}
