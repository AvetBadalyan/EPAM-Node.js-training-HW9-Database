import { Request, Response } from 'express';
import * as genreService from '../services/genreService';

export const getAllGenres = async (req: Request, res: Response): Promise<void> => {
  try {
    const genres = await genreService.fetchAllGenres();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching genres' });
  }
};

export const getGenreById = async (req: Request, res: Response): Promise<void> => {
  try {
    const genre = await genreService.fetchGenreById(req.params.id);
    if (genre) {
      res.json(genre);
    } else {
      res.status(404).json({ message: 'Genre not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching genre' });
  }
};

export const createGenre = async (req: Request, res: Response): Promise<void> => {
  const { genreName } = req.body;
  try {
    const newGenre = await genreService.createGenre(genreName);
    res.status(201).json(newGenre);
  } catch (err) {
    res.status(500).json({ error: 'Error creating genre' });
  }
};

export const updateGenre = async (req: Request, res: Response): Promise<void> => {
  const { genreName } = req.body;
  try {
    const updatedGenre = await genreService.updateGenre(req.params.id, genreName);
    if (updatedGenre) {
      res.json(updatedGenre);
    } else {
      res.status(404).json({ message: 'Genre not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error updating genre' });
  }
};

export const deleteGenre = async (req: Request, res: Response): Promise<void> => {
  try {
    await genreService.deleteGenre(req.params.id);
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ error: 'Error deleting genre' });
  }
};
