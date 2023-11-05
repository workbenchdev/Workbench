import Gtk from "gi://Gtk";
import Shumate from "gi://Shumate";

const map_widget = workbench.builder.get_object("map_widget");
const registry = Shumate.MapSourceRegistry.new_with_defaults();

// Use OpenStreetMap as the source
const map_source = registry.get_by_id(Shumate.MAP_SOURCE_OSM_MAPNIK);
const viewport = map_widget.viewport;

map_widget.map_source = map_source;
map_widget.map.center_on(0, 0);

// Reference map source used by MarkerLayer
viewport.reference_map_source = map_source;
viewport.zoom_level = 5;

const marker_layer = new Shumate.MarkerLayer({
  viewport: viewport,
  selection_mode: Gtk.SelectionMode.SINGLE,
});

const marker = workbench.builder.get_object("marker");
marker.set_location(0, 0);
marker_layer.add_marker(marker);
map_widget.map.add_layer(marker_layer);

const gesture = new Gtk.GestureClick();
map_widget.add_controller(gesture);

const button_marker = workbench.builder.get_object("button_marker");

gesture.connect("pressed", (_, _n_press, x, y) => {
  if (button_marker.active) {
    const location = viewport.widget_coords_to_location(map_widget, x, y);
    marker.set_location(location[0], location[1]);
    console.log(`Marker placed at ${location[0]}, ${location[1]}`);
  }
});

const entry_latitude = workbench.builder.get_object("entry_latitude");
const entry_longitude = workbench.builder.get_object("entry_longitude");
const button_go = workbench.builder.get_object("button_go");

button_go.connect("clicked", () => {
  go_to_location();
});

entry_latitude.connect("activate", () => {
  go_to_location();
});

entry_longitude.connect("activate", () => {
  go_to_location();
});

function go_to_location() {
  const latitude = entry_latitude.text;
  const longitude = entry_longitude.text;
  if (isNaN(latitude) || isNaN(longitude)) {
    console.log("Please enter valid coordinates");
    return;
  }
  if (latitude > Shumate.MAX_LATITUDE || latitude < Shumate.MIN_LATITUDE) {
    console.log(
      `Latitudes must be between ${Shumate.MIN_LATITUDE} and ${Shumate.MAX_LATITUDE}`,
    );
    return;
  }
  if (longitude > Shumate.MAX_LONGITUDE || longitude < Shumate.MIN_LONGITUDE) {
    console.log(
      `Longitudes must be between ${Shumate.MIN_LONGITUDE} and ${Shumate.MAX_LONGITUDE}`,
    );
    return;
  }
  viewport.zoom_level = 5;
  map_widget.map.go_to(latitude, longitude);
}
