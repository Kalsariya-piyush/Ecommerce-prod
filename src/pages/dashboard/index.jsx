import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const Index = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Under contruction...</h1>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = IsAuthenticated;
