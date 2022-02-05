

<img style="vertical-align: middle;" src="data/icons/re.sonny.Workbench.svg" width="120" height="120" align="left">

# Workbench

Playground for GNOME development

![](data/screenshot.png)

Workbench aims to provide a great developer experience for the following use cases

1. An application to learn GNOME development - learning by doing with an instant feedback loop
2. A scratchpad for experienced developers who want to try or prototype something quickly

Workbench will never be a full fledged IDE or code editor. I see it as the little brother of [GNOME Builder](https://apps.gnome.org/app/org.gnome.Builder/).

Features:

* Live GTK/CSS preview
* [GNOME JavaScript](https://gjs.guide/) for quick and easy scripting
* Syntax highlighting
* Opens `.js`, `.css` and `.ui` files
* Auto format
* [More to come](https://github.com/sonnyp/Workbench/issues)

Workbench is a work in progress, [feedback and help welcome](https://github.com/sonnyp/Workbench/discussions/new).

## Test

1. Install [GNOME Builder](https://apps.gnome.org/app/org.gnome.Builder/)
2. Open Builder and select "Clone Repository..."
3. Clone `https://github.com/sonnyp/Workbench.git`
4. Press the Run ▶ button

## Tips and tricks

<details>
  <summary>Disable code formatting</summary>

Workbench uses the [prettier](https://prettier.io/) code formatter. If you need to exclude some code you can use special comments.

[JavaScript](https://prettier.io/docs/en/ignore.html#javascript)

  ```js
  // prettier-ignore
  matrix(
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  );
  ```

[XML](https://github.com/prettier/plugin-xml#ignore-ranges)

  ```xml
  <foo>
    <!-- prettier-ignore-start -->
      <this-content-will-not-be-formatted     />
    <!-- prettier-ignore-end -->
  </foo>
  ```

[CSS](https://prettier.io/docs/en/ignore.html#css)

  ```css
  /* prettier-ignore */
  .my    ugly rule
  {

  }
  ```
</details>

## Development

Use [GNOME Builder](https://apps.gnome.org/app/org.gnome.Builder/).

## Copyright

© 2022 [Sonny Piers](https://github.com/sonnyp)

## License

GPLv3. Please see [COPYING](COPYING) file.
