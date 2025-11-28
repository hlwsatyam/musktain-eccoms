const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');
const Brand = require('../models/Brand');

// Single API to get all navigation data
router.get('/navigation-data', async (req, res) => {
  try {
    // Get all active categories with their subcategories
    const categories = await Category.find({ status: 'active' })
      .populate({
        path: 'subCategories',
        match: { status: 'active' },
        select: 'name slug cover description',
        options: { sort: { name: 1 } }
      })
      .select('name slug cover description isFeatured')
      .sort({ name: 1 })
      .lean();

    // Get all active brands
    const brands = await Brand.find({ status: 'active' })
      .select('name slug logo description')
      .sort({ name: 1 })
      .lean();

    // Create navigation structure
    const navConfig = categories.map(category => ({
      title: category.name,
      path: `/category/${category.slug}`,
      isDropdown: true,
      description: category.description,
      cover: category.cover,
      isFeatured: category.isFeatured,
      subCategories: category.subCategories || []
    }));

    // Add non-dropdown menu items
    navConfig.unshift(
      {
        title: 'Home',
        path: '/',
        isDropdown: false
      },
      {
        title: 'New Arrivals',
        path: '/new-arrivals',
        isDropdown: false
      },
      {
        title: 'Sale',
        path: '/sale',
        isDropdown: false
      }
    );

    res.json({
      success: true,
      data: {
        categories: categories,
        brands: brands.slice(0, 8), // Limit to 8 brands for nav
        allBrands: brands, // All brands for brands page
        navConfig: navConfig
      }
    });
  } catch (error) {
    console.error('Navigation data error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching navigation data',
      error: error.message
    });
  }
});

module.exports = router;