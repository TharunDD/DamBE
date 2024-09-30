require('dotenv').config();
const port=process.env.PORT || 3100;
const cors=require("cors");
const express=require('express');
const dbconnection= require('./src/general/Connection');
const levelMoniterRoutes=require('./src/modules/Waterlevel')
// const levelMoniterRoutes=require('./src/routes/LevelMoniter')
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
dbconnection();
app.post('/api',  async (req, res) => {
  console.log("hia");
  const {damId , damName, levelInFt, storageInMcft, inflowInCatchment, outflowInCatchment, rainfall } = req.body;
  console.log(damId , damName, levelInFt, storageInMcft, inflowInCatchment, outflowInCatchment, rainfall );
  try {
    // Create a new WaterLevel instance with the provided data
    const newWaterLevel = new levelMoniterRoutes({
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
app.get('/a', (req, res) => {
    console.log("hello");
    res.send("Hello World"); // You can send a response back to the client
});
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
}); 