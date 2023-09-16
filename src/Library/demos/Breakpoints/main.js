const breakpoint = workbench.builder.get_object("breakpoint");

breakpoint.connect("apply", () => {
  console.log("Breakpoint Applied");
});

breakpoint.connect("unapply", () => {
  console.log("Breakpoint Unapplied");
});
