import { Request, Response } from 'express';
import * as actorService from '../services/actorService';

export const getAllActors = async (req: Request, res: Response): Promise<void> => {
    try {
        const actors = await actorService.fetchAllActors();
        res.json(actors);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const getActorById = async (req: Request, res: Response): Promise<void> => {
    try {
        const actor = await actorService.fetchActorById(Number(req.params.id));
        if (actor) {
            res.json(actor);
        } else {
            res.status(404).json({ message: 'Actor not found' });
        }
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const createActor = async (req: Request, res: Response): Promise<void> => {
    const { name, nationality, dob } = req.body;
    try {
        const newActor = await actorService.createNewActor(name, nationality, new Date(dob));
        res.status(201).json(newActor);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const updateActor = async (req: Request, res: Response): Promise<void> => {
    const { name, nationality, dob } = req.body;
    try {
        const updatedActor = await actorService.updateExistingActor(Number(req.params.id), name, nationality, new Date(dob));
        if (updatedActor) {
            res.json(updatedActor);
        } else {
            res.status(404).json({ message: 'Actor not found' });
        }
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const deleteActor = async (req: Request, res: Response): Promise<void> => {
    try {
        await actorService.removeActor(Number(req.params.id));
        res.status(204).json();
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};
