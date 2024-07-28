import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    // let res =await axios.get(
    //     "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5b6d2f21c07b6b480b047d8a71c3824d"
    //   );
    //   console.log(res.data.results);

    // fetch("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5b6d2f21c07b6b480b047d8a71c3824d")
    // .then((response)=>response.json()).then((data)=>console.log(data))

    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5b6d2f21c07b6b480b047d8a71c3824d"
    );
    // console.log(data.results);
    setMovies(data.results);
  }

  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1 className="text-center">Movies</h1>
      <div className="row">
        {movies.length > 0 ? movies.map((movie, i)=>(
            <Movie key={i} info={movie}  />
        )): <h1>Loading...</h1>}
      </div>
    </div>
  );
}
