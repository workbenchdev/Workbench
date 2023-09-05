import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const scrolled_window = workbench.builder.get_object("scrolled_window");
const container = workbench.builder.get_object("container");
const toggle_orientation = workbench.builder.get_object("toggle_orientation");
const button_start = workbench.builder.get_object("button_start");
const button_end = workbench.builder.get_object("button_end");
let auto_scrolling = false;

button_start.sensitive = false;

const scrollbars = {
  [Gtk.Orientation.HORIZONTAL]: scrolled_window.get_hscrollbar(),
  [Gtk.Orientation.VERTICAL]: scrolled_window.get_vscrollbar(),
};

toggle_orientation.connect("toggled", () => {
  if (toggle_orientation.active) {
    container.orientation = Gtk.Orientation.HORIZONTAL;
  } else {
    container.orientation = Gtk.Orientation.VERTICAL;
  }
});

const num_items = 20;
for (let i = 0; i < num_items; i++) {
  populateContainer(container, `Item ${i + 1}`);
}

for (const orientation in scrollbars) {
  const scrollbar = scrollbars[orientation];
  const adj = scrollbar.adjustment;
  adj.connect("value-changed", () => {
    if (adj.value === adj.lower) {
      button_end.sensitive = true;
      button_start.sensitive = false;
    } else if (adj.value === adj.upper - adj.page_size) {
      button_end.sensitive = false;
      button_start.sensitive = true;
    } else {
      // Disable buttons if scrollbar is auto-scrolling
      button_end.sensitive = !auto_scrolling;
      button_start.sensitive = !auto_scrolling;
    }
  });
}

scrolled_window.connect("edge-reached", () => {
  console.log("Edge Reached");
});

button_start.connect("clicked", () => {
  auto_scrolling = true;
  const scrollbar = scrollbars[container.orientation];
  const anim = createScrollbarAnim(scrollbar, 0);
  anim.play();
});

button_end.connect("clicked", () => {
  auto_scrolling = true;
  const scrollbar = scrollbars[container.orientation];
  const anim = createScrollbarAnim(scrollbar, 1);
  anim.play();
});

function populateContainer(container, label) {
  const item = new Adw.Bin({
    margin_top: 6,
    margin_bottom: 6,
    margin_start: 6,
    margin_end: 6,
    child: new Gtk.Label({
      label: label,
      width_request: 100,
      height_request: 100,
    }),
    css_classes: ["card"],
  });
  container.append(item);
}

function createScrollbarAnim(scrollbar, direction) {
  // direction = 0 -> Animates to Start
  // direction = 1 -> Animates to End
  const adjustment = scrollbar.adjustment;
  const target = Adw.PropertyAnimationTarget.new(adjustment, "value");
  const animation = new Adw.TimedAnimation({
    widget: scrollbar,
    value_from: adjustment.value,
    value_to: direction ? adjustment.upper - adjustment.page_size : 0,
    duration: 1000,
    easing: Adw.Easing["LINEAR"],
    target: target,
  });

  animation.connect("done", () => {
    auto_scrolling = false;
  });
  return animation;
}
