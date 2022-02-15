import React from 'react'
import './MovieSpecCard.css'




const MovieSpecCard = ({ rating, release, genres, revenue, runtime, tagline, budget}) => {

  return (
    <div className='main-spec'>
      <div className="mybox corner">
        <p className='avgRating'>Rating: {rating}</p>
        <p className='release'>Release Date: {release}</p>
        <p className='genres'>Genre: {genres}</p>
        <p className='revenue'>Total Revenue: ${revenue}</p>
        <p className='runtime'>Run Time: {runtime}</p>
        <p className='tageline'>Tag Line: {tagline}</p>
        <p className='budget'>Budget: ${budget}</p>
      </div>
    </div>
  )
}
export default MovieSpecCard;