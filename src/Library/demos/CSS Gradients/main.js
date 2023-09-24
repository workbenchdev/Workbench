import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import GtkSource from "gi://GtkSource";
import Adw from "gi://Adw";

let css_provider;

const combo_row_gradient_type = workbench.builder.get_object(
  "combo_row_gradient_type",
);
const adjustment_angle = workbench.builder.get_object("adjustment_angle");
const spin_row_angle = workbench.builder.get_object("spin_row_angle");
const color_dialog_button_first_color = workbench.builder.get_object(
  "color_dialog_button_first_color",
);
const color_dialog_button_second_color = workbench.builder.get_object(
  "color_dialog_button_second_color",
);
const color_dialog_button_third_color = workbench.builder.get_object(
  "color_dialog_button_third_color",
);
const gtksource_buffer = workbench.builder.get_object("gtksource_buffer");
const button_copy_css = workbench.builder.get_object("button_copy_css");

const clipboard = Gdk.Display.get_default().get_clipboard();

button_copy_css.connect("clicked", () => {
  clipboard.set(gtksource_buffer.text);
});

combo_row_gradient_type.connect("notify::selected", () => {
  spin_row_angle.sensitive = combo_row_gradient_type.selected !== 1;
  updateGradient();
});

adjustment_angle.connect("value-changed", () => {
  updateGradient();
});

color_dialog_button_first_color.connect("notify::rgba", () => {
  updateGradient();
});

color_dialog_button_second_color.connect("notify::rgba", () => {
  updateGradient();
});

color_dialog_button_third_color.connect("notify::rgba", () => {
  updateGradient();
});

function updateGradient() {
  const css = getCss();
  gtksource_buffer.set_text(css, -1);
  updateCssProvider(css);
}

function getCss() {
  const angle_string = adjustment_angle.value;
  const first_color_string = color_dialog_button_first_color.rgba.to_string();
  const second_color_string = color_dialog_button_second_color.rgba.to_string();
  const third_color_string = color_dialog_button_third_color.rgba.to_string();

  switch (combo_row_gradient_type.selected) {
    case 1:
      return `
.background-gradient {
  background-image: radial-gradient(
    ${first_color_string},
    ${second_color_string},
    ${third_color_string}
  );
}
`;
    case 2:
      return `
.background-gradient {
  background-image: conic-gradient(
    from ${angle_string}deg,
    ${first_color_string},
    ${second_color_string},
    ${third_color_string}
  );
}
`;
    default:
      return `
.background-gradient {
  background-image: linear-gradient(
    ${angle_string}deg,
    ${first_color_string},
    ${second_color_string},
    ${third_color_string}
  );
}
`;
  }
}

function updateCssProvider(css) {
  const display = Gdk.Display.get_default();

  if (css_provider) {
    Gtk.StyleContext.remove_provider_for_display(display, css_provider);
  }

  css_provider = new Gtk.CssProvider();
  css_provider.load_from_string(css);
  Gtk.StyleContext.add_provider_for_display(
    display,
    css_provider,
    Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION,
  );
}

const scheme_manager = GtkSource.StyleSchemeManager.get_default();
const style_manager = Adw.StyleManager.get_default();
style_manager.connect("notify::dark", () => {
  updateColorScheme();
});

function updateColorScheme() {
  const scheme = scheme_manager.get_scheme(
    style_manager.dark ? "Adwaita-dark" : "Adwaita",
  );
  gtksource_buffer.set_style_scheme(scheme);
}

const language_manager = GtkSource.LanguageManager.get_default();
const css_language = language_manager.get_language("css");
gtksource_buffer.set_language(css_language);

updateColorScheme();

updateGradient();
