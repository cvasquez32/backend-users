const db = require("../db");

exports.getAllMovies = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM movies", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM movies WHERE id = ?", [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

exports.createMovie = (title, date) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO movies (title, date) VALUES (?, ?)",
      [title, date],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

exports.deleteMovieById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM movies VALUES ()", [id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
