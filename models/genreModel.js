const pool = require('../db/index');

const getAllGenres = async () => {
    const result = await pool.query('SELECT * FROM Genres');
    return result.rows;
};

const getGenreById = async (id) => {
    const result = await pool.query('SELECT * FROM Genres WHERE GenreID = $1', [id]);
    return result.rows[0];
};

const createGenre = async (genreName) => {
    const result = await pool.query(
        'INSERT INTO Genres (GenreName) VALUES ($1) RETURNING *',
        [genreName]
    );
    return result.rows[0];
};

const updateGenre = async (id, genreName) => {
    const result = await pool.query(
        'UPDATE Genres SET GenreName = $1 WHERE GenreID = $2 RETURNING *',
        [genreName, id]
    );
    return result.rows[0];
};

const deleteGenre = async (id) => {
    await pool.query('DELETE FROM Genres WHERE GenreID = $1', [id]);
};

module.exports = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre,
};
