const CartItemCard = ({ product, deleteProductHander, quantity }) => {
  return (
    <>
      {product && product._id && (
        <div className="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src={product?.imageUrl}
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">
                {product?.title}
              </h2>
              <p className="mt-1 text-xs text-gray-700">
                {product?.description}
              </p>
            </div>
            <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-y-6 sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <button className="cursor-pointer disabled:cursor-not-allowed rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {' '}
                  -{' '}
                </button>
                <span className="flex h-8 w-8 items-center justify-center border bg-white text-center text-xs outline-none">
                  {quantity}
                </span>
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                  {' '}
                  +{' '}
                </span>
              </div>
              <div className="flex items-end justify-end pr-5">
                <p className="text-sm">
                  ${Number(quantity) * Number(product?.price)}
                </p>
              </div>
              <button
                onClick={() => deleteProductHander(product._id)}
                className="inline-block whitespace-nowrap w-full rounded-lg bg-gray-900 px-3 !py-2 text-base font-medium text-white hover:bg-black sm:w-auto"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItemCard;
