import * as directorModel from '../models/directorModel';

export const fetchAllDirectors = async () => {
  return await directorModel.getAllDirectors();
};

export const createNewDirector = async (name: string, nationality: string, dob: Date) => {
  return await directorModel.addDirector(name, nationality, dob);
};
