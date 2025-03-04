import { MenuItem } from "@/interFace/interFace";

const navMenuData: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
    hasDropdown: false,
    // subMenu: [
    //   {id: 7,
    //     label: "Home 1",
    //     link: "/",
    //   },
    //   {id: 8,
    //     label: "Home 2",
    //     link: "/home-2",
    //   },
    // ],
  },
  { id: 2, hasDropdown: false, label: "About", link: "/about" },
  {
    id: 3,
    label: "Service",
    link: "/service",
    hasDropdown: false,
    // subMenu: [
    //   { id: 9, label: "Service One", link: "/service-1" },
    //   { id: 10, label: "Service Two", link: "/service-2" },
    //   { id: 11, label: "Service Three", link: "/service-3" },
    //   { id: 12, label: "Service Manage", link: "/service-manage" },
    //   { id: 30, label: "Service Details", link: "/service-details" },
    // ],
  },
  {
    id: 4,
    label: "Portfolio",
    link: "/blog",
    hasDropdown: false,
  },

  { id: 6, hasDropdown: false, label: "Contact", link: "/contact" },
];

export default navMenuData;
