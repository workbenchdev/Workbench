import Adw from "gi://Adw";

const tab_view = workbench.builder.get_object("tab_view");
const button_new_tab = workbench.builder.get_object("button_new_tab");
const overview = workbench.builder.get_object("overview");
const button_overview = workbench.builder.get_object("button_overview");
let tab_count = 1;

overview.connect("create-tab", () => {
  return add_page();
});

button_overview.connect("clicked", () => {
  overview.open = true;
});

button_new_tab.connect("clicked", () => {
  add_page();
});

function add_page() {
  const title = `Tab ${tab_count}`;
  const page = create_page(title);
  const tab_page = tab_view.append(page);
  tab_page.title = title;
  tab_page.live_thumbnail = true;

  tab_count += 1;
  return tab_page;
}

function create_page(title) {
  const page = new Adw.StatusPage({
    title: title,
    vexpand: true,
  });
  return page;
}
