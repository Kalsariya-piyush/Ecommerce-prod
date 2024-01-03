import { GetCurrentUser, HandleLogout } from '@/functions/auththenticaion';
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

  const deleteCookie = (cookieName) => {
    document.cookie =
      cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };

  const LogoutHandler = () => {
    HandleLogout()
      .then(() => {
        deleteCookie('accessToken');
        setCurrentUser(null);
        // router.push('/login');
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
