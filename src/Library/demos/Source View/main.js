import GtkSource from "gi://GtkSource";

// Strictly speaking we don't _have_ to do this here since WorkBench does this for us.
// However, you _have_ to call this once during the startup in your application - e.g. in GApplication::startup
GtkSource.init();

// Get the language we want to use
const language_manager = GtkSource.LanguageManager.get_default();
const language = language_manager.get_language("js");

// Create the buffer - this holds the text that's used in the SourceView
const buffer = GtkSource.Buffer.new_with_language(language);
buffer.set_text('console.log("Hello World!");', -1);

// Create the SourceView which displays the buffer's display
const source_view = new GtkSource.View({
  auto_indent: true,
  indent_width: 4,
  buffer,
  show_line_numbers: true,
});

// Add the SourceView to our ScrolledView so its displayed
const scrolled_window = workbench.builder.get_object("scrolled_window");
scrolled_window.set_child(source_view);
