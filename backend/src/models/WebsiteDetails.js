const mongoose = require('mongoose');

const WebsiteDetailsSchema = new mongoose.Schema(
  {
    // Basic Information
    siteName: {
      type: String,
      required: [true, 'Site name is required'],
      maxlength: [100, 'Site name cannot exceed 100 characters'],
      default: 'Fashion Needles'
    },
    siteTagline: {
      type: String,
      maxlength: [200, 'Tagline cannot exceed 200 characters'],
      default: 'Your Fashion Destination'
    },

    // Logo Configuration
    logo: {
      light: {
        _id: String,
        url: {
          type: String,
          default: '/assets/logo-light.png'
        },
        blurDataURL: String
      },
      dark: {
        _id: String,
        url: {
          type: String,
          default: '/assets/logo-dark.png'
        },
        blurDataURL: String
      },
      favicon: {
        _id: String,
        url: {
          type: String,
          default: '/favicon.ico'
        }
      }
    },

    // Contact Information
    contact: {
      address: {
        type: String,
        required: true,
        default: 'First Floor, Lal Mandir Market, C-67, Main Rd, Shital Vihar, Khora Colony, Sector 57, Noida, Uttar Pradesh 201301'
      },
      email: {
        type: String,
        required: true,
        default: 'support@fashionneedles.com'
      },
      phone: {
        type: String,
        required: true,
        default: '085954 90062'
      },
      alternatePhone: {
        type: String,
        default: ''
      },
      whatsapp: {
        type: String,
        default: ''
      }
    },

    // Social Media Links
    socialMedia: {
      facebook: {
        type: String,
        default: ''
      },
      instagram: {
        type: String,
        default: ''
      },
      twitter: {
        type: String,
        default: ''
      },
      youtube: {
        type: String,
        default: ''
      },
      linkedin: {
        type: String,
        default: ''
      },
      pinterest: {
        type: String,
        default: ''
      }
    },

    // Business Information
    business: {
      gstNumber: {
        type: String,
        default: ''
      },
      panNumber: {
        type: String,
        default: ''
      },
      businessHours: {
        mondayToFriday: {
          type: String,
          default: '9:00 AM - 8:00 PM'
        },
        saturday: {
          type: String,
          default: '10:00 AM - 6:00 PM'
        },
        sunday: {
          type: String,
          default: 'Closed'
        }
      },
      timezone: {
        type: String,
        default: 'IST'
      }
    },

    // SEO & Meta Information
    seo: {
      metaTitle: {
        type: String,
        maxlength: [60, 'Meta title cannot exceed 60 characters'],
        default: 'Fashion Needles - Premium Fashion Store'
      },
      metaDescription: {
        type: String,
        maxlength: [160, 'Meta description cannot exceed 160 characters'],
        default: 'Discover the latest fashion trends at Fashion Needles. Shop from our exclusive collection of clothing, accessories and more.'
      },
      keywords: [{
        type: String
      }],
      googleAnalyticsId: {
        type: String,
        default: ''
      },
      facebookPixelId: {
        type: String,
        default: ''
      }
    },

    // Footer Configuration
    footer: {
      description: {
        type: String,
        maxlength: [500, 'Footer description cannot exceed 500 characters'],
        default: 'Fashion Needles is your one-stop destination for trendy and affordable fashion. We offer premium quality products with excellent customer service.'
      },
      copyrightText: {
        type: String,
        default: '© 2024 Fashion Needles. All rights reserved.'
      },
      quickLinks: [{
        title: String,
        url: String
      }]
    },

    // Theme Configuration
    theme: {
      primaryColor: {
        type: String,
        default: '#FF6B6B'
      },
      secondaryColor: {
        type: String,
        default: '#4ECDC4'
      },
      fontFamily: {
        type: String,
        default: 'Inter, sans-serif'
      }
    },

    // Status
    status: {
      type: String,
      enum: ['active', 'maintenance', 'coming_soon'],
      default: 'active'
    },

    // Maintenance Mode
    maintenance: {
      isActive: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: 'We are currently performing maintenance. We will be back soon!'
      },
      expectedEnd: Date
    }
  },
  {
    timestamps: true
  }
);

// Create a single document for website details
WebsiteDetailsSchema.statics.getWebsiteDetails = async function() {
  let details = await this.findOne();
  if (!details) {
    details = await this.create({});
  }
  return details;
};

module.exports = mongoose.models.WebsiteDetails || mongoose.model('WebsiteDetails', WebsiteDetailsSchema);