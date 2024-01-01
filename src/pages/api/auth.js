import { token } from '@/constants';
import axios from 'axios';

export const signUpHanlder = async (data) => {
  const body = {
    email: data.email,
    password: data.password,
    address: data.address,
    name: `${data.firstName} ${data.lastName}`,
  };

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/signup`,
    body
  );

  return res.data;
};

export const signInHanlder = async (data) => {
  const body = {
    email: data.email,
    password: data.password,
  };

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/signin`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );

  return res.data;
};

export const getCurrentUser = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user`,
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

  return res;
};

export const logOutHandler = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/logout`,
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

  return res;
};
