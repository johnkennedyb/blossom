// backend/models/Data.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // Define your data schema fields here based on your requirements
});

module.exports = mongoose.model('Data', dataSchema);
