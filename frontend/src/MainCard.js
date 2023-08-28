import React from 'react';

const MainCard=({ imageUrl, movieName, directorName, duration, rating, movieId,description }) =>{

    const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
        <span key={index} className="star">
          ★
        </span>
      ));

      
  return (
    
    
    <div className="movie-main-card">
      <div className="movie-main-image">
        <img width="300px" src={`/images/${movieName}.JPEG`} alt="Movie Poster" />
      </div>
      <div className="movie-description">
        <h2>{movieName}</h2>
        <p>{stars}</p>
        <p>{description}</p><button className="play-button">
        <i style={{fontSize:"24px"}} class="fa">&#xf04b;</i>
        </button>
      </div>
      <div className="artists">
      <div className="artists-head"><h2>Artists</h2></div>
        <div className="artists-img">
        <img className="artist-image" src={`https://picsum.photos/201`} alt="Artist 1" />
        <img className="artist-image" src="https://picsum.photos/200" alt="Artist 2" />
        <img className="artist-image" src="https://picsum.photos/203" alt="Artist 3" />
        <img className="artist-image" src="https://picsum.photos/204" alt="Artist 4" />
        <img className="artist-image" src="https://picsum.photos/205" alt="Artist 5" />
        </div>
      </div>
      <div className="action-buttons">
        <button className="total-button">Total</button>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default MainCard;
