import { Button } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { InputField } from '@/components/InputField';
import Loader from '@/components/Loaders/Loader';
import { HandleSetCookie } from '@/constants';
import { useAuth } from '@/context/auth';
import { LoginHandler } from '@/functions/auththenticaion';
import { AuthCheck } from '@/utils/AuthCheck';

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

      onSubmit: (value) => {
        setIsLoading(true);
        LoginHandler(value)
          .then((res) => {
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
    <div className="w-full h-screen p-5 flex justify-center items-center">
      {isLoading && <Loader />}

      <div className="w-full max-w-lg flex flex-col gap-3">
        <div className="rounded bg-white w-full border border-gray-100 shadow-primary">
          <div className="w-full flex justify-between">
            <Link href="/login" className="w-full">
              <Button
                type="button"
                className="!w-full !font-public-sans !text-base !font-semibold !leading-140 !rounded-none !capitalize !text-gray-900 !py-4 !hover:bg-white"
                style={{
                  boxShadow: '0px -4px 0px -1px #FA8232 inset',
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
            <fieldset
              disabled={isLoading}
              className={`flex flex-col ${
                errors.email && touched.email ? 'gap-7' : 'gap-3'
              }`}
            >
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

              <div className="flex flex-col gap-1 items-stretch">
                <Link href={'/forgot-password'} className="text-end">
                  <span className="text-secondary-500 text-sm leading-5 font-medium">
                    Forget Password ?
                  </span>
                </Link>
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
              </div>

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

export default memo(Login);

export const getServerSideProps = AuthCheck;
