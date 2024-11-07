import React from 'react'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { useState } from 'react';



function Banner(){
  const [backgroundImage, setbackgroungImage] = useState("bg-footer-texture")
  const handClick = () => {
      setbackgroungImage (backgroundImage === "bg-footer-texture" ? "more-pattern":
        "hero-pattern");
  }
  return (

    
            <div className={`cursor-pointer ${backgroundImage} bg-cover w-fit flex text-white rounded-3xl`} onClick={handClick}>
              <TbPlayerTrackPrevFilled className='text-blue-900 bg-white size-16' onClick={handClick}/>
              <div className=' text-center p-32 lg:p-56'>
                <h1 className=' font-serif text-9xl'>BUY NOW</h1>
                <p className='text-6xl'>AIRTIME & DATA</p>
              </div>
                <Link ><TbPlayerTrackNextFilled className='text-blue-900 bg-white size-16' /> </Link >
            </div>

  )
}

export default Banner
