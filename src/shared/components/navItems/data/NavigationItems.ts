import type { NavigationItemType } from "../types/NavigationItemType";

export const NavigationItems: NavigationItemType[] = [
  {
    id: "1",
    title: "Home",
    link: "",
    items: [
      {
        title: "Home Item 1",
      },
      {
        title: "Home Item 2",
      },
      {
        title: "Home Item 3",
      },
    ],
  },
  {
    id: "2",
    title: "Shop",
    link: "",
    items: [
      {
        title: "Shop Item 1",
      },
    ],
  },
  { id: "3", title: "Blogs", link: "" },
  { id: "4", title: "About Us", link: "" },
  { id: "5", title: "Contact Us", link: "" },
];
