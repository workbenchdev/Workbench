import Gtk from "gi://Gtk";
import Gio from "gi://Gio"
import Adw from "gi://Adw";
import WebKit from "gi://WebKit?version=6.0"

import resource from "./DocumentationViewer.blp";

Gio._promisify(
  WebKit.WebView.prototype,
  "evaluate_javascript",
  "evaluate_javascript_finish"
);

export default function DocumentationViewer({
  window:application_window,
  application
  }) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("documentation_viewer");
  const container = builder.get_object("webview_container");
  const webview = new WebKit.WebView();
  container.child = webview;

  webview.load_uri("file:///app/share/doc/gtk4/class.Widget.html");

  webview.connect("load-changed", (view, load_event) => {
    if (load_event === WebKit.LoadEvent.FINISHED){
        disableDocSidebar(webview);
    }
  });

  const action_documentation = new Gio.SimpleAction({
    name: "documentation",
    parameter_type: null,
  });
  action_documentation.connect("activate", () => {
    window.present();
  });
  application.add_action(action_documentation);
  application.set_accels_for_action("app.documentation", ["<Control><Shift>D"]);
}

async function disableDocSidebar(webview){
  try{
    const script = `window.document.querySelector("nav").style.display = "none"`;
    await webview.evaluate_javascript(script, -1, null, null, null);
  } catch(e) {
    logError(e);
  }
} 
