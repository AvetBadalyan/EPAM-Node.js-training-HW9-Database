const movieModel = require('../models/movieModel');

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieModel.getAllMovies();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching movies' });
    }
};

const getMovieById = async (req, res) => {
    try {
        const movie = await movieModel.getMovieById(req.params.id);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error fetching movie' });
    }
};

const createMovie = async (req, res) => {
    try {
        const { title, releaseYear, directorID } = req.body;
        const newMovie = await movieModel.createMovie(title, releaseYear, directorID);
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(500).json({ error: 'Error creating movie' });
    }
};

const updateMovie = async (req, res) => {
    try {
        const { title, releaseYear, directorID } = req.body;
        const updatedMovie = await movieModel.updateMovie(req.params.id, title, releaseYear, directorID);
        if (updatedMovie) {
            res.json(updatedMovie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error updating movie' });
    }
};

const deleteMovie = async (req, res) => {
    try {
        await movieModel.deleteMovie(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: 'Error deleting movie' });
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};
