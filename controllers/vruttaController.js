const VruttaData = require("../models/vruttaModel");
const mongoose = require("mongoose");

// get all vruttas
const getVruttas = async (req, res) => {
  const Vruttas = await VruttaData.find({});

  res.status(201).json(Vruttas);
};

// get single vrutta
const getVrutta = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Vrutta Available" });
  }

  const vrutta = await VruttaData.findById(id);

  if (!vrutta) {
    return res.status(404).json({ error: "No such Vrutta Available" });
  }

  res.status(202).json(vrutta);
};

// create a vrutta
const createVruttas = async (req, res) => {
  const {
    vrutta,
    vruttasanskrit,
    characteristics,
    charnakshar,
    gana,
    yati,
    example,
  } = req.body;

  // doc to db
  try {
    const Vruttas = await VruttaData.create({
      vrutta,
      vruttasanskrit,
      characteristics,
      charnakshar,
      gana,
      yati,
      example,
    });
    res.status(203).json(Vruttas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a vrutta
const deleteVrutta = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Vrutta Available" });
  }
  const vrutta = await VruttaData.findOneAndDelete({ _id: id });
  if (!vrutta) {
    return res.status(400).json({ error: "No such Vrutta Available" });
  }

  res.status(204).json(vrutta);
};

// update a vrutta
const updateVrutta = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Vrutta Available" });
  }
  const vrutta = await VruttaData.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!vrutta) {
    return res.status(400).json({ error: "No such Vrutta Available" });
  }
  res.status(205).json(vrutta);
};

module.exports = {
  getVrutta,
  getVruttas,
  createVruttas,
  deleteVrutta,
  updateVrutta,
};
