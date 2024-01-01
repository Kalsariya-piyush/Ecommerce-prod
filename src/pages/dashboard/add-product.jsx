import PageInitialLoader from '@/components/Loaders/PageLoader';
import ProductForm from '@/components/pages/ProductForm';
import { useAuth } from '@/context/auth';
import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AddProduct = () => {
  const router = useRouter();

  const { currentUser, isLoadingUser } = useAuth();

  useEffect(() => {
    if (!isLoadingUser) {
      if (!currentUser) {
        router.push('/login');
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

export const getServerSideProps = IsAuthenticated;
