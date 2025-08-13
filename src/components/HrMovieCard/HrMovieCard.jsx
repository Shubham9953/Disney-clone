import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  return (
    <section className='flex-shrink-0 min-w-[200px] sm:min-w-[240px] md:min-w-[260px] hover:scale-110 transition-all duration-150 ease-in'>
    <img src={IMAGE_BASE_URL+movie.backdrop_path} 
    className='w-full h-auto rounded-lg hover:border-[3px] border-gray-400 cursor-pointer
    '/>
    <h2 className='text-white mt-2 truncate'>{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard