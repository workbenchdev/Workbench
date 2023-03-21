const bar_continuous = workbench.builder.get_object("bar_continuous");

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

// This is insecure and only for the purpose of demonstration.
// Consider using appropriate solutions instead
// such as https://github.com/dropbox/zxcvbn
function update_password_strength() {
  const level = Math.min(Math.ceil(entry.text.length / 2), 6);

  switch (level) {
    case 1:
      label_strength.label = "Very Weak";
      label_strength.css_classes = ["very-weak-label"];
      break;
    case 2:
      label_strength.label = "Weak";
      label_strength.css_classes = ["weak-label"];
      break;
    case 3:
    case 4:
      label_strength.label = "Moderate";
      label_strength.css_classes = ["moderate-label"];
      break;
    case 5:
    case 6:
      label_strength.label = "Strong";
      label_strength.css_classes = ["strong-label"];
      break;
    default:
      label_strength.label = "";
      label_strength.css_classes = [];
  }

  bar_discrete.value = level;
}
