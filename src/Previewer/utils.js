import GObject from "gi://GObject";
import Gtk from "gi://Gtk";

export function getObjectClass(class_name) {
  const split = class_name.split(/(?=[A-Z])/);
  if (split.length < 2) return;

  const [ns, ...rest] = split;
  return imports.gi[ns]?.[rest.join("")];
}

// TODO: GTK Builder shouldn't crash when encountering a non buildable parent
// https://github.com/sonnyp/Workbench/issues/49
export function assertBuildable(el) {
  for (const el_object of el.getChildren("object")) {
    assertObjectBuildable(el_object);
  }
}

function assertObjectBuildable(el_object) {
  const children = el_object.getChildren("child");

  if (children.length > 0 && el_object.attrs.class) {
    const klass = getObjectClass(el_object.attrs.class);
    if (klass && !GObject.type_is_a(klass, Gtk.Buildable)) {
      throw new Error(`${el_object.attrs.class} is not a GtkBuildable`);
    }
  }

  for (const el_child of el_object.getChildren("child")) {
    for (const el of el_child.getChildren("object")) {
      assertObjectBuildable(el);
    }
  }
}
