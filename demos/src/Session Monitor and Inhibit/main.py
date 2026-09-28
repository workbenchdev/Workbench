import gi

gi.require_version("Xdp", "1.0")
gi.require_version("XdpGtk4", "1.0")
from gi.repository import Xdp, XdpGtk4
import workbench

portal = Xdp.Portal()
parent = XdpGtk4.parent_new_gtk(workbench.window)
entry = workbench.builder.get_object("entry")
switch_row_logout = workbench.builder.get_object("switch_row_logout")
switch_row_idle = workbench.builder.get_object("switch_row_idle")
button_start = workbench.builder.get_object("button_start")
button_stop = workbench.builder.get_object("button_stop")
ids = []


def on_session_inhibited(portal, result):
    identity = portal.session_inhibit_finish(result)
    ids.append(identity)


def inhibit_session(flag):
    reason = entry.get_text()
    portal.session_inhibit(parent, reason, flag, None, on_session_inhibited)


def on_session_started(portal, result):
    success = portal.session_monitor_start_finish(result)
    if success:
        button_start.set_sensitive(False)
        button_stop.set_sensitive(True)
        if switch_row_logout.get_active():
            inhibit_session(Xdp.InhibitFlags.LOGOUT)
        if switch_row_idle.get_active():
            inhibit_session(Xdp.InhibitFlags.IDLE)
        """
    Xdp Portal also supports inhibition of Suspend and User Switch
    using the flags SUSPEND and USER_SWITCH respectively. But these
    actions cannot be inhibited on GNOME as they do not end user's
    session.
    """


def on_session_state_changed(_self, screensaver_active, session_state):
    if screensaver_active:
        print("Screensaver is active")
    match session_state:
        case Xdp.LoginSessionState.RUNNING:
            print("Session: Running")
        case Xdp.LoginSessionState.QUERY_END:
            print("Session: Query End")
            portal.session_monitor_query_end_response()
        case Xdp.LoginSessionState.ENDING:
            print("Session: Ending")


def stop_session(_button):
    global ids
    for identity in ids:
        portal.session_uninhibit(identity)
    ids = []
    portal.session_monitor_stop()
    button_start.set_sensitive(True)
    button_stop.set_sensitive(False)


button_start.connect(
    "clicked",
    lambda _: portal.session_monitor_start(
        parent, Xdp.SessionMonitorFlags.NONE, None, on_session_started
    ),
)
button_stop.connect("clicked", stop_session)
portal.connect("session-state-changed", on_session_state_changed)
