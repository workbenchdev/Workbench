import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const root_box = workbench.builder.get_object("root_box");
const carousel = workbench.builder.get_object("carousel");
const ls_switch = workbench.builder.get_object("ls_switch");
const sw_switch = workbench.builder.get_object("sw_switch");
const indicator_row = workbench.builder.get_object("indicator_row");
const orientation_row = workbench.builder.get_object("orientation_row");
let indicators;

carousel.connect("page-changed", () => {
  console.log("Page Changed");
});

// Scroll Wheel Switch
sw_switch.active = carousel.allow_scroll_wheel;

sw_switch.connect("notify::active", () => {
  carousel.allow_scroll_wheel = sw_switch.active;
});

// Long Swipe Switch
ls_switch.active = carousel.allow_long_swipes;

ls_switch.connect("notify::active", () => {
  carousel.allow_long_swipes = ls_switch.active;
});

if (indicator_row.get_selected() === 0) {
  indicators = new Adw.CarouselIndicatorDots({ carousel: carousel });
} else {
  indicators = new Adw.CarouselIndicatorLines({ carousel: carousel });
}

indicators.orientation = carousel.orientation;
root_box.append(indicators);

indicator_row.connect("notify::selected-item", () => {
  root_box.remove(indicators);

  if (indicator_row.get_selected() === 0) {
    indicators = new Adw.CarouselIndicatorDots({ carousel: carousel });
  } else {
    indicators = new Adw.CarouselIndicatorLines({ carousel: carousel });
  }

  indicators.orientation = carousel.orientation;
  root_box.append(indicators);
});

orientation_row.connect("notify::selected-item", () => {
  if (orientation_row.get_selected() === 0) {
    root_box.orientation = Gtk.Orientation.VERTICAL;
    carousel.orientation = Gtk.Orientation.HORIZONTAL;
    indicators.orientation = Gtk.Orientation.HORIZONTAL;
  } else {
    root_box.orientation = Gtk.Orientation.HORIZONTAL;
    carousel.orientation = Gtk.Orientation.VERTICAL;
    indicators.orientation = Gtk.Orientation.VERTICAL;
  }
});
