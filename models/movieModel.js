const pool = require('../db/index');

const getAllMovies = async () => {
    const result = await pool.query('SELECT * FROM Movies');
    return result.rows;
};

const getMovieById = async (id) => {
    const result = await pool.query('SELECT * FROM Movies WHERE MovieID = $1', [id]);
    return result.rows[0];
};

const createMovie = async (title, releaseYear, directorID) => {
    const result = await pool.query(
        'INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES ($1, $2, $3) RETURNING *',
        [title, releaseYear, directorID]
    );
    return result.rows[0];
};

const updateMovie = async (id, title, releaseYear, directorID) => {
    const result = await pool.query(
        'UPDATE Movies SET Title = $1, ReleaseYear = $2, DirectorID = $3 WHERE MovieID = $4 RETURNING *',
        [title, releaseYear, directorID, id]
    );
    return result.rows[0];
};

const deleteMovie = async (id) => {
    await pool.query('DELETE FROM Movies WHERE MovieID = $1', [id]);
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};
