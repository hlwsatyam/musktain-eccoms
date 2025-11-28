'use client';
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';

// mui
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import {
  Card,
  Stack,
  TextField,
  Typography,
  Box,
  Select,
  FormControl,
  FormHelperText,
  Grid,
  Skeleton,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
  Snackbar,
  Chip,
  IconButton
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
  Pinterest,
  Delete
} from '@mui/icons-material';

// components
import UploadSingleFile from 'src/components/upload/UploadSingleFile';

 

// yup
import * as Yup from 'yup';

// axios
import axios from 'axios';

// toast
import toast from 'react-hot-toast';

// formik
import { Form, FormikProvider, useFormik } from 'formik';

// api
import * as api from 'src/services';

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  lineHeight: 2.5
}));

const TabPanel = ({ children, value, index, ...other }) => (
  <div role="tabpanel" hidden={value !== index} {...other}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const SOCIAL_PLATFORMS = [
  { key: 'facebook', label: 'Facebook', icon: Facebook },
  { key: 'instagram', label: 'Instagram', icon: Instagram },
  { key: 'twitter', label: 'Twitter', icon: Twitter },
  { key: 'youtube', label: 'YouTube', icon: YouTube },
  { key: 'linkedin', label: 'LinkedIn', icon: LinkedIn },
  { key: 'pinterest', label: 'Pinterest', icon: Pinterest }
];

export default function WebsiteDetailsForm() {
 
 
  const [tabValue, setTabValue] = useState(0);
  const [uploadState, setUploadState] = useState({
    loading: false,
    currentUpload: null // 'logoLight', 'logoDark', 'favicon'
  });

  // Fetch existing website details
  const { data: websiteData,  refetch,  isLoading: isLoadingData } = useQuery(
    'website-details',
    () => api.getWebsiteDetails(),
    {
      refetchOnWindowFocus: false
    }
  );
console.log(websiteData)
  const currentWebsite = websiteData?.data?.data;

  // Mutation for saving website details
  const { mutate: saveWebsite, isLoading: isSaving } = useMutation(
    api.updateWebsiteDetails,
    {
      onSuccess: (data) => {
        toast.success(data.message || 'Website details saved successfully!');
      refetch()
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || 'Error saving website details');
      }
    }
  );

  // Mutation for deleting uploaded files
  const { mutate: deleteFile } = useMutation(api.singleDeleteFile, {
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Error deleting file');
    }
  });

  // Validation Schema
  const WebsiteSchema = Yup.object().shape({
    siteName: Yup.string().required('Site name is required'),
    siteTagline: Yup.string().max(200, 'Tagline too long'),
    contact: Yup.object().shape({
      address: Yup.string().required('Address is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone number is required')
    }),
    seo: Yup.object().shape({
      metaTitle: Yup.string().max(60, 'Max 60 characters'),
      metaDescription: Yup.string().max(160, 'Max 160 characters')
    })
  });

  // Formik initialization
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      siteName: currentWebsite?.siteName || 'Fashion Needles',
      siteTagline: currentWebsite?.siteTagline || 'Your Fashion Destination',
      logo: currentWebsite?.logo || {
        light: { _id: '', url: '', blurDataURL: '' },
        dark: { _id: '', url: '', blurDataURL: '' },
        favicon: { _id: '', url: '' }
      },
      contact: currentWebsite?.contact || {
        address: 'First Floor, Lal Mandir Market, C-67, Main Rd, Shital Vihar, Khora Colony, Sector 57, Noida, Uttar Pradesh 201301',
        email: 'support@fashionneedles.com',
        phone: '085954 90062',
        alternatePhone: '',
        whatsapp: ''
      },
      socialMedia: currentWebsite?.socialMedia || {
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: '',
        linkedin: '',
        pinterest: ''
      },
      business: currentWebsite?.business || {
        gstNumber: '',
        panNumber: '',
        businessHours: {
          mondayToFriday: '9:00 AM - 8:00 PM',
          saturday: '10:00 AM - 6:00 PM',
          sunday: 'Closed'
        },
        timezone: 'IST'
      },
      seo: currentWebsite?.seo || {
        metaTitle: 'Fashion Needles - Premium Fashion Store',
        metaDescription: 'Discover the latest fashion trends at Fashion Needles. Shop from our exclusive collection of clothing, accessories and more.',
        keywords: [],
        googleAnalyticsId: '',
        facebookPixelId: ''
      },
      footer: currentWebsite?.footer || {
        description: 'Fashion Needles is your one-stop destination for trendy and affordable fashion. We offer premium quality products with excellent customer service.',
        copyrightText: '© 2024 Fashion Needles. All rights reserved.',
        quickLinks: []
      },
      maintenance: currentWebsite?.maintenance || {
        isActive: false,
        message: 'We are currently performing maintenance. We will be back soon!',
        expectedEnd: ''
      }
    },
    validationSchema: WebsiteSchema,
    onSubmit: async (values) => {
      try {
        await saveWebsite(values);
      } catch (error) {
        console.error('Save error:', error);
      }
    }
  });

  const { errors, values, touched, handleSubmit, setFieldValue, getFieldProps } = formik;

  // Handle file upload to Cloudinary
  const handleFileUpload = async (acceptedFiles, logoType) => {
    setUploadState({ loading: true, currentUpload: logoType });
    
    const file = acceptedFiles[0];
    if (!file) return;

    // Create preview
    Object.assign(file, {
      preview: URL.createObjectURL(file)
    });

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'fezrhfpj'); // Your Cloudinary upload preset

    const config = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percentage = Math.floor((loaded * 100) / total);
        setUploadState({ loading: percentage, currentUpload: logoType });
      }
    };

    try {
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/docjvlprh/image/upload`,
        formData,
        config
      );

      // Update the specific logo in formik state
      const logoUpdate = {
        _id: data.public_id,
        url: data.secure_url,
        blurDataURL: '' // You can generate this if needed
      };

      setFieldValue(`logo.${logoType}`, logoUpdate);

      // Delete old file if exists
      const oldLogoId = values.logo[logoType]?._id;
      if (oldLogoId && oldLogoId !== data.public_id) {
        deleteFile(oldLogoId);
      }

      toast.success(`${logoType} logo uploaded successfully!`);
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(`Failed to upload ${logoType} logo`);
    } finally {
      setUploadState({ loading: false, currentUpload: null });
    }
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Add keyword to SEO
  const handleAddKeyword = (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) {
      const newKeyword = event.target.value.trim();
      const currentKeywords = values.seo.keywords || [];
      
      if (!currentKeywords.includes(newKeyword)) {
        setFieldValue('seo.keywords', [...currentKeywords, newKeyword]);
      }
      
      event.target.value = '';
      event.preventDefault();
    }
  };

  // Remove keyword from SEO
  const handleRemoveKeyword = (keywordToRemove) => {
    const updatedKeywords = values.seo.keywords.filter(keyword => keyword !== keywordToRemove);
    setFieldValue('seo.keywords', updatedKeywords);
  };

  if (isLoadingData && !currentWebsite) {
    return (
      <Box>
        <Skeleton variant="text" width={200} height={60} />
        <Skeleton variant="rectangular" width="100%" height={400} />
      </Box>
    );
  }

  return (
    <Box position="relative">
      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Card sx={{ p: 3, mb: 3 }}>
            <Typography variant="h4" gutterBottom>
              Website Settings
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage your website details, contact information, social media, and SEO settings.
            </Typography>
          </Card>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tab label="Basic Info" />
                  <Tab label="Logo & Branding" />
                  <Tab label="Contact Details" />
                  <Tab label="Social Media" />
                  <Tab label="SEO Settings" />
                  <Tab label="Maintenance" />
                </Tabs>

                {/* Basic Info Tab */}
                <TabPanel value={tabValue} index={0}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <LabelStyle>Site Name</LabelStyle>
                      <TextField
                        fullWidth
                        {...getFieldProps('siteName')}
                        error={Boolean(touched.siteName && errors.siteName)}
                        helperText={touched.siteName && errors.siteName}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <LabelStyle>Site Tagline</LabelStyle>
                      <TextField
                        fullWidth
                        {...getFieldProps('siteTagline')}
                        error={Boolean(touched.siteTagline && errors.siteTagline)}
                        helperText={touched.siteTagline && errors.siteTagline}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <LabelStyle>Footer Description</LabelStyle>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        {...getFieldProps('footer.description')}
                        error={Boolean(touched.footer?.description && errors.footer?.description)}
                        helperText={touched.footer?.description && errors.footer?.description}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <LabelStyle>Copyright Text</LabelStyle>
                      <TextField
                        fullWidth
                        {...getFieldProps('footer.copyrightText')}
                        error={Boolean(touched.footer?.copyrightText && errors.footer?.copyrightText)}
                        helperText={touched.footer?.copyrightText && errors.footer?.copyrightText}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>

                {/* Logo & Branding Tab */}
                <TabPanel value={tabValue} index={1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <LabelStyle>Light Logo</LabelStyle>
                      <UploadSingleFile
                        file={values.logo.light}
                        onDrop={(files) => handleFileUpload(files, 'light')}
                        loading={uploadState.currentUpload === 'light' ? uploadState.loading : false}
                        category
                        accept="image/*"
                      />
                      {values.logo.light?.url && (
                        <Box sx={{ mt: 1, textAlign: 'center' }}>
                          <Chip 
                            label="Current Light Logo" 
                            variant="outlined" 
                            size="small" 
                          />
                        </Box>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <LabelStyle>Dark Logo</LabelStyle>
                      <UploadSingleFile
                        file={values.logo.dark}
                        onDrop={(files) => handleFileUpload(files, 'dark')}
                        loading={uploadState.currentUpload === 'dark' ? uploadState.loading : false}
                        category
                        accept="image/*"
                      />
                      {values.logo.dark?.url && (
                        <Box sx={{ mt: 1, textAlign: 'center' }}>
                          <Chip 
                            label="Current Dark Logo" 
                            variant="outlined" 
                            size="small" 
                          />
                        </Box>
                      )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <LabelStyle>Favicon</LabelStyle>
                      <UploadSingleFile
                        file={values.logo.favicon}
                        onDrop={(files) => handleFileUpload(files, 'favicon')}
                        loading={uploadState.currentUpload === 'favicon' ? uploadState.loading : false}
                        category
                        accept="image/*"
                      />
                      {values.logo.favicon?.url && (
                        <Box sx={{ mt: 1, textAlign: 'center' }}>
                          <Chip 
                            label="Current Favicon" 
                            variant="outlined" 
                            size="small" 
                          />
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </TabPanel>

                {/* Contact Details Tab */}
                <TabPanel value={tabValue} index={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <LabelStyle>Address</LabelStyle>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        {...getFieldProps('contact.address')}
                        error={Boolean(touched.contact?.address && errors.contact?.address)}
                        helperText={touched.contact?.address && errors.contact?.address}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <LabelStyle>Email</LabelStyle>
                      <TextField
                        fullWidth
                        type="email"
                        {...getFieldProps('contact.email')}
                        error={Boolean(touched.contact?.email && errors.contact?.email)}
                        helperText={touched.contact?.email && errors.contact?.email}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <LabelStyle>Phone</LabelStyle>
                      <TextField
                        fullWidth
                        {...getFieldProps('contact.phone')}
                        error={Boolean(touched.contact?.phone && errors.contact?.phone)}
                        helperText={touched.contact?.phone && errors.contact?.phone}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <LabelStyle>WhatsApp Number</LabelStyle>
                      <TextField
                        fullWidth
                        {...getFieldProps('contact.whatsapp')}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <LabelStyle>Alternate Phone</LabelStyle>
                      <TextField
                        fullWidth
                        {...getFieldProps('contact.alternatePhone')}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>

                {/* Social Media Tab */}
                <TabPanel value={tabValue} index={3}>
                  <Grid container spacing={3}>
                    {SOCIAL_PLATFORMS.map((platform) => {
                      const IconComponent = platform.icon;
                      return (
                        <Grid item xs={12} md={6} key={platform.key}>
                          <LabelStyle>
                            <IconComponent sx={{ mr: 1, verticalAlign: 'middle' }} />
                            {platform.label}
                          </LabelStyle>
                          <TextField
                            fullWidth
                            placeholder={`https://${platform.key}.com/yourusername`}
                            {...getFieldProps(`socialMedia.${platform.key}`)}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </TabPanel>

                {/* SEO Settings Tab */}
                <TabPanel value={tabValue} index={4}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <LabelStyle>Meta Title</LabelStyle>
                      <TextField
                        fullWidth
                        {...getFieldProps('seo.metaTitle')}
                        helperText={`${values.seo.metaTitle?.length || 0}/60 characters`}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <LabelStyle>Meta Description</LabelStyle>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        {...getFieldProps('seo.metaDescription')}
                        helperText={`${values.seo.metaDescription?.length || 0}/160 characters`}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <LabelStyle>Keywords (Press Enter to add)</LabelStyle>
                      <TextField
                        fullWidth
                        placeholder="Type keyword and press Enter"
                        onKeyPress={handleAddKeyword}
                      />
                      <Box sx={{ mt: 2 }}>
                        {values.seo.keywords?.map((keyword, index) => (
                          <Chip
                            key={index}
                            label={keyword}
                            onDelete={() => handleRemoveKeyword(keyword)}
                            sx={{ m: 0.5 }}
                          />
                        ))}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <LabelStyle>Google Analytics ID</LabelStyle>
                      <TextField
                        fullWidth
                        {...getFieldProps('seo.googleAnalyticsId')}
                        placeholder="G-XXXXXXXXXX"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <LabelStyle>Facebook Pixel ID</LabelStyle>
                      <TextField
                        fullWidth
                        {...getFieldProps('seo.facebookPixelId')}
                        placeholder="XXXXXXXXXXXXXXX"
                      />
                    </Grid>
                  </Grid>
                </TabPanel>

                {/* Maintenance Tab */}
                <TabPanel value={tabValue} index={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.maintenance.isActive}
                            onChange={(e) => setFieldValue('maintenance.isActive', e.target.checked)}
                          />
                        }
                        label="Enable Maintenance Mode"
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        When enabled, visitors will see a maintenance message instead of your website.
                      </Typography>
                    </Grid>
                    {values.maintenance.isActive && (
                      <>
                        <Grid item xs={12}>
                          <LabelStyle>Maintenance Message</LabelStyle>
                          <TextField
                            fullWidth
                            multiline
                            rows={3}
                            {...getFieldProps('maintenance.message')}
                            placeholder="We're currently performing maintenance. We'll be back soon!"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <LabelStyle>Expected End Time</LabelStyle>
                          <TextField
                            fullWidth
                            type="datetime-local"
                            {...getFieldProps('maintenance.expectedEnd')}
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                      </>
                    )}
                  </Grid>
                </TabPanel>
              </Card>
            </Grid>
          </Grid>

          {/* Save Button */}
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              loading={isSaving}
              sx={{ minWidth: 200 }}
            >
              Save Website Details
            </LoadingButton>
          </Box>
        </Form>
      </FormikProvider>
    </Box>
  );
}