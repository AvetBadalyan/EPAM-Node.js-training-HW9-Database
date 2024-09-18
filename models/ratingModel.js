const pool = require('../db/index');

const getAllRatings = async () => {
    const result = await pool.query('SELECT * FROM Ratings');
    return result.rows;
};

const getRatingByMovieId = async (movieId) => {
    const result = await pool.query('SELECT * FROM Ratings WHERE MovieID = $1', [movieId]);
    return result.rows[0];
};

const createRating = async (movieId, rating) => {
    const result = await pool.query(
        'INSERT INTO Ratings (MovieID, Rating) VALUES ($1, $2) RETURNING *',
        [movieId, rating]
    );
    return result.rows[0];
};

const updateRating = async (movieId, rating) => {
    const result = await pool.query(
        'UPDATE Ratings SET Rating = $1 WHERE MovieID = $2 RETURNING *',
        [rating, movieId]
    );
    return result.rows[0];
};

const deleteRating = async (movieId) => {
    await pool.query('DELETE FROM Ratings WHERE MovieID = $1', [movieId]);
};

module.exports = {
    getAllRatings,
    getRatingByMovieId,
    createRating,
    updateRating,
    deleteRating,
};
