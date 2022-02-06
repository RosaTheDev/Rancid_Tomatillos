import React from  'react'
import Movie from './Movie/Movie'



const addSingleMovie = ({ title, poster, avgRating, id, overview, backdrop, release, genres, budget, revenue, runtim, tagline }) => {

  return (
    <article onClick={() => singleMovie(id)} className='movie'>
      <img src={poster} width={400} height={400} />
      <h3>{title}</h3>
      <h3> Rating: {Math.round(avgRating * 100) / 100}</h3>
    </article>
  )
}
export default addSingleMovie;