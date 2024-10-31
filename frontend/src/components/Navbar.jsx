import React from 'react'
import { Link } from 'react-router-dom';
// import react icons
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import avatarImg from "../assets/user.png";

import { useState } from 'react';

const navigation = [
    {name: "All Records", href: "/transactions"},
    {name: "Dashbord", href: "/dashboard"},
    {name: "Settings", href: "/settings"},
    {name: "Contact", href: "/contact"},
    {name: "About", href: "/about"},
    
];

const chat = () => {document.getElementById('guide').innerHTML = 'for inquiries chat with our Ai assistant'};

const Navbar = () => {

const [isDropdownOpen, setIsDropdownOpen] = useState(false)

const currentUser = true;
const notification = true;

return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center '>
            {/* left side */}
            <div className='flex items-center md:gap-16 gap-4'>
                <span className='text-2xl font-bold' >Aviccom</span>
            {/* search input */} 
                <div className='relative sm:w-72 w-40 space-x-2'>
                    <FaSearch className='absolute inline-block left-2 inset-y-2 size-6'/>
                    <input type='text' placeholder='  search here' 
                    className='bg-[#ebeef0] py-1 md:px-8 px-6 rounded-md
                    focus:outline-none size-10 text-2xl w-full'
                    />
                </div>
            </div>
            {/* right side */}
            <div className='relative flex space-x-5 top-3'>
                <Link to = "/">
                    <FaSignOutAlt className='size-8 text-white bg-black  p-1 rounded-2xl'/>
                </Link>
                <div>
                    <Link to = "/">
                        <IoIosChatbubbles onMouseEnter={chat} className='size-8'/> <br />
                        <div><p id='guide'></p></div>
                    </Link>
                </div>
                <div className='flex'>
                    
                    <Link to = "/">
                        <IoNotifications className='size-8 relative '/> 
                    </Link> 
                    <div>{ notification ?
                            <div className='bg-red-700 rounded-full p-2 h-1 w-1 absolute z-10 right-16 text-xs'></div>
                            : ''
                         }
                    </div>
                </div>
                <div>
                    {
                        currentUser ? <>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img src={avatarImg} alt="user" className={`size-10 rounded-full $
                                {currentUser ? ' ring-2 ring-blue-500 rounded-full': ' '} `}/>
                        </button> {/*show dropdowns*/}
                        {
                            isDropdownOpen && (
                                <div className=' absolute right-0 mt-2 w-48 bg-white 
                                shadow-lg rounded-md z-40'>
                                    <ul className=' py-2 '>
                                        {
                                            navigation.map((item) =>(
                                                <li key ={item.name} onClick={() => 
                                                    setIsDropdownOpen(false)
                                                }>
                                                    <Link to={item.href} className=' block  
                                                    px-4 py-2 text-sm hover:bg-gray-100 '>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                         </>
                            :<Link to = "/login">
                                <FaRegUserCircle className='size-8 '/>
                            </Link>
                    }
                </div>              
               
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
