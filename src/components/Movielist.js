import React from "react";
import "./movielist.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Movielist() {
  const [card, setCard] = useState([]);
  const APIKEY="47de2b9e8b2462b53975d18185ac40bf";


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=27`).then((response) => {
      setCard(response.data.results);
      console.log(response.data.results, "aaa");
      
      
    });
  }, []);

  return (
    <div className="card-container">
      <h2 className="list-title">NETFLIX ORIGINALS</h2>
      <div className="list-cards">
        {card.map((movies) => (
          <div className="cards">
            <img
              className="cards-img"
              src={`https://image.tmdb.org/t/p/original/${
                movies ? movies.poster_path : ""
              }`}
              alt=""
            />
            <div className="cards-overlay">
              <div className="card__title">
                {movies ? movies.original_title : ""}
              </div>
              <div className="card__runtime">
                {movies ? movies.release_date : ""}
                <span className="card__rating">
                  {movies ? movies.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">
                {movies ? movies.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movielist;
