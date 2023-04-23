import React from 'react'
import Link from 'next/link'

export const MenuItem = ({title,address,Icon}) => {
  return (
    <div>
        <Link href={address} className='hover:text-amber-600' >
            <Icon className = 'text-2xl md:hidden '/>
            <span className='hidden md:block my-2 text-lg font-bold'> 
            {title}
            </span>
        </Link>
    </div>
  )
}
