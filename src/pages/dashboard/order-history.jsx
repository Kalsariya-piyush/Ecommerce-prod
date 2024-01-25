import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const OrderHistory = () => {

  return (
    <Layout>
      Order History
    </Layout>
  );
};

export default OrderHistory;

export const getServerSideProps = IsAuthenticated;
