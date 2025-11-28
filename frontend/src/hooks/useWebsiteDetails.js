'use client'; // Add this at the very top
import { useState, useEffect, createContext, useContext } from 'react';
import { baseUrl } from 'src/helper/l1';

// Create Context
const WebsiteDetailsContext = createContext();

// Custom Hook
export const useWebsiteDetails = () => {
  const context = useContext(WebsiteDetailsContext);
  if (!context) {
    throw new Error('useWebsiteDetails must be used within WebsiteDetailsProvider');
  }
  return context;
};

// Provider Component
export const WebsiteDetailsProvider = ({ children }) => {
  const [websiteDetails, setWebsiteDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch website details
  const fetchWebsiteDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/website-details`);
      const result = await response.json();
      
      if (result.success) {
        setWebsiteDetails(result.data);
        setError(null);
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.error('Error fetching website details:', err);
      setError(err.message);
      // Fallback dummy data
      setWebsiteDetails(getFallbackData());
    } finally {
      setLoading(false);
    }
  };

  // Fallback data
  const getFallbackData = () => ({
    siteName: 'Fashion Needles',
    siteTagline: 'Your Fashion Destination',
    contact: {
      address: 'Firsx t Floor, Lal Mandir Market, C-67, Main Rd, Shital Vihar, Khora Colony, Sector 57, Noida, Uttar Pradesh 201301',
      email: 'support@fashionneedles.com',
      phone: '085954 90062'
    },
    logo: {
      light: { url: '/assets/logo-light.png' },
      dark: { url: '/assets/logo-dark.png' },
      favicon: { url: '/favicon.ico' }
    },
    socialMedia: {},
    business: {
      businessHours: {
        mondayToFriday: '9:00 AM - 8:00 PM',
        saturday: '10:00 AM - 6:00 PM',
        sunday: 'Closed'
      }
    },
    seo: {
      metaTitle: 'Fashion Needles - Premium Fashion Store',
      metaDescription: 'Discover the latest fashion trends at Fashion Needles.'
    },
    footer: {
      description: 'Fashion Needles is your one-stop destination for trendy and affordable fashion.',
      copyrightText: '© 2024 Fashion Needles. All rights reserved.'
    }
  });

  // Fetch data on component mount
  useEffect(() => {
    fetchWebsiteDetails();
  }, []);

  // Refresh function
  const refreshWebsiteDetails = () => {
    fetchWebsiteDetails();
  };

  const value = {
    websiteDetails,
    loading,
    error,
    refreshWebsiteDetails
  };

  return (
    <WebsiteDetailsContext.Provider value={value}>
      {children}
    </WebsiteDetailsContext.Provider>
  );
};