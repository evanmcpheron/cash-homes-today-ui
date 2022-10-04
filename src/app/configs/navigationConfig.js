import i18next from "i18next";
import { authRoles } from "../auth";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";
import Icons from "../../@helper/Icons";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "home-component",
    title: "HOME",
    type: "item",
    icon: Icons.faHome,
    url: "",
  },
  {
    id: "file-manager-component",
    title: "FILE MANAGER",
    type: "item",
    auth: authRoles.admin,
    icon: Icons.faCloud,
    url: "/file-manager",
  },
  {
    id: "settings-component",
    title: "SETTINGS",
    type: "item",
    auth: authRoles.user,
    icon: Icons.faCloud,
    url: "/settings",
  },
  {
    id: "help-center-component",
    title: "HELP CENTER",
    type: "item",
    icon: Icons.faCircleInfo,
    url: "/help-center",
  },
  {
    id: "deal-calculator-component",
    title: "DEAL CALCULATOR",
    type: "item",
    icon: Icons.faMagnifyingGlassDollar,
    url: "/deal-calculator",
  },
  {
    id: "sign-out-component",
    title: "SIGN OUT",
    type: "item",
    auth: authRoles.user,
    icon: Icons.faRightFromBracket,
    url: "/sign-out",
  },
  // {
  //   id: "signIn-component",
  //   title: "SIGN IN",
  //   auth: authRoles.onlyGuest,
  //   type: "item",
  //   icon: Icons.faLockOpen,
  //   url: "sign-in",
  // },
  // {
  //   id: "signUp-component",
  //   title: "SIGN UP",
  //   auth: authRoles.onlyGuest,
  //   type: "item",
  //   icon: Icons.faUserPlus,
  //   url: "sign-up",
  // },
];

export default navigationConfig;
