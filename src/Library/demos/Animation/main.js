import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import Gsk from "gi://Gsk";

const button = workbench.builder.get_object("button");
const container = workbench.builder.get_object("container");

const BallWidget = GObject.registerClass(
  {
    GTypeName: "BallWidget",
  },
  class BallWidget extends Adw.Bin {
    constructor() {
      super();
      this.layout_manager = null;
      this.css_classes = ["ball"];
    }
  },
);
const ball = new BallWidget();
container.append(ball);

const target = Adw.CallbackAnimationTarget.new(animation_cb);
const params = Adw.SpringParams.new(0.5, 1.0, 100.0);
const animation = Adw.SpringAnimation.new(ball, 0.0, 1.0, params, target);

animation.initial_velocity = 5.0;

button.connect("clicked", () => {
  animation.play();
});

const manager = Gtk.CustomLayout.new(
  null,
  animation_measure,
  animation_allocate,
);
// Dangerous Code Here
// ball.layout_manager = manager;
function animation_measure(orientation, for_size) {
  [minimum, natural, minimum_baseline, natural_baseline] = ball.measure(
    orientation,
    for_size,
  );
  return [minimum, natural, minimum_baseline, natural_baseline];
}

function animation_cb() {
  ball.queue_allocate();
}

function animation_allocate(width, height, baseline) {
  let child_width;
  const progress = animation.value;
  [child_width, , ,] = ball.measure(Gtk.Orientation.HORIZONTAL, -1);
  const offset = (width - child_width) * (progress - 0.5);
  let transform = new Gsk.Transform();
  transform = transform.translate([offset, 0]);
  ball.allocate(width, height, baseline, transform);
}
