import React from 'react'

const Movie = ({title,id,overview}) => {
  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  )
}

export default Movie