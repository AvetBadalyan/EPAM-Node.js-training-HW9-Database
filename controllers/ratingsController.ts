import { Request, Response } from 'express';
import * as ratingsService from '../services/ratingService';

export const getAllRatings = async (req: Request, res: Response): Promise<void> => {
    try {
        const ratings = await ratingsService.fetchAllRatings();
        res.json(ratings);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const getRatingByMovieId = async (req: Request, res: Response): Promise<void> => {
    try {
        const rating = await ratingsService.fetchRatingByMovieId(Number(req.params.movieId));
        if (rating) {
            res.json(rating);
        } else {
            res.status(404).json({ message: 'Rating not found' });
        }
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const createRating = async (req: Request, res: Response): Promise<void> => {
    try {
        const { movieId, rating } = req.body;
        const newRating = await ratingsService.createNewRating(movieId, rating);
        res.status(201).json(newRating);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const updateRating = async (req: Request, res: Response): Promise<void> => {
    try {
        const { rating } = req.body;
        const updatedRating = await ratingsService.updateExistingRating(Number(req.params.movieId), rating);
        if (updatedRating) {
            res.json(updatedRating);
        } else {
            res.status(404).json({ message: 'Rating not found' });
        }
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const deleteRating = async (req: Request, res: Response): Promise<void> => {
    try {
        await ratingsService.removeRating(Number(req.params.movieId));
        res.status(204).json();
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};
