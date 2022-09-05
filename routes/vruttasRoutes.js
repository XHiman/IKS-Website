const express = require("express");
const {
  getVrutta,
  getVruttas,
  createVruttas,
  deleteVrutta,
  updateVrutta,
} = require("../controllers/vruttaController");

const router = express.Router();

//get all vruttas
router.get("/", getVruttas);

//get single vrutta
router.get("/:id", getVrutta);

//Post a new Vrutta
router.post("/", createVruttas);

//Delete a vrutta
router.delete("/:id", deleteVrutta);

//Update a vrutta
router.patch("/:id", updateVrutta);

module.exports = router;
