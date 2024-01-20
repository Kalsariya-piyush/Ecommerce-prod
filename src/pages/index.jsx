import { memo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Features from '@/components/HomePage/Features';
import Hero from '@/components/HomePage/Hero';
import Layout from '../layouts/Layout';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
};

export default memo(Index);
