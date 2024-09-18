const ratingModel = require('../models/ratingModel');

const getAllRatings = async (req, res) => {
    try {
        const ratings = await ratingModel.getAllRatings();
        res.json(ratings);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching ratings' });
    }
};

const getRatingByMovieId = async (req, res) => {
    try {
        const rating = await ratingModel.getRatingByMovieId(req.params.movieId);
        if (rating) {
            res.json(rating);
        } else {
            res.status(404).json({ message: 'Rating not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error fetching rating' });
    }
};

const createRating = async (req, res) => {
    try {
        const { movieId, rating } = req.body;
        const newRating = await ratingModel.createRating(movieId, rating);
        res.status(201).json(newRating);
    } catch (err) {
        res.status(500).json({ error: 'Error creating rating' });
    }
};

const updateRating = async (req, res) => {
    try {
        const { rating } = req.body;
        const updatedRating = await ratingModel.updateRating(req.params.movieId, rating);
        if (updatedRating) {
            res.json(updatedRating);
        } else {
            res.status(404).json({ message: 'Rating not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error updating rating' });
    }
};

const deleteRating = async (req, res) => {
    try {
        await ratingModel.deleteRating(req.params.movieId);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: 'Error deleting rating' });
    }
};

module.exports = {
    getAllRatings,
    getRatingByMovieId,
    createRating,
    updateRating,
    deleteRating,
};
