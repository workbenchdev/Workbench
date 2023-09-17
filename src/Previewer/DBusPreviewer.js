import Gio from "gi://Gio";

import previewer_xml from "./previewer.xml" with { type: "string" };

const nodeInfo = Gio.DBusNodeInfo.new_for_xml(previewer_xml);
const interface_info = nodeInfo.interfaces[0];

const guid = Gio.dbus_generate_guid();
const server = Gio.DBusServer.new_sync(
  "unix:abstract=re.sonny.Workbench.vala_previewer", // FIXME: abstract socket sucks
  Gio.DBusServerFlags.AUTHENTICATION_REQUIRE_SAME_USER,
  guid,
  null,
  null,
);

let proxy = null;
let sub_process = null;

server.start();

async function startProcess() {
  sub_process = Gio.Subprocess.new(
    ["workbench-vala-previewer", server.get_client_address()],
    Gio.SubprocessFlags.NONE,
  );

  const connection = await new Promise((resolve) => {
    const _handler_id = server.connect(
      "new-connection",
      (_self, connection) => {
        server.disconnect(_handler_id);
        resolve(connection);
        return true;
      },
    );
  });

  console.debug(
    "new-connection",
    connection.get_peer_credentials().to_string(),
  );

  connection.connect("closed", (_self, remote_peer_vanished, error) => {
    proxy = null;
    console.debug(
      "connection closed",
      connection.get_peer_credentials().to_string(),
      remote_peer_vanished,
    );
    if (error) console.error(error);
  });

  proxy = await Gio.DBusProxy.new(
    connection,
    Gio.DBusProxyFlags.NONE,
    interface_info,
    null,
    "/re/sonny/workbench/vala_previewer", // object path
    "re.sonny.Workbench.vala_previewer", // interface name
    null,
  );

  proxy.connectSignal("CssParserError", (_proxy, _name_owner, ...args) => {
    dbus_previewer.onCssParserError?.(...args);
  });

  proxy.connectSignal("WindowOpen", (_proxy, _name_owner, ...args) => {
    dbus_previewer.onWindowOpen?.(...args);
  });

  return proxy;
}

const dbus_previewer = {
  onCssParserError: null,
  onWindowOpen: null,
  async getProxy() {
    proxy ??= startProcess();
    return proxy;
  },

  async stop() {
    const connection = proxy?.["g-connection"];

    if (connection) {
      await connection.close(null);
    }

    if (sub_process) {
      // The vala process is set to exit when the connection close
      // but let's send a SIGTERM anyway just to be safe
      sub_process.send_signal(15);
      await sub_process.wait_async(null);
    }

    sub_process = null;
  },
};

export default dbus_previewer;
