#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1 --pkg gtksourceview-5

public void main () {
  Gtk.init ();
  GtkSource.init ();

  // Get the language we want to use
  var language_manager = GtkSource.LanguageManager.get_default();
  var language = language_manager.get_language("js");
  // Create the buffer - this holds the text that's used in the SourceView
  var buffer = new GtkSource.Buffer.with_language(language);
  buffer.set_text("console.log(\"Hello World!\");");

  // Create the SourceView which displays the buffer's display
  var source_view = new GtkSource.View.with_buffer(buffer);
  source_view.auto_indent = true;
  source_view.indent_width = 4;
  source_view.show_line_numbers = true;

  // Add the SourceView to our ScrolledView so its displayed
  var scrolled_window = workbench.builder.get_object ("scrolled_window") as Gtk.ScrolledWindow;
  scrolled_window.child = source_view;
}
