import { InputField } from '@/components/InputField';
import Loader from '@/components/Loaders/Loader';
import { ERRORS, getCharacterValidationError } from '@/constants';
import { resetPasswordHandler } from '@/functions/auththenticaion';
import { AuthCheck } from '@/utils/AuthCheck';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const ResetPassword = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        password: '',
        confirmPassword: '',
      },

      validationSchema: yup.object({
        password: yup
          .string()
          .required('Please enter a password')
          .min(8, 'Password must have at least 8 characters')
          .matches(/[0-9]/, getCharacterValidationError('digit'))
          .matches(/[a-z]/, getCharacterValidationError('lowercase'))
          .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
        confirmPassword: yup
          .string()
          .required('Please enter a confirm password')
          .oneOf([yup.ref('password'), null], 'Password does not match'),
      }),

      onSubmit: async (value) => {
        setIsLoading(true);

        const hash = router?.query?.token;

        resetPasswordHandler(hash, value.password)
          .then((res) => {
            if (res?.status === 200) {
              toast.success(ERRORS.RESET_PASSWORD_SUCCESS);
              localStorage.removeItem('mail_step');
              router.push('/login');
            }
          })
          .catch((error) => {
            if (
              error?.response?.data?.message.trim() ===
              'Token Expired, Please try again later'
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

  return (
    <div className="w-full h-screen p-5 flex justify-center items-center">
      {isLoading && <Loader />}

      <div className="w-full max-w-lg flex flex-col gap-3">
        <div className="rounded bg-white w-full border shadow-primary border-gray-100 p-5 md:p-6 lg:!p-8 flex flex-col gap-4 mg:gap-6">
          <div className="flex justify-center items-center gap-3 flex-col max-w-360px mx-auto">
            <h2 className="text-gray-900 text-xl text-center leading-7 font-semibold">
              Reset Password
            </h2>
            <p className="text-gray-600 text-sm leading-5 text-center">
              To Reset your password please enter the new password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="" autoComplete="off">
            <fieldset disabled={isLoading} className={`flex flex-col gap-7`}>
              <InputField
                id="password"
                label="Password"
                name="password"
                type="password"
                isError={errors.password && touched.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                errorMessage={errors.password}
              />

              <InputField
                id="confirmPassword"
                label="Confirm password"
                name="confirmPassword"
                type="password"
                isError={errors.confirmPassword && touched.confirmPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.confirmPassword}
                errorMessage={errors.confirmPassword}
              />

              <Button
                type="submit"
                className="!w-full !py-3 !font-public-sans !text-base !font-semibold !leading-140 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
              >
                Reset Password
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(ResetPassword);

export const getServerSideProps = AuthCheck;
