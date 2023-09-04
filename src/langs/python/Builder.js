import python_dbus_previewer from "./PythonDBusPreviewer.js";

export default function PythonBuilder({ session }) {
  async function build() {
    // TODO?
    return true;
  }

  async function run() {
    try {
      await python_dbus_previewer.run(session.file.get_path());
    } catch (err) {
      console.log(err);
      logError(err);
      return false;
    }

    return true;
  }

  return { build, run };
}
