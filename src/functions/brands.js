import { token } from '@/constants';
import axios from 'axios';

const GetAllBrands = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/brand`, {
    headers: {
      Authorization: `Bearer ${token()}`,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
};

export { GetAllBrands };
