import workbench

action_bar = workbench.builder.get_object("action_bar")
button = workbench.builder.get_object("button")
start_widget = workbench.builder.get_object("start_widget")
end_widget = workbench.builder.get_object("end_widget")

button.connect(
    "notify::active", lambda *_: action_bar.set_revealed(not button.get_active())
)

start_widget.connect("clicked", lambda *_: print("Start widget"))

end_widget.connect("clicked", lambda *_: print("End widget"))
