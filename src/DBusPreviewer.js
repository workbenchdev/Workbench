import Gio from "gi://Gio";

const ifaceXml = `
<node>
  <interface name="re.sonny.Workbench.vala_previewer">
    <method name="UpdateUi">
      <arg type="s" name="content" direction="in"/>
      <arg type="s" name="target_id" direction="in"/>
    </method>
    <method name="UpdateCss">
      <arg type="s" name="content" direction="in"/>
    </method>
    <method name="Run">
      <arg type="s" name="filename" direction="in"/>
      <arg type="s" name="run_symbol" direction="in"/>
      <arg type="s" name="builder_symbol" direction="in"/>
      <arg type="s" name="window_symbol" direction="in"/>
    </method>
  </interface>
</node>`;

export default function DBusPreviewer () {
  const WorkbenchProxy = Gio.DBusProxy.makeProxyWrapper(ifaceXml);
  const proxy = WorkbenchProxy(Gio.DBus.session, 're.sonny.Workbench.vala_previewer', '/re/sonny/workbench/vala_previewer');
  
  return proxy;
}

