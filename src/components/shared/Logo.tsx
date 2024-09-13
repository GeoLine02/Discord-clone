import React from "react";
import { FaDiscord } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <FaDiscord color="white" size={30} />
      <h1 className="text-xl font-bold text-white">Discord</h1>
    </div>
  );
};

export default Logo;
