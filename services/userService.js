const userRepository = require('../repositories/userRepository');

exports.getAllUsers = async () => {
  // You can add business logic or validations here
  return userRepository.getAllUsers();
}

exports.getMovieById = async (id) => {
  const movie = await userRepository.getMovieById(id);
  return movie;
}