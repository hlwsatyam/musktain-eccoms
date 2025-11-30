// 








import React from 'react';
import { Suspense } from 'react';
// mui
import { Box, Container, Card, Grid } from '@mui/material';
// Next
import { notFound } from 'next/navigation';
// components
import RelatedProductsCarousel from 'src/components/_main/product/relatedProducts';
import ProductDetailTabs from 'src/components/_main/product/tabs';
import ProductAdditionalInfo from 'src/components/_main/product/additionalInfo';
import ProductDetailsCarousel from 'src/components/carousels/details';
import ProductDetailsSumary from 'src/components/_main/product/summary';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import { baseUrl } from 'src/helper/l1';

// Force dynamic rendering due to cookie usage
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  try {
    const response = await fetch(baseUrl + '/api/products-slugs', {
      cache: 'force-cache'
    });
    const { data } = await response.json();
    return data?.map((product) => ({
      slug: product.slug
    })) || [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const response = await fetch(baseUrl + '/api/products/' + params.slug, {
      cache: 'force-cache'
    });
    
    if (!response.ok) {
      return {
        title: 'Product Not Found',
        description: 'Product not found'
      };
    }
    
    const { data } = await response.json();
    
    return {
      title: data.metaTitle || data.name,
      description: data.metaDescription,
      keywords: data.tags,
      openGraph: {
        images: data?.images?.map((v) => v.url) || []
      }
    };
  } catch (error) {
    return {
      title: 'Product',
      description: 'Product details'
    };
  }
}

export default async function ProductDetail({ params: { slug } }) {
  try {
    const response = await fetch(baseUrl + '/api/products/' + slug, {
      cache: 'no-store' // Dynamic data
    });
    
    if (!response.ok) {
      notFound();
    }
    
    const productData = await response.json();
    const { data, totalRating, totalReviews, brand, category } = productData;

    if (!data) {
      notFound();
    }

    return (
      <Box>
        <Container fixed>
          <HeaderBreadcrumbs
            heading="Product Details"
            links={[
              {
                name: 'Home',
                href: '/'
              },
              {
                name: 'Product',
                href: '/products'
              },
              {
                name: data?.name
              }
            ]}
          />
          <>
            <Card
              sx={{
                p: 2,
                mt: 4,
                borderWidth: 0,
                bgcolor: 'background.paper',
                mb: 3
              }}
            >
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={6}>
                  <ProductDetailsCarousel slug={slug} product={data} data={data} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <ProductDetailsSumary
                    id={data?._id}
                    product={data}
                    brand={brand}
                    category={category}
                    totalRating={totalRating}
                    totalReviews={totalReviews}
                  />
                </Grid>
              </Grid>
            </Card>
            <Suspense fallback={<></>}>
              <ProductDetailTabs
                product={{ description: data.description, _id: data._id }}
                totalRating={totalRating}
                totalReviews={totalReviews}
              />
            </Suspense>
            <ProductAdditionalInfo />
            <Suspense fallback={<></>}>
              <RelatedProductsCarousel id={data._id} category={category?.slug} />
            </Suspense>
          </>
        </Container>
      </Box>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    notFound();
  }
}