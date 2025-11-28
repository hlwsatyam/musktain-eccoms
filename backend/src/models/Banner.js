const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Banner name is required'],
    },
    image: {
      url: {
        type: String,
        required: [true, 'Image URL is required'],
      }
    },
    redirectUrl: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: true
    },
    displayOrder: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.models.Banner || mongoose.model('Banner', BannerSchema);
module.exports = Banner;