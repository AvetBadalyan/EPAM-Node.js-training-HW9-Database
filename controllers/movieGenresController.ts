import { Request, Response } from "express";
import * as movieGenreService from "../services/movieGenresService";

export const createMovieGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { movieId, genreId } = req.body;
  try {
    const movieGenre = await movieGenreService.createNewMovieGenre(
      movieId,
      genreId
    );
    res.status(201).json(movieGenre);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      error: `Failed to add movie genre association, error message: ${error.message}`,
    });
  }
};

export const deleteMovieGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { movieId, genreId } = req.body;
  try {
    await movieGenreService.removeMovieGenre(movieId, genreId);
    res.status(204).json();
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      error: `Failed to remove movie genre association, error message: ${error.message}`,
    });
  }
};
