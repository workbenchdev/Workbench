import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";

Gio._promisify(
  Xdp.Portal.prototype,
  "session_monitor_start",
  "session_monitor_start_finish",
);

Gio._promisify(
  Xdp.Portal.prototype,
  "session_inhibit",
  "session_inhibit_finish",
);

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const entry = workbench.builder.get_object("entry");
const button_start = workbench.builder.get_object("button_start");
const button_stop = workbench.builder.get_object("button_stop");

button_start.connect("clicked", () => {
  startSession().catch(logError);
});

button_stop.connect("clicked", () => {
  stopSession();
});

portal.connect(
  "session-state-changed",
  (self, screensaver_active, session_state) => {
    if (session_state === Xdp.LoginSessionState.QUERY_END) {
      console.log("User is logging out");
      portal.session_monitor_query_end_response();
      inhibitSession(Xdp.InhibitFlags.LOGOUT);
    }
  },
);

async function startSession() {
  const result = await portal.session_monitor_start(parent, null, null);
  if (result) {
    button_start.sensitive = false;
    button_stop.sensitive = true;
  }
}

function stopSession() {
  portal.session_monitor_stop();
  button_start.sensitive = true;
  button_stop.sensitive = false;
}

async function inhibitSession(flag) {
  const reason = entry.text;
  const id = await portal.session_inhibit(parent, reason, flag, null);
  log(id);
}

