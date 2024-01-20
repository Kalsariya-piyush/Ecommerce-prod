import ProductForm from '@/components/pages/ProductForm';
import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';

const AddProduct = () => {
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
      {/* {isLoadingUser && <PageInitialLoader />} */}

      {/* {currentUser && !isLoadingUser && <ProductForm />} */}
      <ProductForm />
    </Layout>
  );
};

export default AddProduct;

export const getServerSideProps = IsAuthenticated;
