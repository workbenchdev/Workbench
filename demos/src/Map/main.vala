#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg shumate-1.0

private Shumate.SimpleMap map_widget;
private Shumate.Viewport viewport;
private Gtk.Entry entry_latitude;
private Gtk.Entry entry_longitude;


void go_to_location () {
    float latitude = 0, longitude = 0;

    if (!float.try_parse (entry_latitude.text, out latitude) || !float.try_parse
            (entry_longitude.text, out longitude)) {
        message (@"Please enter valid coordinates");
        return;
    }

    if (latitude > Shumate.MAX_LATITUDE || latitude < Shumate.MIN_LATITUDE) {
        message (
                 @"Latitudes must be between $(Shumate.MIN_LATITUDE) and $(Shumate.MAX_LATITUDE)");
        return;
    }

    if (longitude > Shumate.MAX_LONGITUDE || longitude < Shumate.MIN_LONGITUDE) {
        message (
                 @"Longitudes must be between $(Shumate.MIN_LONGITUDE) and $(Shumate.MAX_LONGITUDE)"
        );
        return;
    }
    viewport.zoom_level = 5;
    map_widget.map.go_to (latitude, longitude);
}

public void main () {
    map_widget = (Shumate.SimpleMap) workbench.builder.get_object ("map_widget");
    var registry = new Shumate.MapSourceRegistry.with_defaults ();

    // Use OpenStreetMap as the source
    var map_source = registry.get_by_id (Shumate.MAP_SOURCE_OSM_MAPNIK);
    viewport = map_widget.viewport;

    map_widget.map_source = map_source;
    map_widget.map.center_on (0, 0);

    // Reference map source used by MarkerLayer
    viewport.reference_map_source = map_source;
    viewport.zoom_level = 5;

    var marker_layer = new Shumate.MarkerLayer (viewport) {
        selection_mode = SINGLE
    };

    var marker = (Shumate.Marker) workbench.builder.get_object ("marker");
    marker.set_location (0, 0);
    marker_layer.add_marker (marker);
    map_widget.map.add_layer (marker_layer);

    var gesture = new Gtk.GestureClick ();
    map_widget.add_controller (gesture);

    var button_marker = (Gtk.ToggleButton) workbench.builder.get_object ("button_marker");

    gesture.pressed.connect ((self, n_press, x, y) => {
        if (button_marker.active) {
            double latitude, longitude;
            viewport.widget_coords_to_location (map_widget, x, y, out latitude, out longitude);
            marker.set_location (latitude, longitude);
            message (@"Marker placed at $(latitude), $(longitude)");
        }
    });

    entry_latitude = (Gtk.Entry) workbench.builder.get_object ("entry_latitude");
    entry_longitude = (Gtk.Entry) workbench.builder.get_object ("entry_longitude");
    var button_go = (Gtk.Button) workbench.builder.get_object ("button_go");

    button_go.clicked.connect (() => {
        go_to_location ();
    });

    entry_latitude.activate.connect (() => {
        go_to_location ();
    });

    entry_longitude.activate.connect (() => {
        go_to_location ();
    });
}
