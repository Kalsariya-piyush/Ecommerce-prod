import { memo, useState } from "react";
import RightArrowIcon from "@/components/Icons/RightArrowIcon";
import { Button } from "@mui/material";
import { InputField } from "@/components/InputField";
import CloseIcon from "@/components/Icons/CloseIcon";
import Image from "next/image";
import Layout from "@/layouts/Layout";
import LeftArrowIcon from "@/components/Icons/LeftArrowIcon";

let CartProducts = [
  {
    id: 1,
    img: "/assets/shopingcart/tv.png",
    text: "4K UHD LED Smart TV with Chromecast Built-in",
    realPrice: "$99",
    price: "$70",
    quantity: 1,
    subTotal: "$70",
  },
  {
    id: 2,
    img: "/assets/shopingcart/headphone.png",
    text: "Wired Over-Ear Gaming Headphones with USB",
    price: "$250",
    quantity: 3,
    subTotal: "$250",
  },
];

const ShoppingCart = () => {
  let [selectQuery, setselectQuery] = useState("");

  const HandleChange = (e) => {
    setselectQuery(e.target.value);
  };

  const HandleClick = () => {
    console.log(selectQuery);
  };

  const HandleDecrease = (index) => {
    if (CartProducts[index].quantity > 1) {
      CartProducts[index].quantity -= 1;
      console.log(CartProducts[index].quantity);
    }
  };

  const HandleIncrease = (index) => {
    CartProducts[index].quantity += 1;
    console.log(CartProducts[index].quantity);
  };

  return (
    <Layout>
      <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-5 gap-x-7 justify-between text-gray-900 my-16">
        <div className="border border-gray-100 w-full">
          <h2 className="text-lg font-semibold p-3">Shopping Cart</h2>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-xs font-medium">
                <th className="md:w-1/2 uppercase xs:px-4 px-2 py-2 text-left w-auto">
                  Product
                </th>
                <th className="md:w-[14%]  w-auto uppercase xs:px-4 px-2 py-2 text-left">
                  Price
                </th>
                <th className="md:w-[18%] w-auto uppercase xs:px-4 px-2 py-2 text-left">
                  quantity
                </th>
                <th className="md:w-[15%]  w-auto uppercase xs:px-4 px-2 py-2 text-left">
                  sub-total
                </th>
              </tr>
            </thead>

            <tbody>
              {CartProducts.map(
                (
                  { img, text, realPrice, quantity, price, subTotal },
                  index
                ) => (
                  <tr key={index}>
                    <td className=" xs:px-4 px-2 py-2 flex md:gap-x-4 gap-x-2 items-center text-gray-700">
                      <div className="text-gray-700  rounded-full border border-gray-700 w-5 h-4.5 flex items-center justify-center">
                        <span onClick={() => {}}>
                          <CloseIcon />
                        </span>
                      </div>
                      <Image
                        src={img}
                        alt="wishlist_img"
                        width={72}
                        height={72}
                        className="sm:w-[72px] w-12"
                      />
                      <p className="hidden sm:block">{text}</p>
                    </td>
                    <td className=" xs:px-4 px-2 py-2 font-medium sm:text-base text-sm">
                      <span className="line-through text-gray-400">
                        {realPrice}
                      </span>
                      {price}
                    </td>
                    <td className=" xs:px-4 px-2 py-2 sm:text-base text-sm font-semibold">
                      {/* {stockStatus} */}
                      {/* <span className="text-danger-500">{outofStock}</span> */}
                      <div className="flex items-center justify-around rounded-sm text-gray-700  border border-gray-100 p-2">
                        <button
                          onClick={() => HandleDecrease(index)}
                          className="text-xl"
                        >
                          -
                        </button>
                        <div className="">{quantity}</div>
                        <button
                          onClick={() => HandleIncrease(index)}
                          className="text-xl"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="xs:px-4 px-2 py-2  gap-x-2">{subTotal}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          <hr />
          <div className="flex justify-between items-center my-2 mx-3">
            <div className="">
              <Button className="uppercase !border-2 rounded-sm !border-secondary-500  text-secondary-500 bg-transparent hover:bg-transparent gap-x-2 flex items-center  py-2 px-4">
                <LeftArrowIcon /> return to shop
              </Button>
            </div>
            <div className="">
              <Button className="uppercase !border-2 rounded-sm !border-secondary-500 text-secondary-500 bg-transparent hover:bg-transparent py-2 px-4">update cart</Button>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-col sm:flex-row flex-col sm:gap-x-5 lg:justify-start justify-around gap-y-8">
          <div className="border border-gray-100  lg:w-80 sm:w-full">
            <h2 className="text-lg font-semibold p-3 pb-3 capitalize">
              card totals
            </h2>

            <div className="p-3 pt-0">
              <div className="flex flex-col gap-y-2 pb-3">
                <div className="flex justify-between">
                  <div className="text-gray-600">sub total</div>
                  <div className="font-medium">$320</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-600">shoping</div>
                  <div className="font-medium">free</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-600">discount</div>
                  <div className="font-medium">$2</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-600">tax</div>
                  <div className="font-medium">$40.00</div>
                </div>
              </div>

              <div className="border border-t-gray-100 my-1"></div>

              <div className="flex flex-col gap-y-3 pt-3">
                <div className="flex justify-between">
                  <div className="text-gray-600">Total</div>
                  <div className="font-medium">$345.00 USD</div>
                </div>

                <Button
                  className={`!w-auto text-white  gap-x-2 rounded-none items-center !max-w-356px mx-0 !flex whitespace-nowrap sm:!px-5 xs:px-2 px-0.5 sm:!py-2 py-2 !font-public-sans !text-base !font-bold !leading-5  bg-primary-500 hover:bg-primary-500`}
                >
                  <span className=""> proceed to checkout</span>
                  <RightArrowIcon />
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-gray-100 lg:w-auto w-full">
            <h2 className="text-lg font-semibold p-4 capitalize">
              coupan code
            </h2>
            <hr />

            <div className="p-4">
              <InputField type="text" onChange={HandleChange} />

              <Button
                onClick={HandleClick}
                className="bg-secondary-500 hover:bg-secondary-500 text-white rounded-none uppercase p-3 mt-3"
              >
                Apply coupan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(ShoppingCart);
