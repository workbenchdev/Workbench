const checkbox1 = workbench.builder.get_object("checkbox1");
const checkbox2 = workbench.builder.get_object("checkbox2");
const checkbox3 = workbench.builder.get_object("checkbox3");

const state = {
  checkbox1: 0.5,
  checkbox2: false,
  checkbox3: true,
};

checkbox1.connect("toggled", () => {
  switch (state.checkbox1) {
    case 0.5:
      checkbox1.inconsistent = false;
      state.checkbox1 = 1;
      checkbox1.active = true;
      checkbox2.active = true;
      checkbox3.active = true;
      break;
    case 1:
      checkbox1.inconsistent = false;
      state.checkbox1 = 0;
      checkbox1.active = false;
      checkbox2.active = false;
      checkbox3.active = false;
      break;
    case 0:
      checkbox1.inconsistent = true;
      state.checkbox1 = 0.5;
      checkbox1.active = true;
      checkbox2.active = state.checkbox2;
      checkbox3.active = state.checkbox3;
      break;
  }
});
/*
1. Make the parent from inconsistent to true/false when
   all children are set to either true or false

2. Make the parent inconsistent if all checkbuttons have
   different states and overwrite the state of the child
   checkbox being toggled.


checkbox2.connect("toggled", () => {
  if (checkbox1.inconsistent) {
    if (checkbox2.active === state.checkbox3) {
      state.checkbox1 = 0.5;
      checkbox1.inconsistent = false;
      checkbox1.active = state.checkbox2;
    } else {
      state.checkbox2 = checkbox2.active;
    }
  } else if (checkbox2.active !== checkbox3.active) {
    checkbox1.inconsistent = true;
    state.checkbox1 = 0.5;
    state.checkbox2 = checkbox2.active;
  }
});

checkbox3.connect("toggled", () => {
  if (checkbox1.inconsistent) {
    if (checkbox3.active === state.checkbox2) {
      state.checkbox1 = 0.5;
      checkbox1.inconsistent = false;
      checkbox1.active = state.checkbox3;
    } else {
      state.checkbox3 = checkbox3.active;
    }
  } else if (checkbox2.active !== checkbox3.active) {
    checkbox1.inconsistent = true;
    state.checkbox1 = 0.5;
    state.checkbox3 = checkbox3.active;
  }
});*/

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
