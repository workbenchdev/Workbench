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
    asssertBuildableIterate(el_object);
  }
}

function asssertBuildableIterate(el_object) {
  const parent = el_object.parent?.parent;
  if (parent && parent !== el_object.root()) {
    const klass = getObjectClass(parent.attrs.class);
    if (!klass) return;
    if (GObject.type_is_a(klass, Gtk.Buildable)) return;
    throw new Error(`${parent.attrs.class} is not a GtkBuildable`);
  }

  for (const el_child of el_object.getChildren("child")) {
    for (const el of el_child.getChildren("object")) {
      asssertBuildableIterate(el);
    }
  }
}
