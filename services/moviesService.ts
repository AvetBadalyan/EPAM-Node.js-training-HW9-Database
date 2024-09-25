import * as movieModel from "../models/movieModel";
import { Movie } from "../models/movieModel";

export const fetchAllMovies = async (): Promise<Movie[]> => {
  return await movieModel.getAllMovies();
};

export const fetchMovieById = async (id: number): Promise<Movie | null> => {
  return await movieModel.getMovieById(id);
};

export const createNewMovie = async (
  title: string,
  releaseYear: number,
  directorID: number
): Promise<Movie> => {
  return await movieModel.createMovie(title, releaseYear, directorID);
};

export const updateExistingMovie = async (
  id: number,
  title: string,
  releaseYear: number,
  directorID: number
): Promise<Movie | null> => {
  return await movieModel.updateMovie(id, title, releaseYear, directorID);
};

export const removeMovie = async (id: number): Promise<void> => {
  await movieModel.deleteMovie(id);
};
