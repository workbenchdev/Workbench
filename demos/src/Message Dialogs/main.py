import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Adw, Gtk
import workbench

button_confirmation = workbench.builder.get_object("button_confirmation")
button_error = workbench.builder.get_object("button_error")
button_advanced = workbench.builder.get_object("button_advanced")


def on_response_selected(_dialog, task):
    response = _dialog.choose_finish(task)
    print(f'Selected "{response}" response.')


def on_response_selected_advanced(_dialog, task):
    response = _dialog.choose_finish(task)
    entry = _dialog.get_extra_child()
    if response == "login":
        print(f'Selected "{response}" response with password "{entry.get_text()}"')
    else:
        print(f'Selected "{response}" response.')


def create_confirmation_dialog(*_args):
    dialog = Adw.AlertDialog(
        heading="Replace File?",
        body="A file named `example.png` already exists. Do you want to replace it?",
        close_response="cancel",
    )

    dialog.add_response("cancel", "Cancel")
    dialog.add_response("replace", "Replace")

    # Use DESTRUCTIVE appearance to draw attention to the potentially damaging consequences of this action
    dialog.set_response_appearance("replace", Adw.ResponseAppearance.DESTRUCTIVE)

    dialog.choose(workbench.window, None, on_response_selected)


def create_error_dialog(*_args):
    dialog = Adw.AlertDialog(
        heading="Critical Error",
        body="You did something you should not have",
        close_response="okay",
    )

    dialog.add_response("okay", "Okay")

    dialog.choose(workbench.window, None, on_response_selected)


def create_advanced_dialog(*_args):
    dialog = Adw.AlertDialog(
        heading="Login",
        body="A valid password is needed to continue",
        close_response="cancel",
    )

    dialog.add_response("cancel", "Cancel")
    dialog.add_response("login", "Login")

    # Use SUGGESTED appearance to mark important responses such as the affirmative action
    dialog.set_response_appearance("login", Adw.ResponseAppearance.SUGGESTED)

    entry = Gtk.PasswordEntry(show_peek_icon=True)
    dialog.set_extra_child(entry)

    dialog.choose(workbench.window, None, on_response_selected_advanced)


button_confirmation.connect("clicked", create_confirmation_dialog)
button_error.connect("clicked", create_error_dialog)
button_advanced.connect("clicked", create_advanced_dialog)
