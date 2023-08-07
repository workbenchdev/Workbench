import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const scrolled_window = workbench.builder.get_object("scrolled_window");
const container = workbench.builder.get_object("container");
const toggle_orientation = workbench.builder.get_object("toggle_orientation");
const button_start = workbench.builder.get_object("button_start");
const button_end = workbench.builder.get_object("button_end");

button_start.sensitive = false;

const scrollbars = [
  scrolled_window.get_hscrollbar(),
  scrolled_window.get_vscrollbar(),
];
let orientation = 0;
toggle_orientation.connect("toggled", () => {
  if (toggle_orientation.active) {
    container.orientation = Gtk.Orientation.HORIZONTAL;
    orientation = 0;
  } else {
    container.orientation = Gtk.Orientation.VERTICAL;
    orientation = 1;
  }
});

const num_items = 20;
for (let i = 0; i < num_items; i++) {
  populateContainer(container, `Item ${i + 1}`);
}

scrolled_window.connect("edge-reached", () => {
  const scrollbar = scrollbars[orientation];
  const adj = scrollbar.adjustment;
  // Enable end button if scrollbar is at the start
  button_end.sensitive = adj.value === adj.lower;
  button_start.sensitive = !button_end.sensitive;
  console.log("Edge Reached");
});

button_start.connect("clicked", () => {
  disableButtons();
  const scrollbar = scrollbars[orientation];
  const anim = createScrollbarAnim(scrollbar, 0);
  anim.play();
});

button_end.connect("clicked", () => {
  disableButtons();
  const scrollbar = scrollbars[orientation];
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

function disableButtons() {
  button_start.sensitive = false;
  button_end.sensitive = false;
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
  return animation;
}
