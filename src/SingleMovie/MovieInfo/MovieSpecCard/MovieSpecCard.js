import React from 'react'
import './MovieSpecCard.css'




const MovieSpecCard = ({specs, title}) => {

  return (
    <div className={`${title} overview`}>
      <div className="mybox corner">
        <p>
          {title}
        </p>
        <p>
          {specs}
        </p>
      </div>
    </div>
  )
}
export default MovieSpecCard;