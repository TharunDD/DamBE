const express = require('express');
const waterL= require("./"); // Import your pre-created WaterLevel model
const router = express.Router();
router.post('/levmoniter', async (req, res) => {
    console.log("hia");
  const {damId , damName, levelInFt, storageInMcft, inflowInCatchment, outflowInCatchment, rainfall } = req.body;

  try {
    // Create a new WaterLevel instance with the provided data
    const newWaterLevel = new WaterLevel({
      damId,
      damName,
      levelInFt,
      storageInMcft,
      inflowInCatchment,
      outflowInCatchment,
      rainfall
    });

    // Save the new instance to the database
    await newWaterLevel.save();

    // Respond with success message
    res.status(201).json({ message: 'Water level data saved successfully!' });
  } catch (error) {
    // Handle any errors and respond with failure message
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
});

// Export the router for use in other parts of the application
module.exports = router;
