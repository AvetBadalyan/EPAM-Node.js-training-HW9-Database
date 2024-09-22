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

export const addDirector = async (name: string, nationality: string, dob: Date): Promise<Director> => {
  const result = await pool.query(
    'INSERT INTO Directors (Name, Nationality, DOB) VALUES ($1, $2, $3) RETURNING *',
    [name, nationality, dob]
  );
  return result.rows[0];
};
