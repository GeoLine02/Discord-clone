import { FaDiscord } from "react-icons/fa";

const Friend = () => {
  return (
    <div className="flex gap-3 items-center m-3">
      <div className="bg-yellow-400 rounded-full p-2 cursor-pointer flex w-fit items-center justify-center">
        <FaDiscord color="white" size={25} />
      </div>
      <h1>Friend Name</h1>
    </div>
  );
};

export default Friend;
