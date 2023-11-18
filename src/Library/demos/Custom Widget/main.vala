#!/usr/bin/env -S vala workbench.vala workbench.Resource.c  --gresources=workbench_demo.xml --pkg gtk4

// The resource will be provided by Workbench when the demo compiles, see shebang above.
[GtkTemplate (ui = "/re/sonny/Workbench/demo/workbench_template.ui")]
public class AwesomeButton : Gtk.Button {
	[GtkCallback]
	private void onclicked (Gtk.Button button) {
		message ("Clicked");
	}
}

public void main () {
  var container = new Gtk.ScrolledWindow();
  var flow_box = new Gtk.FlowBox() {
    hexpand = true
  };
  container.set_child(flow_box);

  for (var i = 0; i < 100; i++) {
    var widget = new AwesomeButton();
    flow_box.append(widget);
  }

  workbench.preview(container);
}
