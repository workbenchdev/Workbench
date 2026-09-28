import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench

entry: Gtk.Entry = workbench.builder.get_object("entry")
entry_placeholder: Gtk.Entry = workbench.builder.get_object("entry_placeholder")
entry_icon: Gtk.Entry = workbench.builder.get_object("entry_icon")
entry_progress: Gtk.Entry = workbench.builder.get_object("entry_progress")

entry.connect(
    "activate", lambda _: print(f'Regular Entry: "{entry.get_text()}" entered')
)

entry_placeholder.connect(
    "activate",
    lambda _: print(f'Placeholder Entry: "{entry_placeholder.get_text()}" entered'),
)

entry_icon.connect(
    "activate", lambda _: print(f'Icon Entry: "{entry_icon.get_text()}" entered')
)

entry_icon.connect("icon-press", lambda _, __: print("Icon Pressed!"))

entry_icon.connect("icon-release", lambda _, __: print("Icon Released!"))

entry_progress.connect(
    "activate",
    lambda _: print(f'Progress Bar Entry: "{entry_progress.get_text()}" entered'),
)

entry_progress.connect("icon-press", lambda _, __: animation.play())

target = Adw.PropertyAnimationTarget.new(
    entry_progress,
    "progress-fraction",
)

animation = Adw.TimedAnimation(
    widget=entry_progress,
    value_from=0,
    value_to=1,
    duration=2000,
    easing=Adw.Easing.LINEAR,
    target=target,
)

animation.connect("done", lambda _: animation.reset())

entry_completion: Gtk.Entry = workbench.builder.get_object("entry_completion")
completion = Gtk.EntryCompletion()

entry_completion.set_completion(completion)

list_store = Gtk.ListStore.new([str])
words = ("a", "app", "apple", "apples", "applets", "application")
for word in words:
    list_store.append([word])
completion.set_model(list_store)

completion.set_text_column(0)
completion.set_inline_completion(True)
completion.set_inline_selection(True)

entry_password: Gtk.PasswordEntry = workbench.builder.get_object("entry_password")
entry_confirm_password: Gtk.PasswordEntry = workbench.builder.get_object(
    "entry_confirm_password",
)
label_password: Gtk.Label = workbench.builder.get_object("label_password")

entry_password.connect(
    "activate",
    lambda _: label_password.set_label(
        validate_password(
            entry_password.get_text(),
            entry_confirm_password.get_text(),
        )
    ),
)

entry_confirm_password.connect(
    "activate",
    lambda _: label_password.set_label(
        validate_password(
            entry_password.get_text(),
            entry_confirm_password.get_text(),
        )
    ),
)


def validate_password(passwd, confirm_passwd):
    if passwd and confirm_passwd:
        if passwd == confirm_passwd:
            return "Password made successfully!"
        else:
            return "Both fields should be matching!"
    else:
        return "Both fields are mandatory!"
