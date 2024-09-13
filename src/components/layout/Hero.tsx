import React from "react";
import Header from "./Header";
import { GoDownload } from "react-icons/go";
import Image from "next/image";
import HeroImage from "../../../assets/images/HeroImage.svg";

const Hero = () => {
  return (
    <section className="bg-bgPrimary text-white">
      <Header />
      <div className="flex flex-col gap-14 justify-center items-center">
        <h1 className="text-5xl ">Imagine a place...</h1>
        <p className="max-w-3xl text-xl">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-8 py-4 bg-white rounded-full text-black font-medium">
            <GoDownload size={20} />
            <button>Download for Windows</button>
          </div>
          <button className="text-white bg-bgDarkGray px-8 py-4 rounded-full font-medium">
            Open Discord on your browser
          </button>
        </div>
      </div>
      <Image alt="hero image" src={HeroImage} width={100} layout="responsive" />
    </section>
  );
};

export default Hero;
