const db = require("../db");

exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM `movie-titles`", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
