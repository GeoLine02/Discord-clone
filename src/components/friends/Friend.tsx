"use client";

import { FaDiscord } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CgMoreVerticalO } from "react-icons/cg";
import { useRouter } from "next/navigation";

const Friend = ({ userID }: { userID: number }) => {
  const router = useRouter();
  console.log(userID);

  return (
    <div className="flex items-center w-full justify-between p-2 hover:bg-hoverGray text-white cursor-pointer rounded-md  border-t border-gray-600">
      <div className="flex items-center gap-3">
        <div className="bg-yellow-400 rounded-full aspect-square text-center p-2">
          <FaDiscord size={25} />
        </div>
        <h1>Friend Name</h1>
      </div>
      <div className="flex items-center gap-3">
        <AiFillMessage
          onClick={() => router.push(`/channels/me/${userID}`)}
          size={30}
        />
        <CgMoreVerticalO size={30} />
      </div>
    </div>
  );
};

export default Friend;
