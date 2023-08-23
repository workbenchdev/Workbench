import GtkSource from "gi://GtkSource";
import Spelling from "gi://Spelling";
import Adw from "gi://Adw";

GtkSource.init();

const buffer = workbench.builder.get_object("buffer");
const source_view = workbench.builder.get_object("source_view");
const style_manager = Adw.StyleManager.get_default();
const scheme_manager = GtkSource.StyleSchemeManager.get_default();
const scheme = scheme_manager.get_scheme(
  style_manager.dark ? "Adwaita-dark" : "Adwaita",
);

buffer.style_scheme = scheme;

// Spell checking setup
const checker = Spelling.Checker.get_default();
const adapter = Spelling.TextBufferAdapter.new(buffer, checker);
const extra_menu = adapter.get_menu_model();

source_view.set_extra_menu(extra_menu);
source_view.insert_action_group("spelling", adapter);

adapter.set_enabled(true);

