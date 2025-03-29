const userRepository = require('../repositories/userRepository');

exports.getAllUsers = async () => {
  // You can add business logic or validations here
  return userRepository.getAllUsers();
}