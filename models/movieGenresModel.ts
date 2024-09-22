import pool from "../db/index";

interface MovieGenre {
  MovieID: number;
  GenreID: number;
}

export const addMovieGenre = async (
  movieId: number,
  genreId: number
): Promise<MovieGenre> => {
  const result = await pool.query(
    "INSERT INTO MovieGenres (MovieID, GenreID) VALUES ($1, $2) RETURNING *",
    [movieId, genreId]
  );
  return result.rows[0];
};

export const deleteMovieGenre = async (
  movieId: number,
  genreId: number
): Promise<void> => {
  await pool.query(
    "DELETE FROM MovieGenres WHERE MovieID = $1 AND GenreID = $2",
    [movieId, genreId]
  );
};
