const express = require('express');
const router = express.Router();
const movieController = require('../../controllers/movieController');

router.get('/', movieController.getAllMovies);

router.get('/:id', movieController.getMovieById);

router.delete('/:id', movieController.deleteMovieById)

module.exports = router;