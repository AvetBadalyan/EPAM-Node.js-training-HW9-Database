import * as movieGenresModel from "../models/movieGenresModel";

export const createNewMovieGenre = async (movieId: number, genreId: number) => {
  return await movieGenresModel.addMovieGenre(movieId, genreId);
};

export const removeMovieGenre = async (movieId: number, genreId: number) => {
  await movieGenresModel.deleteMovieGenre(movieId, genreId);
};
