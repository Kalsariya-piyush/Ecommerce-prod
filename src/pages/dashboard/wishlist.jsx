import ProductForm from '@/components/pages/ProductForm';
import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const Wishlist = () => {
  // const router = useRouter();

  // const { currentUser, isLoadingUser } = useAuth();

  // useEffect(() => {
  //   if (!isLoadingUser) {
  //     if (!currentUser) {
  //       router.push('/login');
  //     }

  //     if (currentUser?.role !== 'admin') {
  //       router.push('/');
  //     }
  //   }
  // }, [currentUser, isLoadingUser]);

  return (
    <Layout>
      <ProductForm />
    </Layout>
  );
};

export default Wishlist;

export const getServerSideProps = IsAuthenticated;
