import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../assets/constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="\">
            <img src={footerLogo} alt="footer logo" width={140} height={46} />
          </a>
          <p className="mt-6 text-base text-white-400 leading-7 font-montserrat sm:max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            dignissimos deserunt molestiae facere impedit ad, dolore atque
            officia delectus quaerat?
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
          {footerLinks.map((link) => (
            <div key={link}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {link.title}
              </h4>
              <ul>
                {link.links.map((li) => (
                  <li
                    key={li.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a>{li.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms And Condition</p>
      </div>
    </footer>
  );
};

export default Footer;
