import Gtk from "gi://Gtk";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";
import GObject from "gi://GObject";
import GLib from "gi://GLib";
import Gst from "gi://Gst";
import Gdk from "gi://Gdk";
import GstGL from "gi://GstGL";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const video = workbench.builder.get_object("video");
const button = workbench.builder.get_object("button");

button.connect("clicked", () => {
  portal.access_camera(
    parent,
    Xdp.CameraFlags.NONE,
    null,
    async (portal, result) => {
      try {
        if (portal.access_camera_finish(result)) {
          try {
            await on_clicked();
          } catch (error) {
            console.error("Error in on_clicked:", error);
          }
        } else {
          console.log("Permission denied");
        }
      } catch (error) {
        console.error("Failed to request camera access:", error);
      }
    },
  );
});

async function on_clicked() {
  const pwRemote = await portal.open_pipewire_remote_for_camera();
  print("Pipewire remote opened for camera");
  console.log(pwRemote);
  GLib.setenv("GST_DEBUG", "3", true);
  Gst.init(null);

  // Create the pipeline
  const pipeline = new Gst.Pipeline();

  // Create elements
  const source = Gst.ElementFactory.make("pipewiresrc", "source");
  const queue = Gst.ElementFactory.make("queue", "queue"); // add a queue element
  const video_convert = Gst.ElementFactory.make(
    "videoconvert",
    "video_convert",
  );

  // Set properties
  source.set_property("path", pwRemote); // pwRemote is the pipewiresrc obtained from libportal

  // Create the sink
  const paintable_sink = Gst.ElementFactory.make(
    "gtk4paintablesink",
    "paintable_sink",
  );

  // Add elements to the pipeline
  pipeline.add(source);
  pipeline.add(queue);
  pipeline.add(video_convert);
  pipeline.add(paintable_sink);

  // Link the elements
  source.link(queue);
  queue.link(video_convert); // link queue to the video_convert
  video_convert.link(paintable_sink);

  const paintable = new GObject.Value();
  paintable_sink.get_property("paintable", paintable);
  video.paintable = paintable.get_object();

  // Start the pipeline
  pipeline.set_state(Gst.State.PLAYING);

  // Handle cleanup on application exit
  video.connect("destroy", () => {
    pipeline.set_statez(Gst.State.NULL);
  });
}

