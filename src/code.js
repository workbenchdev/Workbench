import * as ltx from "./lib/ltx.js";
import postcss from "./lib/postcss.js";

// We are using postcss because it's also a dependency of prettier
// it would be great to keep the ast around and pass that to prettier
// so there is no need to re-parse but that's not supported yet
// https://github.com/prettier/prettier/issues/9114
// We are not using https://github.com/pazams/postcss-scopify
// because it's not compatible with postcss 8
export function scopeStylesheet(style) {
  const ast = postcss.parse(style);

  for (const node of ast.nodes) {
    if (node.selector) {
      node.selector = ".workbench_output " + node.selector;
    }
  }

  let str = "";
  postcss.stringify(ast, (s) => {
    str += s;
  });

  return str;
}

export function targetBuildable(code) {
  const tree = ltx.parse(code);

  const child = tree.children.find((child) => {
    if (typeof child === "string") return false;

    const class_name = child.attrs.class;
    if (!class_name) return false;

    const split = class_name.split(/(?=[A-Z])/);
    if (split.length < 2) return false;

    const [ns, ...rest] = split;
    const klass = imports.gi[ns]?.[rest.join("")];
    if (!klass) return false;

    // TODO: Figure out a better way to find out if a klass
    // inherits from GtkWidget
    const instance = new klass();
    if (typeof instance.get_parent !== "function") return false;

    return true;
  });

  if (!child) {
    return [null, ""];
  }

  if (!child.attrs.id) {
    child.attrs.id = "workbench_target";
  }

  return [child.attrs.id, tree.toString()];
}

export function replaceBufferText(buffer, text) {
  buffer.begin_user_action();
  buffer.delete(buffer.get_start_iter(), buffer.get_end_iter());
  buffer.insert(buffer.get_start_iter(), text, -1);
  buffer.end_user_action();
}
