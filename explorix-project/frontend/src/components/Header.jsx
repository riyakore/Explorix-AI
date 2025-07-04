// this file creates the header for the website

import logo from "../assets/logo.png";
import { navigation } from "../constants";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    // if the navigation bar is closed
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full
      z-50 border-b
      border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to="/" className="flex items-center w-[12rem] xl:mr-8">
          <img
            src={logo}
            style={{ width: "60px", height: "60px" }}
            alt="Explorix"
          />
          <span className="text-3xl font-semibold text-white ml-1">
            Explorix
          </span>
        </Link>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0
          bg-n-8 lg:static 
          lg:flex lg:mx-auto 
          lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* from index.js */}
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl 
                uppercase text-n-1 
                transition-colors hover:text-color-7 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } 
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs 
                lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                }  lg:leading-5 lg:hover:text-color-7  xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu></HamburgerMenu>
        </nav>
        <Link to="/signin" className="inline-block">
          <Button className="hidden lg:flex hover:text-color-7">Sign In</Button>
        </Link>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation}></MenuSvg>
        </Button>
      </div>
    </div>
  );
};

export default Header;
