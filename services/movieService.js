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

exports.updateMovieById = async (updateMovie) => {
  let { title, date, id } = updateMovie;
  const result = await movieRepository.updateMovieById(title, date, id);

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
