const movieRepository = require("../repositories/movieRepository");

exports.getAllMovies = async () => {
  return movieRepository.getAllMovies();
};

exports.getMovieById = async (id) => {
  const movie = await movieRepository.getMovieById(id);
  return movie;
};

exports.createMovie = async (newMovie) => {
  let { title, date, production_cost } = newMovie;
  const movie = await movieRepository.createMovie(title, date, production_cost);

  if (movie.affectedRows === 0) {
    return null;
  }
  return movie;
};

exports.updateMovieById = async (updateMovie) => {
  let { title, date, production_cost, id } = updateMovie;
  const result = await movieRepository.updateMovieById(title, date, production_cost, id);

  if (result.affectedRows === 0) {
    return "0 affected Rows, Please Make Sure ID is Valid";
  }
  return result;
};

exports.deleteMovieById = async (id) => {
  const result = await movieRepository.deleteMovieById(id);

  if (result.affectedRows === 0) {
    return null;
  }
  return result;
};
