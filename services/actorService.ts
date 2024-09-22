import * as actorModel from '../models/actorModel';

export const fetchAllActors = async () => {
  return await actorModel.getAllActors();
};

export const fetchActorById = async (id: number) => {
  return await actorModel.getActorById(id);
};

export const createNewActor = async (name: string, nationality: string, dob: Date) => {
  return await actorModel.createActor(name, nationality, dob);
};

export const modifyActor = async (id: number, name: string, nationality: string, dob: Date) => {
  return await actorModel.updateActor(id, name, nationality, dob);
};

export const removeActor = async (id: number) => {
  await actorModel.deleteActor(id);
};
