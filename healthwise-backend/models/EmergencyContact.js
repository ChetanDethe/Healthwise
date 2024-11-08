const mongoose = require('mongoose');

const emergencyContactSchema = new mongoose.Schema({
  service: String,
  number: String
});

module.exports = mongoose.model('EmergencyContact', emergencyContactSchema);

