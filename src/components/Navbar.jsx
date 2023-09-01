import React from "react";
import { BiSolidMovie } from "react-icons/bi";
import "./style.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="link__element">
        <div className="logo">
          <BiSolidMovie className="movie__icon" />
          <h1>Movie Database</h1>
        </div>
      </Link>
      <SearchBar />
      <Link to="/watch-list" className="link__element">
        <h1 className="watchlist">Watchlist</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
