const express = require('express');
const genresController = require('../controllers/genresController');
const router = express.Router();

router.get('/', genresController.getAllGenres);
router.get('/:id', genresController.getGenreById);
router.post('/', genresController.createGenre);
router.put('/:id', genresController.updateGenre);
router.delete('/:id', genresController.deleteGenre);

module.exports = router;
