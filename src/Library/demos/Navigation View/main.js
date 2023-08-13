const nav_view = workbench.builder.get_object("nav_view");
const nav_pageone = workbench.builder.get_object("nav_pageone");
const next_button = workbench.builder.get_object("next_button");
const previous_button = workbench.builder.get_object("previous_button");
const nav_pagetwo = workbench.builder.get_object("nav_pagetwo");
const nav_pagethree = workbench.builder.get_object("nav_pagethree");
const nav_pagefour = workbench.builder.get_object("nav_pagefour");
const decisive_button_transition = workbench.builder.get_object(
  "decisive_button_transition",
);
const decisive_button_poponescape = workbench.builder.get_object(
  "decisive_button_poponescape",
);
const title = workbench.builder.get_object("title");

next_button.connect("clicked", () => {
  switch (nav_view.visible_page) {
    case nav_pageone:
      nav_view.push(nav_pagetwo);
      break;
    case nav_pagetwo:
      nav_view.push(nav_pagethree);
      break;
    case nav_pagethree:
      nav_view.push(nav_pagefour);
      break;
  }
});

previous_button.connect("clicked", () => {
  nav_view.pop();
});

nav_view.connect("notify::visible-page", () => {
  previous_button.sensitive = nav_view.visible_page !== nav_pageone;
  next_button.sensitive = nav_view.visible_page !== nav_pagefour;
  switch (nav_view.visible_page) {
    case nav_pageone:
      title.label = "Page 1";
      break;
    case nav_pagetwo:
      title.label = "Page 2";
      break;
    case nav_pagethree:
      title.label = "Page 3";
      break;
    case nav_pagefour:
      title.label = "Page 4";
      break;
  }
});
