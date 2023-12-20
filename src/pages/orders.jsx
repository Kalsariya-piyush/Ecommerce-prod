import OrdersSkelatonLoader from '@/components/Loaders/OrdersSkelatonLoader';
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Orders from '../components/pages/Orders';
import Layout from '../layouts/Layout';
import { getOrders } from './api/orders';

const OrdersPage = () => {
  const { currentUser, isLoadingUser } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState(null);
  const [isOrderLoading, setIsOrderLoading] = useState(true);

  useEffect(() => {
    if (!currentUser && !isLoadingUser) {
      router.push('/sign-in');
    }
  }, [currentUser, isLoadingUser]);

  const getAllOrders = async () => {
    const res = await getOrders();
    setOrders(res.orders);
    setIsOrderLoading(false);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <Layout>
      <div role="status" className="max-w-5xl bg-transparent mx-auto px-4 pb-4">
        <div className="w-full py-4 mx-auto text-center">
          <h2 className="text-2xl text-left font-bold text-gray-900 sm:text-3xl">
            Order Details
          </h2>
          <p className="text-base text-left text-gray-700 font-normal">
            Check the status of recent and old orders & discover more products
          </p>
        </div>
        {(isLoadingUser || isOrderLoading) && <OrdersSkelatonLoader num={2} />}
        {currentUser && (!isLoadingUser || !isOrderLoading) && (
          <Orders orders={orders} />
        )}
      </div>
    </Layout>
  );
};

export default OrdersPage;
