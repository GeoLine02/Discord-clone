import FriendList from "@/components/friends/FriendList";
import Search from "@/components/shared/Search";
import React from "react";

const Me = () => {
  return (
    <div className="bg-secondaryDarkGray flex h-screen overflow-y-hidden border-t border-gray-700">
      <section className="min-w-[70%] max-w-[70%]">
        <div className="mt-4 w-full px-2">
          <Search />
          <span className="text-gray-400">online - 3</span>
        </div>
        <FriendList />
      </section>
      <section className="border-l border-gray-700 px-2 text-white">
        <h1 className="text-2xl font-bold py-4 px-2">Active Now</h1>
        <div className="max-w-md text-center mt-11">
          <h2 className="font-bold">It is quite for now...</h2>
          <p className="text-gray-400 mt-2">
            When a friend starts an activity - like playing a game or hanging
            out on voice - we will show it here!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Me;
