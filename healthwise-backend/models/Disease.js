const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  name: String,
  description: String,
  symptoms: [String],
  prevention: String,
  treatment: String
});

module.exports = mongoose.model('Disease', diseaseSchema);
