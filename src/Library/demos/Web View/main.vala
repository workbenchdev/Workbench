#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1 --pkg webkitgtk-6.0

public void main () {
  var button_back = (Gtk.Button) workbench.builder.get_object ("button_back");
  var button_forward = (Gtk.Button) workbench.builder.get_object ("button_forward");
  var button_reload = (Gtk.Button) workbench.builder.get_object ("button_reload");
  var button_stop = (Gtk.Button) workbench.builder.get_object ("button_stop");

  var url_bar = (Gtk.Entry) workbench.builder.get_object ("url_bar");
  var web_view = (WebKit.WebView) workbench.builder.get_object ("web_view");

  web_view.bind_property ("uri", url_bar.buffer, "text", DEFAULT);
  web_view.load_uri ("https://www.gnome.org/");

  url_bar.activate.connect (() => {
    string url = url_bar.buffer.text;
    string? scheme = Uri.peek_scheme (url);
    if (scheme == null) {
      url = @"http://$url";
    }
    web_view.load_uri (url);
  });

  button_back.clicked.connect (() => web_view.go_back ());
  button_forward.clicked.connect (() => web_view.go_forward ());
  button_reload.clicked.connect (() => web_view.reload ());
  button_stop.clicked.connect (() => web_view.stop_loading ());

  web_view.load_changed.connect ((load_event) => {
    switch (load_event) {
      case STARTED:
        message ("Loading page started");
        break;
      case FINISHED:
        message ("Loading page finished");
        break;
      case COMMITTED:
      case REDIRECTED:
        break;
    }
  });

  web_view.load_failed.connect ((load_event, failed_url, error) => {
    // Loading failed as a result of calling stop_loading
    if (error is WebKit.NetworkError.CANCELLED) {
      return false;
    }

    web_view.load_alternate_html (
      create_error_page (failed_url, error.message), // HTML Content
      failed_url, // Content URI for the alternate page content
      null // Base URI for relative locations
    );
    return true;
  });

  web_view.notify["estimated-load-progress"].connect (() => {
    url_bar.progress_fraction = web_view.estimated_load_progress;
    if (url_bar.progress_fraction == 1) {
      // Reset the url_bar progress 500ms after the page has completely loaded
      Timeout.add_once (500, () => {
        url_bar.progress_fraction = 0;
      });
    }
  });
}

private string create_error_page (string failed_url, string message) {
  string page =
@"<div style=\"text-align:center; margin:24px;\">
    <h2>An error has occurred while loading $failed_url</h2>
    <p>$message</p>
  </div>";

  return page;
}
