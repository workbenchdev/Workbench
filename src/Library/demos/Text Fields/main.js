import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const entry = workbench.builder.get_object("entry");
const entry_placeholder = workbench.builder.get_object("entry_placeholder");
const entry_icon = workbench.builder.get_object("entry_icon");
const entry_progress = workbench.builder.get_object("entry_progress");

entry.connect("activate", () => {
  console.log(`Regular Entry: "${entry.text}" entered`);
});

entry_placeholder.connect("activate", () => {
  console.log(`Placeholder Entry: "${entry_placeholder.text}" entered`);
});

entry_icon.connect("activate", () => {
  console.log(`Icon Entry: "${entry_icon.text}" entered`);
});

entry_icon.connect("icon-press", () => {
  console.log("Icon Pressed!");
});

entry_icon.connect("icon-release", () => {
  console.log("Icon Released!");
});

entry_progress.connect("activate", () => {
  console.log(`Progress Bar Entry: "${entry_progress.text}" entered`);
});

entry_progress.connect("icon-press", () => {
  animation.play();
});

const target = Adw.PropertyAnimationTarget.new(
  entry_progress,
  "progress-fraction",
);

const animation = new Adw.TimedAnimation({
  widget: entry_progress,
  value_from: 0,
  value_to: 1,
  duration: 2000,
  easing: Adw.Easing["LINEAR"],
  target: target,
});

animation.connect("done", () => {
  animation.reset();
});

const entry_completion = workbench.builder.get_object("entry_completion");
const completion = new Gtk.EntryCompletion();

entry_completion.completion = completion;

const list_store = Gtk.ListStore.new([String]);
const words = ["a", "app", "apple", "apples", "applets", "application"];
words.forEach((word) => {
  const iter = list_store.append();
  list_store.set_value(iter, 0, word);
});
completion.model = list_store;

completion.set_text_column(0);
completion.inline_completion = true;
completion.inline_selection = true;

const entry_password = workbench.builder.get_object("entry_password");
const entry_confirm_password = workbench.builder.get_object(
  "entry_confirm_password",
);
const label_password = workbench.builder.get_object("label_password");

entry_password.connect("activate", () => {
  label_password.label = validate_password(
    entry_password.text,
    entry_confirm_password.text,
  );
});

entry_confirm_password.connect("activate", () => {
  label_password.label = validate_password(
    entry_password.text,
    entry_confirm_password.text,
  );
});

function validate_password(passwd, confirm_passwd) {
  if (passwd && confirm_passwd) {
    if (passwd === confirm_passwd) {
      return "Password made successfully!";
    } else {
      return "Both fields should be matching!";
    }
  } else {
    return "Both fields are mandatory!";
  }
}
