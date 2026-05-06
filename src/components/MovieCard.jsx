import React from 'react'

const MovieCard = ({movie}) => {
    const {name, rating, img_url, description} = movie;
  return (
    <div>
      <div className="img-blog">
        <img src={img_url} width={"250"} height={"250"} />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>
        {description}
      </p>
    </div>
  )
}

export default MovieCard
