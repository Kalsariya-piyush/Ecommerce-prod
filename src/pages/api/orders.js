import { token } from '@/constants';
import axios from 'axios';

export const createOrderHandler = async () => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/create-order`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};

export const getOrders = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/orders`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};
