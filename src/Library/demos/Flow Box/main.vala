#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.FlowBox flowbox;

public void main () {
  flowbox = (Gtk.FlowBox) workbench.builder.get_object ("flowbox");

  for (unichar unicode = 128513; unicode <= 128591; unicode++) {
    add_emoji (unicode.to_string ());
  }

  flowbox.child_activated.connect ((item) => {
    Gtk.Label emoji_label = (Gtk.Label) item.child;
    unichar emoji_code = emoji_label.label.get_char (0);
    message ("Unicode: %x", emoji_code);
  });
}

private void add_emoji (string emoji) {
  var item = new Gtk.Label (emoji) {
    vexpand = true,
    hexpand = true,
    width_request = 100,
    height_request = 100,
    css_classes = { "emoji", "card" }
  };

  flowbox.append (item);
}
