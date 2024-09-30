const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for storing water level data of dams
const waterLevelSchema = new Schema({
    damId:{
        type: Number,
        required: true, 
    },
  damName: {
    type: String,
    required: true,   // Dam name is required
  },
  levelInFt: {
    type: Number,
    required: true,   // Water level in feet is required
  },
  storageInMcft: {
    type: Number,
    required: true,   // Storage in million cubic feet is required
  },
  inflowInCatchment: {
    type: Number,
    required: true,   // Inflow in catchment area is required
  },
  outflowInCatchment: {
    type: Number,
    required: true,   // Outflow in catchment area is required
  },
  rainfall: {
    type: Number,
    required: true,   // Rainfall amount is required
  },
  timestamp: {
    type: Date,
    default: Date.now,  // Automatically adds a timestamp for each record
  }
});

// Export the schema as a model
module.exports = mongoose.model('WaterLevel', waterLevelSchema);
