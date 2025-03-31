const movieRepository = require('../repositories/movieRepository');

exports.getAllMovies = async () => {
  return movieRepository.getAllMovies();
}

exports.getMovieById = async (id) => {
  const movie = await movieRepository.getMovieById(id);
  return movie;
}