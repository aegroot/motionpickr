import { React, useEffect, useState } from "react";
import Login from "./Login";
import { AuthHeader } from "../auth/authorization";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function Recommended() {
  const [topMovies, setTopMovies] = useState([{}]);

  const fetchTopMoviesByPopularity = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/movie/popularity?page=0&size=3"
    );
    setTopMovies(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchTopMoviesByPopularity();
  }, []);

  if (topMovies.movies) {
    return (
      <>
        <h1>Best movies:</h1>
        {topMovies.movies.map((movie) => (
          <Link to={"/movie/" + movie.id}>
            <h2 key={movie.id}>
              <AiFillStar /> {movie.title}
            </h2>
          </Link>
        ))}
      </>
    );
  }
}
