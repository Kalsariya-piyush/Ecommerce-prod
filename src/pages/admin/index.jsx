import SearchIcon from '@/components/Icons/SearchIcon';
import { useAuth } from '@/context/auth';
import useDebounce from '@/hooks/debounce';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Layout from '../../layouts/Layout';
import {
  deleteProduct,
  getProductsHandler,
  searchProducts,
} from '../api/products';

const Admin = () => {
  const router = useRouter();
  const { currentUser, isLoadingUser } = useAuth();
  const [products, setProducts] = useState([]);
  const [isLoadingPords, setIsLoadingProds] = useState(true);
  const [isLoadProdsInTbl, setIsLoadProdsInTbl] = useState(true);
  const [seacrhValue, setSeacrhValue] = useState('');

  useEffect(() => {
    if (!currentUser && !isLoadingUser) {
      router.push('/sign-in');
    }
    if (currentUser?.role !== 'admin' && !isLoadingUser) {
      router.push('/');
    }
  }, [currentUser, isLoadingUser]);

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
    setIsLoadProdsInTbl(true);
    const prods = await searchProducts(0, '', title);
    setProducts(prods);
    setIsLoadProdsInTbl(false);
  };

  const debouncedValue = useDebounce(seacrhValue, 500);

  useEffect(() => {
    searchDataHandler(debouncedValue);
  }, [debouncedValue]);

  const deleteProductHandler = async (pid) => {
    if (pid) {
      try {
        const res = await deleteProduct(pid);
        if (res) {
          productsHandler();
          toast.success('Product successfully deleted');
        }
      } catch (error) {
        console.log('error ', error);
        toast.error('Failed please try again');
      }
    }
  };

  return (
    <Layout>
      {(isLoadingUser || isLoadingPords) && (
        <div className="h-screen w-screen">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-full max-w-7xl mt-10 mx-auto h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
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
        </div>
      )}

      <div className="flex justify-between items-center mt-7">
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
        <div>
          <Link
            href={'/add-product'}
            className="flex w-full !items-center justify-between rounded-lg bg-black !px-4 !py-2 text-base font-medium text-white disabled:cursor-not-allowed sm:w-auto"
          >
            <span>Add Product</span>
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-hidden max-h-[700px] overflow-y-auto mt-10 mb-10 shadow-md sm:rounded-lg">
        <table className="w-full text-sm overflow-x-hidden text-left text-gray-400">
          <thead className="text-xs uppercase  bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-hidden">
            {isLoadProdsInTbl && (
              <tr className="min-h-[50px] max-h-28 overflow-hidden w-screen">
                <td colSpan={4}>
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-full max-w-7xl mt-10 mx-auto h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
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
                </td>
              </tr>
            )}
            {!isLoadProdsInTbl &&
              !isLoadingUser &&
              products &&
              products.length > 0 &&
              products.map(({ imageUrl, price, title, _id }, index) => (
                <tr
                  key={index}
                  className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
                >
                  <td className="w-32 p-4">
                    <img src={`${imageUrl}`} alt="Apple Watch" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-white">
                    {title}
                  </td>
                  <td className="px-6 py-4 font-semibold text-white">
                    $ {price}
                  </td>
                  <td className="px-6 py-12 h-full flex justify-center items-center gap-5 w-20">
                    <button
                      onClick={() => deleteProductHandler(_id)}
                      className="font-medium text-red-500 hover:underline"
                    >
                      <RiDeleteBin6Line size={24} color="red" />
                    </button>
                    <Link
                      href={`/admin/edit-product/${_id}`}
                      className="font-medium text-red-500 hover:underline"
                    >
                      <FiEdit size={24} color="green" />
                    </Link>
                    <Link
                      href={`products/${_id}`}
                      className="font-medium hover:underline"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            {!isLoadingPords && !isLoadingUser && products.length <= 0 && (
              <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                <td
                  colSpan={4}
                  className="w-32 text-center font-semibold text-white p-4"
                >
                  No Products Found !
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Admin;
