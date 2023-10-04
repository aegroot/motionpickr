import React, { useState, useEffect } from "react";
import MovieItem from "../components/pageComponents/moviecomponents/MovieItem";
import AlphabetBar from "../components/pageComponents/moviecomponents/AlphabetBar";
import MovieSearch from "../components/pageComponents/moviecomponents/MovieSearch";
import Pagination from "../components/generalcomponent/Pagination";
import axios from "axios";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(5);
  const [url, setUrl] = useState();
  const [currentLetter, setCurrentLetter] = useState();
  const [search, setSearch] = useState();

  const fetchFilter = (fetchFilter) => {
    return fetchFilter;
  };

  const movieStandard = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/movie?page=${page}&size=${size}`
    );
    setMovies(res.data.movies);
    setTotalPages(res.data.totalPages);
  };

  const movieSearch = async () => {
    setUrl("search");
    const res = await axios.get(
      `http://localhost:8080/api/v1/movie/search/${search}?page=${page}&size=${size}`
    );
    setMovies(res.data.movies);
    setTotalPages(res.data.totalPages);
  };

  const moviePerLetter = async () => {
    setUrl("letter");
    const res = await axios.get(
      `http://localhost:8080/api/v1/movie/letter/${currentLetter}?page=${page}&size=${size}`
    );
    setMovies(res.data.movies);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    switch (url) {
      case "letter":
        fetchFilter(moviePerLetter());
        break;
      case "search":
        fetchFilter(movieSearch());
        break;
      default:
        fetchFilter(movieStandard());
    }
  }, [page, currentLetter]);

  return (
    <>
      <div>
        <section className="block">
          <header className="block__header">
            <h2>Movie Database</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              ipsam.
            </p>
          </header>
          <div className="container">
            <div className="searchmovie">
              <MovieSearch
                search={search}
                setSearch={setSearch}
                movieSearch={movieSearch}
                setPage={setPage}
              />

              <AlphabetBar
                moviePerletter={moviePerLetter}
                setCurrentLetter={setCurrentLetter}
                setPage={setPage}
                currentletter={currentLetter}
              />

              <div className="container--movie">
                <div className="grid-container">
                  {/* <div className="grid-item">poster</div>
                  <div className="grid-item">title</div>
                  <div className="grid-item">description</div>
                  <div className="grid-item">score</div> */}
                  {movies.map((movie) => (
                    <MovieItem
                      movie={movie}
                      key={movie.id}
                      render={"movielist"}
                      genres={movie.genres}
                    />
                  ))}
                  <Pagination
                    totalPages={totalPages}
                    page={page}
                    setPage={setPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
