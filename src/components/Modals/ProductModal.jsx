import Link from 'next/link';
import { useRouter } from 'next/router';
import CloseIcon from '../Icons/CloseIcon';

const ProductModal = ({
  setIsOpenModal,
  setProduct,
  deleteProductHandler,
  addToCartHandler,
  product,
}) => {
  const router = useRouter();

  return (
    <div className="bg-black/30 w-full h-full fixed top-0 px-3 left-0">
      <div className="group max-w-sm relative top-6 sm:top-1/3 sm:pt-0 pt-10 sm:-translate-y-2/4 mx-auto zoomIn mt-10 flex sm:max-w-3xl justify-start sm:flex-row flex-col gap-7 rounded-md bg-gray-200 p-2">
        <button
          onClick={() => {
            setIsOpenModal(false);
            setProduct(null);
          }}
          className="absolute bg-gray-100 p-1 rounded-md top-3 right-3"
        >
          <CloseIcon />
        </button>
        <div className="h-auto sm:w-64 sm:mx-0 mx-auto sm:max-w-auto max-w-xs overflow-hidden rounded-lg bg-gray-200">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="flex min-w-sm sm:mx-0 mx-auto flex-col items-start justify-between">
          <div>
            <h3 className="mt-4 text-sm font-medium text-gray-900">
              {product.title}
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              $ {product.price}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            {router.asPath === '/admin' ? (
              <>
                <Link
                  href={`/admin/edit-product/${product._id}`}
                  className="inline-block w-full rounded-lg bg-gray-900 !py-2 px-3 text-base font-medium text-white hover:bg-black sm:w-auto"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProductHandler(product._id)}
                  className="inline-block w-full rounded-lg bg-gray-900 px-3 !py-2 text-base font-medium text-white hover:bg-black sm:w-auto"
                >
                  Delete
                </button>
              </>
            ) : (
              <button
                onClick={() => addToCartHandler(product._id)}
                className="inline-block w-full rounded-lg bg-gray-900 px-3 !py-2 text-base font-medium text-white hover:bg-black sm:w-auto"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
