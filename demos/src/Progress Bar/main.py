import gi

gi.require_version("Adw", "1")
from gi.repository import Adw, GLib
import workbench

first_bar = workbench.builder.get_object("first")
second_bar = workbench.builder.get_object("second")
play = workbench.builder.get_object("play")
progress_tracker = workbench.builder.get_object("progress_tracker")

target = Adw.PropertyAnimationTarget.new(first_bar, "fraction")

animation = Adw.TimedAnimation(
    widget=first_bar,
    value_from=0.2,
    value_to=1,
    duration=11000,
    easing=Adw.Easing.LINEAR,
    target=target,
)


def on_play_clicked(_button):
    animation.play()
    update_tracker()
    pulse_progress()


animation.connect("done", lambda _: animation.reset())

play.connect("clicked", on_play_clicked)


def pulse_progress():
    def on_pulse():
        nonlocal counter
        if counter >= 1.0:
            counter = 0
            second_bar.set_fraction(0)
            return False

        second_bar.pulse()
        counter += increment
        return True

    counter = 0
    # Time after which progress bar is pulsed
    pulse_period = 500
    # Duration of animation
    duration = 10000
    increment = pulse_period / duration
    GLib.timeout_add(pulse_period, on_pulse)


def update_tracker():
    def on_track_finished():
        nonlocal time
        if time == 0:
            progress_tracker.set_label("")
            print("Operation complete!")
            return False

        progress_tracker.set_label(f"{time} seconds remaining…")
        time -= 1
        return True

    time = 10
    GLib.timeout_add(1000, on_track_finished)
