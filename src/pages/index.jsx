import { memo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Features from '@/components/HomePage/Features';
import Hero from '@/components/HomePage/Hero';
import Layout from '../layouts/Layout';
import Banner from '@/components/HomePage/Banner';
import MacbookPro from '@/components/HomePage/MacbookPro';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Banner />
      <MacbookPro />

    </Layout>
  );
};

export default memo(Index);
