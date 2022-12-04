import Gio from "gi://Gio";
import GObject from "gi://GObject";

import { settings } from "./util.js";

import { setup as setupVala } from "./langs/vala.js";

export default function PanelCode({ builder, previewer, data_dir }) {
  const panel_code = builder.get_object("panel_code");
  const button_code = builder.get_object("button_code");
  const stack_code = builder.get_object("stack_code");

  const dropdown_code_lang = builder.get_object("dropdown_code_lang");
  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  dropdown_code_lang.get_first_child().get_style_context().add_class("flat");

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

  const panel = {
    panel: panel_code,
  };

  setupVala({ data_dir });

  function switchLanguage() {
    panel.language = dropdown_code_lang.selected_item.string;
    stack_code.visible_child_name = panel.language;
    previewer.useInternal();
    previewer.update();
  }
  switchLanguage();

  return panel;
}
