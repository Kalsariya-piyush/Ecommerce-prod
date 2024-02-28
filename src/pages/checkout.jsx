import { check } from "prettier";
import React from "react";
import Layout from "../layouts/Layout";
import { Button } from "@mui/material";
import RightArrowIcon from "@/components/Icons/RightArrowIcon";
import Image from "next/image";

const checkout = () => {
  let CartProducts = [
    {
      id: 1,
      img: "/assets/wishlist/dron.png",
      text: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
      realPrice: "$1200",
      price: "$999",
      quantity: 1,
    },
    {
      id: 2,
      img: "/assets/wishlist/headphone.png",
      text: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
      price: "$2300.00",
      quantity: 1,
    },
  ];

  return (
    <Layout>
      <div className="flex  gap-x-5 my-20 text-gray-900">
        <div className="border border-gray-100 w-full">
          <h1 className="font-medium capitalize text-lg">billing information</h1>
        </div>


        <div className="flex flex-col gap-y-8">
          <div className="border border-gray-100  w-80">
            <h2 className="text-lg font-medium p-3 pb-3 capitalize">
              order summary
            </h2>

            <div className="">
              {CartProducts.map(
                (
                  { img, text, realPrice, quantity, price, subTotal },
                  index
                ) => (
               <div className="flex items-center gap-1 my-1" key={index}>
                  <Image
                    src={img}
                    alt="wishlist_img"
                    width={64}
                    height={64}
                    className="sm:w-[64px] w-12"
                  />
                  <div className=""><p>{text.length > 20 ? text.slice(0,30) + "..." : text}</p><p>{quantity} *  <span className="text-secondary-500 font-semibold">{price}</span></p></div>
                </div>
              ))}
              
              
            </div>
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
                  className={`!w-auto text-white  gap-x-2 rounded items-center !max-w-356px mx-0 !flex whitespace-nowrap sm:!px-5 xs:px-2 px-0.5 sm:!py-2 py-2 !font-public-sans !text-base !font-bold !leading-5  bg-primary-500 hover:bg-primary-500`}
                >
                  <span className="sm:block hidden text-base font-bold">
                    place order
                  </span>
                  <RightArrowIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default checkout;
