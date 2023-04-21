import React from 'react'
import NavbarItem from './navbarItem'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4  mx-auto'>
        <NavbarItem
        title='Trending' param='fetchTrending'/>
        <NavbarItem
        title='Top Rated' param='fetchTopRated'/>
        </div>
  )
}

export default Navbar