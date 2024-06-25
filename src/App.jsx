import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbars';
import Footer from './components/Footer';
import Popup from './components/Popup';
import {Toaster} from "react-hot-toast"
import BlogsDetails from './components/BlogsDetails';
import Register from './components/pages/Register';
import Login from './components/pages/Login';



const App = () => {
    return (
        <div>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/Blogs/:id" element={<BlogsDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/popup" element={<Popup />} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <Toaster/>
            <Footer/>
           
        </div>
    );
};

export default App;

