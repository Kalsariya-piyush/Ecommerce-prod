import Axios from '@/utils/Axios.config';

const signUpHanlder = async (data) => {
  const body = {
    email: data.email,
    password: data.password,
    address: data.address,
    name: `${data.firstName} ${data.lastName}`,
  };

  const res = await Axios.post(
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

  const res = await Axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/signin`,
    body
  );

  return res.data;
};

const getCurrentUser = async () => {
  const res = await Axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/user`);

  return res;
};

const logOutHandler = async () => {
  const res = await Axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/logout`);

  return res;
};

const forgotPasswordHandler = async (email) => {
  const body = {
    email,
  };

  const res = await Axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/forgot-password-token`,
    body
  );

  return res;
};

const resetPasswordHandler = async (hash, password) => {
  const body = {
    password,
  };

  const res = await Axios.put(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/reset-password/${hash}`,
    body
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
