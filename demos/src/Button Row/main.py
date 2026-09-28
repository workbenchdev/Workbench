import workbench

button_row_suggested = workbench.builder.get_object("button_row_suggested")
button_row_destructive = workbench.builder.get_object("button_row_destructive")


def on_suggested_activated(*_args):
    print("Suggested button row activated")


def on_destructive_activated(*_args):
    print("Destructive button row activated")


button_row_suggested.connect("activated", on_suggested_activated)
button_row_destructive.connect("activated", on_destructive_activated)
