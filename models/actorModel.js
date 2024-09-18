const pool = require('../db/index');

const getAllActors = async () => {
    const result = await pool.query('SELECT * FROM Actors');
    return result.rows;
};

const getActorById = async (id) => {
    const result = await pool.query('SELECT * FROM Actors WHERE ActorID = $1', [id]);
    return result.rows[0];
};

const createActor = async (name, nationality, dob) => {
    const result = await pool.query(
        'INSERT INTO Actors (Name, Nationality, DOB) VALUES ($1, $2, $3) RETURNING *',
        [name, nationality, dob]
    );
    return result.rows[0];
};

const updateActor = async (id, name, nationality, dob) => {
    const result = await pool.query(
        'UPDATE Actors SET Name = $1, Nationality = $2, DOB = $3 WHERE ActorID = $4 RETURNING *',
        [name, nationality, dob, id]
    );
    return result.rows[0];
};

const deleteActor = async (id) => {
    await pool.query('DELETE FROM Actors WHERE ActorID = $1', [id]);
};

module.exports = {
    getAllActors,
    getActorById,
    createActor,
    updateActor,
    deleteActor,
};
