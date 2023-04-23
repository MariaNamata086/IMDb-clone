import Image from 'next/image';
import React from 'react'
// the link tag in the movie.jsx component specifies a dynamic URL with an id, which we get from the params prop and pass into the fetch movie function
async function fetchMovie(movieId){
  const API_KEY = process.env.API_KEY;
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
  const data = await response.json();
  return data;
}

const MovieDetails = async ({params}) => {
    const movieId = params.id;
    const movieData = await fetchMovie(movieId);
  return (
    <div className='w-[80%] md:w-[90%] h-auto mx-auto'>
        <div className='flex flex-col md:flex-row p-3 gap-3  items-center justify-center mt-7'>            
            <Image src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path || movieData.poster_path}`} alt='movie Image' width='800' height='900' className='rounded-lg' placeholder='blur'blurDataURL='/spinner.svg' style={{ maxWidth:'100%',height:'auto'}} />           
            <div className=' flex flex-col md:space-y-4'>
                <p className='tracking-wider leading-7'><span className='font-semibold text-lg md:text-xl mr-1.5'>Overview:</span>{movieData.overview}</p>
                <p className='font-bold text-lg md:text-xl'>{movieData.title || movieData.name}</p>
                <p><span className='font-semibold text-lg md:text-xl mr-1.5'>Release Date:</span>{movieData.first_air_date || movieData.release_date}</p>
                <p><span className='font-semibold text-lg md:text-xl mr-1.5'>Rating:</span>{movieData.vote_count}</p>
                <p><span className='font-semibold text-lg md:text-xl mr-1.5'>Parental Guidance:</span>false</p>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails
//style={{ maxWidth:'100%',height:'auto'}}