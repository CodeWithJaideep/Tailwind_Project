import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex items-center justify-center gap-2'>
                    <img src='./assets/Logo.svg' alt=' Logo' />
                    <button className='bg-linear-to-r from-orange-400 to-red-400 text-white text-xs px-2.5 py-1.5 rounded-full'>Hoster is hiring</button>
                </div>
                <ul className='hidden lg:flex justify-between items-center gap-6 text-gray-400'>
                    <li>
                        <a href='#'>Plans</a>
                    </li>
                    <li>
                        <a href='#'>Find Domain</a>
                    </li>
                    <li>
                        <a href='#'>Why Hosterr</a>
                    </li>
                </ul>

                <div className='hidden lg:flex justify-center items-center gap-6'>
                    <a href='#' className='text-gray-400'>Sign In</a>
                    <button className='bg-blue-600 hover:bg-blue-400 text-white px-4 py-3 rounded-md'>Join Waitlist</button>
                </div>
                <div className='lg:hidden'>
                    <FaBars />
                </div>
            </div>
        </>
    )
}

export default Header