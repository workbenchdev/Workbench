This is a Workbench project.

To open and run this; [install Workbench from Flathub](https://flathub.org/apps/re.sonny.Workbench) and open this project folder with it.

## Icons

You can embed icons into your project by adding them to the [`./icons`](./icons/) subfolder.

Then you can reference them by name in UI. For example

```
# Given a file icons/moon-symbolic.svg
Gtk.Image {
  icon-name: "moon-symbolic";
}
```

Press "Run" if your icon is not detected yet.

Please refer to Workbench Library entry "Using Icons" for more information.
