import ProductForm from '@/components/pages/ProductForm';
import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const AddProduct = () => {
  return (
    <Layout>
      <ProductForm />
    </Layout>
  );
};

export default AddProduct;

export const getServerSideProps = IsAuthenticated;
