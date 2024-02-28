import { token } from '@/constants';
import axios from 'axios';

export const getBrands = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/brand`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`,
    },
    withCredentials: true,
  });
  return res.data;
};
