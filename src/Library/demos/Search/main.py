import gi

gi.require_version("Adw", "1")
from gi.repository import Adw
import workbench

import re

button = workbench.builder.get_object("button_search")
searchbar = workbench.builder.get_object("searchbar")
searchentry = workbench.builder.get_object("searchentry")
stack = workbench.builder.get_object("stack")
main_page = workbench.builder.get_object("main_page")
search_page = workbench.builder.get_object("search_page")
status_page = workbench.builder.get_object("status_page")
listbox = workbench.builder.get_object("listbox")

button.connect(
    "clicked", lambda *_: searchbar.set_search_mode(not searchbar.get_search_mode())
)

searchbar.connect(
    "notify::search-mode-enabled",
    lambda *_: stack.set_visible_child(
        search_page if searchbar.get_search_mode() else main_page
    ),
)

fruits = [
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
]
results_count = 0

for name in fruits:
    row = Adw.ActionRow(title=name)
    listbox.append(row)


def filter(row):
    match = re.search(searchentry.get_text(), row.get_title(), re.IGNORECASE)
    if match:
        global results_count
        results_count += 1
    return match


listbox.set_filter_func(filter)


def on_search_changed(_search_widget):
    listbox.invalidate_filter()
    if results_count == -1:
        stack.set_visible_child(status_page)
    elif searchbar.get_search_mode():
        stack.set_visible_child(search_page)


searchentry.connect("search-changed", on_search_changed)
