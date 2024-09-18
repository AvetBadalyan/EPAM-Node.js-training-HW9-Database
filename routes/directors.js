const express = require("express");
const {
  getDirectors,
  createDirector,
} = require("../controllers/directorsController");
const router = express.Router();

router.get("/", getDirectors);
router.post("/", createDirector);

module.exports = router;
