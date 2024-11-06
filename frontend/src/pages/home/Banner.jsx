import React from 'react'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";

var list = ['hero-pattern','more-pattern']
function change(){
  for(var i = 0;i < list.length;i++)
  return list[i];

}

const Banner = () => {
  return (

    
            <div id='FULLCLASS' className='cursor-pointer bg-footer-texture  bg-cover w-fit flex text-white rounded-3xl'>
              <TbPlayerTrackPrevFilled className='text-blue-900 bg-white size-16'/>
              <div className=' text-center p-32 lg:p-56'>
                <h1 className=' font-serif text-9xl'>BUY NOW</h1>
                <p className='text-6xl'>AIRTIME & DATA</p>
              </div>
                <Link ><TbPlayerTrackNextFilled className='text-blue-900 bg-white size-16' /> </Link >
            </div>

  )
}

export default Banner
