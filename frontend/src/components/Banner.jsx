'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Switch,
  Typography,
  Container,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Chip
} from '@mui/material';
import { Delete, Edit, Add, Close, CloudUpload } from '@mui/icons-material';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/navigation';
import * as api from 'src/services';
import toast from 'react-hot-toast';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function BannersPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const { data: banners, refetch, isLoading } = useQuery('banners', () => api.getBanners());
  
  const queryClient = useQueryClient();

  const BannerSchema = Yup.object().shape({
    name: Yup.string().required('Banner name is required'),
    redirectUrl: Yup.string().url('Must be a valid URL'),
    displayOrder: Yup.number().min(0, 'Must be positive').default(0),
    isActive: Yup.boolean().default(true)
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      redirectUrl: '',
      displayOrder: 0,
      isActive: true,
      image: null
    },
    validationSchema: BannerSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (editingBanner) {
          await updateMutation.mutateAsync({
            id: editingBanner._id,
            ...values
          });
        } else {
          await createMutation.mutateAsync(values);
        }
        resetForm();
        setOpenDialog(false);
        setEditingBanner(null);
        setSelectedFile(null);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
  });

  const createMutation = useMutation(api.createBanner, {
    onSuccess: () => {
      queryClient.invalidateQueries('banners');
      toast.success('Banner created successfully');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Error creating banner');
    }
  });

  const updateMutation = useMutation(api.updateBanner, {
    onSuccess: () => {
      queryClient.invalidateQueries('banners');
      toast.success('Banner updated successfully');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Error updating banner');
    }
  });

  const deleteMutation = useMutation(api.deleteBanner, {
    onSuccess: () => {
      queryClient.invalidateQueries('banners');
      toast.success('Banner deleted successfully');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Error deleting banner');
    }
  });

  const handleStatusToggle = (banner) => {
    updateMutation.mutate({
      id: banner._id,
      isActive: !banner.isActive
    });
  };

  const handleDelete = (bannerId) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      deleteMutation.mutate(bannerId);
    }
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    formik.setValues({
      name: banner.name,
      redirectUrl: banner.redirectUrl || '',
      displayOrder: banner.displayOrder || 0,
      isActive: banner.isActive,
      image: banner.image
    });
    setOpenDialog(true);
  };

  const handleAddNew = () => {
    setEditingBanner(null);
    formik.resetForm();
    setSelectedFile(null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingBanner(null);
    setSelectedFile(null);
    formik.resetForm();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      handleImageUpload(file);
    }
  };

  const handleImageUpload = async (file) => {
    setUploadProgress(0);
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'fezrhfpj');
    
    try {
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/docjvlprh/image/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          }
        }
      );
      
      formik.setFieldValue('image', {
        url: data.secure_url,
        public_id: data.public_id
      });
      
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Image upload failed');
    }
  };

  const { errors, touched, values, handleSubmit, getFieldProps, setFieldValue } = formik;

  if (isLoading) {
    return (
      <Container>
        <Typography variant="h4" sx={{ mb: 4 }}>Loading banners...</Typography>
      </Container>
    );
  }

  return (
    <Container  >
      {/* Header */}
      <Stack direction="row" paddingTop={2} justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4">Banners</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddNew}
        >
          Add New Banner
        </Button>
      </Stack>

      {/* Banners Grid */}
      <Grid container spacing={3}>
        {Array.isArray(banners?.data?.data) && banners.data.data.map((banner) => (
          <Grid item xs={12} md={6} lg={4} key={banner._id}>
            <Card sx={{ 
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6
              }
            }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={banner.image?.url}
                  alt={banner.name}
                  sx={{ objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                  <Chip 
                    label={banner.isActive ? 'Active' : 'Inactive'} 
                    color={banner.isActive ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" noWrap sx={{ mb: 1 }}>
                  {banner.name}
                </Typography>
                
                {banner.redirectUrl && (
                  <Typography variant="body2" color="text.secondary" noWrap sx={{ mb: 1 }}>
                    Link: {banner.redirectUrl}
                  </Typography>
                )}
                
                <Typography variant="body2" color="text.secondary">
                  Order: {banner.displayOrder}
                </Typography>

                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Switch
                      checked={banner.isActive}
                      onChange={() => handleStatusToggle(banner)}
                      color="success"
                    />
                    <Typography variant="body2">
                      {banner.isActive ? 'Active' : 'Inactive'}
                    </Typography>
                  </Box>
                  
                  <Box>
                    <IconButton 
                      color="primary"
                      onClick={() => handleEdit(banner)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton 
                      color="error"
                      onClick={() => handleDelete(banner._id)}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Empty State */}
      {!banners?.data?.data?.length && (
        <Card sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            No banners found. Create your first banner!
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAddNew}
          >
            Add Banner
          </Button>
        </Card>
      )}

      {/* Add/Edit Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5">
              {editingBanner ? 'Edit Banner' : 'Add New Banner'}
            </Typography>
            <IconButton onClick={handleCloseDialog}>
              <Close />
            </IconButton>
          </Stack>
        </DialogTitle>

        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <DialogContent>
              <Stack spacing={3}>
                {/* Banner Name */}
                <TextField
                  fullWidth
                  label="Banner Name"
                  {...getFieldProps('name')}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />

                {/* Redirect URL */}
                <TextField
                  fullWidth
                  label="Redirect URL (Optional)"
                  {...getFieldProps('redirectUrl')}
                  error={Boolean(touched.redirectUrl && errors.redirectUrl)}
                  helperText={touched.redirectUrl && errors.redirectUrl}
                  placeholder="https://example.com"
                />

                {/* Display Order */}
                <TextField
                  fullWidth
                  type="number"
                  label="Display Order"
                  {...getFieldProps('displayOrder')}
                  error={Boolean(touched.displayOrder && errors.displayOrder)}
                  helperText={touched.displayOrder && errors.displayOrder}
                />

                {/* Image Upload */}
                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Banner Image {!editingBanner && '*'}
                  </Typography>
                  
                  {values.image?.url ? (
                    <Box sx={{ position: 'relative', mb: 2 }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={values.image.url}
                        alt="Banner preview"
                        sx={{ 
                          borderRadius: 1,
                          objectFit: 'cover'
                        }}
                      />
                      <IconButton
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: 'rgba(255,255,255,0.8)'
                        }}
                        onClick={() => setFieldValue('image', null)}
                      >
                        <Close />
                      </IconButton>
                    </Box>
                  ) : (
                    <Card 
                      sx={{ 
                        border: '2px dashed',
                        borderColor: 'grey.300',
                        p: 3,
                        textAlign: 'center',
                        cursor: 'pointer',
                        '&:hover': {
                          borderColor: 'primary.main',
                          backgroundColor: 'action.hover'
                        }
                      }}
                      onClick={() => document.getElementById('banner-upload').click()}
                    >
                      <CloudUpload sx={{ fontSize: 48, color: 'grey.400', mb: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Click to upload banner image
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Recommended: 1200 × 400px
                      </Typography>
                      {uploadProgress > 0 && uploadProgress < 100 && (
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          Uploading: {uploadProgress}%
                        </Typography>
                      )}
                    </Card>
                  )}
                  
                  <input
                    id="banner-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                  />
                  
                  {!values.image && touched.image && errors.image && (
                    <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                      {errors.image}
                    </Typography>
                  )}
                </Box>

                {/* Active Status */}
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.isActive}
                      onChange={(e) => setFieldValue('isActive', e.target.checked)}
                      color="success"
                    />
                  }
                  label="Active Banner"
                />
              </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 3 }}>
              <Button onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="contained"
                disabled={!values.image && !editingBanner}
              >
                {editingBanner ? 'Update Banner' : 'Create Banner'}
              </Button>
            </DialogActions>
          </Form>
        </FormikProvider>
      </Dialog>
    </Container>
  );
}