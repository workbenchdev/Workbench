import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk, GObject, Gio
import workbench

list_view = workbench.builder.get_object("list_view")
factory = workbench.builder.get_object("factory")


class TreeNode(GObject.Object):
    def __init__(self, _title, _children=None):
        super().__init__()
        self.children = _children or []
        self.title = _title


class TreeWidget(Gtk.Box):
    def __init__(self):
        super().__init__(
            spacing=6, margin_start=6, margin_end=12, margin_top=6, margin_bottom=6
        )

        self.expander = Gtk.TreeExpander.new()

        self.label = Gtk.Label(halign=Gtk.Align.START)

        self.append(self.expander)
        self.append(self.label)


def create_model_func(item):
    if item.children == []:
        return None
    child_model = Gio.ListStore.new(TreeNode)
    for child in item.children:
        child_model.append(child)
    return child_model


def on_setup(_, list_item):
    list_item.set_child(TreeWidget())


def on_bind(_, list_item):
    list_row = list_item.get_item()
    widget = list_item.get_child()
    item = list_row.get_item()

    widget.expander.set_list_row(list_row)
    widget.label.set_label(item.title)


factory.connect("setup", on_setup)
factory.connect("bind", on_bind)

root_model = TreeNode(
    "Root",
    [
        TreeNode("Child 1", [TreeNode("Child 1.1", []), TreeNode("Child 1.2", [])]),
        TreeNode(
            "Child 2",
            [
                TreeNode("Child 2.1", []),
                TreeNode("Child 2.2", []),
                TreeNode("Child 2.3", [TreeNode("Child 3.1", [])]),
            ],
        ),
    ],
)

tree_model = Gio.ListStore.new(TreeNode)
tree_model.append(root_model)

tree_list_model = Gtk.TreeListModel.new(tree_model, False, True, create_model_func)
tree_list_model.set_autoexpand(False)

selection_model = Gtk.NoSelection(model=tree_list_model)

list_view.set_model(selection_model)
