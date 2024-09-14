import { FaDiscord } from "react-icons/fa";
import ChannelList from "../sidebar/ChannelList";
import SideBarList from "../sidebar/SideBarList";

const SideBar = () => {
  return (
    <aside className="flex">
      <section className="bg-bgDarkGray p-3">
        <div>
          <div className="bg-bgPrimary text-white text-center rounded-xl cursor-pointer flex justify-center py-2">
            <FaDiscord size={35} />
          </div>
          <div className="bg-bglightgray h-[2px] w-full mt-3 rounded-full"></div>
        </div>
        <div>
          <ChannelList />
        </div>
      </section>
      <section className="text-bglightgray">
        <SideBarList />
      </section>
    </aside>
  );
};

export default SideBar;
