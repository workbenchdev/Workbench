import workbench

shortcuts_window = workbench.builder.get_object("shortcuts_window")
button = workbench.builder.get_object("button")

button.connect("clicked", lambda *_: shortcuts_window.present())
