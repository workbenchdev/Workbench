#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg gtksourceview-5

public void main () {
    /*
     * Strictly speaking we don't _have_ to do this here since WorkBench does this for us.
     * However, you _have_ to call this once during the startup in your application - e.g. in Application::startup
     */
    GtkSource.init ();

    var buffer = (GtkSource.Buffer) workbench.builder.get_object ("buffer");

    // Set the language we want to use
    var language_manager = GtkSource.LanguageManager.get_default ();
    var language = language_manager.get_language ("vala");
    buffer.language = language;

    // The buffer holds the text that's used in the SourceView
    buffer.text = "stdout.printf (\"Hello World\");";
}
