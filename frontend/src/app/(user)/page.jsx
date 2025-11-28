import { Suspense } from 'react';

// mui
import { Container } from '@mui/material';

// components
import Hero from 'src/components/_main/home/hero';
import Categories from 'src/components/_main/home/categories';
import BestSeller from 'src/components/_main/home/bestSeller';
import Banner from 'src/components/_main/home/banner';
import TopCollections from 'src/components/_main/home/topCollections';
import Brands from 'src/components/_main/home/brands';
import Slider from 'src/components/_main/home/slider';
import WhyUs from 'src/components/_main/home/whyUs';
import TopBanners from 'src/components/_main/home/topBanners';

export default async function IndexPage() {
  return (
    <>
  
    <Container fixed>
      <Slider />
        <Suspense>
          <Brands />
        </Suspense>
      </Container>
      <Hero />
      <Container  >
      <Categories />
        <Suspense>
          <TopCollections />
        </Suspense>
        <TopBanners />
      </Container>
      <Container fixed>
        <Suspense>
          <BestSeller />
        </Suspense>
        <Banner />
        <WhyUs />
      </Container>
    </>
  );
}
