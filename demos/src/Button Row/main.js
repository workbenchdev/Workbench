const button_row_suggested = workbench.builder.get_object(
  "button_row_suggested",
);
const button_row_destructive = workbench.builder.get_object(
  "button_row_destructive",
);

button_row_suggested.connect("activated", () => {
  console.log("Suggested button row activated");
});
button_row_destructive.connect("activated", () => {
  console.log("Destructive button row activated");
});
