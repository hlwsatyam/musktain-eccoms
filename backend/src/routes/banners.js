const express = require('express');
const router = express.Router();
const Banner = require('../models/Banner');

// Get all active banners
router.get('/banners', async (req, res) => {
  try {
    const banners = await Banner.find({ 
      isActive: true 
    })
    .sort({ displayOrder: 1, createdAt: -1 })
    .lean();

    res.json({
      success: true,
      data: banners
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching banners',
      error: error.message
    });
  }
});

// Create new banner
router.post('/banners', async (req, res) => {
  try {
    const banner = new Banner(req.body);
    await banner.save();

    res.status(201).json({
      success: true,
      message: 'Banner created successfully',
      data: banner
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating banner',
      error: error.message
    });
  }
});

// Update banner
router.put('/banners/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await Banner.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: 'Banner not found'
      });
    }

    res.json({
      success: true,
      message: 'Banner updated successfully',
      data: banner
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating banner',
      error: error.message
    });
  }
});

// Delete banner
router.delete('/banners/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await Banner.findByIdAndDelete(id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: 'Banner not found'
      });
    }

    res.json({
      success: true,
      message: 'Banner deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting banner',
      error: error.message
    });
  }
});


module.exports = router;
