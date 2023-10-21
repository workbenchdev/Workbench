import dbus_previewer from "../../Previewer/DBusPreviewer.js";

export default function PythonBuilder({ session }) {
  async function run() {
    try {
      const proxy = await dbus_previewer.getProxy("python");
      await proxy.RunAsync(session.file.get_path(), session.file.get_uri());
    } catch (err) {
      console.error(err);
      return false;
    }

    return true;
  }

  return { run };
}
