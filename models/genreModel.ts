import pool from "../db/index";

interface Genre {
  genreId: number;
  genreName: string;
}

export const getAllGenres = async (): Promise<Genre[]> => {
  const result = await pool.query("SELECT * FROM Genres");
  return result.rows;
};

export const getGenreById = async (id: string): Promise<Genre | null> => {
  const result = await pool.query("SELECT * FROM Genres WHERE GenreID = $1", [
    id,
  ]);
  return result.rows[0] || null;
};

export const createGenre = async (genreName: string): Promise<Genre> => {
  const result = await pool.query(
    "INSERT INTO Genres (GenreName) VALUES ($1) RETURNING *",
    [genreName]
  );
  return result.rows[0];
};

export const updateGenre = async (
  id: string,
  genreName: string
): Promise<Genre | null> => {
  const result = await pool.query(
    "UPDATE Genres SET GenreName = $1 WHERE GenreID = $2 RETURNING *",
    [genreName, id]
  );
  return result.rows[0] || null;
};

export const deleteGenre = async (id: string): Promise<void> => {
  await pool.query("DELETE FROM Genres WHERE GenreID = $1", [id]);
};
