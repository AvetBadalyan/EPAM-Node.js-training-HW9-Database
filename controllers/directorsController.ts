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

export const getDirectorById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const director = await directorService.fetchDirectorById(
      Number(req.params.id)
    );
    if (director) {
      res.json(director);
    } else {
      res.status(404).json({ message: "Director not found" });
    }
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};

export const updateDirector = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, nationality, dob } = req.body;
  try {
    const updatedDirector = await directorService.updateExistingDirector(
      Number(req.params.id),
      name,
      nationality,
      dob
    );
    if (updatedDirector) {
      res.json(updatedDirector);
    } else {
      res.status(404).json({ message: "Director not found" });
    }
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};

export const deleteDirector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await directorService.removeDirector(Number(req.params.id));
    res.status(204).json();
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};
