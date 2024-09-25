import pool from '../db/index';

interface Director {
  DirectorID: number;
  Name: string;
  Nationality: string;
  DOB: Date;
}

export const getAllDirectors = async (): Promise<Director[]> => {
  const result = await pool.query('SELECT * FROM Directors');
  return result.rows;
};

export const getDirectorById = async (id: number): Promise<Director | null> => {
  const result = await pool.query('SELECT * FROM Directors WHERE DirectorID = $1', [id]);
  return result.rows[0] || null;
};

export const addDirector = async (name: string, nationality: string, dob: Date): Promise<Director> => {
  const result = await pool.query(
    'INSERT INTO Directors (Name, Nationality, DOB) VALUES ($1, $2, $3) RETURNING *',
    [name, nationality, dob]
  );
  return result.rows[0];
};

export const updateDirector = async (id: number, name: string, nationality: string, dob: Date): Promise<Director | null> => {
  const result = await pool.query(
    'UPDATE Directors SET Name = $1, Nationality = $2, DOB = $3 WHERE DirectorID = $4 RETURNING *',
    [name, nationality, dob, id]
  );
  return result.rows[0] || null;
};

export const deleteDirector = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Directors WHERE DirectorID = $1', [id]);
};
