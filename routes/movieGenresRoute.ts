import { Router } from "express";
import {
  createMovieGenre,
  deleteMovieGenre,
} from "../controllers/movieGenresController";

const router = Router();

router.post("/", createMovieGenre);
router.delete("/", deleteMovieGenre);

export default router;
