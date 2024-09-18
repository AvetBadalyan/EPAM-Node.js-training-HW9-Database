const express = require('express');
const ratingsController = require('../controllers/ratingsController');
const router = express.Router();

router.get('/', ratingsController.getAllRatings);
router.get('/:movieId', ratingsController.getRatingByMovieId);
router.post('/', ratingsController.createRating);
router.put('/:movieId', ratingsController.updateRating);
router.delete('/:movieId', ratingsController.deleteRating);

module.exports = router;
