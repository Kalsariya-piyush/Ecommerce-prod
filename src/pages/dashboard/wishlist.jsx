import ProductForm from '@/components/pages/ProductForm';
import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const Wishlist = () => {

  return (
    <Layout>
      Wishlist
    </Layout>
  );
};

export default Wishlist;

export const getServerSideProps = IsAuthenticated;
