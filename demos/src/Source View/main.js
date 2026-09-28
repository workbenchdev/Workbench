import GtkSource from "gi://GtkSource";

// Strictly speaking we don't _have_ to do this here since WorkBench does this for us.
// However, you _have_ to call this once during the startup in your application - e.g. in GApplication::startup
GtkSource.init();

const buffer = workbench.builder.get_object("buffer");

// Set the language we want to use
const language_manager = GtkSource.LanguageManager.get_default();
const language = language_manager.get_language("js");
buffer.set_language(language);

// The buffer holds the text that's used in the SourceView
buffer.set_text('console.log("Hello World!");', -1);
