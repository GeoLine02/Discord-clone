"use client";

import React from "react";
import "../../app/globals.css";
import Logo from "../shared/Logo";

interface IHeaderProps {
  downloadRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Header = ({ downloadRef }: IHeaderProps) => {
  const openDiscord = () => {
    const timeout = setTimeout(() => {
      if (downloadRef.current) {
        window.open("https://discord.com/download", "_blank");
      }
    }, 300);

    window.location.href = "discord://";

    window.addEventListener("blur", () => clearTimeout(timeout));
  };

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
      <button
        onClick={openDiscord}
        className="bg-white text-black rounded-full px-7 py-2 text-center"
      >
        Open Discord
      </button>
    </header>
  );
};

export default Header;
