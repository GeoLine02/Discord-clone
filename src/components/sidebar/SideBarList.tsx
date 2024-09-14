"use client";

import { sideBarList } from "@/constants/sideBarLists";
import React from "react";
import Search from "../shared/Search";
import { FaPlus } from "react-icons/fa";
import DirectMessagesList from "../directMessage/DirectMessageList";
import { usePathname, useRouter } from "next/navigation";

const SideBarList = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div className="bg-secondaryDarkGray min-w-60 h-screen">
      <section className="p-2">
        <Search />
        <hr className="bg-bgDarkGray mt-2" />
      </section>
      <div className="px-2">
        <section>
          {sideBarList.map((listItem) => {
            const { Icon, title, path } = listItem;
            return (
              <div
                onClick={() => router.push(path)}
                className={`${
                  path === currentPath && "bg-hoverGray"
                } flex itesm-center gap-3 py-2 cursor-pointer hover:bg-hoverGray rounded-lg`}
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
          <DirectMessagesList />
        </div>
      </div>
    </div>
  );
};

export default SideBarList;
