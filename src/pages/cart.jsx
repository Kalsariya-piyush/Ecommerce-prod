import Cart from '@/components/pages/Cart';
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { getCart } from './api/cart';

const CartPage = () => {
  const { currentUser, isLoadingUser } = useAuth();
  const router = useRouter();
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoadingCart, setIsCartLoading] = useState(true);

  useEffect(() => {
    if (!currentUser && !isLoadingUser) {
      router.push('/login');
    }
  }, [currentUser, isLoadingUser]);

  const getCartHandler = async () => {
    setIsCartLoading(true);
    const res = await getCart();
    setCartProducts(res);
    setIsCartLoading(false);
  };

  useEffect(() => {
    getCartHandler();
  }, []);

  return (
    <Layout>
      <div className="h-auto bg-transparent pt-6">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        {(isLoadingUser || isLoadingCart) && (
          <div className='mx-auto max-w-5xl justify-betwween px-6 md:flex md:space-x-6 xl:px-0"'>
            <div className="mb-6 justify-between w-full rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start animate-pulse">
              <div className="w-full rounded-lg sm:w-40 h-40 bg-gray-300"></div>
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900 bg-gray-300 h-6 w-3/4 mb-2"></h2>
                  <p className="mt-1 text-xs text-gray-700 bg-gray-200 h-4 w-1/2"></p>
                </div>
                <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-y-6">
                  <div className="flex items-center justify-end border-gray-100">
                    <div className="rounded-l bg-gray-100 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50 h-8 w-8"></div>
                    <div className="flex h-8 w-8 items-center justify-center border text-center text-xs outline-none bg-gray-100"></div>
                    <div className="rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 h-8 w-8"></div>
                  </div>
                  <div className="flex items-end justify-end">
                    <p className="text-sm bg-gray-100 h-6 w-16"></p>
                  </div>
                  <div className="inline-block whitespace-nowrap rounded-lg bg-gray-100 px-3 !py-2 text-base font-medium text-white w-40 h-10 pr-20"></div>
                </div>
              </div>
            </div>
            <div className="animate-pulse w-80 rounded-xl bg-white">
              <div className="h-12 bg-gray-300 mx-auto rounded-lg mt-20 w-11/12"></div>
            </div>
          </div>
        )}
        {currentUser && !isLoadingUser && !isLoadingCart && (
          <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
