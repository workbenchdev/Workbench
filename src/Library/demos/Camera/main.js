import Gtk from "gi://Gtk";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";
import GObject from "gi://GObject";
import GLib from "gi://GLib";
import Gst from "gi://Gst";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const video = workbench.builder.get_object("video");

const button = workbench.builder.get_object("button");
async function onClicked() {
  if (portal.is_camera_present) {
    const pwRemote = await portal.open_pipewire_remote_for_camera();
    print("Pipewire remote opened for camera");
    Gst.init(null);

    // Create the pipeline
    const pipeline = new Gst.Pipeline();

    // Create elements
    const source = Gst.ElementFactory.make("pipewiresrc", "source");
    const videoConvert = Gst.ElementFactory.make(
      "videoconvert",
      "videoConvert",
    );
    const videoSink = Gst.ElementFactory.make("gtksink", "videoSink");

    // Set properties
    source.set_property("path", pwRemote); // pwRemote is the pipewiresrc obtained from libportal

    // Create the bin
    const bin = new Gst.Bin();
    bin.add(source);
    bin.add(videoConvert);
    pipeline.add(bin);
    pipeline.add(videoSink);

    // Link elements
    source.link(videoConvert);
    videoConvert.link(videoSink);

    // Set up the bus
    const bus = pipeline.get_bus();
    bus.add_signal_watch();
    bus.connect("message", (bus, message) => {
      if (message.type === Gst.MessageType.EOS) {
        // End of stream, handle accordingly
      }
    });

    // Set the video stream on the GtkVideo widget
    video.set_media_stream(videoSink);

    // Handle cleanup on application exit
    video.connect("destroy", () => {
      pipeline.set_statez(Gst.State.NULL);
      Gtk.main_quit();
    });

    // Show the video widget and start the pipeline
    video.show_all();
    pipeline.set_state(Gst.State.PLAYING);

    // Run the Gtk main loop
    Gtk.main();
  } else {
    console.log("No camera found");
  }
}

button.connect("clicked", () => {
  onClicked().catch(logError);
});
