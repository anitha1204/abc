import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";

const apiUrl = "https://food-1-psa1.onrender.com"; // Ensure this is correct
console.log("url", apiUrl);

const Popup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialData = {
    Username: '',
    Useremail: '',
    Address: '',
    Guest: '',
    Password: ''
  };

  const [formData, setFormData] = useState(initialData);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/post`, formData);
      console.log("Response:", response.data);
      toast.success("Success Notification");
      navigate('/');
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        toast.error(`Error: ${error.response.data.message || error.response.status}`);
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  

  const closePopup = () => {
    navigate(location.state?.from || '/');
  };

  return (
    <div>
      <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
          {/* header */}
          <div className="flex items-center justify-between">
            <div>
              <h1>Book Your Table</h1>
            </div>
            <div>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={closePopup}
              />
            </div>
          </div>

          {/* body */}
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="Username"
              placeholder="Name"
              value={formData.Username}
              onChange={handleOnChange}
              className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
              autoComplete="username" // Add autocomplete attribute
            />
            <input
              type="email"
              name="Useremail"
              placeholder="Email"
              value={formData.Useremail}
              onChange={handleOnChange}
              className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
              autoComplete="email" // Add autocomplete attribute
            />
            <input
              type="text"
              name="Guest"
              placeholder="Guest"
              value={formData.Guest}
              onChange={handleOnChange}
              className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
              autoComplete="off" // Customize autocomplete as per your needs
            />
            <input
              type="text"
              name="Address"
              placeholder="Address"
              value={formData.Address}
              onChange={handleOnChange}
              className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
              autoComplete="street-address" // Add autocomplete attribute
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={formData.Password}
              onChange={handleOnChange}
              className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
              autoComplete="current-password" // Add autocomplete attribute
            />
            
            <div className="flex justify-center">
              <button 
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
