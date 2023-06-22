import Gdk from "gi://Gdk";

const textview = workbench.builder.get_object("textview");
const select = workbench.builder.get_object("select");
const copy = workbench.builder.get_object("copy");
const cut = workbench.builder.get_object("cut");
const clear = workbench.builder.get_object("clear");
const paste = workbench.builder.get_object("paste");

const display = Gdk.Display.get_default();
const clipboard = display.get_clipboard();

const { buffer } = textview;
buffer.set_text(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar. Molestie nunc non blandit massa enim nec dui nunc. Turpis in eu mi bibendum neque egestas congue quisque. Sed velit dignissim sodales ut. Massa tempor nec feugiat nisl pretium fusce id velit. Vitae congue eu consequat ac felis donec et. Ultrices sagittis orci a scelerisque purus semper eget duis at. Habitant morbi tristique senectus et netus et malesuada fames ac. Vitae aliquet nec ullamcorper sit amet risus nullam. Tortor at auctor urna nunc. Eget velit aliquet sagittis id consectetur purus. Libero id faucibus nisl tincidunt eget. Nunc consequat interdum varius sit amet mattis. Enim facilisis gravida neque convallis. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Venenatis tellus in metus vulputate eu scelerisque.Sit amet luctus venenatis lectus magna fringilla urna. Eget nunc lobortis mattis aliquam. Urna duis convallis convallis tellus id interdum velit. Fames ac turpis egestas maecenas. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget est lorem ipsum dolor sit amet consectetur. Eget nunc lobortis mattis aliquam faucibus purus in. Iaculis nunc sed augue lacus viverra vitae. Euismod elementum nisi quis eleifend. Et pharetra pharetra massa massa ultricies mi quis. Volutpat odio facilisis mauris sit. Enim ut tellus elementum sagittis vitae et. Volutpat sed cras ornare arcu dui vivamus arcu felis. Arcu vitae elementum curabitur vitae nunc sed. Porttitor rhoncus dolor purus non enim. Scelerisque fermentum dui faucibus in ornare quam viverra. Amet purus gravida quis blandit turpis cursus. Faucibus pulvinar elementum integer enim. Aenean et tortor at risus viverra adipiscing at in.Vitae ultricies leo integer malesuada nunc vel. Quis lectus nulla at volutpat diam ut. Donec ac odio tempor orci dapibus ultrices. Justo eget magna fermentum iaculis eu non diam. Mauris cursus mattis molestie a iaculis at erat pellentesque. Phasellus faucibus scelerisque eleifend donec pretium. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Habitant morbi tristique senectus et netus. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Nulla malesuada pellentesque elit eget. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Sollicitudin ac orci phasellus egestas tellus. In hendrerit gravida rutrum quisque non tellus orci ac. Suspendisse ultrices gravida dictum fusce ut placerat. Varius morbi enim nunc faucibus. Tellus elementum sagittis vitae et leo duis ut diam. Velit dignissim sodales ut eu sem integer. Sapien eget mi proin sed libero enim. Odio euismod lacinia at quis risus. Tellus at urna condimentum mattis pellentesque id.",
  -1,
);

function handleCopy() {
  if (buffer.get_has_selection()) {
    buffer.copy_clipboard(clipboard);
    console.log("Text copied to clipboard");
  } else {
    console.log("No text selected to copy");
  }
}

function handlePaste() {
  buffer.paste_clipboard(clipboard, null, true);
  console.log("Text pasted");
}

function handleCut() {
  if (buffer.get_has_selection()) {
    buffer.cut_clipboard(clipboard, true);
    console.log("Text cut to clipboard");
  } else {
    console.log("No text selected to cut");
  }
}

copy.connect("clicked", handleCopy);
paste.connect("clicked", handlePaste);
cut.connect("clicked", handleCut);
select.connect("clicked", () => {
  buffer.select_range(buffer.get_start_iter(), buffer.get_end_iter());
});
clear.connect("clicked", () => {
  buffer.delete(buffer.get_start_iter(), buffer.get_end_iter());
});

textview.connect("copy-clipboard", () => {
  console.log("Text copied to clipboard");
});
textview.connect("cut-clipboard", () => {
  console.log("Text cut to clipboard");
});
textview.connect("paste-clipboard", () => {
  console.log("Text pasted");
});
