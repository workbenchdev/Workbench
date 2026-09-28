#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libportal-gtk4
private Xdp.Portal portal;
private Gtk.Button button_start;
private Gtk.Button button_stop;
private Adw.SwitchRow switch_row_logout;
private Adw.SwitchRow switch_row_idle;
private Xdp.Parent parent;
private Adw.EntryRow entry;
private List<int> ids;

public void main () {
    portal = new Xdp.Portal ();
    parent = Xdp.parent_new_gtk (workbench.window);
    entry = (Adw.EntryRow) workbench.builder.get_object ("entry");
    switch_row_logout = (Adw.SwitchRow) workbench.builder.get_object ("switch_row_logout");
    switch_row_idle = (Adw.SwitchRow) workbench.builder.get_object ("switch_row_idle");
    button_start = (Gtk.Button) workbench.builder.get_object ("button_start");
    button_stop = (Gtk.Button) workbench.builder.get_object ("button_stop");
    ids = new List<int> ();

    button_start.clicked.connect (() => {
        start_session.begin ();
    });

    button_stop.clicked.connect (() => {
        stop_session.begin ();
    });

    portal.session_state_changed.connect ((self, screensaver_active, session_state) => {

        if (screensaver_active) {
            message (@"Screensaver is active");
        }
        switch (session_state) {
            case Xdp.LoginSessionState.RUNNING:
                message (@"Session: Running");
                break;
            case Xdp.LoginSessionState.QUERY_END:
                message (@"Session: Query End");
                portal.session_monitor_query_end_response ();
                break;
            case Xdp.LoginSessionState.ENDING:
                message (@"Session: Ending");
                break;
        }
    });
}

async void start_session () {
    try {
        bool result = yield portal.session_monitor_start (parent, NONE, null);

        if (result) {
            button_start.sensitive = false;
            button_stop.sensitive = true;
            if (switch_row_logout.active)inhibit_session.begin (Xdp.InhibitFlags.LOGOUT);
            if (switch_row_idle.active)inhibit_session.begin (Xdp.InhibitFlags.IDLE);
            /*
               Xdp Portal also supports inhibition of Suspend and User Switch
               using the flags SUSPEND and USER_SWITCH respectively. But these
               actions cannot be inhibited on GNOME as they do not end user's
               session.
             */
        }
    } catch (Error e) {
        warning (@"$(e.message)");
    }
}

async void stop_session () {
    foreach (int id in ids) {
        portal.session_uninhibit (id);
    }
    ids = new List<int> ();
    portal.session_monitor_stop ();
    button_start.sensitive = true;
    button_stop.sensitive = false;
}

async void inhibit_session (Xdp.InhibitFlags flag) {
    string reason = entry.text;
    try {
        int id = yield portal.session_inhibit (parent, reason, flag, null);

        ids.append (id);
    } catch (Error e) {
        warning (@"$(e.message)");
    }
}
