import { getCookie } from '@/constants';
import axios from 'axios';

// get products which added in cart
export const getCart = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/cart`,
    {
      headers: {
        Authorization: `Bearer ${getCookie()}`,
        'Content-Type': 'application/json',
      },
    },
    {
      withCredentials: true,
    }
  );

  return res.data.products;
};

// delete products from the cart
export const deleteCartProduct = async (productId) => {
  const body = { productId };

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/delete-cart-product`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};
