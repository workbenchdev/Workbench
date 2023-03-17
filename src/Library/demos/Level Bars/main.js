import Gtk from "gi://Gtk";

const bar_continuous = workbench.builder.get_object("bar_continuous");
const percentage_label = workbench.builder.get_object("percentage_label");

bar_continuous.add_offset_value("full", 100);
bar_continuous.add_offset_value("half", 50);
bar_continuous.add_offset_value("low", 25);

bar_continuous.connect("notify::value", () => {
  percentage_label.label = `${Math.trunc(bar_continuous.value)}%`;
});

const bar_discrete = workbench.builder.get_object("bar_discrete");

bar_discrete.add_offset_value("very-weak", 1);
bar_discrete.add_offset_value("weak", 2);
bar_discrete.add_offset_value("moderate", 4);
bar_discrete.add_offset_value("strong", 6);

const entry = workbench.builder.get_object("entry");
const label_strength = workbench.builder.get_object("label_strength");

/*
Rules for password strength
Very Weak- 1-3 characters long, doesn't use all valid characters
Weak     - >=4 characters long, doesn't use all valid characters
Moderate - 5-7 characters long, uses all valid characters once
Strong   - >=8 characters long, uses all valid characters once

Valid characters include uppercase and lowercase letters,
special characters and digits
*/

const evaluate_strength = [
  null,
  // Very Weak
  /^((?=.*\d)|(?=.*[!@#$&*])|(?=.*[A-Z])|(?=.*[a-z])).{1,3}/,
  // Weak
  /^((?=.*\d)|(?=.*[!@#$&*])|(?=.*[A-Z])|(?=.*[a-z])).{4,}/,
  // Moderate
  /^(?=.*\d)(?=.*[!@#$&*])(?=.*[A-Z])(?=.*[a-z]).{5,6}/,
  /^(?=.*\d)(?=.*[!@#$&*])(?=.*[A-Z])(?=.*[a-z]).{7,}/,
  // Strong
  /^(?=.*\d)(?=.*[!@#$&*])(?=.*[A-Z])(?=.*[a-z]).{8,}/,
  /^(?=.*\d)(?=.*[!@#$&*])(?=.*[A-Z])(?=.*[a-z]).{10,}/,
];

entry.connect("notify::text", () => {
  update_password_strength();
});

function update_password_strength() {
  // Check if password only has valid characters
  if (!/[^a-zA-Z\d!@#$&*]/.test(entry.text)) {
    for (let level = 6; level > 0; level--) {
      if (evaluate_strength[level].test(entry.text)) {
        bar_discrete.value = level;
        if (level === 1) {
          label_strength.label = "Very Weak";
          label_strength.css_classes = ["very-weak-label"];
        }
        if (level === 2) {
          label_strength.label = "Weak";
          label_strength.css_classes = ["weak-label"];
        }
        if (level > 2 && level <= 4) {
          label_strength.label = "Moderate";
          label_strength.css_classes = ["moderate-label"];
        }
        if (level > 4 && level <= 6) {
          label_strength.label = "Strong";
          label_strength.css_classes = ["strong-label"];
        }
        return;
      }
    }
  }
  bar_discrete.value = 0;
  label_strength.label = "Invalid Password";
  label_strength.css_classes = [];
}
