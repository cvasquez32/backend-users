const movieService = require("../services/movieService");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: message });
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
