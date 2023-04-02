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

let step = 1;
function onClicked(button) {
  //check access for user action
  let image = button.get_child();
  if (image.icon_name) {
    return;
  } else {
    //store and show user action
    image.icon_name = "cross-large-symbolic";
    //calculate pc reaction
    let pc_is_thinking = true;
    let pc_is_thinking_row;
    let pc_is_thinking_col;
    while (pc_is_thinking) {
      pc_is_thinking_row = "" + Math.floor(Math.random() * 3);
      pc_is_thinking_col = "" + Math.floor(Math.random() * 3);
      //make pc reaction if possible
      let temp = workbench.builder.get_object(
        "button" + pc_is_thinking_row + pc_is_thinking_col,
      );
      let temp_image = temp.get_child();
      if (!temp_image.icon_name) {
        //store and show pc reaction
        temp_image.icon_name = "circle-outline-thick-symbolic";
        pc_is_thinking = false;
        step += 2;
      }
      if (step >= 8) pc_is_thinking = false;
    }
  }
}

