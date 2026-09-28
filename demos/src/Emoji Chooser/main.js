const emoji_chooser = workbench.builder.get_object("emoji_chooser");
const button = workbench.builder.get_object("button");

emoji_chooser.connect("emoji-picked", (_self, emoji) => {
  button.label = emoji;
});
