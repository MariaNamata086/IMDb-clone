import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsHandThumbsUp } from "react-icons/bs";

const Movie = ({movieItem}) => {
  return (
    <div key={movieItem.id} className='flex flex-col p-2 hover:shadow-slate-400 shadow-md rounded-lg border border-slate-500 transition-shadow duration-300 hover:scale-105 gap-5 justify-center cursor-pointer group h-auto'>
      <Link href = {`/movie/${movieItem.id}`}>
      <Image src={`https://image.tmdb.org/t/p/original/${movieItem.backdrop_path || movieItem.poster_path}`} width='600' height='600' alt='movie Image' className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 mx-auto' placeholder='blur'blurDataURL='/spinner.svg' style={{maxWidth:'100%',
    height:'auto'}} /> {/*the extra style attribue is  to prevent image size from changing upon loading */}
      </Link>
      <h1 className='font-bold tracking-wider text-lg md:text-2xl truncate hover:truncate-none'>{movieItem.title || movieItem.name}</h1>
      <p className='line-clamp-2 lg:line-clamp-3 hover:line-clamp-5 text-md tracking-wider lg:text-lg'>{movieItem.overview}</p>
      <div className='flex flex-row items-center gap-x-2 justify-around text-lg font-semibold'>
      <p>{movieItem.release_date || movieItem.first_air_date}</p>
      <span className='flex flex-row items-center '><BsHandThumbsUp className='font-bold mr-2'/>{movieItem.vote_count}</span>
      </div>
    </div>
  )
}

export default Movie