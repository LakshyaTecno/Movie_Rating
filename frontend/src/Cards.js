import React ,{useEffect } from "react";
import MovieCard from "./MovieCard";
import { useAtom, useAtomValue } from "jotai";
import { movieCardData, moviesData } from "./Store/AtomStore";
import MainCard from "./MainCard";
import axios from "axios"

const Cards = () => {

    const [movieData,setMovieData] =useAtom(moviesData)
    async function fetchData() {
        try {
          const response = await axios.get("/movierating/api/v1/movies");
          console.log(response)
          setMovieData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        fetchData();
      }, []);
  const showHotMoves = useAtomValue(movieCardData);

  return (
    <div className="main-card">
      <div className="first-cntr">
      <div className="main-heading">
        <span className="heading active">Now</span>
        <span className="heading inactive">Recently</span>
      </div>
      {movieData.map((i, idx) => {
        return (
          <MovieCard
            imageUrl={`https://picsum.photos/20${idx}`}
            movieName={i.name}
            directorName={i.director}
            duration={i.time}
            rating={i.rating}
            movieId={i.movieId}
          />
        );
      })}
    </div>
    <div className="second-cntr">
      {movieData.map((i, idx) => {
        return ( i.movieId===showHotMoves &&  
          <MainCard
            imageUrl={`https://picsum.photos/20${idx}`}
            movieName={i.name}
            directorName={i.artists}
            duration={120}
            rating={i.rating}
            description={i.description}
          />
        );
      })}
    </div>
    </div>
  );
};

export default Cards;
