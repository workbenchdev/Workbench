const popover_ids = ["plain_popover", "popover_menu"];

for (const id of popover_ids) {
  const popover = workbench.builder.get_object(id);
  popover.connect("closed", onClosed);
}

function onClosed(popover) {
  console.log(`${popover.name} closed.`);
}

