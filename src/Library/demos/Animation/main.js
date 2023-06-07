import Adw from "gi://Adw";
import Gsk from "gi://Gsk";
import Graphene from "gi://Graphene";

const button_timed = workbench.builder.get_object("button_timed");
const progress_bar = workbench.builder.get_object("progress_bar");
const target_timed = Adw.PropertyAnimationTarget.new(progress_bar, "fraction");

const animation_timed = new Adw.TimedAnimation({
  widget: progress_bar,
  value_from: 0,
  value_to: 1,
  duration: 1500,
  easing: Adw.Easing["EASE_IN_OUT_CUBIC"],
  target: target_timed,
});

button_timed.connect("clicked", () => {
  animation_timed.play();
});

animation_timed.connect("done", () => {
  animation_timed.reset();
});

const button_spring = workbench.builder.get_object("button_spring");
const ball = workbench.builder.get_object("ball");

const target_spring = Adw.CallbackAnimationTarget.new(animation_cb);
const params = Adw.SpringParams.new(
  // Damping Ratio
  0.5,
  // Mass
  1.0,
  // Stiffness
  50.0,
);
const animation_spring = new Adw.SpringAnimation({
  widget: ball,
  value_from: 0,
  value_to: 8.5,
  spring_params: params,
  target: target_spring,
});
animation_spring.initial_velocity = 1.0;
// If amplitude of oscillation < epsilon, animation stops
animation_spring.epsilon = 0.001;
animation_spring.clamp = false;

button_spring.connect("clicked", () => {
  animation_spring.play();
});

function animation_cb(value) {
  const x = Adw.lerp(0, 60, value);
  move_widget(ball, x, 0);
}

function move_widget(widget, x, y) {
  let transform = new Gsk.Transform();
  const p = new Graphene.Point({ x: x, y: y });
  transform = transform.translate(p);
  widget.allocate(widget.get_width(), widget.get_height(), -1, transform);
}
