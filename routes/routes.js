const { Router } = require('express');
const router = Router();
const moviesData = require('../movies.json');

const HANDLER = (req, res) => {
  res.send("Welcome to my favorite movie list");
};

router.get('/', HANDLER);

router.get('/api/movies', (req, res) => {
  res.status(200).json(moviesData);
});

router.get('/api/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = moviesData.find((movie) => movie.id === movieId);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

module.exports = router;