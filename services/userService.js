const movieRepository = require('../repositories/movieRepository');

exports.getAllMovies = async () => {
  // You can add business logic or validations here
  return movieRepository.getAllMovies();
}

exports.getMovieById = async (id) => {
  const movie = await movieRepository.getMovieById(id);
  return movie;
}