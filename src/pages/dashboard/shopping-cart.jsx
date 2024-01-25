import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const ShoppingCart = () => {
  return (
    <Layout>
      shopping cart
    </Layout>
  );
};

export default ShoppingCart;

export const getServerSideProps = IsAuthenticated;
