const mongoose = require("mongoose");

const reqString = { type: String, required: true };

const vruttaSchema = {
  vrutta: reqString,

  vruttasanskrit: reqString,

  characteristics: reqString,

  charnakshar: String,

  gana: String,

  yati: String,

  example: reqString,
};

module.exports = mongoose.model("VruttaData", vruttaSchema);
