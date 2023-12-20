import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '@/context/auth';
import Layout from '../../layouts/Layout';
import {
  addToCart,
  deleteProduct,
  getProductByIdHandler,
} from '../api/products';

const Pages = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const [sucessStatus, setSucessStatus] = useState(false);
  const { currentUser, isLoadingUser } = useAuth();
  const [isLoadingProd, setIsLoadingProd] = useState(true);

  // get Product
  const productHandler = async () => {
    if (router.query.id) {
      try {
        const productId = router.query.id.toString();
        const data = await getProductByIdHandler(productId);
        setProduct(data.products);
        setIsLoadingProd(false);
      } catch (error) {
        toast.error('Failed to load product');
        setIsLoadingProd(false);
      }
    }
  };

  useEffect(() => {
    if (router.query.id) productHandler();
  }, [router.query.id]);

  // add to cart product

  const addToCartHandler = async (pid) => {
    try {
      const res = await addToCart(pid);
      if (res) {
        setSucessStatus(true);
      }
    } catch (error) {
      if (error) {
        toast.error('Failed please try again');
      }
    }
  };

  const deleteProductHandler = async (pid) => {
    if (pid) {
      try {
        const res = await deleteProduct(pid);
        if (res) {
          toast.success('Product successfully deleted');
          router.push('/products');
          setIsOpenModal(false);
        }
      } catch (error) {
        toast.error('Failed please try again');
      }
    }
  };

  useEffect(() => {
    if (sucessStatus) {
      setTimeout(() => {
        setSucessStatus(false);
      }, 3000);
    }
  }, [sucessStatus]);

  return (
    <Layout>
      {(isLoadingUser || isLoadingProd) && (
        <div role="status" className="overflow-hidden">
          <svg
            aria-hidden="true"
            className="inline w-full max-w-full mt-10 mx-auto h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {sucessStatus && (
        <div className="bg-gray-200 z-50 slideInRight fixed top-5 right-5 max-w-xs px-4 gap-2 rounded-md py-2 flex flex-col">
          <p className="text-base font-medium">
            Product successfully added in cart
          </p>
          <button
            onClick={() => router.push('/cart')}
            className="inline-block self-end whitespace-nowrap w-full rounded-lg bg-gray-900 px-3 !py-1 text-sm font-medium text-white hover:bg-black sm:w-auto"
          >
            View Cart
          </button>
        </div>
      )}
      {product &&
      product._id === router.query.id &&
      !isLoadingUser &&
      !isLoadingProd ? (
        <div className="group mx-auto mt-10 flex max-w-3xl justify-start gap-7 rounded-md bg-gray-400 p-2">
          <div className="h-auto w-64 overflow-hidden rounded-lg bg-gray-200">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <div>
              <h3 className="mt-4 text-sm font-medium text-gray-900">
                {product.title}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.description}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => addToCartHandler(product._id)}
                className="inline-block w-full rounded-lg bg-gray-900 px-3 !py-2 text-base font-medium text-white hover:bg-black sm:w-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>{!isLoadingProd && !isLoadingUser && <h2>Product not found</h2>}</>
      )}
    </Layout>
  );
};

export default Pages;
