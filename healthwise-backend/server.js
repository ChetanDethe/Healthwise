const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/healthwise')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error", err));


app.use('/api/diseases', require('./routes/diseaseRoutes'));
app.use('/api/emergency', require('./routes/emergencyRoutes'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
