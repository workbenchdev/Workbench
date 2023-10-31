import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Gdk", "4.0")
gi.require_version("Adw", "1")
gi.require_version("GtkSource", "5")
from gi.repository import Gtk, Gdk, Adw, GtkSource
import workbench

Adw.init()


combo_row_gradient_type = workbench.builder.get_object(
    "combo_row_gradient_type",
)
spin_row_angle = workbench.builder.get_object("spin_row_angle")
button_color_1 = workbench.builder.get_object("button_color_1")
button_color_2 = workbench.builder.get_object("button_color_2")
button_color_3 = workbench.builder.get_object("button_color_3")
gtksource_buffer = workbench.builder.get_object("gtksource_buffer")
button_copy_css = workbench.builder.get_object("button_copy_css")


def generate_css():
    angle_string = spin_row_angle.get_value()
    first_color_string = button_color_1.get_rgba().to_string()
    second_color_string = button_color_2.get_rgba().to_string()
    third_color_string = button_color_3.get_rgba().to_string()

    css = ""
    if combo_row_gradient_type.get_selected() == 0:
        css = f"""
.background-gradient {{
  background-image: linear-gradient(
    {angle_string}deg,
    {first_color_string},
    {second_color_string},
    {third_color_string}
  );
}}"""
    elif combo_row_gradient_type.get_selected() == 1:
        css = f"""
.background-gradient {{
  background-image: radial-gradient(
    {first_color_string},
    {second_color_string},
    {third_color_string}
  );
}}"""
    elif combo_row_gradient_type.get_selected() == 2:
        css = f"""
.background-gradient {{
  background-image: conic-gradient(
    from {angle_string}deg,
    {first_color_string},
    {second_color_string},
    {third_color_string}
  );
}}"""

    return css.lstrip()


def update_css_provider(css):
    display = Gdk.Display.get_default()

    css_provider = Gtk.CssProvider()
    css_provider.load_from_string(css)
    Gtk.StyleContext.add_provider_for_display(
        display,
        css_provider,
        Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION,
    )


def update(*args):
    spin_row_angle.set_sensitive(combo_row_gradient_type.get_selected() != 1)
    css = generate_css()
    gtksource_buffer.set_text(css, -1)
    update_css_provider(css)


combo_row_gradient_type.connect("notify::selected", update)
spin_row_angle.connect("notify::value", update)
button_color_1.connect("notify::rgba", update)
button_color_2.connect("notify::rgba", update)
button_color_3.connect("notify::rgba", update)

update()


clipboard = Gdk.Display.get_default().get_clipboard()

button_copy_css.connect(
    "clicked",
    lambda *args: clipboard.set(
        gtksource_buffer.get_text(
            gtksource_buffer.get_start_iter(), gtksource_buffer.get_end_iter(), False
        )
    ),
)

scheme_manager = GtkSource.StyleSchemeManager.get_default()


def update_color_scheme():
    scheme = scheme_manager.get_scheme(
        "Adwaita-dark" if style_manager.get_dark() else "Adwaita"
    )
    gtksource_buffer.set_style_scheme(scheme)


style_manager = Adw.StyleManager.get_default()
style_manager.connect("notify::dark", lambda *args: update_color_scheme)

update_color_scheme()

language_manager = GtkSource.LanguageManager.get_default()
css_language = language_manager.get_language("css")
gtksource_buffer.set_language(css_language)
