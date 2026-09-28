const drawingArea = workbench.builder.get_object("drawing_area");
const scaleRotate = workbench.builder.get_object("scale");

const triangle = [
  [100, 100],
  [0, -100],
  [-100, 100],
];
var angle = 0;

drawingArea.set_draw_func((_self, cr, _width, _height) => {
  // Draw triangle in context
  cr.translate(150, 150);
  cr.rotate(angle);
  cr.moveTo(triangle[2][0], triangle[2][1]);
  for (let vertex of triangle) {
    cr.lineTo(vertex[0], vertex[1]);
  }

  cr.setSourceRGBA(1, 0, 1, 1);
  cr.stroke();
  // Freeing the context before returning from the callback
  cr.$dispose();
});

scaleRotate.connect("value-changed", () => {
  angle = (scaleRotate.get_value() / 180) * Math.PI;
  drawingArea.queue_draw();
});
//https://www.cairographics.org/tutorial/
