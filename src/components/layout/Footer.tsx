import Image from "next/image";
import USAImage from "../../../assets/images/USA.svg";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <footer className=" bg-bgDarkGray text-white py-16">
      <div className="container flex justify-between mx-auto">
        <section className="space-y-2">
          <h1 className="text-2xl text-bgPrimary">Imagine a place</h1>
          <div className="flex gap-4 items-center">
            <Image alt="usa flag" src={USAImage} />
            <span>English, USA</span>
          </div>
          <div className="flex items-center gap-4">
            <FaTwitter size={25} />
            <FaInstagram size={25} />
            <FaFacebook size={25} />
            <FaYoutube size={25} />
          </div>
        </section>

        <ul className="space-y-3">
          <span className="text-bgPrimary">Product</span>
          <li>Downlaod</li>
          <li>Nitro</li>
          <li>Status</li>
        </ul>
        <ul className="space-y-3">
          <span className="text-bgPrimary">Company</span>
          <li>About</li>
          <li>Jobs</li>
          <li>Branding</li>
          <li>Newsroom</li>
        </ul>
        <ul className="space-y-3">
          <span className="text-bgPrimary">Resources</span>
          <li>Collage</li>
          <li>Support</li>
          <li>Safety</li>
          <li>Blog</li>
          <li>Feedback</li>
          <li>Developers</li>
          <li>SteamKit</li>
        </ul>
        <section>
          <ul className="space-y-3">
            <span className="text-bgPrimary">Policies</span>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Privacy</li>
            <li>Cookie Settigns</li>
            <li>GuidLines</li>
            <li>Acknolagement</li>
            <li>Licenses</li>
            <li>Moderation</li>
          </ul>
        </section>
      </div>
      <hr className="bg-bgPrimary container mx-auto mt-8" />
      <div className="flex justify-between container mx-auto mt-4">
        <Logo />
        <button className="bg-bgPrimary text-white py-2 px-7 rounded-full">
          Open Discord
        </button>
      </div>
    </footer>
  );
};

export default Footer;
