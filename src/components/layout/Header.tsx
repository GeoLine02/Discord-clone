import React from "react";
import "../../app/globals.css";
import Logo from "../shared/Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between container mx-auto py-4">
      <Logo />
      <ul className="text-white flex items-center gap-4">
        <li className="cursor-pointer">Download</li>
        <li className="cursor-pointer">Nitro</li>
        <li className="cursor-pointer">Discover</li>
        <li className="cursor-pointer">Safety</li>
        <li className="cursor-pointer">Support</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer">Careers</li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="bg-white rounded-full px-7 py-2 text-center text-black hover:opacity-70">
          Sign in
        </button>
        <button className="bg-white rounded-full px-7 py-2 text-center text-black hover:opacity-70">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
