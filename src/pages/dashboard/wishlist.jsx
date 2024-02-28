// import Layout from '@/layouts/Layout';
import { memo } from "react";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import { Button } from "@mui/material";
import { list } from "postcss";
import React from "react";
import CartIcon from "@/components/Icons/CartIcon";
import CloseIcon from "@/components/Icons/CloseIcon";
import { toast } from "react-toastify";

const Wishlist = () => {
  const HandleClick = () => {
    toast.success("product added to cart");
  };

  const HandleClickOutOfStock = () => {
    toast.error("product out of stock");
  };

  let wishListItems = [
    {
      id: 1,
      img: "/assets/wishlist/dron.png",
      text: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
      realPrice: "$1200",
      price: "$999",
      stockStatus: "in stock",
    },
    {
      id: 2,
      img: "/assets/wishlist/headphone.png",
      text: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
      price: "$2300.00",
      stockStatus: "in stock",
    },
    {
      id: 3,
      img: "/assets/wishlist/airConditioner.png",
      text: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
      price: "$70.00",
      stockStatus: "in stock",
    },
    {
      id: 4,
      img: "/assets/wishlist/videoGames.png",
      text: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
      realPrice: "$2100",
      price: "$220",
      outofStock: "out of stock",
    },
    {
      id: 5,
      img: "/assets/wishlist/monitor.png",
      text: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Color Night Vision, 2-Way Audio",
      price: "$1499.00",
      stockStatus: "in stock",
    },
  ];
  return (
    <Layout>
      <div className="border border-gray-100 my-16">
        <h2 className="text-lg font-semibold p-3">Wishlist</h2>

        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-xs font-medium">
              <th className="md:w-1/2 uppercase xs:px-4 px-2 py-2 text-left w-auto">
                Product
              </th>
              <th className="md:w-[12%]  w-auto uppercase xs:px-4 px-2 py-2 text-left">
                Price
              </th>
              <th className="md:w-[14%] w-auto uppercase xs:px-4 px-2 py-2 text-left">
                Stock Status
              </th>
              <th className="md:w-1/4  w-auto uppercase xs:px-4 px-2 py-2 text-left">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {wishListItems.map(
              ({ img, text, realPrice, price, stockStatus, outofStock },index) => (
                <tr key={index}>
                  <td className=" xs:px-4 px-2 py-2 flex md:gap-x-4 items-center text-gray-700">
                    <Image
                      src={img}
                      alt="wishlist_img"
                      width={72}
                      height={72}
                      className="sm:w-[72px] w-12"
                    />
                    <p className="hidden md:block">{text}</p>
                  </td>
                  <td className=" xs:px-4 px-2 py-2 font-medium sm:text-base text-sm">
                    <span className="line-through text-gray-400">
                      {realPrice}
                    </span>
                    {price}
                  </td>
                  <td className=" xs:px-4 px-2 py-2 sm:text-base text-sm font-semibold text-succes-500 uppercase">
                    {stockStatus}
                    <span className="text-danger-500">{outofStock}</span>
                  </td>
                  <td className="xs:px-4 px-2 py-2  gap-x-2">
                    <div className="flex items-center xs:gap-x-4 gap-x-1">
                      <Button
                        // endIcon={<CartIcon className="rotate-180" />}
                        onClick={
                          outofStock ? HandleClickOutOfStock : HandleClick
                        }
                        className={`!w-auto  gap-x-2 items-center !max-w-356px mx-0 !flex whitespace-nowrap sm:!px-5 xs:px-2 px-0.5 sm:!py-2 py-1 !font-public-sans !text-base !font-bold !leading-5 !rounded ${
                          outofStock ? "!bg-gray-300" : "!bg-primary-500"
                        }  !text-white !hover:bg-primary-500/90`}
                      >
                        <span className="sm:block hidden"> Add To Cart</span>
                        <CartIcon />
                      </Button>
                      <div className="text-gray-700 rounded-full border border-gray-700  w-5 h-4.5 flex items-center justify-center">
                        <span onClick={() => {}}>
                          <CloseIcon />
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            )}
            {/* <tr>
            <td className="border xs:px-4 px-2 py-2">Product 2</td>
            <td className="border xs:px-4 px-2 py-2">Consectetur adipiscing elit</td>
            <td className="border xs:px-4 px-2 py-2">$20.49</td>
            <td className="border xs:px-4 px-2 py-2">Out of Stock</td>
          </tr> */}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default memo(Wishlist);
