const linkbutton = workbench.builder.get_object("linkbutton");

linkbutton.connect("notify::visited", () => {
  console.log("The link has been visited");
});

linkbutton.connect("activate-link", (button) => {
  console.log(`About to activate ${button.uri}`);

  // Return true if handling the link manually, or
  // false to let the default behavior continue
  return false;
});
