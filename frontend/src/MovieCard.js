import {  useSetAtom } from "jotai";
import { movieCardData } from "./Store/AtomStore";

const MovieCard = ({ imageUrl, movieName, directorName, duration, rating, movieId }) => {

  const setShowHotMoves = useSetAtom(movieCardData);

  // Convert rating to an array of filled stars
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <span key={index} className="star">
      ★
    </span>
  ));

  return (
    <div className="movie-card" onClick={()=>{setShowHotMoves(movieId)}}>
      <div className="image-container">
        <img
          src={`/images/${movieName}.JPEG`}
          alt={`${movieName} Poster`}
          className="movie-image"
        />
      </div>
      <div className="movie-details">
        <h2 className="movie-name">{movieName}</h2>
        <p className="director">Director: {directorName}</p>
        <p className="duration">Time: {duration} mins</p>
        <div className="rating">
          <p className="rating-number">{rating}</p>
          <div className="stars">{stars}</div>
        </div>
      </div>
    </div>
  );
};


export default MovieCard;