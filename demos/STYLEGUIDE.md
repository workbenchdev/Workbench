# Style Guide

## User Interface

### General Principles

- Follow the [GNOME HIG Writing Style](https://developer.gnome.org/hig/guidelines/writing-style.html)
- Use Adwaita's [Style Classes](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/style-classes.html)
- Mark user-visible strings as translatable (e.g. `_("Example")`)
- Prefer high-level widgets like `Adw.StatusPage` and `Gtk.Stack`
- Prefer properties like `Gtk.Box:spacing` to `Gtk.Widget:margin-top` for layout
- Avoid hard-coded height and width, except for e.g. images with fixed geometry
- Prefer HIG terms (Radio Groups, Checkboxes) over technical ones (Checkbuttons)
- If you need icons, it is possible to use custom icons but prefer included [Adwaita icons set](ttps://gitlab.gnome.org/GNOME/adwaita-icon-theme/-/tree/master/Adwaita/symbolic/actions?ref_type=heads).

## CSS

### General Principles

- Use Adwaita's [Named Colors](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/named-colors.html)
- Use Adwaita's [Style Classes](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1-latest/style-classes.html)

### Formatting

- Use 2-space indentation for all elements
- Use one space between colon and values (e.g. `property-name: value;`)
- Use double-quotes for strings (e.g. `"quoted"`)

## Blueprint

### Formatting

- Use 2-space indentation for all elements
- Use one space between colon and values (e.g. `property-name: value;`)
- Use double-quotes for strings (e.g. `"quoted"`)
- Mark user-visible strings as translatable (e.g. `_("Example")`)

### Object ids

Prefix the object id with the name of the class.

- KO: `next_button`
- OK: `button_next`

### Child Widgets

```js
// OK
Parent {
  child: Box {
    property-name: value;
  };
}

// NOT OK
Parent {
  child:
    Box {
      property-name: value;
    };
}
```

# Programming

- Use construct-time properties, when possible
- Use properties (eg `widget.sensitive`) over methods (eg `widget.set_sensitive`)

## JavaScript

### General Principles

- Prefer `async`/`await`
- Use ESModules for imports
- Do not use `async` signal handlers, instead use `myFunction().catch(logError)`
- camelCase for functions for example `function openFile`
- snake_case for variables/constants for example `const button_ok`
- Use named functions except for inline callbacks where you should use anonymous functions

### General Formatting

- Use 2-space indentation for all elements
- `Gio._promisify()` should be directly below the `import` statements

### Logging

- All errors should be caught using `console.error`

## Vala

Please see existing code, or ask. Add anything you learn here.

### General Principles

- Prefer `async`/`yield`
- snake_case for functions for example `open_file`
- Type identifiers in `CamelCase`
- Enum members and constants in `ALL_CAPS`, words seperated by underscores
- implcit typing with `var` only when the type is obvious due to the assignment, for example `var foo = new Window ();`
- only use casting with `as` when you also check the variable for `null` afterwards
- Make valadoc style code comments when it makes sense
- Use functions-in-functions when the same handler needs to be connected to multiple signals
- Use `@"blub $foo blob $(bar.baz)\n"` instead of `"blub " + foo.to_string() + ...`
- Errors should be catched with `try { ... } catch { ... }`
- For enum members, use `button.valign = CENTER` instead of `button.valign = Gtk.Align.CENTER` where possible
- Initialize objects with properties where possible:

```vala
// OK
var button = new Gtk.Button () {
    label = "Click Me!",
    halign = CENTER,
    css_classes = { "suggested-action", "pill" }
};

// NOT OK
var button = new Gtk.Button ();
button.label = "Click Me!";
button.halign = CENTER;
button.add_css_class ("suggested-action");
button.add_css_class ("pill");
```

### General Formatting

- Use 4-space indentation
- Property get, set, default declaration all on one line, seperated by semicolons, if default implementations are used
- If properties have implementations, then `get {`, `set {` open new lines
- Attributes on their own line

### Logging

- Use `message ()`, `warning ()` and `critical ()` for debug messages (depending on the severity)
- Use `print ()`/`stdout.printf ()` for messages that are intended to be seen by the user
