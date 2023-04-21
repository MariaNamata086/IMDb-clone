import Image from 'next/image'
import Movie from '@/components/movie';

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';
  const response =  await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated'? 'movie/top_rated':'trending/all/week'}?api_key=${API_KEY}&language=en-us$page=1`,{next:{revalidate:18000}});  
  // if the genre value got from the url is equal to fetchTopRated, then we should fetch from baseurl/movie/top_rated.else, we should fetch from baseurl/trending all/week.the code after the comma specifies how often the cached data should be updated.

  if (!response.ok){
    throw new Error('Failed to fetch data');
  }

  const result = await response.json();
  const data = result.results;
  console.log(data)
 
  return (
    <div className="grid w-[85%] mx-auto">
      <h1 className='bg-amber-500 text-center text-slate-700 text-2xl md:text-4xl font-bold py-4 tracking-widest'>Your Movie Collection</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-8 p-y-4 gap-6'>
      {data.map((movie)=>    
        <Movie movieItem = {movie}
      />
      )}
      </div>
    </div>
  )
}
