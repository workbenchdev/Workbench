import Gio from "gi://Gio";

import previewer_xml from "./previewer.xml" with { type: "string" };
import { buildRuntimePath } from "../util.js";

const PREVIEWER_TYPE_VALA = "vala";
const PREVIEWER_TYPE_PYTHON = "python";

const nodeInfo = Gio.DBusNodeInfo.new_for_xml(previewer_xml);
const interface_info = nodeInfo.interfaces[0];

const guid = Gio.dbus_generate_guid();
const path = buildRuntimePath(`workbench_preview_dbus_socket_${Date.now()}`);
const server = Gio.DBusServer.new_sync(
  `unix:path=${path}`,
  Gio.DBusServerFlags.AUTHENTICATION_REQUIRE_SAME_USER,
  guid,
  null,
  null,
);

server.start();

let current_proxy = null;
let current_sub_process = null;
let current_type = null;

async function startProcess(type) {
  let executable_name;
  switch (type) {
    case PREVIEWER_TYPE_VALA:
      executable_name = "workbench-previewer-module";
      break;
    case PREVIEWER_TYPE_PYTHON:
      executable_name = "workbench-python-previewer";
      break;
    default:
      throw Error(`invalid dbus previewer type: ${type}`);
  }

  current_sub_process = Gio.Subprocess.new(
    [executable_name, server.get_client_address()],
    Gio.SubprocessFlags.NONE,
  );

  current_sub_process.wait_async(null).then(() => {
    dbus_previewer.onStop?.();
  });

  current_type = type;

  const connection = await new Promise((resolve) => {
    const _handler_id = server.connect(
      "new-connection",
      (_self, connection) => {
        server.disconnect(_handler_id);
        // FIXME: Just because the connection is established does not mean the Previewer has had time yet
        //        to expose the object. Add a better way to detect if the object exists yet.
        setTimeout(() => resolve(connection), 100);
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
    "/re/sonny/workbench/previewer_module", // object path
    "re.sonny.Workbench.previewer_module", // interface name
    null,
  );

  proxy.connectSignal("CssParserError", (_self, _name_owner, ...args) => {
    dbus_previewer.onCssParserError?.(...args);
  });

  proxy.connectSignal("WindowOpen", (_self, _name_owner, [open]) => {
    if (!open) {
      dbus_previewer.stop().catch(console.error);
    }
    // dbus_previewer.onWindowOpen?.(open);
  });

  return proxy;
}

const dbus_previewer = {
  onCssParserError: null, // set in External.js
  // onWindowOpen: null, // set in External.js
  onStop: null,
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
};

export default dbus_previewer;
