import React, { useState, useEffect } from "react";
import foods from "../assets/about.png";
import bg from "../assets/about1.png"; // Corrected path
import { Link } from "react-router-dom";
import img from "../assets/img.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import Img5 from "../assets/img1.png";
import Img6 from "../assets/img2.png";
import Img7 from "../assets/img3.png";
import Img8 from "../assets/img6.png";
import banner from "../assets/banner.png";
import { IoEarth } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const AboutUs = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageArray = [img, img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % imageArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageArray]);

  return (
    <>
      <div className="relative">
        <img
          src={foods}
          alt="Foods Banner"
          className="h-[300px] md:h-[500px] rounded-xl object-cover opacity-90 w-full"
        />
        <div className="w-full h-[300px] md:h-[500px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">
            Welcome to Our About Page!
          </h1>
          <br />
        </div>
      </div>
      <h1 className="my-8 border-l-4 md:border-l-8 border-primary py-2 pl-2 text-2xl md:text-3xl font-bold mx-auto text-center md:text-left md:ml-[700px]">
        About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 mx-4 md:mx-9">
        <div className="bg-gray-100 p-2 rounded-lg flex items-center justify-center">
          <img
            src={imageArray[imageIndex]}
            alt="Slideshow"
            className="w-full max-w-[550px] h-[300px] md:h-[450px] rounded-xl object-cover"
          />
        </div>
        <div className="bg-gray-100 p-5 flex flex-col justify-center rounded-lg">
          <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            Key Players in Food Delivery
          </h3>
          <p className="text-md mb-6 mt-6 mx-2 text-center md:text-left">
            Global Giants: Uber Eats: Known for its wide range of restaurant
            partnerships and swift delivery times. DoorDash: Popular in the
            United States, offering a variety of food options and delivery
            methods. Grubhub: One of the pioneers in online food ordering, known
            for its user-friendly interface and extensive restaurant network.
            Deliveroo: Prominent in Europe and Asia, known for its efficient
            delivery service and variety of restaurant options.
          </p>
          <button className="rounded-full w-48 md:w-60 h-12 flex items-center justify-center bg-primary text-gray-50 hover:bg-gray-50 hover:text-primary mx-auto md:mx-0">
            See what's available
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 mx-9 md:cursor-pointer ">
        <div className="flex flex-col items-center rounded-lg shadow-md p-4 ">
          <img
            src={Img5}
            alt="UK"
            className="mb-4 rounded-md object-cover w-64 h-40 hover:scale-110"
          />
          <h3 className="text-xl font-semibold mb-4">prawn</h3>
          <p className="text-md text-gray-700 text-center">
            Prawns are low in saturated fat and cholesterol, making them a
            heart-healthy food choice .
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-md p-4 ">
          <img
            src={Img6}
            alt="Australia"
            className="mb-4 rounded-md object-cover w-64 h-40  hover:scale-110"
          />
          <h3 className="text-xl font-semibold mb-4">Masala Pasta</h3>
          <p className="text-md text-gray-700 text-center">
            Masala Pasta is an one pot dish made by cooking pasta along with
            Indian masalas, with spices and herbs.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-md p-4">
          <img
            src={Img7}
            alt="USA"
            className="mb-4 rounded-md object-cover w-64 h-40  hover:scale-110"
          />
          <h3 className="text-xl font-semibold mb-4">Mushroom</h3>
          <p className="text-md text-gray-700 text-center">
            Mushrooms are widely known for their great taste and amazing health
            benefits.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-md p-4">
          <img
            src={Img8}
            alt="Canada"
            className="mb-4 rounded-md object-cover w-64 h-40 hover:scale-110"
          />
          <h3 className="text-xl font-semibold mb-4">Noodles</h3>
          <p className="text-md text-gray-700 text-center">
            nstant noodles are a type of pre-cooked noodle usually sold in
            individual packets, cups, or bowls.
          </p>
        </div>
      </div>
      <div className="container md:scroll-sm">
  <h3 className="text-secondary text-2xl md:text-3xl font-bold mt-12 text-center mb-8">
    Why should you partner with Food Way?
  </h3>
  <p className="text-xl text-gray-700 mt-10 text-center mb-3">
    Food Way enables you to get 60% more revenue, 10x new customers and boost
  </p>
  <p className="text-xl text-gray-700 text-center mb-8">
    your brand visibility by providing insights to improve your business.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
    <div className="bg-gray-200 p-8 rounded-lg">
      <div className="flex justify-center md:justify-start">
        <IoEarth className="w-10 h-10 ml-20 text-primary cursor-pointer" />
        <p className="text-2xl ml-5 text-secondary font-bold">3 lakh+</p>
      </div>
      <p className="md:ml-[140px] text-lg  text-primary">restaurant listings</p>
    </div>
    
          <div className=" bg-gray-200 p-8 rounded-lg ">
            <div className="flex ">
              <FaHome className=" w-10 h-10 ml-20 text-primary cursor-pointer" />
              <p className="text-2xl ml-5 text-secondary font-bold">3 lakh+ </p>
            </div>

            <p className=" md:ml-[140px] text-lg  text-primary">
              restaurant listngs
            </p>
          </div>
          <div className=" bg-gray-200 p-8 rounded-lg ">
            <div className="flex ">
              <MdFavoriteBorder className=" w-10 h-10 ml-20 text-primary cursor-pointer" />
              <p className="text-2xl ml-5 text-secondary font-bold">3 lakh+ </p>
            </div>

            <p className=" md:ml-[140px] text-lg  text-primary">
              restaurant listngs
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={banner}
          alt="Foods Banner"
          className="h-[200px] md:h-[400px] rounded-xl object-cover opacity-90 w-full"
        />
        <div className="w-full h-[200px] md:h-[400px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50  grid-cols-1 md:grid-cols-4 ">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center mt-40 ">
            How it works?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mx-9 md:cursor-pointer bg-gray-50 ">
        <div className="flex flex-col items-center rounded-lg shadow-md p-4 ">
          <img
            src={Img5}
            alt="UK"
            className="mb-4 rounded-2xl object-cover w-64 h-40 hover:scale-110"
          />
          <h2 className="text-xl font-semibold mb-4">Step 1</h2>
          <h3 className="text-xl font-semibold mb-3">Create your page on Food Way</h3>
          <p className="text-md text-gray-700 text-center">Help users discover your place by</p>
          <p className="text-md text-gray-700 text-center">creating a listing on Food Way</p>
          
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-md p-4 ">
          <img
            src={Img6}
            alt="Australia"
            className="mb-4 rounded-md object-cover w-64 h-40  hover:scale-110"
          />
          <h2 className="text-xl font-semibold mb-4">Step 2</h2>
          <h3 className="text-xl font-semibold mb-3">Register for online ordering</h3>
          <p className="text-md text-gray-700 text-center">And deliver orders to millions of</p>
          <p className="text-md text-gray-700 text-center">customers with ease</p>
          
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-md p-4">
          <img
            src={Img7}
            alt="USA"
            className="mb-4 rounded-md object-cover w-64 h-40  hover:scale-110"
          />
          <h2 className="text-xl font-semibold mb-4">Step 3</h2>
          <h3 className="text-xl font-semibold mb-3">Start receiving orders online</h3>
          <p className="text-md text-gray-700 text-center">Manage orders on our partner app,</p>
          <p className="text-md text-gray-700 text-center">web dashboard or API partners</p>
          
        </div>
        
      </div>
          
        </div>
      </div>
    </>
  );
};

export default AboutUs;
