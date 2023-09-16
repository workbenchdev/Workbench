import Gio from "gi://Gio";
import GObject from "gi://GObject";

import { setup as setupVala } from "./langs/vala/vala.js";
import { setup as setupJavaScript } from "./langs/javascript/javascript.js";
import { settings as global_settings } from "./util.js";

export default function PanelCode({
  builder,
  previewer,
  document_vala,
  document_javascript,
  settings,
}) {
  const panel_code = builder.get_object("panel_code");
  const button_code = builder.get_object("button_code");
  const stack_code = builder.get_object("stack_code");

  const dropdown_code_lang = builder.get_object("dropdown_code_lang");
  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  dropdown_code_lang.get_first_child().add_css_class("flat");

  settings.bind(
    "show-code",
    button_code,
    "active",
    Gio.SettingsBindFlags.DEFAULT,
  );
  button_code.bind_property(
    "active",
    panel_code,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );

  settings.bind(
    "code-language",
    dropdown_code_lang,
    "selected",
    Gio.SettingsBindFlags.DEFAULT,
  );
  dropdown_code_lang.connect("notify::selected-item", switchLanguage);

  settings.connect("changed::code-language", () => {
    global_settings.set_int(
      "recent-code-language",
      settings.get_int("code-language"),
    );
  });

  const panel = {
    panel: panel_code,
  };

  setupVala({ document: document_vala });
  setupJavaScript({ document: document_javascript });

  function switchLanguage() {
    panel.language = dropdown_code_lang.selected_item.string;
    stack_code.visible_child_name = panel.language;
    previewer.useInternal().catch(console.error);
  }
  switchLanguage();

  return panel;
}