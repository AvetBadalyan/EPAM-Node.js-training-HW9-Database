import express from 'express';
import * as ratingsController from '../controllers/ratingsController';

const router = express.Router();

router.get('/', ratingsController.getAllRatings);
router.get('/:movieId', ratingsController.getRatingByMovieId);
router.post('/', ratingsController.createRating);
router.put('/:movieId', ratingsController.updateRating);
router.delete('/:movieId', ratingsController.deleteRating);

export default router;
