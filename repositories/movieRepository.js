const db = require("../db");

exports.getAllMovies = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM `movies`", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM `movies` WHERE id = ?",
      [id],
      (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      }
    );
  });
};

exports.deleteMovieById = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM `movies` WHERE id = ?",
      [id],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

