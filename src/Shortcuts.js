export default function Shortcuts({
  application,
  window,
}) {
  application.set_accels_for_action("win.run", ["<Primary>Return"]);
  application.set_accels_for_action("app.quit", ["<Primary>Q"]);
  application.set_accels_for_action("app.shortcuts", ["<Primary>question"]);
  application.set_accels_for_action("app.open", ["<Primary>O"]);
}
