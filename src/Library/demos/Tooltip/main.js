const button = workbench.builder.get_object("button");
const custom_tooltip = workbench.builder.get_object("custom_tooltip");

button.connect("query-tooltip", (button, x, y, mode, tooltip) => {
  tooltip.set_custom(custom_tooltip);
  return true;
});
