import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const CardsAndAddress = () => {
  return (
    <Layout>
      Cards And Address
    </Layout>
  );
};

export default CardsAndAddress;

export const getServerSideProps = IsAuthenticated;
