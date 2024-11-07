import React from 'react'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";
import { useState } from 'react';



function Banner(){
  const images = ['bg-hero-pattern','bg-footer-texture'];
  const visibilities = ['visible','invisible'];
  const [backgroundImage, setbackgroungImage] = useState(images[0]);
  const [visibility, setvisibility] = useState(visibilities[0]);
  const [isOpen, setisOpen] = useState(false);

  const frontClick = () => {
    for (let  i = 0;i < images.length;i = i + 1) {
       setbackgroungImage(images[i]);
       setvisibility(visibilities[i]);
    }
  };
  const backClick = () => {
    for (let  i = images.length - 1;i >= 0;i = i - 1) {
       setbackgroungImage(images[i]);
       setvisibility(visibilities[i]);
    }
  };

  const  toggleOpenner = () => {
    setisOpen(!isOpen);
  };

  //const  toggleOpennerbody = () => {
    //setisOpen(() => {if(isOpen === true)
     // {return false;}})
   // }
   //onClick={toggleOpennerbody} 
  


  return (

    <div className='flex justify-between'> 
            <div className={`cursor-pointer ${backgroundImage} bg-cover shadow-blue-950 shadow-2xl text-white bg-center bg-no-repeat w-fit flex  rounded-3xl transition-all`} onMouseEnter={frontClick} onMouseLeave={backClick} >

              <div className={`text-center p-32 lg:p-56 ${visibility}`}>
                <h1 className=' font-serif text-9xl '>BUY NOW</h1>
                <p className='text-6xl'>AIRTIME & DATA</p>
              </div>
                
            </div>
            <div>
              <RiBarChartHorizontalFill className='text-blue-900 bg-white size-14  -right-96' onClick={toggleOpenner}/> 
              <div className={`fixed ${ isOpen ? 'right-0' : '-right-[500px]'}  bg-blue-900 transition-all p-10 top-16 text-white font-serif rounded-lg`}>
                <GiCancel className='size-11' onClick={toggleOpenner}/>
                  <ul className='text-2xl text-center '>
                    <li className='m-6 bg-blue-800 p-6'>Dashboard</li>
                    <li className='m-6 bg-blue-800 p-6' >Our Services</li>
                    <li className='m-6 bg-blue-800 p-6'>Register as merchant</li>
                    <li className='m-6 bg-blue-800 p-6'>Register as partener</li>
                    <li className='m-6 bg-blue-800 p-6'>Get premium</li>
                  </ul>
              </div>
            </div>
   </div>
  )
}

export default Banner
