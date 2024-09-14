import { FaUserFriends } from "react-icons/fa";
import { PiSpeedometerFill } from "react-icons/pi";
import { FaShop } from "react-icons/fa6";

export const sideBarList = [
  {
    Icon: FaUserFriends,
    title: "Friends",
    path: "/channels/me",
  },
  {
    Icon: PiSpeedometerFill,
    title: "Nitro",
    path: "/store",
  },
  {
    Icon: FaShop,
    title: "Shop",
    path: "/shop",
  },
];
