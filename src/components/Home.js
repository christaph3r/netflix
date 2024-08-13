import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Movielist from "./Movielist";
import "./home.css";

function Home() {
  const [movie, setMovie] = useState([]);


  const Apikey = "47de2b9e8b2462b53975d18185ac40bf";
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${Apikey}&language=en-US`
      )
      .then((response) => {
        setMovie(response.data.results);
        
      })
      .catch((error) => {
        console.error("Error fetching the movie data:", error);
      });
  }, []);

  return (
    <div className="container">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {
         movie.map((movie) => (
        <>
            <div className="posterimg">
               <img src={`https://image.tmdb.org/t/p/original${movie?movie.backdrop_path:""}`} alt="" />
            </div>
            <div className="poster-overlay">
                <div className="overlay-title">{movie?movie.original_title:""}</div>
                <div className="overlay-runtime">{movie?movie.release_date:""}
                    <span className="rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                </div>
                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
            </div>
        </>
        ))
        }
      </Carousel>
      <Movielist/>

    </div>
  );
}

export default Home;
