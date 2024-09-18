const pool = require("../db");

const getAllDirectors = async () => {
  const result = await pool.query("SELECT * FROM Directors");
  return result.rows;
};

const addDirector = async (name, nationality, dob) => {
  const result = await pool.query(
    "INSERT INTO Directors (Name, Nationality, DOB) VALUES ($1, $2, $3) RETURNING *",
    [name, nationality, dob]
  );
  return result.rows[0];
};

module.exports = {
  getAllDirectors,
  addDirector,
};
