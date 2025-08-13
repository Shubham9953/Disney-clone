import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <div className='flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]'>
      <img src={IMAGE_BASE_URL+movie.poster_path}
      className='w-fullrounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in'/>
    </div>
  )
}

export default MovieCard

//className='flex-shrink-0 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px]'

//w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointerhover:scale-110 transition-all duration-150 ease-in