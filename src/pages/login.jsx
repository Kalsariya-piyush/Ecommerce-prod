import Loader from '@/components/Loaders/Loader';
import { useAuth } from '@/context/auth';
import { LoginHandler } from '@/functions/auththenticaion';
import { AuthCheck } from '@/utils/AuthCheck';
import { Alert, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';

const Login = () => {
  const router = useRouter();

  const { getUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const HandleSetCookie = (name, value, options = {}) => {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}`;

    for (const option in options) {
      cookieString += `; ${option}=${options[option]}`;
    }

    document.cookie = cookieString;
  };

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
          .required('Required'),
        password: yup.string().required('Required'),
      }),

      onSubmit: async (value) => {
        setError('');
        setIsLoading(true);
        LoginHandler(value)
          .then(async (res) => {
            if (res.data && res.data._id && typeof window !== undefined) {
              HandleSetCookie('accessToken', res.data.token);
              getUser();
              router.push('/');
              setIsLoading(false);
            }
          })
          .catch((err) => {
            if (err.response.data.message === 'Invalid Credentials') {
              setError(err.response.data.message);
            }
            setIsLoading(false);
          });
      },
    });

  return (
    <div className="w-full h-screen px-5 flex justify-center items-center">
      {isLoading && <Loader />}

      <div className="w-full max-w-lg flex flex-col gap-3">
        {error !== '' && <Alert severity="error">{error}</Alert>}

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
            <Link href="/sign-up" className="w-full">
              <Button
                type="button"
                className="!w-full !font-public-sans !text-base !font-semibold !leading-140 !rounded-none !capitalize !text-gray-900 !py-4 !hover:bg-white"
                style={{
                  boxShadow: '0px -3px 0px 0px #FFF inset',
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
                  <p className="!my-1 absolute -bottom-6 right-0 text-end text-xs font-bold text-error-100">
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
                  <p className="!my-1 absolute -bottom-6 right-0 text-end text-xs font-bold text-error-100">
                    {errors.password}
                  </p>
                )}
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

export default Login;

export const getServerSideProps = AuthCheck;
