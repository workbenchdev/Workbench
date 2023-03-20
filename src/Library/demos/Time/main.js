import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";

Gtk.init();

const _hourBox = workbench.builder.get_object("hour_box");
const _minuteBox = workbench.builder.get_object("minute_box");
const _timeOutputBox = workbench.builder.get_object("time_output_box");
const _timeOutputLabel = workbench.builder.get_object("time_output_label");


// Set hour layout
const increment_hour = new Gtk.Button({
  label: "+",
  halign: "center",
  valign: "center",
  margin_end: 70,
  margin_start: 70,
});

const hourInput = new Gtk.Entry({
  placeholder_text: "00",
  halign: "center",
  valign: "center",
  margin_end: 20,
  margin_start: 20,
});

const decrement_hour = new Gtk.Button({
  label: "-",
  margin_end: 70,
  margin_start: 70,
});

_hourBox.append(increment_hour);
_hourBox.append(hourInput);
_hourBox.append(decrement_hour);

// connect signal for hour increment
increment_hour.connect("clicked", () => {
  let placeholder = parseInt(hourInput.get_placeholder_text());
  let text = parseInt(hourInput.get_text());

  if (hourInput.get_text()) {
    if (text < 23) {
      text += 1;

      hourInput.set_text(`${text.toString().padStart(2, "0")}`);
    } else {
      hourInput.set_text("00");
    }
  } else if (hourInput.get_placeholder_text()) {
    if (placeholder < 23) {
      placeholder += 1;

      hourInput.set_text(`${placeholder.toString().padStart(2, "0")}`);
    } else {
      hourInput.set_text("00");
    }
  } else {
  }

  setTimeLabel();
});

// connect signal for hour decrement
decrement_hour.connect("clicked", () => {
  let placeholder = parseInt(hourInput.get_placeholder_text());
  let text = parseInt(hourInput.get_text());

  if (hourInput.get_text()) {
    if (text > 0) {
      text -= 1;

      hourInput.set_text(`${text.toString().padStart(2, "0")}`);
    } else {
      hourInput.set_text("23");
    }
  } else if (hourInput.get_placeholder_text()) {
    if (placeholder > 0) {
      placeholder -= 1;

      hourInput.set_text(`${placeholder.toString().padStart(2, "0")}`);
    } else {
      hourInput.set_text("23");
    }
  } else {
  }

  setTimeLabel();
});


// Set minute layout
const increment_minute = new Gtk.Button({
  label: "+",
  margin_end: 70,
  margin_start: 70,
});

const minuteInput = new Gtk.Entry({
  placeholder_text: "05",
  margin_end: 20,
  margin_start: 20,
});

const decrement_minute = new Gtk.Button({
  label: "-",
  margin_end: 70,
  margin_start: 70,
});

_minuteBox.append(increment_minute);
_minuteBox.append(minuteInput);
_minuteBox.append(decrement_minute);
_minuteBox.set_size_request(2, 19);

// connect signal for minute increment
increment_minute.connect("clicked", () => {
  let placeholder = parseInt(minuteInput.get_placeholder_text());
  let text = parseInt(minuteInput.get_text());

  if (minuteInput.get_text()) {
    if (text < 59) {
      text += 1;

      minuteInput.set_text(`${text.toString().padStart(2, "0")}`);
    } else {
      minuteInput.set_text("00");
    }
  } else if (minuteInput.get_placeholder_text()) {
    if (placeholder < 59) {
      placeholder += 1;

      minuteInput.set_text(`${placeholder.toString().padStart(2, "0")}`);
    } else {
      minuteInput.set_text("00");
    }
  } else {
  }

  setTimeLabel();
});

// connect signal for minute decrement
decrement_minute.connect("clicked", () => {
  let placeholder = parseInt(minuteInput.get_placeholder_text());
  let text = parseInt(minuteInput.get_text());

  if (minuteInput.get_text()) {
    if (text > 0) {
      text -= 1;

      minuteInput.set_text(`${text.toString().padStart(2, "0")}`);
    } else {
      minuteInput.set_text("59");
    }
  } else if (minuteInput.get_placeholder_text()) {
    if (placeholder > 0) {
      placeholder -= 1;

      minuteInput.set_text(`${placeholder.toString().padStart(2, "0")}`);
    } else {
      minuteInput.set_text("59");
    }
  } else {
  }

  setTimeLabel();
});

// Display time function
function setTimeLabel() {
  _timeOutputLabel.label = `${
    hourInput.get_text()
      ? hourInput.get_text()
      : hourInput.get_placeholder_text()
  } : ${
    minuteInput.get_text()
      ? minuteInput.get_text()
      : minuteInput.get_placeholder_text()
  }`;
}

setTimeLabel();

/* -------------------------------------------- */

