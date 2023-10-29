import workbench

checkbox_1 = workbench.builder.get_object("checkbox_1")
checkbox_2 = workbench.builder.get_object("checkbox_2")

checkbox_1.connect("toggled", lambda *_:
    print("Notifications Enabled"
    if checkbox_1.get_active()
    else "Notifications Disabled")
)

checkbox_2.connect("toggled", lambda *_:
    print("Changes will be auto-saved"
    if checkbox_2.get_active()
    else "Changes will not be auto-saved")
)
