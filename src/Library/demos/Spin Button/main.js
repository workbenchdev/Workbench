import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";

Gtk.init();

const open_spin_box = workbench.builder.get_object("open_spinbox");

// Create new Gtk instances
const spin_button = new Gtk.SpinButton();
const adjustment = new Gtk.Adjustment({
  lower: 0,
  page_increment: 1,
  step_increment: 1,
  upper: 100,
  value: 0,
});

spin_button.set_adjustment(adjustment);

const Application = GObject.registerClass(
  {},
  class extends Gtk.Application {
    vfunc_activate() {
      const window = new Gtk.ApplicationWindow({ application: this });
      const box = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        marginTop: 36,
        marginBottom: 36,
        marginStart: 36,
        marginEnd: 36,
        spacing: 16,
      });

      box.append(spin_button);

      window.child = box;
      window.set_default_size(400, 200);
      window.present();
    }
  },
);

const app = new Application();

open_spin_box.connect("clicked", () => {
  app.vfunc_activate();
});

