"use client"
import React, { useEffect, useState } from 'react'
import {MdLightMode} from 'react-icons/md'
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from 'next-themes';


const DarkModeSwitch = () => {
    const {theme, setTheme,systemTheme} = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme :theme;

    useEffect(()=>setIsMounted(true),[])
  return (
    <>
    {isMounted && currentTheme === 'dark'? <MdLightMode className='text-xl cursor-poitner hover:text-amber-500'  onClick={()=>setTheme('light')}/> : <BsFillMoonFill className='text-xl cursor-poitner hover:text-amber-500' onClick={()=>setTheme('dark')}/>}
    </>
  )
}

export default DarkModeSwitch