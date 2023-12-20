import jwt from 'jsonwebtoken';
import nookies from 'nookies';

export const IsAuthenticated = async (ctx) => {
  const cookies = nookies.get(ctx);
  const jwtToken = cookies.jwt;

  if (jwtToken) {
    const claims = jwt.verify(jwtToken, 'secret');
    const uid = claims._id;

    if (uid) {
      return {
        props: {
          uid,
        },
      };
    }
  }

  if (!jwtToken) {
    return {
      redirect: {
        permanent: false,
        destination: '/sign-in',
      },
    };
  }
};

export const AuthCheck = async (ctx) => {
  const cookies = nookies.get(ctx);
  const jwtToken = cookies.jwt;

  if (jwtToken) {
    const claims = jwt.verify(jwtToken, 'secret');
    const uid = claims._id;

    if (uid) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
        props: {
          uid,
        },
      };
    }
  }

  return {
    props: {
      uid: null,
    },
  };
};
