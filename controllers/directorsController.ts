import { Request, Response } from "express";
import * as directorService from "../services/directorService";

export const getDirectors = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const directors = await directorService.fetchAllDirectors();
    res.json(directors);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};

export const createDirector = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, nationality, dob } = req.body;
  try {
    const director = await directorService.createNewDirector(
      name,
      nationality,
      dob
    );
    res.status(201).json(director);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};
