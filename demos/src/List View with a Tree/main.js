import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Gio from "gi://Gio";

const list_view = workbench.builder.get_object("list_view");
const factory = workbench.builder.get_object("factory");

const TreeNode = GObject.registerClass(
  class TreeNode extends GObject.Object {
    constructor(title, children) {
      super();
      this.title = title;
      this.children = children;
    }
  },
);

const TreeWidget = GObject.registerClass(
  class TreeWidget extends Gtk.Box {
    constructor(...args) {
      super(...args);
      this.spacing = 6;
      this.margin_start = 6;
      this.margin_end = 12;
      this.margin_top = 6;
      this.margin_bottom = 6;

      this.expander = new Gtk.TreeExpander();
      this.label = new Gtk.Label({ halign: Gtk.Align.START });

      this.append(this.expander);
      this.append(this.label);
    }
  },
);

function create_model_func(item) {
  if (item.children.length < 1) return null;
  const child_model = new Gio.ListStore(TreeNode);
  for (const child of item.children) {
    child_model.append(child);
  }
  return child_model;
}

factory.connect("setup", (_self, list_item) => {
  list_item.set_child(new TreeWidget());
});

factory.connect("bind", (_self, list_item) => {
  const list_row = list_item.get_item();
  const widget = list_item.get_child();
  const item = list_row.get_item();

  widget.expander.set_list_row(list_row);
  widget.label.set_label(item.title);
});

const root_model = new TreeNode("Root", [
  new TreeNode("Child 1", [
    new TreeNode("Child 1.1", []),
    new TreeNode("Child 1.2", []),
  ]),
  new TreeNode("Child 2", [
    new TreeNode("Child 2.1", []),
    new TreeNode("Child 2.2", []),
    new TreeNode("Child 2.3", [new TreeNode("Child 3.1", [])]),
  ]),
]);

const tree_model = new Gio.ListStore(TreeNode);
tree_model.append(root_model);

const tree_list_model = Gtk.TreeListModel.new(
  tree_model,
  false,
  true,
  create_model_func,
);
tree_list_model.set_autoexpand(false);

const selection_model = new Gtk.NoSelection({ model: tree_list_model });

list_view.set_model(selection_model);
