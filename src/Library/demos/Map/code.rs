use crate::workbench;
use glib::clone;
use gtk::glib;
use gtk::prelude::*;
use shumate::ffi::{
    SHUMATE_MAX_LATITUDE, SHUMATE_MAX_LONGITUDE, SHUMATE_MIN_LATITUDE, SHUMATE_MIN_LONGITUDE,
};
use shumate::prelude::*;
use shumate::MAP_SOURCE_OSM_MAPNIK;

pub fn main() {
    let map_widget: shumate::SimpleMap = workbench::builder().object("map_widget").unwrap();
    let registry = shumate::MapSourceRegistry::with_defaults();

    // Use OpenStreetMap as the source
    let map_source = registry.by_id(MAP_SOURCE_OSM_MAPNIK);
    let viewport = map_widget.viewport().unwrap();
    let map = map_widget.map().unwrap();

    map_widget.set_map_source(map_source.as_ref());
    map.center_on(0., 0.);

    // Reference map source used by MarkerLayer
    viewport.set_reference_map_source(map_source.as_ref());
    viewport.set_zoom_level(5.);

    let marker_layer: shumate::MarkerLayer =
        shumate::MarkerLayer::new_full(&viewport, gtk::SelectionMode::Single);

    let marker: shumate::Marker = workbench::builder().object("marker").unwrap();
    marker.set_location(0., 0.);
    marker_layer.add_marker(&marker);
    map.add_layer(&marker_layer);

    let gesture = gtk::GestureClick::new();
    map_widget.add_controller(gesture.clone());

    let button_marker: gtk::ToggleButton = workbench::builder().object("button_marker").unwrap();

    gesture.connect_pressed(clone!(@strong viewport => move |_, n_press, x, y| {
        if button_marker.is_active() {
            let location = viewport.widget_coords_to_location(&map_widget, x, y);
            marker.set_location(location.0, location.1);
            println!("Marker placed at location {} {}", location.0, location.1)
        }
    }));

    let entry_latitude: gtk::Entry = workbench::builder().object("entry_latitude").unwrap();
    let entry_longitude: gtk::Entry = workbench::builder().object("entry_longitude").unwrap();
    let button_go: gtk::Button = workbench::builder().object("button_go").unwrap();

    button_go.connect_clicked(
        clone!(@strong entry_latitude, @strong entry_longitude, @strong map, @weak viewport => move |_| {
            go_to_location(&entry_latitude, &entry_longitude, &map, &viewport);
        }),
    );

    entry_latitude.connect_activate(
        clone!(@weak entry_longitude, @weak map, @weak viewport => move |entry_latitude| {
            go_to_location(entry_latitude, &entry_longitude, &map, &viewport);
        }),
    );

    entry_longitude.connect_activate(move |entry_longitude| {
        go_to_location(&entry_latitude, entry_longitude, &map, &viewport);
    });
}

pub fn go_to_location(
    entry_latitude: &gtk::Entry,
    entry_longitude: &gtk::Entry,
    map: &shumate::Map,
    viewport: &shumate::Viewport,
) {
    let latitude = entry_latitude.text().parse::<f64>().unwrap();
    let longitude = entry_longitude.text().parse::<f64>().unwrap();

    if latitude.is_nan() || longitude.is_nan() {
        println!("Please enter valid coordinates");
        return;
    }

    if latitude > SHUMATE_MAX_LATITUDE || latitude < SHUMATE_MIN_LATITUDE {
        println!(
            "Latitudes must be between {} and {}!",
            SHUMATE_MIN_LATITUDE, SHUMATE_MAX_LATITUDE
        );
        return;
    }

    if latitude > SHUMATE_MAX_LONGITUDE || latitude < SHUMATE_MIN_LONGITUDE {
        println!(
            "Longitudes must be between {} and {}!",
            SHUMATE_MIN_LONGITUDE, SHUMATE_MAX_LONGITUDE
        );
        return;
    }

    viewport.set_zoom_level(5.);
    map.go_to(latitude, longitude);
}

