import Link from 'next/link';

const OrderProductCard = ({ product, qty }) => {
  const { imageUrl, title, price, description, _id } = product;

  return (
    <ul className="flex !max-h-[370px] overflow-y-auto flex-col">
      <li className="flex bg-zinc-50 max-w-2xl mb-4 gap-5">
        <div className="w-28 h-28 rounded-md overflow-hidden">
          <img src={`${imageUrl}`} alt="" />
        </div>
        <div className="w-full py-1 max-w-lg flex justify-between flex-col">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-base text-zinc-900 font-semibold">{title}</p>
              <p className="text-sm text-zinc-500 font-medium">{description}</p>
            </div>

            <div className="text-base pr-4 text-zinc-900 font-semibold">
              <p>${price}</p>
            </div>
          </div>

          <div className="text-sm flex justify-between items-center text-zinc-500 font-medium">
            <div>
              <Link
                href={`/products/${_id}`}
                className="hover:text-zinc-600 duration-150"
              >
                View Product
              </Link>

              {/* <span className="px-2"> | </span>

              <a href="#" title="" className="hover:text-zinc-600 duration-150">
                Similar Product
              </a> */}
            </div>
            <p className="pr-4">X {qty}</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default OrderProductCard;
