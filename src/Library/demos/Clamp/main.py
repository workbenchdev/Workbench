import workbench

button_increase = workbench.builder.get_object("button_increase")
button_decrease = workbench.builder.get_object("button_decrease")
clamp = workbench.builder.get_object("clamp")


def increase(_button):
    current_size = clamp.get_maximum_size()
    current_threshold = clamp.get_tightening_threshold()
    clamp.set_maximum_size(current_size + 300)
    clamp.set_tightening_threshold(current_threshold + 200)

    if clamp.get_tightening_threshold() == 1000:
        print("Maximum size reached")


def decrease(_button):
    current_size = clamp.get_maximum_size()
    current_threshold = clamp.get_tightening_threshold()
    clamp.set_maximum_size(current_size - 300)
    clamp.set_tightening_threshold(current_threshold - 200)

    if clamp.get_tightening_threshold() == 0:
        print("Minimum size reached")


button_increase.connect("clicked", increase)
button_decrease.connect("clicked", decrease)
