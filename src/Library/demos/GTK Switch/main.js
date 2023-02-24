import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";

const Switch1 = workbench.builder.get_object("one");
const Switch2 = workbench.builder.get_object("second");
const Label1 = workbench.builder.get_object("switch_one");
const Label2 =  workbench.builder.get_object("switch_second");

Switch1.set_active(true);
Switch2.set_active(false);

function checkone(){
  if (Switch1.get_active()){
    console.log("Switch turned on");
    Label1.label = "Currently in Active State";
  } else {
    console.log("Switch turned off");
    Label1.label = "Currently in Inactive State";
  }
}

function checktwo(){
  if (Switch2.get_active()){
    console.log("Switch turned on");
    Label2.label = "Currently in Active State";
  } else {
    console.log("Switch turned off");
    Label2.label = "Currently in Inactive State";
  }
}

Switch1.connect("notify::active",checkone);
Switch2.connect("notify::active",checktwo);
