import { token } from '@/constants';
import axios from 'axios';

const GetAllCategories = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/category`, {
    headers: {
      Authorization: `Bearer ${token()}`,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
};

export { GetAllCategories };
