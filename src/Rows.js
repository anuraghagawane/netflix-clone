import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./rows.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const imgPath = "https://image.tmdb.org/t/p/original";

function Rows({ Title, fetchurl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchurl);
      setmovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchurl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1>{Title}</h1>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${imgPath}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          ></img>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
}

export default Rows;
