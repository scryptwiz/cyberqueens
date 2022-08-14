import React from 'react'
import { Link } from 'react-router-dom'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  return (
    <div className='border-b border-gray-200 w-full sticky top-0 bg-white z-40'>
        <nav className='contentmax_width hidden w-full py-5 px-7 bg-white md:flex justify-between'>
            <Link to='/' className='font-semibold text-xl text-gray-800'>Cybey Queens</Link>
            <ul className='flex gap-5 items-center text-sm text-gray-800'>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#community">Community</a></li>
            </ul>
            <ul className='flex items-center gap-4'>
                <li><div className='bg-cyberLightPurple p-1 rounded-full'><a href="#hello"><FaDiscord className='text-lg text-white'/></a></div></li>
                <li><div className='bg-cyberLightPurple p-1 rounded-full'><a href="#hello"><FaTwitter className='text-lg text-white'/></a></div></li>
                <li><div className='bg-cyberLightPurple p-1 rounded-full'><a href="#hello"><FaTelegramPlane className='text-lg text-white'/></a></div></li>
                <li><div className='bg-cyberLightPurple p-1 rounded-full'><a href="#hello"><AiFillInstagram className='text-lg text-white'/></a></div></li>
                <button className='bg-cyberLightPurple text-white text-sm px-3 py-1 rounded'>Connect Wallet</button>
            </ul>
        </nav>
        <nav className='bg-white py-4 sticky top-0 px-7 flex justify-between w-full items-center md:hidden shadow'>
            <Link to='/' className='font-semibold text-xl text-gray-800'>Cyber Queens</Link>
            <HiMenuAlt3 className='text-3xl cursor-pointer text-gray-700'/>
        </nav>
    </div>
  )
}

export default Navbar