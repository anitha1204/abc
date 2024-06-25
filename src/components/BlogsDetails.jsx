import React from 'react'
import { useLocation } from 'react-router-dom';
import BlogsComp from './Blogs/BlogsComp';


const BlogsDetails = () => {
   const location = useLocation();
   console.log(location, "useLocation");
   const {image, title, description } = location.state;
  return (
    <div className='min-h-[550px] pt-20'>
      <div className='h-[300px overflow-hidden]'>
        <img src={image} alt="" 
        className='mx-auto object-cover h-[450px] w-[700px] mt-10
        transition duration-700 '/>
      </div>
      <div className='container'>
        <p className='text-slate-600 text-sm py-3'>
          {" "}
        </p>
        <h1 className=' font-semibold text-4xl ml-80 italic mt-10 w-[700px]'>{title}</h1>
        <p className='mt-[21px] w-[750px] ml-[300px] p-4 text-lg'>{description}</p>
      </div>
      <BlogsComp/>
     
    </div>
    
  )
}

export default BlogsDetails
