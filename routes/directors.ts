import { Router } from "express";
import {
  getDirectors,
  createDirector,
} from "../controllers/directorsController";

const router = Router();

router.get("/", getDirectors);
router.post("/", createDirector);

export default router;
