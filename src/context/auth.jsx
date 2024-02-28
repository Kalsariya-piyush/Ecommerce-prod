import axios from 'axios';
import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';
import { token } from '../constants';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

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

  const getUser = async () => {
    setIsLoadingUser(true);

    GetCurrentUser()
      .then((res) => {
        setCurrentUser(res.data);
        setIsLoadingUser(false);
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoadingUser(false);
      });
  };

  const LogoutHandler = () => {
    HandleLogout()
      .then(() => {
        Cookies.remove('accessToken');
        setCurrentUser(null);
      })
      .catch((error) => {
        console.error('Error occurs', error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoadingUser,
        LogoutHandler,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
