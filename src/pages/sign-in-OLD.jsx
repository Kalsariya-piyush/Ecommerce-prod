import Loader from '@/components/Icons/Loader';
import PageInitialLoader from '@/components/Loaders/PageLoader';
import { useAuth } from '@/context/auth';
import { AuthCheck } from '@/utils/AuthCheck';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { signInHanlder } from './api/auth';

const SignIn = () => {
  const router = useRouter();

  const { currentUser, isLoadingUser, getUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function setCookie(name, value, options = {}) {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}`;

    for (const option in options) {
      cookieString += `; ${option}=${options[option]}`;
    }

    document.cookie = cookieString;
  }

  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: yup.object({
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string().required('Required'),
      }),
      onSubmit: async (value) => {
        setError('');
        setIsLoading(true);

        signInHanlder(value)
          .then((res) => {
            if (res.user && res.user.uid) {
              setCookie('jwt', res.token, { expires: 24 * 60 * 60 * 1000 });
              getUser();
              router.push('/');
            }
          })
          .catch((e) => {
            if (e && e.response && e.response.data.message) {
              if (
                e.response.data.message ===
                'User does not exist, please sign up'
              ) {
                setError(e.response.data.message);
              }

              if (e.response.data.message === 'Invalid credentials') {
                setError(e.response.data.message);
              }
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      },
    });

  useEffect(() => {
    if (currentUser && currentUser._id && !isLoadingUser) {
      router.push('/');
    }
  }, [currentUser]);

  return (
    <>
      {isLoadingUser && <PageInitialLoader />}

      {!currentUser && !isLoadingUser && (
        <div className="!mx-auto w-full max-w-lg !my-28">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-white !p-5 shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-gray-900 text-center pb-5">
              Login
            </h2>

            {error && (
              <p className="!my-1 text-center text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <div className="!my-3 relative">
              <label htmlFor="email" className="text-base font-medium">
                Email <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="email"
                className="w-full rounded-md bg-gray-200 !py-2.5 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="!my-1 absolute -bottom-7 right-0 text-end text-sm font-semibold text-red-700">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="!my-3 relative">
              <label htmlFor="password" className="text-base font-medium">
                Password <span className="text-red-700">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full mb-7 rounded-md bg-gray-200 !py-2.5 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className="!my-1 absolute bottom-0 right-0 text-end text-sm font-semibold text-red-700">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="!mt-6 flex w-full flex-col items-center justify-between">
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full disabled:cursor-not-allowed items-center text-center justify-center rounded-lg bg-black !py-2.5 text-base font-medium text-white"
              >
                {!isLoading && <span className="mx-auto">Sign In</span>}
                {isLoading && (
                  <span>
                    <Loader />
                  </span>
                )}
              </button>

              <p className="text-sm group mt-4 font-medium">
                Don't have an account?
                <Link className="group-hover:underline" href="/sign-up">
                  {' '}
                  register
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignIn;

export const getServerSideProps = AuthCheck;
