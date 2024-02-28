import Layout from "@/layouts/Layout";
import InformationIcon from "@/components/Icons/InformationIcon";
import { memo, useState } from "react";
import { InputField } from "@/components/InputField";
import { Button } from "@mui/material";
import RightArrowIcon from "@/components/Icons/RightArrowIcon";
import { useFormik } from "formik";
import * as yup from "yup";

const trackOrder = () => {
  
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        orderId: "",
        email: "",
      },

      validationSchema: yup.object({
        email: yup
          .string()
          .email("Please Enter valid email address")
          .required("Please enter a email address"),
          orderId: yup.string().required("Please enter a Order Id"),
      }),

      onSubmit: (value) => {
        console.log("value is::::::::::::>", value);
      },
    });

  return (
    <Layout>
      <div className="mx-auto m-12">
        <h3 className="font-semibold text-[32px] leading-10 text-gray-900 pb-4">
          Track Order
        </h3>
        <p className="font-normal text-base text-gray-600 text-wrap">
          To track your order please enter your order ID in the input field
          below and press the “Track Order”
          <span className="md:block">
            button. this was given to you on your receipt and in the
            confirmation email you should have received.
          </span>
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex gap-x-6">
          <div className="md:w-2/6 xs:w-1/2">
            <p className="font-normal text-sm leading-5 text-gray-900 mb-2">
              Order ID
            </p>
            <InputField
              id="orderId"
              label="ID..."
              variant="outlined"
              name="orderId"
              type="number"
              className="bg-white"
              isError={errors.orderId && touched.orderId}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.orderId}
              errorMessage={errors.orderId}
            />
          </div>
          <div className="md:w-2/6 xs:w-1/2">
            <p className="font-normal text-sm leading-5 text-gray-900 mb-2">
              Billing Email
            </p>
            <InputField
              id="email"
              label="Email address"
              variant="outlined"
              name="orderId"
              type="email"
              className="bg-white"
              isError={errors.email && touched.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              errorMessage={errors.email}
            />
          </div>
        </form>
        <div className="text-gray-600 gap-x-0.5 flex items-center mt-4 mb-8">
          <InformationIcon />
          <span className="font-normal text-sm leading-5">
            Order ID that we sended to your in your email address.
          </span>
        </div>
        <div className="sm:mb-28 xs:mb-12">
          <Button
            type="submit"
            endIcon={<RightArrowIcon className="rotate-180" />}
            className="!w-fit sm:!flex !px-8 !py-4 !font-public-sans !text-base !font-semibold !leading-5 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
          >
            Track Order
          </Button>
        </div>
      </div>
    </Layout>
  );
};
export default memo(trackOrder);
