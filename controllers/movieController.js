const movieService = require("../services/movieService");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMovieById = async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await movieService.getMovieById(movieId);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMovie = async (req, res) => {
  const { body } = req;
  if (!body.title || !body.date || !body.production_budget) {
    return;
  }
  const newMovie = {
    title: body.title,
    date: body.date,
    production_budget: body.production_budget,
  };
  try {
    const createMovie = await movieService.createMovie(newMovie);
    res.status(201).send({ status: "OK", data: createMovie });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMovieById = async (req, res) => {
  const movieId = req.params.id;
  const { body } = req;
  if (!movieId || !body.title || !body.date) {
    return;
  }
  const updateMovie = {
    id: movieId,
    title: body.title,
    date: body.date,
  };
  try {
    const updateMovieById = await movieService.updateMovieById(updateMovie);
    res.status(201).send({ data: updateMovieById });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMovieById = async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await movieService.deleteMovieById(movieId);
    if (movie === null) {
      return res.status(404).json({ error: "Movie not found" });
    } else {
      res.status(200).json({ message: `Movie with id ${movieId} deleted` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
