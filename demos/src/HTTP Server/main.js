import Soup from "gi://Soup";

const button_server = workbench.builder.get_object("button_server");
const linkbutton = workbench.builder.get_object("linkbutton");
const label_greetings = workbench.builder.get_object("label_greetings");

function handler(_server, msg, _path, _query) {
  msg.set_status(Soup.Status.OK, null);
  msg
    .get_response_headers()
    .set_content_type("text/html", { charset: "UTF-8" });
  msg.get_response_body().append(`
    <html>
    <body>
      <form action="/hello">
        <label for="name">What is your name?</label>
        <input name="name">
        <input type="submit" value="Submit">
      </form>
    </body>
    </html>
  `);
}

function helloHandler(_server, msg, _path, query) {
  if (!query) {
    msg.set_redirect(Soup.Status.FOUND, "/");
    return;
  }

  const user_agent = msg.get_request_headers().get_one("User-Agent");

  label_greetings.label = `Hello ${query.name}, your browser is\n${user_agent}`;

  msg.set_status(Soup.Status.OK, null);
  msg
    .get_response_headers()
    .set_content_type("text/html", { charset: "UTF-8" });
  msg.get_response_body().append(`
    <html>
    <body>
      Thank you, please go back to Workbench.
    </body>
    </html>
  `);
}

const server = new Soup.Server();

server.add_handler("/", handler);
server.add_handler("/hello", helloHandler);

button_server.connect("clicked", () => {
  if (button_server.active) {
    startServer();
  } else {
    stopServer();
  }
});

let port = 0;

function startServer() {
  server.listen_local(port, null);
  port = server.get_uris()[0].get_port();
  linkbutton.uri = `http://localhost:${port}`;
  button_server.label = "Stop Server";
}

function stopServer() {
  server.disconnect();
  linkbutton.uri = "";
  button_server.label = "Start Server";
}
