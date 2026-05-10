import React from 'react'
import "./movie_card.css"
const MovieCard = ({movie}) => {
    const {name, rating, img_url, description} = movie;
  return (
    <li className='movie-card'>
      <div className="img-block">
        <img src={img_url} width={"250"} height={"250"} />
      </div>
      <div className="card-content">
      <h3>Name: {name}</h3>
      <h5>Rating: {rating}</h5>
      <p>
        {description}
      </p>
      <button className='card-btn'>Watch Now</button>
      </div>
    </li>
  )
}

export default MovieCard
