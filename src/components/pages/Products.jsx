import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useAuth } from '@/context/auth';
import useDebounce from '@/hooks/debounce';
import Link from 'next/link';
import { toast } from 'react-toastify';
import {
  addToCart,
  getProductsHandler,
  searchProducts,
} from '../../pages/api/products';
import SearchIcon from '../Icons/SearchIcon';
import SkelatonLoader from '../Loaders/SkelatonLoader';
import Rating from '../Rating';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoadingPords, setIsLoadingProds] = useState(true);
  const [seacrhValue, setSeacrhValue] = useState('');
  const router = useRouter();
  const [sucessStatus, setSucessStatus] = useState(false);
  const { currentUser } = useAuth();

  const productsHandler = async () => {
    if (router.query.admin === 'admin') {
      const data = await getProductsHandler(true);
      setProducts(data.products);
      setIsLoadingProds(false);
    } else {
      const data = await getProductsHandler(false);
      setProducts(data.products);
      setIsLoadingProds(false);
    }
  };

  useEffect(() => {
    productsHandler();
  }, []);

  const searchDataHandler = async (title) => {
    setIsLoadingProds(true);
    const prods = await searchProducts(0, '', title);
    setProducts(prods);
    setIsLoadingProds(false);
  };

  const debouncedValue = useDebounce(seacrhValue, 500);

  useEffect(() => {
    searchDataHandler(debouncedValue);
  }, [debouncedValue]);

  const addToCartHandler = async (pid) => {
    if (currentUser && currentUser._id) {
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
    } else {
      router.push('sign-in');
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
    <>
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
      <div className="bg-transparent px-4">
        <div className="py-6 max-w-2xl lg:max-w-[980px] w-full xl:max-w-7xl !mx-auto">
          <div className="max-w-full flex justify-between flex-col sm:flex-row items-center mx-auto text-start">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our featured items
            </h2>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="focus:shadow-outline p-1 focus:outline-none"
                >
                  <SearchIcon className="w-5" />
                </button>
              </span>
              <input
                type="search"
                className="min-w-[300px] rounded-md bg-gray-900 py-2 pr-2 pl-10 text-sm text-white focus:outline-none"
                placeholder="Search..."
                autoComplete="off"
                onChange={(e) => {
                  setSeacrhValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-3 lg:grid-cols-4">
            {!isLoadingPords &&
              products &&
              products.length > 0 &&
              products.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-300 flex justify-between flex-col pb-2 group shadow-md rounded-md overflow-hidden"
                >
                  <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <Link href={`/products/${item._id}`}>
                      <img
                        className="object-cover h-[300px] w-full z-[99999] transition-all duration-300 group-hover:scale-105"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </Link>
                  </div>
                  <div className="flex !px-2 items-start justify-between mt-4 space-x-4">
                    <div className="flex justify-between flex-col gap-2 items-start">
                      <h3 className="text-xs text-ellipsis whitespace-nowrap font-bold text-gray-900 sm:text-sm md:text-base">
                        {item.title}
                      </h3>
                      <div className="flex relative pb-2 items-center mt-2.5 space-x-px">
                        <Rating rating={item.rating || 0} prodId={item._id} />
                      </div>
                    </div>

                    <div className="text-right flex justify-between items-end flex-col gap-2">
                      <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                        ${item.price}
                      </p>
                      <button
                        onClick={() => addToCartHandler(item._id)}
                        className="inline-block w-full rounded-lg bg-gray-900 p-1 sm:px-3 sm:!py-2 text-xs font-medium text-white hover:bg-black sm:w-auto"
                      >
                        <span className="sm:block hidden whitespace-nowrap">
                          Add to Cart
                        </span>
                        <span className="sm:hidden block">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {isLoadingPords && <SkelatonLoader num={8} />}
        </div>
      </div>
    </>
  );
};

export default Products;
