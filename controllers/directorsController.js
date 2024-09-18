const { getAllDirectors, addDirector } = require("../models/directorModel");

const getDirectors = async (req, res) => {
  try {
    const directors = await getAllDirectors();
    res.json(directors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createDirector = async (req, res) => {
  const { name, nationality, dob } = req.body;
  try {
    const director = await addDirector(name, nationality, dob);
    res.status(201).json(director);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getDirectors,
  createDirector,
};
