import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const BrowsingHistory = () => {
  return (
    <Layout>
      Browsing History
    </Layout>
  );
};

export default BrowsingHistory;

export const getServerSideProps = IsAuthenticated;
