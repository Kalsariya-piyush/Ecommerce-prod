import OrderCard from '../Cards/OrderCard';

const Products = ({ orders }) => {
  return (
    <>
      {orders && orders.length > 0 ? (
        orders.map((order) => <OrderCard key={order._id} order={order} />)
      ) : (
        <h1 className="py-8 text-left text-xl font-semibold">
          There is no any orders
        </h1>
      )}
    </>
  );
};

export default Products;
