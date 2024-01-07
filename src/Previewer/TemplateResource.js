import Gio from "gi://Gio";
import { encode } from "../util.js";

function files(demoDirectory) {
  return {
    template_ui: demoDirectory.get_child("workbench_template.ui"),
    gresource: demoDirectory.get_child("workbench_demo.xml"),
  };
}

function generateGresource(templateName) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<gresources>
  <gresource prefix="/re/sonny/Workbench/demo">
    <file>${templateName}</file>
  </gresource>
</gresources>`;
}

/**
 * Utilities for writing composite templates to the demo session directory and generating a gresource file for it.
 * This can be used by external previewers that need this information at compile time and can not retrieve the
 * template via D-Bus + the previewer process.
 */
const template_resource = {
  async generateTemplateResourceFile(sessionDirectory) {
    const { template_ui, gresource } = files(sessionDirectory);
    await gresource.replace_contents_async(
      encode(generateGresource(template_ui.get_basename())),
      null,
      false,
      Gio.FileCreateFlags.NONE,
      null,
    );
    return gresource.get_path();
  },
  async writeTemplateUi(sessionDirectory, templateContents) {
    if (templateContents === null) {
      // If we don't have a template, we still generate an empty file to (try to) avoid confusing compiler errors if
      // the user tries to access the file via gresource.
      templateContents = encode(
        '<?xml version="1.0" encoding="UTF-8"?><interface></interface>',
      );
    }

    const { template_ui } = files(sessionDirectory);
    await template_ui.replace_contents_async(
      encode(templateContents),
      null,
      false,
      Gio.FileCreateFlags.NONE,
      null,
    );
  },
};

export default template_resource;
