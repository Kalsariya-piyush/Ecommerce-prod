import ProductForm from '@/components/pages/ProductForm';
import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const TrackOrder = () => {

  return (
    <Layout>
      Track Order
    </Layout>
  );
};

export default TrackOrder;

export const getServerSideProps = IsAuthenticated;
