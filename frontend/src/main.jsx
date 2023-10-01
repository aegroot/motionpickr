import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Friends from "./pages/friends";
import ViewMovie from "./pages/viewMovie";
import Recommended from "./pages/userRecommended";
import WatchList from "./pages/watchList";
import GenreInfo from "./pages/GenreInfo";

// import Register from "./pages/Register";
// import Login from "./pages/Login";
import Genre from "./pages/Genre";
import "./styles/MAINstyles.css";
import "./styles/normalize.css";
import UserPage from "./pages/UserPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<ViewMovie />} />
        <Route path="/recommended" element={<Recommended />} />

        <Route path="/genre/:genreid" element={<GenreInfo />} />
        <Route path="/genre" element={<Genre />} />

        {/* <Route path="/watchlist" element={<WatchList />} />
        <Route path="/friends" element={<Friends />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
