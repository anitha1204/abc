import React from "react";
import { Link} from "react-router-dom";
import Img from "../assets/img5.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img6 from "../assets/img6.png";
import Img7 from "../assets/home.png";
import Img8 from "../assets/home2.png";
import Img9 from "../assets/home1.png";

const Home = () => {
  return (
    <div className="">
      <div className="h-[700px] relative">
        <img
          src={Img}
          alt="images"
          className="absolute inset-0 h-[700px] w-full object-cover z-[-1]"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-50 mt-10 sm:mt-0">
          Do you crave delicious food
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-50 mt-5 sm:mt-10">
          But going out to take <span>food costs time.....</span>
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-50 mt-3 sm:mt-5">
          Why not order <span>pizza</span> or something <br />
          <span>delicious</span> from our restaurant
        </p>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-50 mt-3 sm:mt-5">
          Our restaurant always puts the client above. They are our single most
          important thing for our business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 lg:mt-5">
          <button className="rounded-full w-40 h-12 bg-primary text-gray-50 hover:bg-gray-50 hover:text-primary mx-auto">
            Order now!
          </button>
         <Link to="/menu"> <button className="rounded-full w-60 h-12 flex items-center justify-center bg-primary text-gray-50 hover:bg-gray-50 hover:text-primary mx-auto">
            See what's available <AiOutlineArrowDown className="ml-2" />
          </button>
          </Link>
        </div>
      </div>
      <div className="text-center mt-20 lg:mt-10">
        <p className="text-xl lg:text-2xl text-secondary">What we offer</p>
        <h1 className="text-3xl lg:text-5xl font-bold">Best meals in the City</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mx-4 md:mx-9 cursor-pointer">
        <div className="flex flex-col items-center rounded-lg shadow-md p-4">
          <img
            src={Img1}
            alt="UK"
            className="mb-4 rounded-md object-cover w-full h-40 hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold mb-4">Prawn</h3>
          <p className="text-md text-gray-700 text-center">
            Prawns are low in saturated fat and cholesterol, making them a heart-healthy food choice.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-md p-4">
          <img
            src={Img2}
            alt="Australia"
            className="mb-4 rounded-md object-cover w-full h-40 hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold mb-4">Masala Pasta</h3>
          <p className="text-md text-gray-700 text-center">
            Masala Pasta is an one pot dish made by cooking pasta along with Indian masalas, with spices and herbs.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-md p-4">
          <img
            src={Img3}
            alt="USA"
            className="mb-4 rounded-md object-cover w-full h-40 hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold mb-4">Mushroom</h3>
          <p className="text-md text-gray-700 text-center">
            Mushrooms are widely known for their great taste and amazing health benefits.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-md p-4">
          <img
            src={Img6}
            alt="Canada"
            className="mb-4 rounded-md object-cover w-full h-40 hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold mb-4">Noodles</h3>
          <p className="text-md text-gray-700 text-center">
            Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls.
          </p>
        </div>
      </div>
      <div className="py-10 md:mb-[-150px]">
        <h1 className="pl-4 text-4xl font-bold text-center">Beyond business</h1>
        <p className="text-center mt-3 text-lg text-gray-400">
          At Food Way, our business approach is guided by our commitment to responsible and sustainable
        </p>
        <p className="text-center text-lg text-gray-400">
          growth. Our ESG update outlines the many ways in which we make the impact of our business more
        </p>
        <p className="text-center text-lg text-gray-400">
          sustainable and help make the world a better place for everyone. Some of our key sustainability
        </p>
        <p className="text-center text-lg text-gray-400">
          initiatives include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mx-4 md:mx-9 cursor-pointer">
          <div className="flex flex-col items-center rounded-lg shadow-md p-4">
            <img
              src={Img7}
              alt="Feeding India"
              className="mb-4 rounded-md object-cover h-40  hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mb-4 text-center">Feeding India</h3>
            <p className="text-md text-gray-700 text-center">
              A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg shadow-md p-4">
            <img
              src={Img8}
              alt="Net zero emissions"
              className="mb-4 rounded-md object-cover h-40 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mb-4 text-center">Net zero emissions</h3>
            <p className="text-md text-gray-700 text-center">
              Starting FY24, we have taken on a goal to achieve Net Zero emissions across Zomato’s food delivery value chain by 2033
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg shadow-md p-4">
            <img
              src={Img9}
              alt="Reducing plastic waste"
              className="mb-4 rounded-md object-cover h-40 w-full hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mb-4 text-center">Reducing plastic waste</h3>
            <p className="text-md text-gray-700 text-center">
              Trying to reduce Zomato’s plastic waste by ensuring completely plastic neutral deliveries since April 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
