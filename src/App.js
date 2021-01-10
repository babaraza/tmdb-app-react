import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import Button from "@material-ui/core/Button";

function App() {
  const [movies, setMovies] = useState([]);
  const [heading, setHeading] = useState("POPULAR");

  const handleClick = (e) => {
    const search_type = e.currentTarget.id;
    const base_url = "https://api.themoviedb.org/3/movie";
    const api_key = "d0e71c5692e4c58530e1a7b168b96e64";

    setHeading(e.target.innerText);

    fetch(`${base_url}/${search_type}?api_key=${api_key}`)
      .then((data) => data.json())
      .then((data_json) => setMovies(data_json.results));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d0e71c5692e4c58530e1a7b168b96e64"
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <div className="app">
      <div className="app__menu">
        <Button
          onClick={handleClick}
          id="popular"
          variant="contained"
          color={"primary"}
        >
          Popular
        </Button>
        <Button
          onClick={handleClick}
          id="upcoming"
          variant="contained"
          color="primary"
        >
          Upcoming
        </Button>
        <Button
          onClick={handleClick}
          id="top_rated"
          variant="contained"
          color="primary"
        >
          Top Rated
        </Button>
        <Button
          onClick={handleClick}
          id="now_playing"
          variant="contained"
          color="primary"
        >
          Now Playing
        </Button>
      </div>

      <div className="app__heading">
        <h2>{heading}</h2>
      </div>

      <div className="app__body">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            details={movie.overview}
            rating={movie.vote_average}
            date={movie.release_date}
          />
        ))}
        <div className="bottomArea"></div>
      </div>
    </div>
  );
}

export default App;
