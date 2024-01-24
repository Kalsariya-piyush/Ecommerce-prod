import { InputField } from '@/components/InputField';
import Loader from '@/components/Loaders/Loader';
import { getCharacterValidationError } from '@/constants';
import { SignUpHandler } from '@/functions/auththenticaion';
import { AuthCheck } from '@/utils/AuthCheck';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const Register = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        mobileNo: '',
        email: '',
        password: '',
        address: '',
      },

      validationSchema: yup.object({
        firstName: yup.string().required('Please enter a first name'),
        lastName: yup.string().required('Please enter a last name'),
        mobileNo: yup
          .number()
          .typeError('Please Enter a valid mobile number')
          .positive('Please Enter a valid mobile number')
          .integer('Please Enter a valid mobile number')
          .min(10)
          .required('Please enter a mobile number'),
        email: yup
          .string()
          .email('Please Enter valid email address')
          .required('Please enter a email address'),
        password: yup
          .string()
          .required('Please enter a password')
          .min(8, 'Password must have at least 8 characters')
          .matches(/[0-9]/, getCharacterValidationError('digit'))
          .matches(/[a-z]/, getCharacterValidationError('lowercase'))
          .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
        address: yup.string().required('Please enter a address'),
      }),

      onSubmit: (value) => {
        setIsLoading(true);

        SignUpHandler(value)
          .then((res) => {
            console.log('res?.data? ', res?.data?._id);
            if (res?.data && res?.data?._id && typeof window !== undefined) {
              router.push('/login');
            }
          })
          .catch((err) => {
            if (err?.response?.data?.message === 'User Already Exists') {
              toast.error(err?.response?.data?.message);
            } else if (
              err?.response?.data?.message?.includes('mobile_1 dup key')
            ) {
              toast.error(
                'Mobile number is alredy registered please try with another mobile number'
              );
            }

            setIsLoading(false);
          });
      },
    });

  return (
    <div className="w-full h-full min-h-screen p-5 flex justify-center items-center">
      {isLoading && <Loader />}

      <div className="w-full max-w-lg flex flex-col gap-3">
        <div className="rounded bg-white shadow-primary w-full border border-gray-100">
          <div className="w-full flex justify-between">
            <Link href="/login" className="w-full">
              <Button
                type="button"
                className="!w-full !font-public-sans !text-base !font-semibold !leading-140 !rounded-none !capitalize !text-gray-900 !py-4 !hover:bg-white"
                style={{
                  boxShadow: '0px -3px 0px 0px #F2F2F2 inset',
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
                  boxShadow: '0px -3px 0px 0px #FA8232 inset',
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
              className="grid grid-cols-2 gap-5 gap-y-7"
            >
              <InputField
                id="firstName"
                label="First Name"
                name="firstName"
                type="text"
                isError={errors.firstName && touched.firstName}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.firstName}
                errorMessage={errors.firstName}
                wrapperClassName={'md:col-span-1 col-span-2'}
              />

              <InputField
                id="lastName"
                label="Last Name"
                name="lastName"
                type="text"
                isError={errors.lastName && touched.lastName}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.lastName}
                errorMessage={errors.lastName}
                wrapperClassName={'md:col-span-1 col-span-2'}
              />

              <InputField
                id="mobileNo"
                label="Mobile number"
                variant="outlined"
                name="mobileNo"
                wrapperClassName="col-span-2"
                type="number"
                isError={errors.mobileNo && touched.mobileNo}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.mobileNo}
                errorMessage={errors.mobileNo}
                inputProps={{
                  maxLength: 10,
                }}
              />

              <InputField
                id="email"
                label="Email Address"
                variant="outlined"
                name="email"
                wrapperClassName="col-span-2"
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
                wrapperClassName="col-span-2"
                isError={errors.password && touched.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                errorMessage={errors.password}
              />

              <InputField
                id="address"
                label="Address"
                variant="outlined"
                name="address"
                type="address"
                wrapperClassName="col-span-2"
                isError={errors.address && touched.address}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.address}
                errorMessage={errors.address}
                isMultiline={true}
                maxRows={3}
                minRows={3}
              />

              <Button
                type="submit"
                className="!w-full !col-span-2 !py-3 !font-public-sans !text-base !font-semibold !leading-140 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
              >
                Sign Up
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Register);

export const getServerSideProps = AuthCheck;
