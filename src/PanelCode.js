import Gio from "gi://Gio";
import GObject from "gi://GObject";

import { settings } from "./util.js";

export default function PanelUI({ builder, previewer }) {
  const panel_javascript = builder.get_object("panel_javascript");
  const button_javascript = builder.get_object("button_javascript");
  const code_dropdown = builder.get_object("code_dropdown");
  const stack_code = builder.get_object("stack_code");

  settings.bind(
    "show-code",
    button_javascript,
    "active",
    Gio.SettingsBindFlags.DEFAULT
  );
  button_javascript.bind_property(
    "active",
    panel_javascript,
    "visible",
    GObject.BindingFlags.SYNC_CREATE
  );

  settings.bind(
    "code-language",
    code_dropdown,
    "selected",
    Gio.SettingsBindFlags.DEFAULT
  );
  code_dropdown.connect("notify::selected-item", switchLanguage);

  const panel = {};

  function switchLanguage() {
    panel.language = code_dropdown.selected_item.string;
    stack_code.visible_child_name = panel.language;
    previewer.setLanguage(panel.language);
  }
  switchLanguage();

  return panel;
}
