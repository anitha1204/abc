
import React from "react";
import logo from "../assets/logo.png";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import {
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/aboutUs",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact Us",
    link: "/contactUs",
  },
];

const Footer = () => {
  return (
    <div className="p-8">
      <div className="bg-primary py-10 relative overflow-hidden rounded-t-xl mt-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 bg-gray-800/80 backdrop-blur-sm rounded-t-xl p-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src={logo}
                alt="Logo"
                className="h-18 w-[200px] rounded-full mb-4"
              />
              <p className="text-md text-gray-100">
                Delivering Delights, Every Time.
                <br />
                Quick, Reliable, and Catchy Deliveries.
                <br />
                Delivering Convenience at Your Doorstep.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:col-span-2">
              <div>
                <h1 className="text-2xl font-bold mb-3 text-gray-100">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li
                      key={index}
                      className="hover:translate-x-1 transition-transform duration-300 text-gray-200"
                    >
                      <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                        <span className="mr-2">&#11162;</span>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-3 text-gray-100">
                  Contact Us
                </h1>
                <div className="flex items-center gap-3 mb-3 text-gray-200">
                  <FaEnvelope size={20} />
                  <p>hr@firstladder.com</p>
                </div>
                <div className="flex items-center gap-3 mb-3 text-gray-200">
                  <FaMobileAlt size={25} />
                  <p>+91 8300941219</p>
                </div>
                <div className="flex items-center gap-3 mb-3 text-gray-200">
                  <FaMapMarkedAlt size={25} />
                  <p>
                    714A, 7th floor, Phase II, Spencer Plaza, Anna Salai, Chennai 600
                    002.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" className="text-gray-200 hover:text-white">
                    <RiFacebookBoxLine size={30} className="h-9 w-9" />
                  </a>
                  <a href="#" className="text-gray-200 hover:text-white">
                    <FaInstagram size={20} className="h-9 w-9" />
                  </a>
                  <a href="#" className="text-gray-200 hover:text-white">
                    <CiLinkedin size={20} className="h-9 w-9" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default Footer;
