import React from 'react'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { Link } from 'react-router-dom';



const Banner = () => {
  return (

        <div className=' text-white cursor-pointer bg-footer-texture bg-cover rounded-2xl  
          right-0 w-3/4 h-1/2 shadow-blue-950 shadow-2xl ml-[26%]'>
            <Link className='float-right '><RiBarChartHorizontalFill className='size-12 mt-8 mr-4'/></Link>
            <div className='font-bold text-center py-20 lg:py-2
           items-center'>
                <h1 className=' font-serif text-[50px] sm:text-[40px] md:text-[80px] lg:text-[100px] '>BUY NOW</h1>
                <p className='text-[30px] sm:text-[50px] md:text-[50px] lg:text-[80px] '>AIRTIME & DATA</p>
            </div>

        </div>
  )
}

export default Banner
