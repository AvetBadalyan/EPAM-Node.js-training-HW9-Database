import * as actorModel from "../models/actorModel";
import { Actor } from "../models/actorModel";

export const fetchAllActors = async (): Promise<Actor[]> => {
  return await actorModel.getAllActors();
};

export const fetchActorById = async (id: number): Promise<Actor | null> => {
  return await actorModel.getActorById(id);
};

export const createNewActor = async (
  name: string,
  nationality: string,
  dob: Date
): Promise<Actor> => {
  return await actorModel.createActor(name, nationality, dob);
};

export const updateExistingActor = async (
  id: number,
  name: string,
  nationality: string,
  dob: Date
): Promise<Actor | null> => {
  return await actorModel.updateActor(id, name, nationality, dob);
};

export const removeActor = async (id: number): Promise<void> => {
  await actorModel.deleteActor(id);
};
