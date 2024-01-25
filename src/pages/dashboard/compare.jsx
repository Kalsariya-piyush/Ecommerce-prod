import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const Compare = () => {
  return (
    <Layout>
      Compare
    </Layout>
  );
};

export default Compare;

export const getServerSideProps = IsAuthenticated;
