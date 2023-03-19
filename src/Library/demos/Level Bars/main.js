import Gtk from "gi://Gtk";

const bar_continuous = workbench.builder.get_object("bar_continuous");
const percentage_label = workbench.builder.get_object("percentage_label");

bar_continuous.add_offset_value("full", 100);
bar_continuous.add_offset_value("half", 50);
bar_continuous.add_offset_value("low", 25);

const bar_discrete = workbench.builder.get_object("bar_discrete");

bar_discrete.add_offset_value("very-weak", 1);
bar_discrete.add_offset_value("weak", 2);
bar_discrete.add_offset_value("moderate", 4);
bar_discrete.add_offset_value("strong", 6);

const entry = workbench.builder.get_object("entry");
const label_strength = workbench.builder.get_object("label_strength");

entry.connect("notify::text", () => {
  update_password_strength();
});

function update_password_strength() {
  // Check if password only has valid characters
  if (entry.text && !/[^a-zA-Z\d!@#$&*]/.test(entry.text)) {
    // Every 2 characters increases strength by 1
    bar_discrete.value = Math.min(Math.ceil(entry.text.length / 2), 6);
    if (0 < entry.text.length && entry.text.length <= 2) {
      label_strength.label = "Very Weak";
      label_strength.css_classes = ["very-weak-label"];
    } else if (3 <= entry.text.length && entry.text.length <= 4) {
      label_strength.label = "Weak";
      label_strength.css_classes = ["weak-label"];
    } else if (5 <= entry.text.length && entry.text.length <= 8) {
      label_strength.label = "Moderate";
      label_strength.css_classes = ["moderate-label"];
    } else if (9 <= entry.text.length) {
      label_strength.label = "Strong";
      label_strength.css_classes = ["strong-label"];
    }
    return;
  }
  bar_discrete.value = 0;
  label_strength.label = "Invalid Password";
  label_strength.css_classes = [];
}

