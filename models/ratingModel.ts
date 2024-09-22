
import pool from '../db/index';

export interface Rating {
    MovieID: number;
    Rating: number;
}

export const getAllRatings = async (): Promise<Rating[]> => {
    const result = await pool.query('SELECT * FROM Ratings');
    return result.rows;
};

export const getRatingByMovieId = async (movieId: number): Promise<Rating | null> => {
    const result = await pool.query('SELECT * FROM Ratings WHERE MovieID = $1', [movieId]);
    return result.rows[0] || null;
};

export const createRating = async (movieId: number, rating: number): Promise<Rating> => {
    const result = await pool.query(
        'INSERT INTO Ratings (MovieID, Rating) VALUES ($1, $2) RETURNING *',
        [movieId, rating]
    );
    return result.rows[0];
};

export const updateRating = async (movieId: number, rating: number): Promise<Rating | null> => {
    const result = await pool.query(
        'UPDATE Ratings SET Rating = $1 WHERE MovieID = $2 RETURNING *',
        [rating, movieId]
    );
    return result.rows[0] || null;
};

export const deleteRating = async (movieId: number): Promise<void> => {
    await pool.query('DELETE FROM Ratings WHERE MovieID = $1', [movieId]);
};
