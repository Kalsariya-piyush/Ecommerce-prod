import jwt from 'jsonwebtoken';
import nookies from 'nookies';

const jwtSecret = 'abcsefghiasdbkbajskdbasnndlkbvdnbmxnhlakjsmhdkbm';

export const IsAuthenticated = async (ctx) => {
  const cookies = nookies.get(ctx);
  const jwtToken = cookies.accessToken;

  if (jwtToken) {
    const claims = jwt.verify(jwtToken, jwtSecret);
    const uid = claims.id;

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
        destination: '/login',
      },
    };
  }
};

export const AuthCheck = async (ctx) => {
  const cookies = nookies.get(ctx);
  const jwtToken = cookies.accessToken;

  if (jwtToken) {
    const claims = jwt.verify(jwtToken, jwtSecret);
    const uid = claims.id;

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
