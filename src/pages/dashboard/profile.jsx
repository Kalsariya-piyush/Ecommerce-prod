import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const Profile = () => {
  return (
    <Layout>
      Profile
    </Layout>
  );
};

export default Profile;

export const getServerSideProps = IsAuthenticated;
