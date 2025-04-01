const movieRepository = require("../repositories/movieRepository");

exports.getAllMovies = async () => {
  return movieRepository.getAllMovies();
};

exports.getMovieById = async (id) => {
  const movie = await movieRepository.getMovieById(id);
  return movie;
};

exports.createMovie = async (newMovie) => {
  let { title, date } = newMovie;
  const movie = await movieRepository.createMovie(title, date);

  if (movie.affectedRows === 0) {
    return null;
  }
  return movie;
};

exports.deleteMovieById = async (id) => {
  const result = await movieRepository.deleteMovieById(id);

  if (result.affectedRows === 0) {
    return null;
  }
  return result;
};
