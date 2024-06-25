
import React from "react";
import foods from "../assets/img6.png";

const Contact = () => {
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
            Welcome to Our Resources Page!
          </h1>
          <br />
        </div>
      </div>
      <h1 className="my-8 border-l-4 md:border-l-8 border-primary py-2 pl-2 text-xl sm:text-2xl md:text-3xl font-bold mx-auto text-center md:text-left md:ml-[10%] lg:ml-[15%] xl:ml-[20%]">
        Contact Us
      </h1>
      <div className="contact grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-20 xl:px-32">
        <div className="md:ml-[10%] lg:ml-[15%] xl:ml-[20%]">
          <p className="text-gray-500 text-base sm:text-lg mb-4">For Investor Queries and Grievance Redressal</p>

          <h6 className="text-lg sm:text-xl font-semibold">Sandhya Sethia</h6>
          <p className="text-gray-500 mb-4">
            Company Secretary and Compliance Officer
          </p>
          <p className="text-gray-500">Food Way Limited</p>

          <div className="text-gray-500 text-base sm:text-lg mt-3">
            <p>Ground Floor, 12A</p>
            <p>14 Meghdoot, Nehru Place</p>
            <p>New Delhi - 110019</p>
          </div>

          <p className="text-gray-500 mt-3">Phone</p>
          <p>+91 124 426 8565, +91 11 40592373</p>

          <p className="text-gray-500 mt-3">Email</p>
          <p className="text-red-400">Companysecretary@foodway.com</p>

          <h5 className="text-lg sm:text-xl font-semibold mt-20">
            Link Intime India Private Limited
          </h5>
          <p className="text-gray-500">Registrar and Share Transfer Agent</p>

          <div className="mt-4">
            <h6>Noble Heights, 1st Floor</h6>
            <h6>Plot NH 2, C-1 Block LSC</h6>
            <h6>Near Savitri Market, Janakpuri</h6>
            <h6>New Delhi - 110058</h6>
          </div>

          <p className="text-gray-500 mt-3">Phone</p>
          <p>+91 11 49411000</p>

          <div className="mt-3">
            <p className="text-gray-500">Investor Grievance Email</p>
            <p className="text-red-400">delhi@linkintime.co.in</p>
            <p className="mt-4">Website</p>
            <p>www.linkintime.co.in</p>
            <p className="text-gray-500 mt-3">Contact Person</p>
            <p className="text-lg">Mr. Vishal Dixit</p>
          </div>

          <h1 className="my-8 py-2 pl-2 text-xl sm:text-2xl md:text-3xl font-bold mx-auto text-center md:text-left">
            Have questions?
          </h1>
          <p>Reach out to us by emailing at</p>
          <p className="text-red-400">
            companysecretary@zomato.com,{" "}
            <span className="text-black">and we’ll get</span>
          </p>
          <p>back to you.</p>
          <button className="rounded-[10px] w-32 sm:w-40 h-10 sm:h-12 bg-primary text-gray-50 mx-auto mt-5">
            Contact Us
          </button>
          <p className="text-red-400 mt-10">
            Communication to holders of shares in physical form
          </p>
        </div>

        <div className="md:ml-10 lg:ml-20 xl:ml-32">
          <h4 className="text-gray-500 text-base sm:text-lg">
            Authorized person to determine materiality of events or information
          </h4>

          <h5 className="text-lg sm:text-xl font-semibold mb-1 mt-5">Akshant Goyal</h5>
          <p className="text-gray-500">Chief Financial Officer</p>
          <p className="text-gray-500">Food Way Limited</p>

          <div className="mt-5 ">
            <h5>Ground Floor, 12A</h5>
            <h5>94 Meghdoot, Nehru Place</h5>
            <h5>New Delhi - 110019</h5>
          </div>

          <p className="text-gray-500 mt-4">Phone</p>
          <h5>+91 124 426 8565, +91 11 40592373</h5>

          <p className="text-gray-500 mt-4">Email</p>
          <p className="text-red-400">cfo@zomato.com</p>

          <h5 className="text-lg sm:text-xl font-semibold mt-20">Food Way Limited</h5>
          <h6 className="text-gray-500">CIN: L93030DL2010PLC198141</h6>

          <div className="mt-5">
            <h5>Ground Floor, 12A</h5>
            <h5>94 Meghdoot, Nehru Place</h5>
            <h5>New Delhi - 110019</h5>
          </div>

          <p className="text-gray-500 mt-4">Phone</p>
          <h6 className="mt-2">+91 124 426 8565, +91 11 40592373</h6>

          <p className="text-gray-500 mt-4">Email</p>
          <h6 className="text-red-400 mt-2">info@zomato.com</h6>
        </div>
      </div>
    </>
  );
};

export default Contact;
