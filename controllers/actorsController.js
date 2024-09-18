const actorModel = require('../models/actorModel');

const getAllActors = async (req, res) => {
    try {
        const actors = await actorModel.getAllActors();
        res.json(actors);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching actors' });
    }
};

const getActorById = async (req, res) => {
    try {
        const actor = await actorModel.getActorById(req.params.id);
        if (actor) {
            res.json(actor);
        } else {
            res.status(404).json({ message: 'Actor not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error fetching actor' });
    }
};

const createActor = async (req, res) => {
    try {
        const { name, nationality, dob } = req.body;
        const newActor = await actorModel.createActor(name, nationality, dob);
        res.status(201).json(newActor);
    } catch (err) {
        res.status(500).json({ error: 'Error creating actor' });
    }
};

const updateActor = async (req, res) => {
    try {
        const { name, nationality, dob } = req.body;
        const updatedActor = await actorModel.updateActor(req.params.id, name, nationality, dob);
        if (updatedActor) {
            res.json(updatedActor);
        } else {
            res.status(404).json({ message: 'Actor not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error updating actor' });
    }
};

const deleteActor = async (req, res) => {
    try {
        await actorModel.deleteActor(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: 'Error deleting actor' });
    }
};

module.exports = {
    getAllActors,
    getActorById,
    createActor,
    updateActor,
    deleteActor,
};
