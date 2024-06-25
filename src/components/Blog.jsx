import React from 'react'
import pizza from "../assets/pizzaa1.png"
import BlogsComp from './Blogs/BlogsComp'

const Blog = () => {
  return (
    <div>
      <div className='relative'>
        <img src={pizza} alt="" className='h-[300px] md:h-[500px] rounded-xl object-cover opacity-90 w-full'/>
        <div className="w-full h-[400px] md:h-[500px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50">
          <div className='contact grid grid-cols-2'>
          <div className='mt-40 mr-20'>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-50 text-center">
            Food Way
          </h1>
          </div>
          <div className='ml-15 mt-28'>
            <h5 className='font-bold hidden md:block bg-gradient-to-r from-primary transition-all duration-600 text-white px-3 py-1 mb-2'>OUR VISION STATEMENTS</h5>
            <h2 className='text-3xl font-bold text-gray-50 mt-3'>Better food for more people</h2>
            <p className=' text-gray-50 mt-2'>FOOD WAY & HYPERPURE</p>
            <h2 className='text-3xl font-bold text-gray-50 mt-4'>Make India malnutrition free</h2>
            <p className='text-gray-50 mt-2'>FEEDING INDIA</p>
          </div>
          </div>
          <br />
        </div>

      </div>
      <div className='min-h-[650px] pt-20 '>
      <BlogsComp/>
      

    </div>
    
        
      </div>
    
  )
}

export default Blog
