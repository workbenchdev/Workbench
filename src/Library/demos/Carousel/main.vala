#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main() {
  var root_box = workbench.builder.get_object("root_box") as Gtk.Box;
  var carousel = workbench.builder.get_object("carousel") as Adw.Carousel;
  var ls_switch = workbench.builder.get_object("ls_switch") as Gtk.Switch;
  var sw_switch = workbench.builder.get_object("sw_switch") as Gtk.Switch;
  var indicator_row = workbench.builder.get_object("indicator_row") as Adw.ComboRow;
  var orientation_row = workbench.builder.get_object("orientation_row") as Adw.ComboRow;
  Adw.CarouselIndicatorDots? dots = null;
  Adw.CarouselIndicatorLines? lines = null;

  carousel.page_changed.connect(() => {
    debug("Page Changed");
  });

  // Scroll Wheel Switch
  sw_switch.active = carousel.allow_scroll_wheel;
  sw_switch.notify["active"].connect(() => {
    carousel.allow_scroll_wheel = sw_switch.active;
  });

  // Long Swipe Switch
  ls_switch.active = carousel.allow_long_swipes;
  ls_switch.notify["active"].connect(() => {
    carousel.allow_long_swipes = ls_switch.active;
  });

  if (indicator_row.get_selected() == 0) {
    dots = new Adw.CarouselIndicatorDots() {
      carousel = carousel
    };
    dots.orientation = carousel.orientation;
    root_box.append(dots);
  } else {
    lines = new Adw.CarouselIndicatorLines() {
      carousel = carousel
    };
    lines.orientation = carousel.orientation;
    root_box.append(lines);
  }

  indicator_row.notify["selected-item"].connect(() => {
    if (indicator_row.get_selected() == 0) {
      root_box.remove(lines);
      dots = new Adw.CarouselIndicatorDots() {
        carousel = carousel
      };
      dots.orientation = carousel.orientation;
      root_box.append(dots);
    } else {
      root_box.remove(dots);
      lines = new Adw.CarouselIndicatorLines() {
        carousel = carousel
      };
      lines.orientation = carousel.orientation;
      root_box.append(lines);
    }
  });

  orientation_row.notify["selected-item"].connect(() => {
    if (orientation_row.get_selected() == 0) {
      root_box.orientation = Gtk.Orientation.VERTICAL;
      carousel.orientation = Gtk.Orientation.HORIZONTAL;
      dots.orientation = Gtk.Orientation.HORIZONTAL;
      lines.orientation = Gtk.Orientation.HORIZONTAL;
    } else {
      root_box.orientation = Gtk.Orientation.HORIZONTAL;
      carousel.orientation = Gtk.Orientation.VERTICAL;
      dots.orientation = Gtk.Orientation.VERTICAL;
      lines.orientation = Gtk.Orientation.VERTICAL;
    }
  });
}
