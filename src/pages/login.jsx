import { InputField } from '@/components/InputField';
import Loader from '@/components/Loaders/Loader';
import { HandleSetCookie } from '@/constants';
import { useAuth } from '@/context/auth';
import { LoginHandler } from '@/functions/auththenticaion';
import { AuthCheck } from '@/utils/AuthCheck';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const Login = () => {
  const router = useRouter();

  const { getUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },

      validationSchema: yup.object({
        email: yup
          .string()
          .email('Please Enter valid email address')
          .required('Please enter a email address'),
        password: yup.string().required('Please enter a password'),
      }),

      onSubmit: async (value) => {
        setIsLoading(true);
        LoginHandler(value)
          .then(async (res) => {
            if (res?.data && res?.data?._id && typeof window !== undefined) {
              HandleSetCookie('accessToken', res.data.token);
              getUser();
              router.push('/');
              setIsLoading(false);
            }
          })
          .catch((err) => {
            if (err?.response?.data?.message === 'Invalid Credentials') {
              toast.error(err?.response?.data?.message);
            }
            setIsLoading(false);
          });
      },
    });

  return (
    <div className="w-full h-screen px-5 flex justify-center items-center">
      {isLoading && <Loader />}

      {/* <div className="bg-[#1B6392] relative w-full h-auto">
        <div className="w-fit relative">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 35C11.1046 35 12 34.1046 12 33C12 31.8954 11.1046 31 10 31C8.89543 31 8 31.8954 8 33C8 34.1046 8.89543 35 10 35Z"
              fill="white"
            />
            <path
              d="M23 35C24.1046 35 25 34.1046 25 33C25 31.8954 24.1046 31 23 31C21.8954 31 21 31.8954 21 33C21 34.1046 21.8954 35 23 35Z"
              fill="white"
            />
            <path
              d="M5.2875 15H27.7125L24.4125 26.55C24.2948 26.9692 24.0426 27.3381 23.6948 27.6001C23.3471 27.862 22.9229 28.0025 22.4875 28H10.5125C10.0771 28.0025 9.65293 27.862 9.30515 27.6001C8.95738 27.3381 8.70524 26.9692 8.5875 26.55L4.0625 10.725C4.0027 10.5159 3.8764 10.3321 3.70271 10.2012C3.52903 10.0704 3.31744 9.99977 3.1 10H1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="absolute bg-white top-0.5 right-0.5 border border-[#1B6392] rounded-full w-5 h-5 flex justify-center items-center">
            <p className="text-xs font-public-sans font-semibold text-[#1B6392]">
              2
            </p>
          </div>
        </div>
      </div> */}

      <div className="w-full max-w-lg flex flex-col gap-3">
        <div className="rounded bg-white w-full border border-gray-100">
          <div className="w-full flex justify-between">
            <Link href="/login" className="w-full">
              <Button
                type="button"
                className="!w-full !font-public-sans !text-base !font-semibold !leading-140 !rounded-none !capitalize !text-gray-900 !py-4 !hover:bg-white"
                style={{
                  boxShadow: '0px -3px 0px 0px #FA8232 inset',
                  borderRadius: '0px',
                }}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/register" className="w-full">
              <Button
                type="button"
                className="!w-full !font-public-sans !text-base !font-semibold !leading-140 !rounded-none !capitalize !text-gray-900 !py-4 !hover:bg-white"
                style={{
                  boxShadow: '0px -3px 0px 0px #F2F2F2 inset',
                  borderRadius: '0px',
                }}
              >
                Sign Up
              </Button>
            </Link>
          </div>

          <form
            onSubmit={handleSubmit}
            className="px-4 md:px-5 lg:px-7 py-6"
            autoComplete="off"
          >
            <fieldset disabled={isLoading} className="flex flex-col gap-7">
              <InputField
                id="email"
                label="Email Address"
                variant="outlined"
                name="email"
                type="text"
                isError={errors.email && touched.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                errorMessage={errors.email}
              />

              <InputField
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                isError={errors.password && touched.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                errorMessage={errors.password}
              />

              <Button
                type="submit"
                className="!w-full !py-3 !font-public-sans !text-base !font-semibold !leading-140 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
              >
                Sign In
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps = AuthCheck;
