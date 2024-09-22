import * as directorModel from "../models/directorModel";

export const fetchAllDirectors = async () => {
  return await directorModel.getAllDirectors();
};

export const createNewDirector = async (
  name: string,
  nationality: string,
  dob: Date
) => {
  return await directorModel.addDirector(name, nationality, dob);
};

export const fetchDirectorById = async (id: number) => {
  return await directorModel.getDirectorById(id);
};

export const updateExistingDirector = async (
  id: number,
  name: string,
  nationality: string,
  dob: Date
) => {
  return await directorModel.updateDirector(id, name, nationality, dob);
};

export const removeDirector = async (id: number) => {
  await directorModel.deleteDirector(id);
};
