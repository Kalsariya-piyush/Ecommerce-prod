import { InputField } from '@/components/InputField';
import Loader from '@/components/Loaders/Loader';
import { ERRORS } from '@/constants';
import { AuthCheck } from '@/utils/AuthCheck';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { memo, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { forgotPasswordHandler } from './api/auth';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(null);

  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        email: '',
      },

      validationSchema: yup.object({
        email: yup
          .string()
          .email('Please Enter valid email address')
          .required('Please enter a email address'),
      }),

      onSubmit: async (value) => {
        setIsLoading(true);
        forgotPasswordHandler(value.email)
          .then((res) => {
            if (res?.status === 200) {
              localStorage.setItem('mail_step', '2');
              setStep('2');
            }
          })
          .catch((error) => {
            if (
              error?.response?.data?.message ===
              'User not found with this email'
            ) {
              toast.error(error?.response?.data?.message);
            } else {
              toast.error(ERRORS.INTERNAL_SERVER_ERROR);
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      },
    });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('mail_step')) {
        localStorage.setItem('mail_step', '1');
      }
      setStep(localStorage.getItem('mail_step'));
    }
  }, []);

  return (
    <div className="w-full h-screen p-5 flex justify-center items-center">
      {(isLoading || !step) && <Loader />}

      <div className="w-full max-w-lg flex flex-col gap-3">
        <div className="rounded bg-white w-full border shadow-primary border-gray-100 p-5 md:p-6 lg:!p-8 flex flex-col gap-4 mg:gap-6">
          {step === '1' && (
            <>
              <div className="flex justify-center items-center gap-3 flex-col max-w-360px mx-auto">
                <h2 className="text-gray-900 text-xl text-center leading-7 font-semibold">
                  Forget Password
                </h2>
                <p className="text-gray-600 text-sm leading-5 text-center">
                  Enter the email address or mobile phone number associated with
                  your Clicon account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="" autoComplete="off">
                <fieldset
                  disabled={isLoading}
                  className={`flex flex-col gap-7`}
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

                  <Button
                    type="submit"
                    className="!w-full !py-3 !font-public-sans !text-base !font-semibold !leading-140 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
                  >
                    Send Code
                  </Button>
                </fieldset>
              </form>

              <div className="flex flex-col gap-2 pb-4 md:pb-7 border-b border-b-gray-100">
                <p className="text-gray-600 text-sm leading-5">
                  <span>Already have account ? </span>
                  <Link
                    href={'/login'}
                    className="text-secondary-500 font-medium"
                  >
                    Sign In
                  </Link>
                </p>
                <p className="text-gray-600 text-sm leading-5">
                  <span>Don’t have account ? </span>
                  <Link
                    href={'/register'}
                    className="text-secondary-500 font-medium"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>

              <p className="text-gray-600 text-sm leading-5">
                <span>You may contact for help </span>
                <Link
                  href={'/customer-support'}
                  className="text-primary-500 font-medium"
                >
                  Customer Service
                </Link>
                <span> restoring access to your account.</span>
              </p>
            </>
          )}

          {step === '2' && (
            <h3 className="text-3xl font-semibold py-10 text-center leading-130">
              {ERRORS.FORGOT_PASSWORD_SUCCESS}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ForgotPassword);

export const getServerSideProps = AuthCheck;
