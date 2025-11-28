const express = require('express');
const router = express.Router();
const WebsiteDetails = require('../models/WebsiteDetails');

// Get website details
router.get('/website-details', async (req, res) => {
  try {
    const websiteDetails = await WebsiteDetails.getWebsiteDetails();
     
    res.json({
      success: true,
      data: websiteDetails
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Error fetching website details',
      error: error.message
    });
  }
});

// Update website details
router.put('/website-details', async (req, res) => {
  
  try {
    let websiteDetails = await WebsiteDetails.findOne();
    
    if (!websiteDetails) {
      // Create new if doesn't exist
      websiteDetails = new WebsiteDetails(req.body);
    } else {
      // Update existing
      websiteDetails = await WebsiteDetails.findOneAndUpdate(
        {},
        { $set: req.body },
        { new: true, runValidators: true }
      );
    }

    await websiteDetails.save();

    res.json({
      success: true,
      message: 'Website details updated successfully',
      data: websiteDetails
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating website details',
      error: error.message
    });
  }
});

module.exports = router;