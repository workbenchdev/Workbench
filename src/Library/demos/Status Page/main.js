const content = workbench.builder.get_object("content");
const entry = workbench.builder.get_object("entry_1");
const button = workbench.builder.get_object("submit_button");

button.connect("clicked", () => {
  const text = entry.get_text();
  if (text === "Error") {
    content.title = "Error connecting to server";
  } else if (text === "No results") {
    content.title = "No results found";
  } else {
    content.title = "No content available for this keyword.";
  }
});

