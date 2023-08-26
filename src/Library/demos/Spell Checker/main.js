import GtkSource from "gi://GtkSource";
import Spelling from "gi://Spelling";
import Adw from "gi://Adw";

GtkSource.init();

const buffer = workbench.builder.get_object("buffer");
const text_view = workbench.builder.get_object("text_view");

// Spell checking setup
const checker = Spelling.Checker.get_default();
checker.set_language("en_US"); // set to U.S English
const adapter = Spelling.TextBufferAdapter.new(buffer, checker);
const extra_menu = adapter.get_menu_model();

text_view.set_extra_menu(extra_menu);
text_view.insert_action_group("spelling", adapter);

adapter.set_enabled(true);

