import Adw from "gi://Adw";
import Gtk from "gi://Gtk";
import Source from "gi://GtkSource";
import Gdk from "gi://Gdk";

Source.init();

const previous_match = workbench.builder.get_object("previous_match");
const next_match = workbench.builder.get_object("next_match");
const overlay = workbench.builder.get_object("overlay");
const revealer = workbench.builder.get_object("revealer");
const search_entry = workbench.builder.get_object("search_entry");
const search_bar = workbench.builder.get_object("search_bar");
const close_button = workbench.builder.get_object("close_button");
const occurence_counter = workbench.builder.get_object("occurence_counter");
//const source_view = workbench.builder.get_object("source_view");
const scroll_view = workbench.builder.get_object("scroll_view");
const source_view = new Source.View({
  monospace: true,
  auto_indent: true,
  highlight_current_line: true,
  indent_on_tab: true,
  indent_width: 2,
  insert_spaces_instead_of_tabs: true,
  show_line_marks: true,
  show_line_numbers: true,
  smart_backspace: true,
  tab_width: 2,
  css_classes: ["card"],
});
const buffer = source_view.get_buffer();

const sampleCode = `
function calculateSum(a, b) {
  return a + b;
}

function calculateProduct(a, b) {
  return a * b;
}

function calculatePower(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

function generateFibonacciSequence(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimeNumbersInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrimeNumber(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Main program
const num1 = 10;
const num2 = 5;

const sum = calculateSum(num1, num2);
console.log("Sum:", sum);

const product = calculateProduct(num1, num2);
console.log("Product:", product);

const power = calculatePower(num1, num2);
console.log("Power:", power);

const factorial = calculateFactorial(num1);
console.log("Factorial:", factorial);

const fibonacciSequence = generateFibonacciSequence(10);
console.log("Fibonacci Sequence:", fibonacciSequence);

const primeNumbers = getPrimeNumbersInRange(1, 100);
console.log("Prime Numbers:", primeNumbers);
`;

buffer.set_text(sampleCode, -1);
scroll_view.set_child(source_view);
let searchTerm = search_entry.get_text();
//Functions

//Event-Controller for SourceView
const controller_key = new Gtk.EventControllerKey();
source_view.add_controller(controller_key);
controller_key.connect("key-pressed", (controller, keyval, keycode, state) => {
  if (
    (state & Gdk.ModifierType.CONTROL_MASK && keyval === Gdk.KEY_f) ||
    (state & Gdk.ModifierType.CONTROL_MASK && keyval === Gdk.KEY_F)
  ) {
    search_bar.search_mode_enabled = true;
    search_bar.grab_focus();
  } else if (keyval === Gdk.KEY_Escape) {
    search_bar.search_mode_enabled = false;
    source_view.grab_focus();
  } else if (
    (state & Gdk.ModifierType.CONTROL_MASK &&
      state & Gdk.ModifierType.SHIFT_MASK &&
      keyval === Gdk.KEY_g) ||
    (state & Gdk.ModifierType.CONTROL_MASK &&
      state & Gdk.ModifierType.SHIFT_MASK &&
      keyval === Gdk.KEY_G)
  ) {
    backward_search();
  } else if (state & Gdk.ModifierType.SHIFT_MASK && keyval === Gdk.KEY_Return) {
    backward_search();
  } else if (
    (state & Gdk.ModifierType.CONTROL_MASK && keyval === Gdk.KEY_g) ||
    (state & Gdk.ModifierType.CONTROL_MASK && keyval === Gdk.KEY_G)
  ) {
    forward_search();
  } else if (keyval === Gdk.KEY_Return) {
    source_view.grab_focus_without_selecting();
    forward_search();
  }
});

//Event-Controller for SearchEntry
const controller_for_search = new Gtk.EventControllerKey();
search_entry.add_controller(controller_for_search);

