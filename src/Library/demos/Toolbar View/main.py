import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Adw
import workbench

topbar_select: Adw.ComboRow = workbench.builder.get_object("topbar_select")
bottombar_select: Adw.ComboRow = workbench.builder.get_object("bottombar_select")
toolbar_view: Adw.ToolbarView = workbench.builder.get_object("toolbar_view")

top_bar = None
bottom_bar = None


def change_top_bar(name):
    global top_bar
    new_top_bar = workbench.builder.get_object(name)
    if top_bar:
        toolbar_view.remove(top_bar)
    toolbar_view.add_top_bar(new_top_bar)
    top_bar = new_top_bar


def change_bottom_bar(name):
    global bottom_bar
    new_bottom_bar = workbench.builder.get_object(name)
    if bottom_bar:
        toolbar_view.remove(bottom_bar)
    toolbar_view.add_bottom_bar(new_bottom_bar)
    bottom_bar = new_bottom_bar


def select_top_bar(*args):
    match topbar_select.get_selected():
        case 0:
            change_top_bar("header_bar")
        case 1:
            change_top_bar("tab_bar")
        case 2:
            change_top_bar("switcher_bar")
        case 3:
            change_top_bar("action_bar")
        case 4:
            change_top_bar("popover")
        case 5:
            change_top_bar("search_bar")
        case 6:
            change_top_bar("gtk_box")


def select_bottom_bar(*args):
    match bottombar_select.get_selected():
        case 0:
            change_bottom_bar("header_bar")
        case 1:
            change_bottom_bar("tab_bar")
        case 2:
            change_bottom_bar("switcher_bar")
        case 3:
            change_bottom_bar("action_bar")
        case 4:
            change_bottom_bar("popover")
        case 5:
            change_bottom_bar("search_bar")
        case 6:
            change_bottom_bar("gtk_box")


topbar_select.connect("notify::selected-item", select_top_bar)
bottombar_select.connect("notify::selected-item", select_bottom_bar)

select_top_bar()
select_bottom_bar()
