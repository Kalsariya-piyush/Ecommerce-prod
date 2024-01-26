import Loader from '@/components/Icons/Loader';
import PageInitialLoader from '@/components/Loaders/PageLoader';
import { useAuth } from '@/context/auth';
import { AuthCheck } from '@/utils/AuthCheck';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { signUpHanlder } from './api/auth';

const Signup = () => {
  const router = useRouter();

  const { currentUser, isLoadingUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        password: '',
      },
      validationSchema: yup.object({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        address: yup.string().required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string().required('Required'),
      }),
      onSubmit: async (value) => {
        setIsLoading(true);

        signUpHanlder(value)
          .then((res) => {
            if (res.message === 'User already exists') {
              toast.error(res.message);
              return;
            }
            router.push('/login');
          })
          .catch((e) => {
            console.log('eerror >> ', e);
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
        <div className="!mx-auto w-full max-w-lg !my-24">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-white !p-5 !px-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-gray-900 text-center pb-5">
              Register
            </h2>

            <div className="!my-3 relative">
              <label htmlFor="firstName" className="text-base font-medium">
                First name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full rounded-md bg-gray-200 !py-2.5 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName && (
                <p className="!my-1 absolute -bottom-7 right-0 text-end text-sm font-semibold text-red-700">
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="!my-3 relative">
              <label htmlFor="lastName" className="text-base font-medium">
                Last name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full rounded-md bg-gray-200 !py-2.5 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName && (
                <p className="!my-1 absolute -bottom-7 right-0 text-end text-sm font-semibold text-red-700">
                  {errors.lastName}
                </p>
              )}
            </div>

            <div className="!my-3 relative">
              <label htmlFor="address" className="text-base font-medium">
                Address <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="address"
                className="w-full rounded-md bg-gray-200 !py-2.5 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address && touched.address && (
                <p className="!my-1 absolute -bottom-7 right-0 text-end text-sm font-semibold text-red-700">
                  {errors.address}
                </p>
              )}
            </div>

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
                className="w-full rounded-md mb-7 bg-gray-200 !py-2.5 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
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
                className="flex w-full items-center text-center justify-center rounded-lg bg-black !px-4 !py-2.5 text-base font-medium text-white disabled:cursor-not-allowed"
              >
                {!isLoading && <span className="mx-auto">Sign up</span>}

                {isLoading && (
                  <span>
                    <Loader />
                  </span>
                )}
              </button>

              <p className="text-sm group mt-4 font-medium">
                Already have an account?
                <Link className="group-hover:underline" href="/login">
                  {' '}
                  sing-in
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;

export const getServerSideProps = AuthCheck;
