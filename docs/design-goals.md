# Previewer

Any valid GTK XML or Blueprint `UI` should be able to render in `Preview`.

At least when it comes to the internal/in-process previwer, the preview should be as helpful as possible. Missing signal handlers or objects shouldn't prevent the preview from updating.

Triggering signal handlers should log a helpful message.

Missing objects should present a helpful message.

# Resilience

Workbench itself should not crash under any circumstances.

# Clarity

When changing the parameters - Workbench should reset to a clean slate

Changing the parameters includes

- Changing Code language
- Changing UI language
- Opening a file
- Opening a demo

Resetting to a clean slate involves

- re-rend the preview to what CSS/UI dictates
- clear the console
- scroll console to end
