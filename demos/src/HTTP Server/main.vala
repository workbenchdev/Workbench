#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libsoup-3.0
private Gtk.Label label_greetings;
private Gtk.ToggleButton button_server;
private Gtk.LinkButton linkbutton;
int port;

void handler (Soup.Server server, Soup.ServerMessage msg, string path, HashTable<string, string>? query) {
    var content_type_params = new HashTable<string, string> (str_hash, str_equal);
    content_type_params["charset"] = "UTF-8";

    msg.set_status (Soup.Status.OK, null);
    msg.get_response_headers ().set_content_type ("text/html", content_type_params);
    msg.get_response_body ().append_take ("""
    <html>
    <body>
    <form action="/hello">
    <label for="name">What is your name?</label>
    <input type="text" name="name">
    <input type="submit" value="Submit">
    </form>
    </body>
    </html>
    """.data);
}

void hello_handler (Soup.Server server, Soup.ServerMessage msg, string path, HashTable<string, string>? query) {
    if (query == null) {
        msg.set_redirect (Soup.Status.FOUND, "/");
        return;
    }

    string user_agent = msg.get_request_headers ().get_one ("User-Agent");
    string name = query["name"];
    label_greetings.label = (@"Hello $(name), your browser is\n$(user_agent)");
    var content_type_params = new HashTable<string, string> (str_hash, str_equal);
    content_type_params["charset"] = "UTF-8";
    msg.set_status (Soup.Status.OK, null);
    msg.get_response_headers ().set_content_type ("text/html", content_type_params);
    msg.get_response_body ().append_take ("
    <html>
    <body>
      Thank you, please go back to Workbench.
    </body>
    </html>
    ".data);
}

void start_server (Soup.Server server) {
    try {
        server.listen_local (port, 0);
        SList<Uri> uri = server.get_uris ();
        port = uri.data.get_port ();
        linkbutton.uri = (@"http://localhost:$(port)");

        button_server.label = "Stop Server";
    } catch (Error e) {
        warning (@"$(e.message)");
    }
}

void stop_server (Soup.Server server) {
    server.disconnect ();
    linkbutton.uri = "";
    button_server.label = "Start Server";
}

public void main () {

    button_server = (Gtk.ToggleButton) workbench.builder.get_object ("button_server");
    linkbutton = (Gtk.LinkButton) workbench.builder.get_object ("linkbutton");
    label_greetings = (Gtk.Label) workbench.builder.get_object ("label_greetings");

    var server = new Soup.Server ("");

    server.add_handler ("/", handler);
    server.add_handler ("/hello", hello_handler);

    button_server.clicked.connect (() => {
        if (button_server.active) {
            start_server (server);
        } else {
            stop_server (server);
        }
    });
}
