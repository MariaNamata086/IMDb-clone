import Movie from '@/components/movie';
import React from 'react'

async function SearchPage({params}) {

    const API_KEY = process.env.API_KEY;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&include_adult-false`)

    if(!res.ok){
        throw new Error('Error in fetching data');
    }

    const result = await res.json();
    const searchData = result.results;
     
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-8 p-y-4 gap-6'>
        {searchData && searchData.length === 0 && (<h1 className='text-center pt-10'>No results found</h1>)}
    { searchData && searchData.map((item)=> <div key={item.id}>   
        <Movie movieItem={item}/>
        </div>) }
    </div>
  )
}

export default SearchPage