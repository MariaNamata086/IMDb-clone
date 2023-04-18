import React from 'react'
import Link from 'next/link'
import { MenuItem } from './menu-item'
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from './darkModeSwitch';

const Header = () => {
  return (
    <div className='flex flex-row w-[85%] mx-auto items-center justify-between'>
        <div className='flex mt-6 mb-6 gap-12'>
            <MenuItem title='HOME' address= '/' Icon={AiFillHome}/>
            <MenuItem title='ABOUT' address= '/about' Icon={BsInfoCircleFill}/>
        </div>
        <div className='flex items-center space-x-3'>
         <DarkModeSwitch/>
         <Link href='/'>
           <div className='flex items-center tracking-wider'>
             <span className='p-2 py-1 px-3 rounded-lg bg-amber-500 font-bold text-2xl'>IMDb</span>
             <span className='text-lg ml-1 hidden sm:block'>clone</span>
           </div>
         </Link> 
        </div>
    </div>
  )
}

export default Header