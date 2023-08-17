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
const check_logout = workbench.builder.get_object("logout");
const check_user_switch = workbench.builder.get_object("user_switch");
const check_suspend = workbench.builder.get_object("suspend");
const check_idle = workbench.builder.get_object("idle");
const button_start = workbench.builder.get_object("button_start");
const button_stop = workbench.builder.get_object("button_stop");
let ids = [];

button_start.connect("clicked", () => {
  startSession().catch(logError);
});

button_stop.connect("clicked", () => {
  stopSession();
});

portal.connect(
  "session-state-changed",
  (self, screensaver_active, session_state) => {
    if (screensaver_active) {
      console.log("Screensaver is active");
    }
    switch (session_state) {
      case Xdp.LoginSessionState.RUNNING:
        console.log("Session: Running");
        break;
      case Xdp.LoginSessionState.QUERY_END:
        console.log("Session: Query End");
        portal.session_monitor_query_end_response();
        break;
      case Xdp.LoginSessionState.ENDING:
        console.log("Session: Ending");
        break;
    }
  },
);

async function startSession() {
  const result = await portal.session_monitor_start(parent, null, null);
  if (result) {
    button_start.sensitive = false;
    button_stop.sensitive = true;
    if (check_logout.active) inhibitSession(Xdp.InhibitFlags.LOGOUT);
    if (check_user_switch.active) inhibitSession(Xdp.InhibitFlags.USER_SWITCH);
    if (check_suspend.active) inhibitSession(Xdp.InhibitFlags.SUSPEND);
    if (check_idle.active) inhibitSession(Xdp.InhibitFlags.IDLE);
  }
}

function stopSession() {
  for (const id of ids) portal.session_uninhibit(id);
  ids = [];
  portal.session_monitor_stop();
  button_start.sensitive = true;
  button_stop.sensitive = false;
}

async function inhibitSession(flag) {
  const reason = entry.text;
  const id = await portal.session_inhibit(parent, reason, flag, null);
  ids.push(id);
}

