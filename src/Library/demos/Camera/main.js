import Gtk from "gi://Gtk";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import GObject from "gi://GObject";
import Gst from "gi://Gst";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const output = workbench.builder.get_object("video");
const button = workbench.builder.get_object("button");

button.connect("clicked", () => {
  if (portal.is_camera_present) {
    button.sensitive = true;
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
  } else {
    console.log("No Camera detected");
    button.sensitive = false;
  }
});

async function on_clicked() {
  const pwRemote = await portal.open_pipewire_remote_for_camera();
  console.log("Pipewire remote opened for camera");

  Gst.init(null);

  // Create elements
  const source = Gst.ElementFactory.make("pipewiresrc", "source");
  const queue = Gst.ElementFactory.make("queue", "queue");
  const paintable_sink = Gst.ElementFactory.make(
    "gtk4paintablesink",
    "paintable_sink",
  );
  const glsinkbin = Gst.ElementFactory.make("glsinkbin", "glsinkbin");
  const paintable = new GObject.Value();

  // Create and link our pipeline

  glsinkbin.set_property("sink", paintable_sink);
  source.set_property("fd", pwRemote);

  pipeline.add(source);
  pipeline.add(queue);
  pipeline.add(glsinkbin);
  source.link(queue);
  queue.link(glsinkbin);

  paintable_sink.get_property("paintable", paintable);

  output.paintable = paintable.get_object();

  // Start the pipeline
  pipeline.set_state(Gst.State.PLAYING);

  // Handle cleanup on application exit
  workbench.window.connect("destroy", () => {
    pipeline.set_state(Gst.State.NULL);
  });

  // Set up the bus
  const bus = pipeline.get_bus();
  bus.add_signal_watch();
  bus.connect("message", (bus, message) => {
    // Check the message type
    const messageType = message.type;

    // Handle different message types
    switch (messageType) {
      case Gst.MessageType.ERROR: {
        const errorMessage = message.parse_error();
        console.error(errorMessage[0].toString());
        break;
      }
      case Gst.MessageType.EOS: {
        console.log("End of stream");
        break;
      }
    }
  });
}

