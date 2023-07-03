import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import GObject from "gi://GObject";
import Gst from "gi://Gst";
Gst.init(null);

Gio._promisify(Xdp.Portal.prototype, "access_camera", "access_camera_finish");

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const output = workbench.builder.get_object("output");
const button = workbench.builder.get_object("button");

button.connect("clicked", () => {
  if (!portal.is_camera_present()) {
    console.log("No Camera detected");
    return;
  }

  portal.access_camera(
    parent,
    Xdp.CameraFlags.NONE,
    null,
    async (portal, result) => {
      try {
        if (!portal.access_camera_finish(result)) {
          console.log("Permission denied");
          return;
        }

        try {
          await handleCamera();
        } catch (error) {
          console.error("Error in handleCamera:", error);
        }
      } catch (error) {
        console.error("Failed to request camera access:", error);
      }
    },
  );
});

async function handleCamera() {
  const fd_pipewire_remote = portal.open_pipewire_remote_for_camera();
  console.log("Pipewire remote opened for camera");

  // Create the pipeline
  const pipeline = new Gst.Pipeline();

  // Create elements
  const source = Gst.ElementFactory.make("pipewiresrc", "source");
  const queue = Gst.ElementFactory.make("queue", "queue"); // add a queue element
  const paintable_sink = Gst.ElementFactory.make(
    "gtk4paintablesink",
    "paintable_sink",
  );
  const glsinkbin = Gst.ElementFactory.make("glsinkbin", "glsinkbin");

  // Set up and Link Pipeline
  source.set_property("fd", fd_pipewire_remote); // fd_pipewire_remote is the file descriptor obtained from libportal
  glsinkbin.set_property("sink", paintable_sink);

  pipeline.add(source);
  pipeline.add(queue);
  pipeline.add(glsinkbin);
  source.link(queue);
  queue.link(glsinkbin);

  const paintable = new GObject.Value();
  paintable_sink.get_property("paintable", paintable);
  output.paintable = paintable.get_object();

  // Start the pipeline
  pipeline.set_state(Gst.State.PLAYING);

  // Handle cleanup on application exit
  output.connect("destroy", () => {
    pipeline.set_state(Gst.State.NULL);
  });

  // Set up the bus
  const bus = pipeline.get_bus();
  bus.add_signal_watch();
  bus.connect("message", (bus, message) => {
    // Check the message type
    const message_type = message.type;

    // Handle different message types
    switch (message_type) {
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

