import React from 'react'

export default function Movie(props) {
    console.log(props);
    let {title, overview, poster_path} = props.info
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview}</p>
        </div>
      </div>
    </div>
  )
}
