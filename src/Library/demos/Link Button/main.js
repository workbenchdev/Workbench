const linkbutton = workbench.builder.get_object("linkbutton");

linkbutton.connect("notify::visited", () => {
  console.log("The link has been visited");
});
