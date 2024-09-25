import * as genreModel from '../models/genreModel';

export const fetchAllGenres = async () => {
  return await genreModel.getAllGenres();
};

export const fetchGenreById = async (id: string) => {
  return await genreModel.getGenreById(id);
};

export const createGenre = async (genreName: string) => {
  return await genreModel.createGenre(genreName);
};

export const updateGenre = async (id: string, genreName: string) => {
  return await genreModel.updateGenre(id, genreName);
};

export const deleteGenre = async (id: string) => {
  return await genreModel.deleteGenre(id);
};
