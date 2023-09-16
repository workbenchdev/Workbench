// Pango is a text layout library. It can e.g. be used for formatting text
// https://gjs-docs.gnome.org/pango10~1.0/
import Pango from "gi://Pango";

const label = workbench.builder.get_object("label");
label.connect("notify::label", updateAttributes);
updateAttributes();

function updateAttributes() {
  // A Pango Attribute List is used to style the label
  label.attributes = rainbowAttributes(label.label);
}

// Generates an Attribute List that styles the label in rainbow colors.
// The `str` parameter is needed to detect string length + position of spaces
function rainbowAttributes(str) {
  const RAINBOW_COLORS = [
    "#D00",
    "#C50",
    "#E90",
    "#090",
    "#24E",
    "#55E",
    "#C3C",
  ];

  // Create a color array with the length needed to color all the letters
  const colorArray = [];
  for (let i = 0; i < str.length; i = colorArray.length) {
    colorArray.push(...RAINBOW_COLORS);
  }
  // Independent variable from `i` in the following loop to avoid spaces "consuming" a color
  let colorIdx = 0;

  let attrListString = "";
  for (let i = 0; i < str.length; i++) {
    // Skip space characters
    if (str[i] !== " ") {
      const startIdx = i;
      const endIdx = [i + 1];

      const color = colorArray[colorIdx];
      colorIdx++;
      // See comment below
      attrListString += `${startIdx} ${endIdx} foreground ${color},`;
    }
  }

  // For more info about the syntax for this function, see:
  // https://docs.gtk.org/Pango/method.AttrList.to_string.html
  return Pango.attr_list_from_string(attrListString);
}

