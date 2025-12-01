// pages/contact.js
"use client"; // Ensure this directive is at the top for client-side rendering

import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, TextField, Button, Box, Alert, Snackbar } from '@mui/material';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 10 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 5, color: '#d32f2f' }}>
        Contact Sohkin Flower Gifts
      </Typography>
      
      <Typography variant="h6" component="p" align="center" sx={{ mb: 4, color: '#666', maxWidth: 600, mx: 'auto' }}>
        We're here to help you create beautiful moments with our fresh flowers, delicious cakes, and exquisite gifts. 
        Reach out to us for any inquiries or custom orders!
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Information Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 6, borderRadius: 3, p: 2, height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'medium', color: '#d32f2f' }}>
                Get In Touch
              </Typography>
              
              {/* Phone */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaPhone color="#d32f2f" size={20} style={{ marginRight: '15px' }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    8369132009
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Call us for immediate assistance
                  </Typography>
                </Box>
              </Box>

              {/* WhatsApp */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaWhatsapp color="#25D366" size={20} style={{ marginRight: '15px' }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    8369132009
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    WhatsApp for quick queries
                  </Typography>
                </Box>
              </Box>

              {/* Email */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaEnvelope color="#d32f2f" size={20} style={{ marginRight: '15px' }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    sohkinflowergifts@gmail.com
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Primary email for orders & support
                  </Typography>
                </Box>
              </Box>

              {/* Alternate Email */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FaEnvelope color="#d32f2f" size={20} style={{ marginRight: '15px' }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    rickyreigns713422@gmail.com
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Alternate contact email
                  </Typography>
                </Box>
              </Box>

              {/* Address */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <FaMapMarkerAlt color="#d32f2f" size={20} style={{ marginRight: '15px', marginTop: '2px' }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    Store Address
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Vill- CHOWGHURIA, P.O- KHALISH PUR<br />
                    P.S- KALNA, DIST- PURBA BARDHAMAN<br />
                    WEST BENGAL, 713422<br />
                    India
                  </Typography>
                </Box>
              </Box>

              {/* Business Hours */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <FaClock color="#d32f2f" size={20} style={{ marginRight: '15px', marginTop: '2px' }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    Business Hours
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monday - Sunday: 8:00 AM - 9:00 PM<br />
                    Same-day delivery available
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Form Card */}
        <Grid item xs={12} md={8}>
          <Card sx={{ boxShadow: 6, borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'medium', color: '#d32f2f' }}>
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="name"
                      label="Your Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={formData.name}
                      onChange={handleChange}
                      sx={{ 
                        borderRadius: 2,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="email"
                      label="Your Email"
                      variant="outlined"
                      fullWidth
                      required
                      value={formData.email}
                      onChange={handleChange}
                      sx={{ 
                        borderRadius: 2,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="phone"
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{ 
                        borderRadius: 2,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="subject"
                      label="Subject"
                      variant="outlined"
                      fullWidth
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      sx={{ 
                        borderRadius: 2,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={5}
                      fullWidth
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements... (e.g., Flower bouquet for anniversary, Birthday cake, Gift hampers, etc.)"
                      sx={{ 
                        borderRadius: 2,
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        px: 6,
                        py: 1.5,
                        fontSize: '1rem',
                        backgroundColor: '#d32f2f',
                        borderRadius: 3,
                        boxShadow: 3,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#b71c1c',
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>

          {/* Services Offered */}
          <Card sx={{ boxShadow: 6, borderRadius: 3, p: 2, mt: 3, backgroundColor: '#fff8e1' }}>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'medium', color: '#d32f2f' }}>
                Our Products & Services
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>• Flower Bouquets</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>• Fresh Cakes</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>• Fruit Hampers</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>• Chocolate Bouquets</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>• Indoor Plants</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>• Celebration Cards</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>• Balloon Bouquets</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>• Balloon Decoration</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Embedded Google Map */}
      <Box sx={{ mt: 5, borderRadius: 3, overflow: 'hidden', boxShadow: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'medium', color: '#d32f2f' }}>
          Find Us
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.123456789012!2d88.12345678901234!3d23.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjQiTiA4OMKwMDcnNDEuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sohkin Flower Gifts Location"
        ></iframe>
      </Box>

      {/* Success Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Thank you for your message! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;