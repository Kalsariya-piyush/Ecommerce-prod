import Loader from '@/components/Loaders/Loader';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';

const Login = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        setTimeout(() => {
          console.log(value);
          setIsLoading(false);
          router.push('/');
        }, 2000);
      },
    });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {isLoading && <Loader />}

      <div className="max-w-md rounded bg-white w-full">
        <div className="w-full flex justify-between">
          <Link href="/login" className="w-full">
            <Button
              type="button"
              className="w-full font-public-sans text-base font-semibold leading-140 rounded-b-none capitalize text-gray-900 py-4 hover:bg-white"
              style={{
                boxShadow: '0px -3px 0px 0px #FA8232 inset',
              }}
            >
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up" className="w-full">
            <Button
              type="button"
              className="w-full font-public-sans text-base font-semibold leading-140 rounded-b-none capitalize text-gray-500 py-4 hover:bg-white"
              style={{
                boxShadow: '0px -3px 0px 0px #FFF inset',
              }}
            >
              Sign Up
            </Button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="px-7 py-6" autoComplete="off">
          <fieldset disabled={isLoading} className="flex flex-col gap-7">
            <div className="relative">
              <TextField
                id="email"
                label="Email Address"
                variant="outlined"
                name="email"
                className="w-full focus:shadow-gray-900"
                type="text"
                error={errors.email && touched.email}
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                }}
                value={values.email}
              />

              {errors.email && touched.email && (
                <p className="!my-1 absolute -bottom-6 right-0 text-end text-xs font-medium text-red-700">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                className="w-full focus:shadow-gray-900"
                type="password"
                error={errors.password && touched.password}
                inputProps={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                }}
                value={values.password}
              />

              {errors.password && touched.password && (
                <p className="!my-1 absolute -bottom-6 right-0 text-end text-xs font-medium text-red-700">
                  {errors.password}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full font-public-sans text-base font-semibold leading-140 rounded bg-primary-500 text-white py-4 hover:bg-primary-500/90"
            >
              Sign In
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
