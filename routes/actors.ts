import express from 'express';
import * as actorsController from '../controllers/actorsController';

const router = express.Router();

router.get('/', actorsController.getAllActors);
router.get('/:id', actorsController.getActorById);
router.post('/', actorsController.createActor);
router.put('/:id', actorsController.updateActor);
router.delete('/:id', actorsController.deleteActor);

export default router;
