const db = require("../db");

exports.getAllMovies = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM `movie-titles`", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM `movie-titles` WHERE id = ?",
      [id],
      (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      }
    );
  });
};
