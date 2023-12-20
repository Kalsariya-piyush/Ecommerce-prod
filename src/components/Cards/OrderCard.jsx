import moment from 'moment';
import OrderProductCard from './OrderProductCard';

const OrderCard = ({ order }) => {
  const { _id, products, totalPrice, orderDate, pending } = order;

  return (
    <div className="border border-zinc-200 overflow-hidden grid grid-cols-7 w-full mb-5 rounded-md">
      <div className="w-full flex flex-col gap-5 p-8 text-zinc-500 col-span-2 h-full border-r border-zinc-200 bg-neutral-50">
        <div className="text-sm font-semibold">
          <p>Order ID</p>
          <p className="text-zinc-900">#{_id}</p>
        </div>
        <div className="text-sm font-semibold">
          <p>Date</p>
          <p className="text-zinc-900">
            {moment(orderDate).format('DD MMM, yyyy')}
          </p>
        </div>
        <div className="text-sm font-semibold">
          <p>Total Amount</p>
          <p className="text-zinc-900">${totalPrice}</p>
        </div>
        <div className="text-sm font-semibold">
          <p>Order Status</p>
          <div className="flex justify-start items-center gap-1 text-zinc-900">
            <p
              className={`w-3 h-3 ${
                pending ? 'bg-red-700' : 'bg-green-700'
              } rounded-full`}
            ></p>
            {pending ? 'Pending' : 'Completed'}
          </div>
        </div>
        <div className="text-sm font-semibold">
          <p>Payment Status</p>
          <div className="flex justify-start items-center gap-1 text-zinc-900">
            <p
              className={`w-3 h-3 ${
                pending ? 'bg-red-700' : 'bg-green-700'
              } rounded-full`}
            ></p>
            {pending ? 'Pending' : 'Completed'}
          </div>
        </div>
      </div>
      <div className="w-full p-8 h-full col-span-5 bg-white">
        {products &&
          products.map((prod) => (
            <OrderProductCard
              key={prod._id}
              qty={prod.quantity}
              product={prod.product}
            />
          ))}
        {/* <div className="">
            <button type="button" className="">
              View Order
            </button>

            <button type="button" className="">
              View Invoice
            </button>
          </div> */}
      </div>
    </div>
  );
};

export default OrderCard;
