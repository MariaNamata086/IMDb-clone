"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { BsSearch } from 'react-icons/bs';

function Search() {
    const [search,setSearch] = useState('');
    const Router = useRouter();
    function handleSubmit(event){
        event.preventDefault();
        if(!search)return;
        Router.push(`/search/${search}`)
        setSearch('');
    }

  return (
   
    <form className='flex max-w-6xl mx-auto justify-between mt-5 mb-5 items-center px-5' onSubmit={handleSubmit}>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search keywords...' className='w-full h-10 rounded-lg placeholder-gray-500 outline-none bg-transparent'/>
        <button type='submit' className='p-3 px-4 py-3 text-white bg-amber-600 rounded-xl disabled:text-gray-600 text-xl' disable = {!search}><BsSearch/></button>
    </form>
  )
}

export default Search