const drop_down = workbench.builder.get_object("drop_down");

drop_down.connect("notify::selected-item", () => {
  const selected_item = drop_down.selected_item.get_string();
  console.log(selected_item);
});
