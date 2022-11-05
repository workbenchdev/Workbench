import GObject from "gi://GObject";
import Gtk from "gi://Gtk";

export function getObjectClass(class_name) {
  const split = class_name.split(/(?=[A-Z])/);
  if (split.length < 2) return;

  const [ns, ...rest] = split;
  return imports.gi[ns]?.[rest.join("")];
}

export function isPreviewable(class_name) {
  const klass = getObjectClass(class_name);
  if (!klass) return false;

  return GObject.type_is_a(klass, Gtk.Widget);
}

// TODO: GTK Builder shouldn't crash when encountering a non buildable parent
// https://github.com/sonnyp/Workbench/issues/49
export function assertBuildable(el) {
  for (const el_object of el.getChildren("object")) {
    assertObjectBuildable(el_object);
  }
}

function assertObjectBuildable(el_object) {
  const class_name = el_object.attrs.class;
  if (class_name) {
    const klass = getObjectClass(class_name);
    // GLib-GObject-ERROR: cannot create instance of abstract (non-instantiatable) type 'GtkWidget'
    if (klass && GObject.type_test_flags(klass, GObject.TypeFlags.ABSTRACT)) {
      throw new Error(`${class_name} is an abstract type`);
    }
    if (klass && !GObject.type_is_a(klass, Gtk.Buildable)) {
      throw new Error(`${class_name} is not a GtkBuildable`);
    }
  }

  for (const el_child of el_object.getChildren("child")) {
    for (const el of el_child.getChildren("object")) {
      assertObjectBuildable(el);
    }
  }
}
