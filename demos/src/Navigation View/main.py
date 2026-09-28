import workbench

nav_view = workbench.builder.get_object("nav_view")
nav_pageone = workbench.builder.get_object("nav_pageone")
next_button = workbench.builder.get_object("next_button")
previous_button = workbench.builder.get_object("previous_button")
nav_pagetwo = workbench.builder.get_object("nav_pagetwo")
nav_pagethree = workbench.builder.get_object("nav_pagethree")
nav_pagefour = workbench.builder.get_object("nav_pagefour")
title = workbench.builder.get_object("title")


def on_next_button_clicked(_button):
    page = nav_view.get_visible_page()
    if page == nav_pageone:
        nav_view.push(nav_pagetwo)
    elif page == nav_pagetwo:
        nav_view.push(nav_pagethree)
    elif page == nav_pagethree:
        nav_view.push(nav_pagefour)


def on_page_changed(_view, _visible_page):
    previous_button.set_sensitive(nav_view.get_visible_page() != nav_pageone)
    next_button.set_sensitive(nav_view.get_visible_page() != nav_pagefour)
    title.set_label(nav_view.get_visible_page().get_title())


next_button.connect("clicked", on_next_button_clicked)

previous_button.connect("clicked", lambda _: nav_view.pop())

nav_view.connect("notify::visible-page", on_page_changed)
