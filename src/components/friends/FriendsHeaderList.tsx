import { FaInbox, FaUserFriends } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";

const FriendsHeaderList = () => {
  return (
    <header>
      <section className="flex items-center justify-between text-white px-1 py-1">
        <div className="flex gap-4 items-center px-2">
          <div className="flex items-center gap-2">
            <FaUserFriends size={25} />
            <span>Friends</span>
          </div>
          <button className="bg-bglightgray px-1 rounded-md text-black">
            Online
          </button>
          <button>All</button>
          <button>Pending</button>
          <button>Blocked</button>
          <button className="bg-green-600 rounded-md font-medium text-white px-1">
            Add Friend
          </button>
        </div>
        <div className="flex items-center gap-3">
          <FaInbox size={25} />
          <IoIosHelpCircle size={25} />
        </div>
      </section>
    </header>
  );
};

export default FriendsHeaderList;
