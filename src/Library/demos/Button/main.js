const suggested = workbench.builder.get_object("Suggested");
const destructive = workbench.builder.get_object("Destructive");
const custom = workbench.builder.get_object("Custom");
const plus = workbench.builder.get_object("Plus");
const minus = workbench.builder.get_object("Minus");
const left = workbench.builder.get_object("Left");
const right = workbench.builder.get_object("Right");
const flat = workbench.builder.get_object("Flat");

function handleClick() {
  console.log("Button was Clicked");
}

suggested.connect("clicked", handleClick);
destructive.connect("clicked", handleClick);
custom.connect("clicked", handleClick);
plus.connect("clicked", handleClick);
minus.connect("clicked", handleClick);
left.connect("clicked", handleClick);
right.connect("clicked", handleClick);
flat.connect("clicked", handleClick);
custom.connect("clicked", handleClick);
