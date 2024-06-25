
import React from "react";
import Food from "../assets/food.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/burgers1.png";
import Img5 from "../assets/pizza.png";
import Img7 from "../assets/food1.png";
import Img8 from "../assets/food3.png";
import Img6 from "../assets/img6.png";
import Img9 from "../assets/breakfast8.png";
import Img10 from "../assets/images2.png";
import Img11 from "../assets/img.png";
import Img12 from "../assets/biryani.png";
import Img13 from "../assets/a.png";
import Img14 from "../assets/b.png";
import Img15 from "../assets/c.png";
import Img16 from "../assets/d.png";
import Img17 from "../assets/orange.png";
import Img18 from "../assets/watermelon.png";
import Img19 from "../assets/mango.png";
import Img20 from "../assets/strawberry.png";

const Menu = () => {
  return (
    <>
      <div className="relative">
        <img
          src={Food}
          alt="Food Banner"
          className="h-[300px] md:h-[500px] rounded-xl object-cover opacity-90 w-full"
        />
        <div className="w-full h-[300px] md:h-[500px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">
            Welcome to Our Menu Page!
          </h1>
        </div>
      </div>
      <h1 className="my-8 border-l-4 md:border-l-8 border-primary py-2 pl-2 text-2xl md:text-3xl font-bold mx-auto text-center md:text-left md:ml-[700px]">
        Our Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-16 mx-4 md:mx-9 cursor-pointer">
        {/* Menu Items */}
        <MenuItem imgSrc={Img4} title="Noodles" description="Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls." />
        <MenuItem imgSrc={Img5} title="Noodles" description="Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls." />
        <MenuItem imgSrc={Img7} title="Noodles" description="Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls." />
        <MenuItem imgSrc={Img8} title="Noodles" description="Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls." />
        <MenuItem imgSrc={Img1} title="Prawn" description="Prawns are low in saturated fat and cholesterol, making them a heart-healthy food choice." />
        <MenuItem imgSrc={Img2} title="Masala Pasta" description="Masala Pasta is a one pot dish made by cooking pasta along with Indian masalas, with spices and herbs." />
        <MenuItem imgSrc={Img3} title="Mushroom" description="Mushrooms are widely known for their great taste and amazing health benefits." />
        <MenuItem imgSrc={Img6} title="Noodles" description="Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls." />
        <MenuItem imgSrc={Img9} title="Noodles" description="Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls." />
        <MenuItem imgSrc={Img10} title="Noodles" description="Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls." />
        <MenuItem imgSrc={Img11} title="Noodles" description="Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls." />
        <MenuItem imgSrc={Img12} title="Noodles" description="Instant noodles are a type of pre-cooked noodle usually sold in individual packets, cups, or bowls." />
      </div>
      <h1 className="my-8 border-l-4 md:border-l-8 border-primary py-2 pl-2 text-2xl md:text-3xl font-bold mx-auto text-center md:text-left md:ml-[650px]">
        Ice Cream and Juice
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-16 mx-4 md:mx-9 cursor-pointer mb-[-100px] md:mb-[-80px]">
        {/* Ice Cream and Juice Items */}
        <MenuItem imgSrc={Img13} title="Ice Cream" description="As hot summer days continue to sweep the country, consumers are scooping up ice-creams to cool off." />
        <MenuItem imgSrc={Img14} title="Ice Cream" description="As hot summer days continue to sweep the country, consumers are scooping up ice-creams to cool off." />
        <MenuItem imgSrc={Img15} title="Ice Cream" description="As hot summer days continue to sweep the country, consumers are scooping up ice-creams to cool off." />
        <MenuItem imgSrc={Img16} title="Ice Cream" description="As hot summer days continue to sweep the country, consumers are scooping up ice-creams to cool off." />
        <MenuItem imgSrc={Img17} title="Orange" description="Orange juice futures rose as much as 5% to the highest in three months before trimming gains at the ICE Futures US." />
        <MenuItem imgSrc={Img18} title="Watermelon" description="Watermelon is rich in water content and it will also provide you multiple nutrients. After working out you need proper hydration and..." />
        <MenuItem imgSrc={Img19} title="Mango" description="Health Benefits Of Mango Juice: Eating mangoes only during summer is good for health. Likewise, you can juice it..." />
        <MenuItem imgSrc={Img20} title="Strawberry" description="Health Benefits Of Strawberry Juice: When you drink strawberry juice, the health benefits of your body..." />
      </div>
    </>
  );
};

const MenuItem = ({ imgSrc, title, description }) => (
  <div className="flex flex-col items-center rounded-lg shadow-md p-4">
    <img
      src={imgSrc}
      alt={title}
      className="mb-4 rounded-md object-cover w-64 h-40 transition-transform duration-200 ease-in-out transform hover:scale-110"
    />
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-md text-gray-700 text-center">{description}</p>
  </div>
);

export default Menu;
