import React from 'react'
import Image from 'next/image'

function Loading() {
  return (
    <div className='flex items-center justify-center'>
        <Image 
        width={384} height={384}
        className='h-96' src='spinner.svg' alt='loading'/>
   </div>
  )
}

export default Loading