import { Request, Response } from 'express';
import * as moviesService from '../services/moviesService';

export const getAllMovies = async (req: Request, res: Response): Promise<void> => {
    try {
        const movies = await moviesService.fetchAllMovies();
        res.json(movies);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Error fetching movies' });
        }
    }
};

export const getMovieById = async (req: Request, res: Response): Promise<void> => {
    try {
        const movie = await moviesService.fetchMovieById(Number(req.params.id));
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Error fetching movie' });
        }
    }
};

export const createMovie = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, releaseYear, directorID } = req.body;
        const newMovie = await moviesService.createNewMovie(title, releaseYear, directorID);
        res.status(201).json(newMovie);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Error creating movie' });
        }
    }
};

export const updateMovie = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, releaseYear, directorID } = req.body;
        const updatedMovie = await moviesService.updateExistingMovie(Number(req.params.id), title, releaseYear, directorID);
        if (updatedMovie) {
            res.json(updatedMovie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Error updating movie' });
        }
    }
};

export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
    try {
        await moviesService.removeMovie(Number(req.params.id));
        res.status(204).json();
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Error deleting movie' });
        }
    }
};
