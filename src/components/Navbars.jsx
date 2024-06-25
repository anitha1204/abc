import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import Popup from "./Popup.jsx";

const Navbars = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white text-secondary shadow-md z-10">
        {/* Top bar */}
        <div className="bg-primary text-white">
          <div className="container mx-auto py-1 hidden sm:block">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next Table booking</p>
              <div className="flex items-center space-x-2 poin">
                <RiFacebookBoxLine size={25} className="cursor-pointer"/>
                <FaInstagram size={25} className="cursor-pointer"/>
                <CiLinkedin size={25} className="cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
        {/* Main navbar */}
        <div className="container mx-auto py-3 sm:py-0 px-4 lg:px-0">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logoImg} alt="Logo" className="h-16 sm:h-20 sm:ml-10 lg:ml-20" />
            </Link>
            {/* Navlinks section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-4 lg:gap-8 xl:gap-10 text-lg lg:text-xl xl:text-2xl ">
                <li className="py-2 hover:text-primary">
                  <NavLink
                    exact
                    to="/"
                    activeClassName="text-primary"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-2 hover:text-primary">
                  <NavLink
                    to="/aboutUs"
                    activeClassName="text-primary"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="py-2 hover:text-primary">
                  <NavLink
                    to="/menu"
                    activeClassName="text-primary"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="py-2 hover:text-primary">
                  <NavLink
                    to="/blog"
                    activeClassName="text-primary"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="py-2 hover:text-primary">
                  <NavLink
                    to="/contact"
                    activeClassName="text-primary"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* User and Cart icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 mr-20">
                <Link to="/register">
                <AiOutlineUser className="text-2xl cursor-pointer hover:text-primary" />
                </Link>
                <Link to="/cart" className="relative">
                   <AiOutlineShoppingCart className="text-2xl cursor-pointer hover:text-primary" />
                   <div className="absolute w-4 h-4 bg-primary text-white flex items-center justify-center rounded-full text-xs bottom-1 ml-4 mb-3"></div>
                 </Link>
              </div>
              {/* Table Booking button */}
             <Link to ="/popup">  <button
              //  onClick={<Popup/>}
                className="hidden md:block bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
              >
                Table Booking
              </button></Link> 
            
              {/* Mobile Hamburger Menu */}
              <div className="md:hidden">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Responsive menu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbars;
