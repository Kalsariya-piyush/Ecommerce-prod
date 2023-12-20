import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const Profile = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Under contruction... </h1>
    </Layout>
  );
};

export default Profile;

export const getServerSideProps = IsAuthenticated;
