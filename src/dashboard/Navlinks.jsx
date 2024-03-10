import a1 from "../assets/icons/1a.png";
import b1 from "../assets/icons/1b.svg";
import a2 from "../assets/icons/2a.png";
import b2 from "../assets/icons/2b.png";
import a3 from "../assets/icons/3a.png";
import b3 from "../assets/icons/3b.png";
import a4 from "../assets/icons/4a.png";
import b4 from "../assets/icons/4b.png";
import a5 from "../assets/icons/5a.png";
import b5 from "../assets/icons/5b.png";

export const navLinks = [
  {
    path: "analytics",
    name: "Dashboard",
    icon1: a1,
    icon2: b1,
  },
  {
    path: "users",
    name: "Users",
    icon1: a2,
    icon2: b2,
  },
  {
    path: "system-setup",
    name: "System Setup",
    icon1: a3,
    icon2: b3,
    dropdown: [
      { name: "Buses", link: "system-setup/buses" },
      { name: "Routes", link: "system-setup/routes" },
      { name: "Stops", link: "system-setup/stops" },
    ],
  },
  {
    path: "reports",
    name: "Reports",
    icon1: a4,
    icon2: b4,
  },
  {
    path: "settings",
    name: "Settings",
    icon1: a5,
    icon2: b5,
  },
];
