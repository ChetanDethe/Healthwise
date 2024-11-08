const express = require('express');
const router = express.Router();
const Disease = require('../models/Disease');

// Get all diseases
router.get('/', async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.json(diseases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// // Search diseases by symptom
router.get('/search', async (req, res) => {
  const { symptom } = req.query;
  try {
    const diseases = await Disease.find({ symptoms: symptom });
    res.json(diseases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

