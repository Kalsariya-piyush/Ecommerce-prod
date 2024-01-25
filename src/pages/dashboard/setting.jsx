import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const Setting = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Under contruction... </h1>
    </Layout>
  );
};

export default Setting;

export const getServerSideProps = IsAuthenticated;
