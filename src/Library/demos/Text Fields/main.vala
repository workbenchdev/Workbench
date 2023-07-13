#!/usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

private Gtk.Entry entry;
private Gtk.Entry entry_placeholder;
private Gtk.Entry entry_icon;
private Gtk.Entry entry_progress;
private Gtk.Entry entry_completion;
private Gtk.PasswordEntry entry_password;
private Gtk.PasswordEntry entry_confirm_password;
private Gtk.Label label_password;

private Adw.PropertyAnimationTarget target;
private Adw.TimedAnimation animation;

public void main () {
  entry = (Gtk.Entry) workbench.builder.get_object ("entry");
  entry_placeholder = (Gtk.Entry) workbench.builder.get_object ("entry_placeholder");
  entry_icon = (Gtk.Entry) workbench.builder.get_object ("entry_icon");
  entry_progress = (Gtk.Entry) workbench.builder.get_object ("entry_progress");
  entry_completion = (Gtk.Entry) workbench.builder.get_object ("entry_completion");
  entry_password = (Gtk.PasswordEntry) workbench.builder.get_object ("entry_password");
  entry_confirm_password = (Gtk.PasswordEntry) workbench.builder.get_object ("entry_confirm_password");
  label_password = (Gtk.Label) workbench.builder.get_object ("label_password");

  entry.activate.connect(() => stdout.printf (@"Regular Entry: \"$(entry.text)\" entered\n"));
  entry_placeholder.activate.connect(() => stdout.printf (@"Placeholder Entry: \"$(entry_placeholder.text)\" entered\n"));
  entry_icon.activate.connect(() => stdout.printf (@"Icon Entry: \"$(entry_icon.text)\" entered\n"));
  entry_icon.icon_press.connect(() => stdout.printf ("Icon Pressed!\n"));
  entry_icon.icon_release.connect(() => stdout.printf ("Icon Released!\n"));
  entry_progress.activate.connect(() => stdout.printf (@"Progress Bar Entry: \"$(entry_progress.text)\" entered\n"));
  entry_progress.icon_press.connect(() => animation.play());

  target = new Adw.PropertyAnimationTarget(entry_progress, "progress-fraction");

  animation = new Adw.TimedAnimation(entry_progress, 0, 1, 2000, target) {
    easing = Adw.Easing.LINEAR
  };

  animation.done.connect(() => animation.reset());

  var completion = new Gtk.EntryCompletion();
  entry_completion.completion = completion;

  var list_store = new Gtk.ListStore(1, typeof(string));
  string[] words = { "a", "app", "apple", "apples", "applets", "application" };
  foreach (var word in words) {
    Gtk.TreeIter iter;
    list_store.append(out iter);
    list_store.set_value(iter, 0, word);
  }

  completion.model = list_store;
  completion.set_text_column(0);
  completion.inline_completion = true;
  completion.inline_selection = true;

  entry_password.activate.connect(() => {
    label_password.label = validate_password(entry_password.text, entry_confirm_password.text);
  });

  entry_confirm_password.activate.connect(() => {
    label_password.label = validate_password(entry_password.text, entry_confirm_password.text);
  });
}

private string validate_password(string password, string confirm_password) {
  if (password == "" && confirm_password == "") {
    return "Both fields are mandatory!";
  }

  if (password == confirm_password) {
    return "Password made successfully!";
  } else {
    return "Both fields should be matching!";
  }
}
