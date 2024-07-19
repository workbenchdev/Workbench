<img style="vertical-align: middle;" src="data/icons/hicolor/scalable/apps/re.sonny.Workbench.svg" width="120" height="120" align="left">

# Workbench

Learn and prototype with GNOME technologies

![](data/workbench.gif)

<a href='https://flathub.org/apps/re.sonny.Workbench'><img width='240' alt='Download on Flathub' src='https://flathub.org/api/badge?svg&locale=en'/></a>

Workbench lets you experiment with GNOME technologies, no matter if tinkering for the first time or building and testing a GTK user interface.

Among other things, Workbench comes with

- Live GTK/CSS preview
- Library of 100+ examples
- JavaScript, Rust, Python and Vala support
- Declarative user interface syntax
- Autosave, sessions and projects
- Code diagnostics, completion and formatter
- Terminal output

ℹ️ Workbench is made possible by Flatpak. Only Flathub Workbench is supported.

**Testimonials**

> **“** It is an essential tool for those who develop applications with GTK **”** • **“** as someone who is learning GTK, Workbench is definitely a must have! **”** • **“** created a simple mockup using the amazing Workbench app **”** • **“** It used to be hard but Workbench helps me learn GTK. **”** • **“** I recommend it even to those who are new to GTK **”** • **“** This tool has simplified my life by saving my time drastically. **”** • **“** Gone too wild playing with Workbench **”**

## Language support

|            | Formatter | Linter | Library demos[1] |
| ---------- | --------- | ------ | ---------------- |
| JavaScript | ✅        | ✅     | 99               |
| Python     | ✅        | ✅     | 92               |
| Vala       | ✅        | ✅     | 92               |
| Rust       | ✅        | ✅     | 45               |
| Blueprint  | ✅        | ✅     |                  |
| CSS        | ✅        | ✅     |                  |

[1] As of 2024-06-16 <!--counted with `~/go/bin/scc demos/src`-->

## Tips and tricks

<details>
  <summary>Disable code formatting</summary>

[JavaScript](https://docs.rome.tools/formatter/#ignoring-code)

[CSS](https://prettier.io/docs/en/ignore.html#css)

</details>

<details>
  <summary>Turn a prototype made in Workbench into an application</summary>

Use GNOME Builder to start a new project using the appropriate GNOME Application template and copy paste your Workbench code.

</details>

## Code of conduct

Workbench follows the [GNOME Code of Conduct](https://conduct.gnome.org/).

- **Be friendly.** Use welcoming and inclusive language.
- **Be empathetic.** Be respectful of differing viewpoints and experiences.
- **Be respectful.** When we disagree, we do so in a polite and constructive manner.
- **Be considerate.** Remember that decisions are often a difficult choice between competing priorities.
- **Be patient and generous.** If someone asks for help it is because they need it.
- **Try to be concise.** Read the discussion before commenting.

## Credits

Workbench is made of many components.

Thank you Flatpak, GTK, GLib, GtkSourceView, libadwaita, VTE, GJS, Blueprint, icon-development-kit, Vala, GTKCssLanguageServer, gtk-rs, PyGObject

and the GNOME community 🖤

## Copyright

© 2022 [Sonny Piers](https://github.com/sonnyp) and contributors

## License

GPLv3. Please see [COPYING](COPYING) file.

Except for everything under src/Library/demos which is in the public domain under the terms of [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).

<details>
  <summary>
    Testimonials
  </summary>

From [Mirko Brombin](https://mirko.pm/) creator of [Bottles](https://usebottles.com/)

> My favorite tool is definitely Workbench, an application that allows me to compose GTK interfaces with XML/Blueprint, JavaScript, and CSS, seeing the results in real-time. This tool has simplified my life by reducing my time drastically. It is an essential tool for those who develop applications with GTK and I recommend it even to those who are new to GTK.

https://console.substack.com/p/console-112

---

From [Marco Melorio](https://twitter.com/melix9999) creator of [Telgrand](https://github.com/melix99/telegrand)

> GSoC coding period started on Monday, so this is a good time to blog about what I’ve started working on and what’s my milestone to finish the project. First off, I’ve created a simple mockup using Sonny Piers’ amazing Workbench app. This is the first step in knowing how we want the UI to look like, at least in the first iteration.

https://melix99.wordpress.com/2022/06/17/gsoc-update-1-planning/

---

> Workbench has been great! It used to be hard to mess around with GTK but Workbench helps me to learn GTK.

https://twitter.com/synthesizedecho/status/1528958932911280129

> Gone too wild playing with Workbench and Blueprint.

https://mastodon.online/@waimus/108582108701889960

> as someone who is learning GTK, I can confirm that Workbench is definitely a must have for me!

https://fosstodon.org/@TheEvilSkeleton/108598098682948266

> I'm really new to development and workbench its being a fantastic help not just to code itself, but to understand the gtk logic.

https://matrix.to/#/!kDBZrVKCdhrVuWxbGe:matrix.org/$XmIz7FA-UwpoiwHxDyzve1P-J1ecMHkL0x8Br23mUxg

> Installed this (again) a short while ago this is for sure the most fun I've had with a development tool

https://floss.social/@agavi@hachyderm.io/110594674482784960

</details>
