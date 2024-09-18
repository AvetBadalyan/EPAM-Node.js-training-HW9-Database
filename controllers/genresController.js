const genreModel = require('../models/genreModel');

const getAllGenres = async (req, res) => {
    try {
        const genres = await genreModel.getAllGenres();
        res.json(genres);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching genres' });
    }
};

const getGenreById = async (req, res) => {
    try {
        const genre = await genreModel.getGenreById(req.params.id);
        if (genre) {
            res.json(genre);
        } else {
            res.status(404).json({ message: 'Genre not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error fetching genre' });
    }
};

const createGenre = async (req, res) => {
    try {
        const { genreName } = req.body;
        const newGenre = await genreModel.createGenre(genreName);
        res.status(201).json(newGenre);
    } catch (err) {
        res.status(500).json({ error: 'Error creating genre' });
    }
};

const updateGenre = async (req, res) => {
    try {
        const { genreName } = req.body;
        const updatedGenre = await genreModel.updateGenre(req.params.id, genreName);
        if (updatedGenre) {
            res.json(updatedGenre);
        } else {
            res.status(404).json({ message: 'Genre not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error updating genre' });
    }
};

const deleteGenre = async (req, res) => {
    try {
        await genreModel.deleteGenre(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: 'Error deleting genre' });
    }
};

module.exports = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre,
};
