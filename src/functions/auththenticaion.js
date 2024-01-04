import { token } from '@/constants';
import axios from 'axios';

const SignUpHandler = async (data) => {
  const body = {
    email: data.email,
    password: data.password,
    firstname: data.firstName,
    lastname: data.lastName,
    mobile: data.mobileNo,
    address: data.address,
  };

  return await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/register`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
};

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
  return await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/me`, {
    headers: {
      Authorization: `Bearer ${token()}`,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
};

const HandleLogout = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/logout`,
    {
      headers: {
        Authorization: `Bearer ${token()}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
};

export { GetCurrentUser, HandleLogout, LoginHandler, SignUpHandler };