controller_for_search.connect(
  "key-pressed",
  (controller, keyval, keycode, state) => {
    if (
      (state & Gdk.ModifierType.CONTROL_MASK &&
        state & Gdk.ModifierType.SHIFT_MASK &&
        keyval === Gdk.KEY_g) ||
      (state & Gdk.ModifierType.CONTROL_MASK &&
        state & Gdk.ModifierType.SHIFT_MASK &&
        keyval === Gdk.KEY_G)
    ) {
      backward_search();
    } else if (
      state & Gdk.ModifierType.SHIFT_MASK &&
      keyval === Gdk.KEY_Return
    ) {
      backward_search();
    } else if (
      (state & Gdk.ModifierType.CONTROL_MASK && keyval === Gdk.KEY_g) ||
      (state & Gdk.ModifierType.CONTROL_MASK && keyval === Gdk.KEY_G)
    ) {
      forward_search();
    } else if (keyval === Gdk.KEY_Return) {
      source_view.grab_focus_without_selecting();
      forward_search();
    } else if (keyval === Gdk.KEY_Escape) {
      search_bar.search_mode_enabled = false;
      source_view.grab_focus();
    }
  },
);

//Setup SearchBar
search_bar.connect_entry(search_entry);
const search_settings = new Source.SearchSettings({
  case_sensitive: false,
  wrap_around: true,
});

//Setup SearchContext
const search_context = new Source.SearchContext({
  buffer,
  settings: search_settings,
  highlight: true,
});

//Select Highlights
function selectSearchOccurence(match_start, match_end) {
  buffer.select_range(match_start, match_end);
  source_view.scroll_mark_onscreen(buffer.get_insert());
}

//Forward Search
function forward_search() {
  const [, , iter] = buffer.get_selection_bounds();
  const [found, match_start, match_end] = search_context.forward(iter);
  if (!found) return;
  // log(iter.get_offset(), match_start.get_offset(), match_end.get_offset());
  selectSearchOccurence(match_start, match_end);
  updateLabel(iter, match_start, match_end);
}

//Backward Search
function backward_search() {
  const [, iter] = buffer.get_selection_bounds();
  const [found, match_start, match_end] = search_context.backward(iter);
  if (!found) return;
  // log(iter.get_offset(), match_start.get_offset(), match_end.get_offset());
  selectSearchOccurence(match_start, match_end);
  updateLabel(iter, match_start, match_end);
}

//Search Entry Handler
search_entry.connect("search-changed", () => {
  searchTerm = search_entry.get_text();
  search_settings.search_text = searchTerm;
  if (searchTerm === "") {
    previous_match.sensitive = false;
    next_match.sensitive = false;
    occurence_counter.set_text("");
  } else {
    previous_match.sensitive = true;
    next_match.sensitive = true;
  }
  const [, , iter] = buffer.get_selection_bounds();
  const [found, match_start, match_end] = search_context.forward(iter);
  if (!found) {
    previous_match.sensitive = false;
    next_match.sensitive = false;
  }
});

//Previous Button Handler
previous_match.connect("clicked", () => {
  backward_search();
});

//Next Button Handler
next_match.connect("clicked", () => {
  forward_search();
});

//Close-button Handler
close_button.connect("clicked", () => {
  search_bar.search_mode_enabled = false;
});

//Color for Source-View
const scheme_manager = Source.StyleSchemeManager.get_default();
const style_manager = Adw.StyleManager.get_default();

function updateScheme() {
  const scheme = scheme_manager.get_scheme(
    style_manager.dark ? "Adwaita-dark" : "Adwaita",
  );
  buffer.set_style_scheme(scheme);
}

updateScheme();
style_manager.connect("notify::dark", updateScheme);

//Label Updation
function updateLabel(iter, match_start, match_end) {
  let text;
  const occ_count = search_context.get_occurrences_count();
  const occ_pos = search_context.get_occurrence_position(
    match_start,
    match_end,
  );

  if (occ_count === -1) {
    text = "";
  } else if (occ_pos === -1) {
    text = `${occ_count} occurences`;
  } else {
    text = `${occ_pos} of ${occ_count}`;
  }
  occurence_counter.label = text;
}
