import "gi://Gtk?version=4.0";

import tst, { assert } from "../src/troll/tst/tst.js";
import { parse } from "../src/lib/ltx.js";

import { assertBuildable } from "../src/Previewer/utils.js";

const test = tst("assertBuildable");

test("assertBuildable", () => {
  assert.not.throws(() => {
    assertBuildable(
      parse(
        `
<interface>
</interface>
`.trim()
      )
    );
  });

  assert.not.throws(() => {
    assertBuildable(
      parse(
        `
<interface>
  <object>
  </object>
</interface>
`.trim()
      )
    );
  });

  assert.not.throws(() => {
    assertBuildable(
      parse(
        `
<interface>
  <object class="Foobar">
  </object>
</interface>
`.trim()
      )
    );
  });

  assert.not.throws(() => {
    assertBuildable(
      parse(
        `
<interface>
  <object class="AdwLeafletPage">
  </object>
</interface>
`.trim()
      )
    );
  });

  assert.throws(() => {
    assertBuildable(
      parse(
        `
<interface>
  <object class="AdwLeafletPage">
    <child>
    </child>
  </object>
</interface>
`.trim()
      )
    );
  }, /AdwLeafletPage is not a GtkBuildable/);

  assert.throws(() => {
    assertBuildable(
      parse(
        `
  <interface>
    <object class="AdwLeafletPage">
      <child>
        <object />
      </child>
    </object>
  </interface>
  `.trim()
      )
    );
  }, /AdwLeafletPage is not a GtkBuildable/);

  // https://github.com/sonnyp/Workbench/issues/49
  assert.not.throws(() => {
    assertBuildable(
      parse(
        `
<?xml version='1.0' encoding='UTF-8' ?>
<interface>
  <child>
    <object class="GtkLabel">
      <property name="label">Test</property>
    </object>
  </child>
</interface>
`.trim()
      )
    );
  });

  // https://github.com/sonnyp/Workbench/issues/49
  assert.throws(() => {
    assertBuildable(
      parse(
        `
  <?xml version='1.0' encoding='UTF-8' ?>
  <interface>
    <object class="GtkBox">
      <child>
        <object class="AdwTabView"/>
      </child>
    </object>
    <object class="AdwTabPage">
      <child>
        <object class="GtkLabel">
          <property name="label">Hello</property>
        </object>
      </child>
    </object>
  </interface>
  `.trim()
      )
    );
  }, /AdwTabPage is not a GtkBuildable/);

  // https://github.com/sonnyp/Workbench/issues/135
  assert.not.throws(() => {
    assertBuildable(
      parse(
        `
<?xml version="1.0" encoding="UTF-8"?>
<interface>
  <requires lib="gtk" version="4.0"/>
  <template class="MainWindow" parent="AdwApplicationWindow">
    <child>
      <object class="AdwLeaflet" id="main_leaflet">
        <property name="homogeneous">true</property>
        <property name="can-navigate-back">true</property>
        <property name="can-navigate-forward">true</property>
        <property name="transition-type">over</property>
        <signal name="notify::folded" handler="on_leaflet_folded"/>
        <child>
          <object class="AdwLeafletPage" id="chat_sidebar">
            <property name="child">
              <object class="GtkBox" id="sidebar_box">
                <property name="hexpand">false</property>
                <property name="vexpand">true</property>
                <property name="orientation">horizontal</property>
                <property name="width-request">360</property>
                <property name="height-request">100</property>
                <child>
                  <object class="GtkBox" id="server_box">
                    <property name="orientation">vertical</property>
                    <property name="hexpand">false</property>
                    <property name="vexpand">true</property>
                    <property name="width-request">58</property>
                    <child>
                      <object class="AdwHeaderBar" id="server_header">
                        <child type="title">
                          <object class="ChatSidebarMenu" id="app_menu"></object>
                        </child>
                      </object>
                    </child>
                    <child>
                      <object class="GtkScrolledWindow" id="server_scroll">
                        <property name="hexpand">false</property>
                        <property name="vexpand">true</property>
                        <property name="hscrollbar-policy">never</property>
                        <property name="vscrollbar-policy">external</property>
                        <child>
                          <object class="GtkListView" id="server_list">
                            <property name="hexpand">false</property>
                            <property name="vexpand">true</property>
                          </object>
                        </child>
                      </object>
                    </child>
                  </object>
                </child>
                <child>
                  <object class="GtkBox" id="channels_box">
                    <child>
                      <object class="AdwHeaderBar" id="channels_header"></object>
                    </child>
                    <child>
                      <object class="GtkListView" id="channels_categories"></object>
                    </child>
                  </object>
                </child>
              </object>
            </property>
          </object>
        </child>
        <child>
          <object class="AdwLeafletPage" id="chat_content">
            <property name="child">
              <object class="AdwFlap" id="channel_flap">
                <property name="flap">
                  <object class="GtkBox" id="channel_sidebar">
                    <property name="orientation">vertical</property>
                  </object>
                </property>
              </object>
            </property>
          </object>
        </child>
      </object>
    </child>
  </template>
</interface>
`.trim()
      )
    );
  });

  // https://github.com/sonnyp/Workbench/issues/145
  assert.throws(() => {
    assertBuildable(
      parse(
        `
<?xml version='1.0' encoding='UTF-8' ?>
<interface>
  <requires lib="gtk" version="4.0"/>
  <object class="AdwHeaderBar" id="workbench_ff14cad7-32cd-4758-b511-9f659df79fb7">
    <child type="title">
      <object class="AdwViewSwitcherTitle" id="title">
        <property name="stack">stack</property>
      </object>
    </child>
  </object>
  <object class="AdwToastOverlay" id="overlay">
    <child>
      <object class="AdwViewStack" id="stack">
        <child>
          <object class="AdwViewStackPage">
            <property name="name">overview</property>
            <property name="title">Overview</property>
            <property name="child">
              <object class="AdwStatusPage"/>
            </property>
            <child>
              <object class="AdwViewStackPage">
                <property name="name">overview</property>
                <property name="title">Overview</property>
              </object>
            </child>
          </object>
        </child>
      </object>
    </child>
    <child>
      <object class="AdwViewSwitcherBar">
        <property name="stack">stack</property>
      </object>
    </child>
  </object>
</interface>
  `.trim()
      )
    );
  }, /AdwViewStackPage is not a GtkBuildable/);
});

export default test;
