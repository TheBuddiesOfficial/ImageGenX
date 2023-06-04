import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin,FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex justify-center text-center items-center flex-col h-auto p-[15px] sm:min-h-[70px] bg-navy">
      <div className=" w-full sm:mb-[10px] mb-2 text-light_slate flex text-3xl justify-center">
        <Link
          to="https://github.com/TheBuddiesOfficial"
          className="mx-4 text-light_slate hover:text-green"
        >
          <FiGithub />
        </Link>
        <Link
          to="https://twitter.com/TheBuddyzTeam"
          className="mx-4 text-light_slate hover:text-green"
        >
          <FiTwitter />
        </Link>
        <Link
          to="https://www.facebook.com/TheBuddyzOfficials"
          className="mx-4 text-light_slate hover:text-green"
        >
          <FiFacebook />
        </Link>
        <Link
          to="https://linkedin.com/in/the-buddyz-50b4ba267"
          className="mx-4 text-light_slate hover:text-green"
        >
          <FiLinkedin />
        </Link>
      </div>
      <div className="text-center items-center text-[13px] text-light_slate">
        <p className="p-2 font-sora">
          Designed and crafted by{" "}
          <Link
            to="https://github.com/TheBuddiesOfficial"
            className="text-lightest_slate cursor-pointer"
          >
            TheBuddyzTeam
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
