import React from 'react'
import { Link } from 'react-router-dom';
// import react icons
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import avatarImg from "../assets/user.png";

const Navbar = () => {
const currentUser = true;


return (
    <header className='w-full py-6 pl-8'>
        <nav className='flex justify-between'>
            <div className='flex items-center lg:gap-16 gap-2 '>
                <span className='text-5xl font-bold' >Aviccom</span>
                <div className='relative sm:w-72 w-40 space-x-2'>
                    <FaSearch className='absolute inline-block left-2 inset-y-2 size-6'/>
                    <input type='text' placeholder='  search here' 
                    className='bg-[#ebeef0]  px-6 rounded-md
                    focus:outline-dotted size-10 text-2xl lg:w-[500px] w-full'
                    />
                </div>
            </div>

            <div className='flex space-x-5 top-14 right-0'>
                <Link to = "/">
                    <FaSignOutAlt className='size-8 text-white bg-black  p-1 rounded-2xl'/>
                </Link>
                <div>
                    <Link to = "/">
                        <IoIosChatbubbles className='size-8'/> 
                    </Link>
                </div>
                <div className='flex'>
                    
                    <Link to = "/">
                        <IoNotifications className='size-8'/> 
                    </Link> 
                </div>
                <div>
                    {
                        currentUser ? <>
                            <img src={avatarImg} alt="" className ="size-10 rounded-full " />
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
