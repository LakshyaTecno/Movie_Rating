const Movie = require("../models/movieSchema");

exports.createMovie = async (req, res) => {
  try {
    console.log(req.body)
    const movie = {
       movieId: req.body.movieId,
       name:req.body.name,
       description:req.body.description,
       rating:req.body.rating,
       artists: req.body.artists,
    };
    const movieCreated = await Movie.create(movie);
    res.status(201).send(movieCreated);
  } catch (err) {
    console.log("Some Err happend while creating new movie", err.message);
    res.status(500).send({
      message: "Some Internal server error",
    });
  }
};


exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(201).send(movies);
  } catch (err) {
    console.log("Some Err happend getting movies", err.message);
    res.status(500).send({
      message: "Some Internal server error",
    });
  }
};