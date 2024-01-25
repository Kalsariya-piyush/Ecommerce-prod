import ProductForm from '@/components/pages/ProductForm';
import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const ShoppingCart = () => {
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

export default ShoppingCart;

export const getServerSideProps = IsAuthenticated;
