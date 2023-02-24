import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";

const switch_on = workbench.builder.get_object("switch_on");
const label_on = workbench.builder.get_object("label_on");
const switch_off = workbench.builder.get_object("switch_off");
const label_off = workbench.builder.get_object("label_off");

switch_on.set_active(true);
switch_off.set_active(false);

function checkone(){
  if (switch_on.get_active()){
    label_on.label = "On";
  } else {
    label_on.label = "Off";
  }
}

function checktwo(){
  if (switch_off.get_active()){
    label_off.label = "On";
  } else {
    label_off.label = "Off";
  }
}

switch_on.connect("notify::active",checkone);
switch_off.connect("notify::active",checktwo);
