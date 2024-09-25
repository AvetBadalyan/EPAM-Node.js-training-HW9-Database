import pool from '../db/index';

export interface Movie {
    MovieID: number;
    Title: string;
    ReleaseYear: number;
    DirectorID: number;
}

export const getAllMovies = async (): Promise<Movie[]> => {
    const result = await pool.query('SELECT * FROM Movies');
    return result.rows;
};

export const getMovieById = async (id: number): Promise<Movie | null> => {
    const result = await pool.query('SELECT * FROM Movies WHERE MovieID = $1', [id]);
    return result.rows[0] || null;
};

export const createMovie = async (title: string, releaseYear: number, directorID: number): Promise<Movie> => {
    const result = await pool.query(
        'INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES ($1, $2, $3) RETURNING *',
        [title, releaseYear, directorID]
    );
    return result.rows[0];
};

export const updateMovie = async (id: number, title: string, releaseYear: number, directorID: number): Promise<Movie | null> => {
    const result = await pool.query(
        'UPDATE Movies SET Title = $1, ReleaseYear = $2, DirectorID = $3 WHERE MovieID = $4 RETURNING *',
        [title, releaseYear, directorID, id]
    );
    return result.rows[0] || null;
};

export const deleteMovie = async (id: number): Promise<void> => {
    await pool.query('DELETE FROM Movies WHERE MovieID = $1', [id]);
};
