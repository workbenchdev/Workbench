import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import GtkSource from "gi://GtkSource";

GtkSource.init();

// Get the language we want to use
const language_manager = GtkSource.LanguageManager.get_default();
const language = language_manager.get_language("js");
	  // Create the buffer - this holds the text that's used in the SourceView
const buffer = GtkSource.Buffer.new_with_language(language);
buffer.set_text('console.log("Hello World!");', -1);

// Create the SourceView which displays the buffer's display
const view = GtkSource.View.new_with_buffer(buffer);
view.set_auto_indent(true);
view.set_indent_width = 4;
view.show_line_numbers = true;

// Add the SourceView to our ScrolledView so its displayed
const sw = workbench.builder.get_object("sw");
sw.set_child(view);

