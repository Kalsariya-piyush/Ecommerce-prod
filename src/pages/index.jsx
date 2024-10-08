import { memo } from 'react';

import Banner from '@/components/HomePage/Banner';
import Features from '@/components/HomePage/Features';
import Hero from '@/components/HomePage/Hero';
import MacbookPro from '@/components/HomePage/MacbookPro';
import Layout from '../layouts/Layout';

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
