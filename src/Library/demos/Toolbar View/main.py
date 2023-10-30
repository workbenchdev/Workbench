import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench

topbar_select: Adw.ComboRow = workbench.builder.get_object("topbar_select")
bottombar_select: Adw.ComboRow = workbench.builder.get_object("bottombar_select")
toolbar_view: Adw.ToolbarView = workbench.builder.get_object("toolbar_view")

top_bar = None
bottom_bar = None


def changeTopBar(name):
    global top_bar
    new_top_bar = workbench.builder.get_object(name)
    if top_bar:
        toolbar_view.remove(top_bar)
    toolbar_view.add_top_bar(new_top_bar)
    top_bar = new_top_bar


def changeBottomBar(name):
    global bottom_bar
    new_bottom_bar = workbench.builder.get_object(name)
    if bottom_bar:
        toolbar_view.remove(bottom_bar)
    toolbar_view.add_bottom_bar(new_bottom_bar)
    bottom_bar = new_bottom_bar


def selectTopBar():
    match topbar_select.get_selected():
        case 0:
            changeTopBar("header_bar")
        case 1:
            changeTopBar("tab_bar")
        case 2:
            changeTopBar("switcher_bar")
        case 3:
            changeTopBar("action_bar")
        case 4:
            changeTopBar("popover")
        case 5:
            changeTopBar("search_bar")
        case 6:
            changeTopBar("gtk_box")


def selectBottomBar():
    match bottombar_select.get_selected():
        case 0:
            changeBottomBar("header_bar")
        case 1:
            changeBottomBar("tab_bar")
        case 2:
            changeBottomBar("switcher_bar")
        case 3:
            changeBottomBar("action_bar")
        case 4:
            changeBottomBar("popover")
        case 5:
            changeBottomBar("search_bar")
        case 6:
            changeBottomBar("gtk_box")


topbar_select.connect("notify::selected-item", lambda _, __: selectTopBar())
bottombar_select.connect("notify::selected-item", lambda _, __: selectBottomBar())

selectTopBar()
selectBottomBar()
