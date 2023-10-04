import { Link } from "react-router-dom";
import MovieOverview from "./MovieOverview";

export default function MovieItem({ movie, render, genres, cast }) {
  if (render === "movielist") {
    return (
      <>
        <Link to={"/movie/" + movie.id}>
          <div className=" grid-item">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.posterLink}`}
              onError={(e) =>
                (e.target.src = "../src/assets/images/not-found.png")
              }
              alt=""
            />
          </div>
        </Link>
        <Link to={"/movie/" + movie.id}>
          <div className="grid-item">
            <h3> {movie.title} </h3>
          </div>
        </Link>
        <Link to={"/movie/" + movie.id}>
          <div className="grid-item ">
            {" "}
            <p>{movie.tagline} </p>
          </div>
        </Link>
        <Link to={"/movie/" + movie.id}>
          <div className="grid-item">
            {" "}
            {Math.ceil(movie.popularity * 10) / 10}{" "}
          </div>
          {/* <div className="grid-item">
          <Link to={"/movie/" + movie.id}>
            <button> view </button>
          </Link>
        </div> */}
        </Link>
      </>
    );
  } else if (render === "viewMovie") {
    return <MovieOverview movie={movie} genres={genres} cast={cast} />;
  }
}
