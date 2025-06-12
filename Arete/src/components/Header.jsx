import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const navItems = ["HOME", "ABOUT", "OUR PROJECT", "CONTACT"];
  const dotsRef = useRef([]);

  // GSAP animations for menu and dots
  useGSAP(() => {
    // Menu animation
    gsap.fromTo(
      ".menu",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3 }
    );
  }, [isMenuClicked]);

  const updateMenu = () => {
    console.log("updateMenu");
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const NavItemWithDivider = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="menu-box flex flex-row pt-10 items-center w-full"
        onMouseEnter={() => setActiveDot(index)}
      >
        <span
          className="text-2xl font-semibold w-full items-center justify-start text-right h-10 cursor-pointer"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setActiveDot(index)}
        >
          {item}
        </span>
        <div
          className={`bg-white h-[0.5px] rounded-xl ml-2 transition-all duration-200 ease-out ${
            isHovered ? "w-0" : "w-11"
          }`}
        />
      </div>
    );
  };

  return (
    <div className="flex absolute top-0 left-0 z-50 text-white pl-36 pr-36 justify-between items-end w-screen h-[100px] ">
      <img src="img/logo.svg" alt="Logo" />

      <div className="flex flex-col items-center z-60">
        <div className="burger-menu cursor-pointer" onClick={updateMenu}>
          <div
            className={`${burgerClass} w-11 bg-white h-1 rounded-xl mb-3 ${
              isMenuClicked
                ? "-rotate-45 translate-y-4 translate-x-1 duration-300"
                : "duration-300"
            }`}
          />
          <div
            className={`${burgerClass} w-11 bg-white h-1 rounded-xl my-3 ${
              isMenuClicked ? "opacity-0" : ""
            }`}
          />
          <div
            className={`${burgerClass} w-11 bg-white h-1 rounded-xl mt-3 ${
              isMenuClicked
                ? "rotate-45 -translate-y-4 translate-x-1 duration-300"
                : "duration-300"
            }`}
          />
        </div>

        {/* Navigation menu */}
        <div
          className={`${menuClass} h-[450px] w-[230px] absolute mt-10 flex flex-col items-end justify-start gap-4 pt-2 mr-36`}
        >
          {navItems.map((n, index) => (
            <NavItemWithDivider item={n} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
