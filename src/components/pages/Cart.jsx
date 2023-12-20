import { useState } from 'react';

import { deleteCartProduct, getCart } from '@/pages/api/cart';
import { createOrderHandler } from '@/pages/api/orders';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import CartItemCard from '../Cards/CartItemCard';

const Cart = ({ cartProducts, setCartProducts }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const getCartHandler = async () => {
    const res = await getCart();
    setCartProducts(res);
  };

  const deleteProductHander = async (prodId) => {
    deleteCartProduct(prodId)
      .then((res) => {
        if (res) {
          getCartHandler();
          toast.success(res.success);
        }
      })
      .catch((_error) => {
        toast.error('Failed try again');
      });
  };

  const handleOrder = () => {
    setIsLoading(true);
    createOrderHandler()
      .then(() => {
        router.push('/orders');
      })
      .catch((err) => {
        console.log('Error >>> ', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {cartProducts && cartProducts.length > 0 ? (
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg scroll md:w-2/3 max-h-[calc(100vh-300px)] overflow-y-auto">
            {cartProducts &&
              cartProducts.length > 0 &&
              cartProducts.map((product, index) => (
                <div key={index}>
                  <CartItemCard
                    quantity={product.quantity}
                    product={product.product}
                    deleteProductHander={() =>
                      deleteProductHander(product.product._id)
                    }
                  />
                </div>
              ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <button
              disabled={isLoading}
              onClick={() => handleOrder()}
              className="mt-5 block w-full rounded-lg bg-gray-900 px-3 !py-2 text-base font-medium text-white hover:bg-black"
            >
              {isLoading ? 'Loading...' : 'Order Now !'}
            </button>
          </div>
        </div>
      ) : (
        <h1 className="py-8 text-center text-xl font-semibold">
          Your Cart Is Empty
        </h1>
      )}
    </>
  );
};

export default Cart;
