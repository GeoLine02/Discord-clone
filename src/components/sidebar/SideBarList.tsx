import { sideBarList } from "@/constants/sideBarLists";
import React from "react";
import FriendList from "../shared/FriendList";
import Search from "./Search";
import { FaPlus } from "react-icons/fa";

const SideBarList = () => {
  return (
    <div className="bg-secondaryDarkGray min-w-60 h-screen">
      <section className="p-2">
        <Search />
        <hr className="bg-bgDarkGray mt-2" />
      </section>
      <div className="px-2">
        <section>
          {sideBarList.map((listItem) => {
            const { Icon, title } = listItem;
            return (
              <div
                className="flex itesm-center gap-3 py-2"
                key={listItem.title}
              >
                <Icon size={30} />
                <span className="text-white">{title}</span>
              </div>
            );
          })}
        </section>
        <div>
          <div className="flex w-full items-center justify-between">
            <span>Direct messages</span>
            <FaPlus />
          </div>
          <FriendList />
        </div>
      </div>
    </div>
  );
};

export default SideBarList;
