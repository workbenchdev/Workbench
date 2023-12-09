use crate::workbench;
use adw::prelude::*;
use glib::clone;
use gtk::{glib, graphene, gsk};

pub fn main() {
    gtk::init().unwrap();

    let button_timed: gtk::Button = workbench::builder().object("button_timed").unwrap();
    let progress_bar: gtk::ProgressBar = workbench::builder().object("progress_bar").unwrap();
    let target_timed = adw::PropertyAnimationTarget::new(&progress_bar, "fraction");

    let animation_timed = adw::TimedAnimation::builder()
        .widget(&progress_bar)
        .value_from(0.0)
        .value_to(1.0)
        .duration(1500)
        .easing(adw::Easing::EaseInOutQuad)
        .target(&target_timed)
        .build();

    animation_timed.connect_done(move |animation_timed| {
        animation_timed.reset();
    });

    button_timed.connect_clicked(move |_| {
        animation_timed.play();
    });

    let button_spring: gtk::Button = workbench::builder().object("button_spring").unwrap();
    let ball: adw::Bin = workbench::builder().object("ball").unwrap();

    let target_spring = adw::CallbackAnimationTarget::new(clone!(@weak ball => move |value| {
        let x = adw::lerp(0., 60., value);
        let p = graphene::Point::new(x as f32, 0.);
        let transform = gsk::Transform::new().translate(&p);
        ball.allocate(ball.width(), ball.height(), -1, Some(transform));
    }));

    let params = adw::SpringParams::new(
        0.5,  // Damping Ratio
        1.0,  // Mass
        50.0, // Stiffness
    );

    let animation_spring = adw::SpringAnimation::builder()
        .widget(&ball)
        .value_from(0.0)
        .value_to(8.5)
        .spring_params(&params)
        .target(&target_spring)
        .initial_velocity(1.0)
        .epsilon(0.001) // If amplitude of oscillation < epsilon, animation stops
        .clamp(false)
        .build();

    button_spring.connect_clicked(move |_| {
        animation_spring.play();
    });
}
