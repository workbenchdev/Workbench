import Cairo from "cairo";
import Gtk from "gi://Gtk?version=4.0";
Gtk.init();

const drawingArea = workbench.builder.get_object("drawing_area");
const scaleRotate = workbench.builder.get_object("scale");

let triangle   = [3];
triangle[0]    = [2];
triangle[0][0] = 100;
triangle[0][1] = 100;
triangle[1]    = [2];
triangle[1][0] = 0;
triangle[1][1] = -100;
triangle[2]    = [2];
triangle[2][0] = -100;
triangle[2][1] =  100;
let triangle_original = [3];
for (let i = 0; i < 3; i++) {
  let temp = [2];
  temp[0] = triangle[i][0];
  temp[1] = triangle[i][1];
  triangle_original[i] = temp;
}

drawingArea.set_draw_func((area, cr, width, height) => {
  // Draw triangle in context
  cr.moveTo(150 + triangle[0][0], 150 + triangle[0][1]);
  cr.lineTo(150 + triangle[1][0], 150 + triangle[1][1]);
  cr.lineTo(150 + triangle[2][0], 150 + triangle[2][1]);
  cr.lineTo(150 + triangle[0][0], 150 + triangle[0][1]);

  cr.setSourceRGBA(1, 0, 1, 1);
  cr.stroke();
  // Freeing the context before returning from the callback
  cr.$dispose();
});

scaleRotate.connect("value-changed", () => {
  //Recalculate value of points of triangle
  for (let i = 0; i < 3; i++) {
    //calculate original angle
    let x = triangle_original[i][0];
    let y = triangle_original[i][1];
    let angle = Math.atan(Math.abs(y) / Math.abs(x));
    if (x > 0 && y > 0) {
      angle = angle;
    }
    if (x < 0 && y > 0) {
      angle = Math.PI - angle;
    }
    if (x < 0 && y < 0) {
      angle = Math.PI + angle;
    }
    if (x > 0 && y < 0) {
      angle = Math.PI * 2 - angle;
    }
    if (x === 0) {
      if (y > 0) {
        angle = angle;
      }
      if (y < 0) {
        angle = -1 * angle;
      }
    }
    if (y === 0) {
      if (x > 0) {
        angle = angle;
      }
      if (x < 0) {
        angle = M_PI;
      }
    }
    //add to original angle scale_value
    angle += (scaleRotate.get_value() * Math.PI) / 180;
    //set new value to triangle
    let radius = Math.sqrt(x * x + y * y);

    triangle[i][0] = radius * Math.cos(angle);
    triangle[i][1] = radius * Math.sin(angle);
  }
  //Redraw drawingArea
  drawingArea.queue_draw();
});

