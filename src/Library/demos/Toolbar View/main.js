const topbar_select = workbench.builder.get_object("topbar_select");
const bottombar_select = workbench.builder.get_object("bottombar_select");
const toolbar_view = workbench.builder.get_object("toolbar_view");

let top_bar;
let bottom_bar;

function changeTopBar(name) {
  const new_top_bar = workbench.builder.get_object(name);
  top_bar && toolbar_view.remove(top_bar);
  toolbar_view.add_top_bar(new_top_bar);
  top_bar = new_top_bar;
}

function changeBottomBar(name) {
  const new_bottom_bar = workbench.builder.get_object(name);
  bottom_bar && toolbar_view.remove(bottom_bar);
  toolbar_view.add_bottom_bar(new_bottom_bar);
  bottom_bar = new_bottom_bar;
}

topbar_select.connect("notify::selected-item", selectTopBar);
bottombar_select.connect("notify::selected-item", selectBottomBar);

selectTopBar();
selectBottomBar();

function selectTopBar() {
  switch (topbar_select.selected) {
    case 0:
      changeTopBar("header_bar");
      break;
    case 1:
      changeTopBar("tab_bar");
      break;
    case 2:
      changeTopBar("switcher_bar");
      break;
    case 3:
      changeTopBar("action_bar");
      break;
    case 4:
      changeTopBar("popover");
      break;
    case 5:
      changeTopBar("search_bar");
      break;
    case 6:
      changeTopBar("gtk_box");
      break;
  }
}

function selectBottomBar() {
  switch (bottombar_select.selected) {
    case 0:
      changeBottomBar("header_bar");
      break;
    case 1:
      changeBottomBar("tab_bar");
      break;
    case 2:
      changeBottomBar("switcher_bar");
      break;
    case 3:
      changeBottomBar("action_bar");
      break;
    case 4:
      changeBottomBar("popover");
      break;
    case 5:
      changeBottomBar("search_bar");
      break;
    case 6:
      changeBottomBar("gtk_box");
      break;
  }
}
