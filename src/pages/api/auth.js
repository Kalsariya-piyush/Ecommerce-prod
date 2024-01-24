import { token } from '@/constants';
import axios from 'axios';

const signUpHanlder = async (data) => {
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

const signInHanlder = async (data) => {
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

const getCurrentUser = async () => {
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

const logOutHandler = async () => {
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

const forgotPasswordHandler = async (email) => {
  const body = {
    email,
  };

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/forgot-password-token`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );

  return res;
};

const resetPasswordHandler = async (hash, password) => {
  const body = {
    password,
  };

  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/reset-password/${hash}`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );

  return res;
};

export {
  forgotPasswordHandler,
  getCurrentUser,
  logOutHandler,
  resetPasswordHandler,
  signInHanlder,
  signUpHanlder,
};
