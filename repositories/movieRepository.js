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

exports.createMovie = (title, date, production_cost) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO movies (title, date, production_cost) VALUES (?, ?, ?)",
      [title, date, production_cost],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

exports.updateMovieById = (title, date, production_cost, id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE movies SET title = ?, date = ?, production_cost = ? WHERE id = ?",
      [title, date, id, production_cost],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

exports.deleteMovieById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM movies WHERE id = ?", [id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
