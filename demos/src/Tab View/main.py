import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench

tab_view: Adw.TabBar = workbench.builder.get_object("tab_view")
button_new_tab: Gtk.Button = workbench.builder.get_object("button_new_tab")
overview: Adw.TabOverview = workbench.builder.get_object("overview")
button_overview: Gtk.Button = workbench.builder.get_object("button_overview")
tab_count = 1

overview.connect("create-tab", lambda _: add_page())

button_overview.connect("clicked", lambda _: overview.set_open(True))

button_new_tab.connect("clicked", lambda _: add_page())


def add_page():
    global tab_count
    title = f"Tab {tab_count}"
    page = create_page(title)
    tab_page = tab_view.append(page)
    tab_page.set_title(title)
    tab_page.set_live_thumbnail(True)

    tab_count += 1
    return tab_page


def create_page(title):
    page = Adw.StatusPage(
        title=title,
        vexpand=True,
    )
    return page
