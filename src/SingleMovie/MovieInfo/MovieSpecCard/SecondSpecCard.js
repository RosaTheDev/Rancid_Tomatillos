import React from 'react'
import './SecondSpecCard.css'




const SecondSpecCard = ({overview, title}) => {
  return (
    <div className='second-spec'>
      <div className="mybox corner">
        <h2>{title}</h2>
        <p className='overview'>{overview}</p>
      </div>
    </div>
  )
}
export default SecondSpecCard;