const button_ids = [
  "button00",
  "button01",
  "button02",
  "button10",
  "button11",
  "button12",
  "button20",
  "button21",
  "button22",
];

for (const id of button_ids) {
  const button = workbench.builder.get_object(id);
  button.connect("clicked", onClicked);
}

function onClicked(button) {
  if (button.label === "#") {
    button.label = "x";
  } else {
    button.label = "o";
  }
  console.log(
    `button${button.name} clicked and now have label '${button.label}'`,
  );
}

