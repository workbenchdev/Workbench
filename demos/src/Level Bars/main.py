import workbench
import math

bar_continuous = workbench.builder.get_object("bar_continuous")

bar_continuous.add_offset_value("full", 100)
bar_continuous.add_offset_value("half", 50)
bar_continuous.add_offset_value("low", 25)

bar_discrete = workbench.builder.get_object("bar_discrete")

bar_discrete.add_offset_value("very-weak", 1)
bar_discrete.add_offset_value("weak", 2)
bar_discrete.add_offset_value("moderate", 4)
bar_discrete.add_offset_value("strong", 6)

entry = workbench.builder.get_object("entry")
label_strength = workbench.builder.get_object("label_strength")


# This is not a secure way to estimate password strength
# Use appropriate solutions instead
# such as https://github.com/dropbox/zxcvbn
def estimate_password_strength(_entry, _text):
    level = min(math.ceil(len(entry.get_text()) / 2), 6)

    match level:
        case 1:
            label_strength.set_label("Very Weak")
            label_strength.set_css_classes(["very-weak-label"])
        case 2:
            label_strength.set_label("Weak")
            label_strength.set_css_classes(["weak-label"])
        case 3 | 4:
            label_strength.set_label("Moderate")
            label_strength.set_css_classes(["moderate-label"])
        case 5 | 6:
            label_strength.set_label("Strong")
            label_strength.set_css_classes(["strong-label"])
        case _:
            label_strength.set_label("")
            label_strength.set_css_classes([])

    bar_discrete.set_value(level)


entry.connect("notify::text", estimate_password_strength)
