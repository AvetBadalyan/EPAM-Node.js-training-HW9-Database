import * as ratingModel from "../models/ratingModel";
import { Rating } from "../models/ratingModel";

export const fetchAllRatings = async (): Promise<Rating[]> => {
  return await ratingModel.getAllRatings();
};

export const fetchRatingByMovieId = async (
  movieId: number
): Promise<Rating | null> => {
  return await ratingModel.getRatingByMovieId(movieId);
};

export const createNewRating = async (
  movieId: number,
  rating: number
): Promise<Rating> => {
  return await ratingModel.createRating(movieId, rating);
};

export const updateExistingRating = async (
  movieId: number,
  rating: number
): Promise<Rating | null> => {
  return await ratingModel.updateRating(movieId, rating);
};

export const removeRating = async (movieId: number): Promise<void> => {
  await ratingModel.deleteRating(movieId);
};
