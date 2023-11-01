#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Adw.Bin ball;

public void main () {
  var button_timed = (Gtk.Button) workbench.builder.get_object ("button_timed");
  var progress_bar = (Gtk.ProgressBar) workbench.builder.get_object ("progress_bar");
  var target_timed = new Adw.PropertyAnimationTarget (progress_bar, "fraction");

  var animation_timed = new Adw.TimedAnimation (
    progress_bar, // Widget
    0, 1, // Initial value, final value
    1500, // Duration (in milliseconds)
    target_timed // Animation target
  );
  animation_timed.easing = EASE_IN_OUT_CUBIC;

  button_timed.clicked.connect (() => animation_timed.play ());
  animation_timed.done.connect (() => animation_timed.reset ());

  var button_spring = (Gtk.Button) workbench.builder.get_object ("button_spring");
  ball = (Adw.Bin) workbench.builder.get_object ("ball");

  var spring_target = new Adw.CallbackAnimationTarget (animation_callback);
  var spring_params = new Adw.SpringParams (
    0.5, // Damping Ratio
    1.0, // Mass
    50.0 // Stiffness
  );

  var spring_animation = new Adw.SpringAnimation (
    ball, // Widget
    0, 8.5, // Initial value, final value
    spring_params, // Spring params
    spring_target // Animation target
  );

  spring_animation.initial_velocity = 1.0;
  spring_animation.epsilon = 0.001;
  spring_animation.clamp = false;

  button_spring.clicked.connect (() => spring_animation.play ());
}

private void animation_callback (double value) {
  double x = Adw.lerp (0, 60, value);
  move_widget (ball, x, 0);
}

private void move_widget (Gtk.Widget widget, double x, double y) {
  var transform = new Gsk.Transform ();
  var point = Graphene.Point () {
    x = (float) x,
    y = (float) y
  };

  transform = transform.translate (point);
  widget.allocate (widget.get_width (), widget.get_height (), -1, transform);
}
