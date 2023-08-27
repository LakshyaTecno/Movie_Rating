const movieController = require("../controllers/movie.controller");


module.exports = (app) => {
  app.post(
    "/movierating/api/v1/movies", 
    movieController.createMovie
  );

  app.get(
    "/movierating/api/v1/movies",
    movieController.getAllMovies
  );
};