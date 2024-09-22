import pool from '../db/index';

interface Actor {
  ActorID: number;
  Name: string;
  Nationality: string;
  DOB: Date;
}

export const getAllActors = async (): Promise<Actor[]> => {
  const result = await pool.query('SELECT * FROM Actors');
  return result.rows;
};

export const getActorById = async (id: number): Promise<Actor | null> => {
  const result = await pool.query('SELECT * FROM Actors WHERE ActorID = $1', [id]);
  return result.rows[0] || null;
};

export const createActor = async (name: string, nationality: string, dob: Date): Promise<Actor> => {
  const result = await pool.query(
    'INSERT INTO Actors (Name, Nationality, DOB) VALUES ($1, $2, $3) RETURNING *',
    [name, nationality, dob]
  );
  return result.rows[0];
};

export const updateActor = async (id: number, name: string, nationality: string, dob: Date): Promise<Actor | null> => {
  const result = await pool.query(
    'UPDATE Actors SET Name = $1, Nationality = $2, DOB = $3 WHERE ActorID = $4 RETURNING *',
    [name, nationality, dob, id]
  );
  return result.rows[0] || null;
};

export const deleteActor = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Actors WHERE ActorID = $1', [id]);
};
