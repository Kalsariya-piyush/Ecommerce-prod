import { token } from '@/constants';
import axios from 'axios';

const GetAllColors = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/color`, {
    headers: {
      Authorization: `Bearer ${token()}`,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
};

export { GetAllColors };
