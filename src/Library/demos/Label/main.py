import workbench

label = workbench.builder.get_object("label")
justification_row = workbench.builder.get_object("justification_row")
style_row = workbench.builder.get_object("style_row")
single_line_switch = workbench.builder.get_object("single_line_switch")

style_classes = [
    "none",
    "title-1",
    "title-2",
    "title-3",
    "title-4",
    "monospace",
    "accent",
    "success",
    "warning",
    "error",
    "heading",
    "body",
    "caption-heading",
    "caption",
]

short_label = "<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore disputandum putant."

long_label = """     <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem.
Ut enim mortis metu omnis quietae vitae status perturbatur,
et ut succumbere doloribus eosque humili animo inbecilloque ferre miserum est,
ob eamque debilitatem animi multi parentes, multi amicos, non nulli patriam,
plerique autem se ipsos penitus perdiderunt, sic robustus animus et excelsus omni."""

label.set_label(short_label)


def on_single_line_changed(*args):
    if single_line_switch.get_active():
        label.set_label(short_label)
    else:
        label.set_label(long_label)


single_line_switch.connect("notify::active", on_single_line_changed)

justification_row.connect(
    "notify::selected", lambda *_: label.set_justify(justification_row.get_selected())
)


def on_style_class_selected(row, item):
    # Remove all existing style classes
    for style_class in style_classes:
        label.remove_css_class(style_class)

    if style_row.get_selected() == 0:
        return

    # Add the new style class
    new_style_class = style_classes[style_row.get_selected()]
    label.add_css_class(new_style_class)


style_row.connect("notify::selected", on_style_class_selected)
