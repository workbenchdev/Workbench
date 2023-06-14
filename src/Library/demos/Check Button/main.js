const checkbutton1 = workbench.builder.get_object("check_button1");
const checkbutton2 = workbench.builder.get_object("check_button2");
const checkbutton3 = workbench.builder.get_object("check_button3");
let state = 0;
checkbutton1.connect("toggled", () => {
  console.log(checkbutton1.active ? "Notifications: On" : "Notifications: Off");
});

checkbutton2.connect("toggled", () => {
  console.log(checkbutton2.active ? "Auto-save: On" : "Auto-save: Off");
});

checkbutton3.connect("toggled", () => {
  switch (state) {
    case 0:
      checkbutton3.inconsistent = false;
      checkbutton3.active = true;
      console.log("Mark as Done: On");
      state = 1;
      break;
    case 1:
      checkbutton3.inconsistent = false;
      console.log("Mark as Done: Off");
      state = 2;
      break;
    case 2:
      checkbutton3.inconsistent = true;
      console.log("Mark as Done: Inconsistent");
      state = 0;
      break;
  }
});

const radiobutton1 = workbench.builder.get_object("radio_button1");
const radiobutton2 = workbench.builder.get_object("radio_button2");
const radiobutton3 = workbench.builder.get_object("radio_button3");

radiobutton1.connect("toggled", () => {
  if (radiobutton1.active) console.log("Force System Style");
});

radiobutton2.connect("toggled", () => {
  if (radiobutton2.active) console.log("Force Light Mode");
});

radiobutton3.connect("toggled", () => {
  if (radiobutton3.active) console.log("Force Dark Mode");
});
