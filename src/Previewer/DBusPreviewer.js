import Gio from "gi://Gio";

import vala_previewer_xml from "./vala_previewer.xml" with { type: "string" };
import python_previewer_xml from "./python_previewer.xml" with { type: "string" };

const PREVIEWER_TYPE_VALA = "vala";
const PREVIEWER_TYPE_PYTHON = "python";

function makeAndStartServer(type, previewer_xml) {
  const nodeInfo = Gio.DBusNodeInfo.new_for_xml(previewer_xml);
  const interface_info = nodeInfo.interfaces[0];

  const guid = Gio.dbus_generate_guid();
  const server = Gio.DBusServer.new_sync(
    `unix:abstract=re.sonny.Workbench.${type}_previewer`, // FIXME: abstract socket sucks
    Gio.DBusServerFlags.AUTHENTICATION_REQUIRE_SAME_USER,
    guid,
    null,
    null,
  );
  server.start();
  return [interface_info, server];
}

const [VALA_INTERFACE_INFO, VALA_SERVER] = makeAndStartServer(
  PREVIEWER_TYPE_VALA,
  vala_previewer_xml,
);
const [PYTHON_INTERFACE_INFO, PYTHON_SERVER] = makeAndStartServer(
  PREVIEWER_TYPE_PYTHON,
  python_previewer_xml,
);

let current_proxy = null;
let current_sub_process = null;
let current_type = null;

async function startProcess(type) {
  let interface_info, server;
  switch (type) {
    case PREVIEWER_TYPE_VALA:
      interface_info = VALA_INTERFACE_INFO;
      server = VALA_SERVER;
      break;
    case PREVIEWER_TYPE_PYTHON:
      interface_info = PYTHON_INTERFACE_INFO;
      server = PYTHON_SERVER;
      break;
    default:
      throw Error(`invalid dbus previewer type: ${type}`);
  }

  current_sub_process = Gio.Subprocess.new(
    [`workbench-${type}-previewer`, server.get_client_address()],
    Gio.SubprocessFlags.NONE,
  );
  current_type = type;

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
    current_proxy = null;
    current_type = null;
    console.debug(
      "connection closed",
      connection.get_peer_credentials().to_string(),
      remote_peer_vanished,
    );
    if (error) console.error(error);
  });

  const proxy = await Gio.DBusProxy.new(
    connection,
    Gio.DBusProxyFlags.NONE,
    interface_info,
    null,
    `/re/sonny/workbench/${type}_previewer`, // object path
    `re.sonny.Workbench.${type}_previewer`, // interface name
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
  onCssParserError: null, // set in External.js
  onWindowOpen: null, // set in External.js
  async getProxy(type) {
    if (current_type !== type) {
      await this.stop();
      current_proxy = startProcess(type);
    }
    return current_proxy;
  },

  async stop() {
    const connection = current_proxy?.["g-connection"];

    if (connection) {
      await connection.close(null);
    }

    if (current_sub_process) {
      // The vala process is set to exit when the connection close
      // but let's send a SIGTERM anyway just to be safe
      current_sub_process.send_signal(15);
      await current_sub_process.wait_async(null);
    }

    current_sub_process = null;
  },

  updateColorScheme(color_scheme) {
    if (current_type === "python") {
      current_proxy.SetColorScheme(color_scheme);
    } else {
      current_proxy.ColorScheme = color_scheme;
    }
  },
};

export default dbus_previewer;
