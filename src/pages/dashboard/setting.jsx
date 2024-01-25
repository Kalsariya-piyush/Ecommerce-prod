import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const Setting = () => {
  return (
    <Layout>
      Setting
    </Layout>
  );
};

export default Setting;

export const getServerSideProps = IsAuthenticated;
