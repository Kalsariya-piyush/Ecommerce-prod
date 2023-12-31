import { token } from '@/constants';
import axios from 'axios';

const LoginHandler = async (data) => {
  const body = {
    email: data.email,
    password: data.password,
  };

  return await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/login`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
};

const GetCurrentUser = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/me`,
    {
      headers: {
        Authorization: `Bearer ${token()}`,
        'Content-Type': 'application/json',
      },
    },
    {
      withCredentials: true,
    }
  );
};

export { GetCurrentUser, LoginHandler };
