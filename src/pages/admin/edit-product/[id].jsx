import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/context/auth';
import ProductForm from '../../../components/pages/ProductForm';
import Layout from '../../../layouts/Layout';

const Admin = () => {
  const router = useRouter();
  const { currentUser, isLoadingUser } = useAuth();

  useEffect(() => {
    if (!isLoadingUser) {
      if (currentUser?.role !== 'admin') {
        router.push('/');
      }
    }
  }, [currentUser, isLoadingUser]);

  return <Layout>{router.query.id && <ProductForm />}</Layout>;
};

export default Admin;
