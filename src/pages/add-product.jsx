import PageInitialLoader from '@/components/Loaders/PageLoader';
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ProductForm from '../components/pages/ProductForm';
import Layout from '../layouts/Layout';

const AddProduct = () => {
  const { currentUser, isLoadingUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoadingUser) {
      if (!currentUser) {
        router.push('/sign-in');
      }
      if (currentUser?.role !== 'admin') {
        router.push('/');
      }
    }
  }, [currentUser, isLoadingUser]);

  return (
    <Layout>
      {isLoadingUser && <PageInitialLoader />}
      {currentUser && !isLoadingUser && <ProductForm />}
    </Layout>
  );
};

export default AddProduct;
