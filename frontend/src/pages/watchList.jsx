import axios from "axios";

import { React, useEffect, useState } from "react";

import { AuthHeader } from "../auth/authorization";

import { Link } from "react-router-dom";

export default function ViewWatchList() {
  const [watchList, setwatchList] = useState([]);

  const getWatchList = async () => {
    const list = await axios.get(
      "http://localhost:8080/api/v1/watchlist",

      AuthHeader()
    );

    setwatchList(list.data);
  };

  useEffect(() => {
    getWatchList();

    console.log(watchList);
  }, []);

  return (
    <div className="watchlist-container">
      <h2>Welcome User</h2>
      <h4>Watchlist:</h4>
      {watchList.map((item) => (
        <div key={item.id} className="movie-header">
          <Link to={"/movie/" + item.id}>
            <h2> {item.title} </h2>
          </Link>

          <div className="movie-container">
            <p> {item.tagline} </p>

            {item.genres.map((genre) => (
              <p className="movie-genres"> {genre.name} </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
