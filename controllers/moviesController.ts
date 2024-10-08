import { Request, Response } from "express";
import * as moviesService from "../services/moviesService";

export const getAllMovies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movies = await moviesService.fetchAllMovies();
    res.json(movies);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({
      error: `Failed to fetch movies, error message: ${error.message}`,
    });
  }
};

export const getMovieById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movie = await moviesService.fetchMovieById(Number(req.params.id));
    if (movie) {
      res.json(movie);
    } else {
      res
        .status(404)
        .json({ message: `Movie with ID ${Number(req.params.id)} not found` });
    }
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};

export const createMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, releaseYear, directorID } = req.body;

  try {
    const newMovie = await moviesService.createNewMovie(
      title,
      releaseYear,
      directorID
    );
    res.status(201).json(newMovie);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};

export const updateMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, releaseYear, directorID } = req.body;

  try {
    const updatedMovie = await moviesService.updateExistingMovie(
      Number(req.params.id),
      title,
      releaseYear,
      directorID
    );
    if (updatedMovie) {
      res.json(updatedMovie);
    } else {
      res
        .status(404)
        .json({ message: `Movie with ID ${Number(req.params.id)} not found` });
    }
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};

export const deleteMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await moviesService.removeMovie(Number(req.params.id));
    res.status(204).json();
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};
