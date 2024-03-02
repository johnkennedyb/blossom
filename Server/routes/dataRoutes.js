// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const Data = require('../models/data');

// GET all data
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new data
router.post('/', async (req, res) => {
  const newData = new Data({
    // Define your data schema fields here based on your requirements
  });
  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
