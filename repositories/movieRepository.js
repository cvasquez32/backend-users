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
    db.query("SELECT * FROM movies WHERE movie_id = ?", [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

exports.createMovie = (title, date, production_budget) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO movies (title, date, production_budget) VALUES (?, ?, ?)",
      [title, date, production_budget],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

exports.updateMovieById = (title, date, production_budget, id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE movies SET title = ?, date = ?, production_budget = ? WHERE movie_id = ?",
      [title, date, id, production_budget],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

exports.deleteMovieById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM movies WHERE movie_id = ?", [id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
