import { GetCurrentUser } from '@/functions/auththenticaion';
import { logOutHandler } from '@/pages/api/auth';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

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

  const LogoutHandler = async () => {
    logOutHandler()
      .then(() => {
        setCurrentUser(null);
        document.cookie = 'jwt=; Max-Age=0';
        router.push('/sign-in');
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
