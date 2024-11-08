const mongoose = require('mongoose');
const Disease = require('./models/Disease');
const EmergencyContact = require('./models/EmergencyContact');
const diseasesData = require('./data/diseases.json');
const emergencyContactsData = require('./data/emergencyContacts.json');

// Connect to MongoDB (remove deprecated options)
mongoose.connect('mongodb://localhost:27017/healthwise')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error", err));

const loadData = async () => {
  try {
    // Clear existing data
    await Disease.deleteMany({});
    await EmergencyContact.deleteMany({});

    // Insert new data
    await Disease.insertMany(diseasesData);
    await EmergencyContact.insertMany(emergencyContactsData);

    console.log("Data loaded successfully");
    process.exit();
  } catch (error) {
    console.error("Error loading data:", error);
    process.exit(1);
  }
};

loadData();
