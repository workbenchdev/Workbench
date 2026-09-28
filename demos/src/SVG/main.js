import Rsvg from "gi://Rsvg?version=2.0";

const drawing_area = workbench.builder.get_object("drawing_area");
const svg = workbench.resolve("image.svg");

const handle = Rsvg.Handle.new_from_file(svg);

const [, width, height] = handle.get_intrinsic_size_in_pixels();
console.log("SVG intrisic size", { width, height });

function draw(_self, cr, width, height) {
  console.log("drawing SVG at", { width, height });
  handle.render_document(cr, new Rsvg.Rectangle({ x: 0, y: 0, width, height }));
  cr.$dispose();
}
drawing_area.set_draw_func(draw);
