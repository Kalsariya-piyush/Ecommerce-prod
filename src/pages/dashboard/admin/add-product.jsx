import { InputField } from '@/components/InputField';
import Spinner from '@/components/Loaders/Spinner';
import { SelectBox } from '@/components/SelectBox';
import { ERRORS, TAGS } from '@/constants';
import { GetAllBrands } from '@/functions/brands';
import { GetAllCategories } from '@/functions/categories';
import { GetAllColors } from '@/functions/colors';
import { AddProduct, ImageUpload } from '@/functions/products';
import Layout from '@/layouts/Layout';
import { IsAuthenticated } from '@/utils/AuthCheck';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { memo, useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const Addproduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      brand: '',
      category: '',
      tags: '',
      color: '',
      quantity: '',
      images: '',
      slug: '',
    },
    validationSchema: yup.object({
      title: yup.string().trim().required('Title is Required'),
      description: yup.string().trim().required('Description is Required'),
      price: yup.number().required('Price is Required'),
      brand: yup.string().trim().required('Brand is Required'),
      category: yup.string().trim().required('Category is Required'),
      tags: yup.string().trim().required('Tag is Required'),
      color: yup
        .array()
        .min(1, 'Pick at least one color')
        .required('Color is Required'),
      images: yup
        .array()
        .min(1, 'Pick at least one image')
        .required('Image is Required'),
      quantity: yup.number().required('Quantity is Required'),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      AddProduct(values)
        .then((res) => {
          if (res?.status === 200) {
            toast?.success('Product Added Successfully !');
            resetForm();
          }
        })
        .catch(() => {
          toast.error(ERRORS?.INTERNAL_SERVER_ERROR);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  const handleImageDrop = (files) => {
    setImageLoading(true);

    ImageUpload(files)
      .then((res) => {
        setFieldValue(
          'images',
          res?.data?.map(({ url, public_id }) => ({
            url,
            public_id,
          }))
        );
        setTimeout(() => {
          setImageLoading(false);
        }, 1000);
      })
      .catch(() => {
        toast.error(ERRORS?.INTERNAL_SERVER_ERROR);
        setImageLoading(false);
      });
  };

  const handleDeleteImages = (idx) => {
    setFieldValue(
      'images',
      values?.images?.filter((item, index) => index !== idx)
    );
  };

  const getBrands = async () => {
    try {
      const res = await GetAllBrands();

      const brandArr = res?.data.map(({ title, _id }) => ({
        value: _id,
        label: title,
      }));

      setBrands(brandArr);
    } catch (error) {
      toast.error(ERRORS?.INTERNAL_SERVER_ERROR);
    }
  };

  const getCategories = async () => {
    try {
      const res = await GetAllCategories();

      const categoryArr = res?.data.map(({ title, _id }) => ({
        value: _id,
        label: title,
      }));

      setCategories(categoryArr);
    } catch (error) {
      toast.error(ERRORS?.INTERNAL_SERVER_ERROR);
    }
  };

  const getColors = async () => {
    try {
      const res = await GetAllColors();

      const colorsArr = res?.data.map(({ title, _id }) => ({
        value: _id,
        label: title,
      }));

      setColors(colorsArr);
    } catch (error) {
      toast.error(ERRORS?.INTERNAL_SERVER_ERROR);
    }
  };

  useEffect(() => {
    getBrands();
    getCategories();
    getColors();
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="" autoComplete="off">
        <fieldset
          disabled={isLoading}
          className={`w-full grid grid-cols-2 gap-5`}
        >
          <InputField
            id="title"
            label="Product Title"
            variant="outlined"
            name="title"
            type="text"
            isError={errors.title && touched.title}
            handleChange={(e) => {
              handleChange(e);
              setFieldValue(
                'slug',
                values.title.toLowerCase().trim().replaceAll(' ', '-')
              );
            }}
            handleBlur={handleBlur}
            value={values.title}
            errorMessage={errors.title}
            errorClassName="!relative bottom-0"
            wrapperClassName="col-span-1"
          />

          <InputField
            id="price"
            label="Price"
            variant="outlined"
            name="price"
            type="number"
            isError={errors.price && touched.price}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.price}
            errorMessage={errors.price}
            errorClassName="!relative bottom-0"
            wrapperClassName="col-span-1"
          />

          <SelectBox
            handleBlur={handleBlur}
            handleChange={handleChange}
            options={brands}
            label="Brand"
            isError={errors.brand && touched.brand}
            value={values.brand}
            errorMessage={errors.brand}
            errorClassName="!relative bottom-0"
            id="brand"
            name="brand"
          />

          <SelectBox
            handleBlur={handleBlur}
            handleChange={handleChange}
            options={categories}
            label="Category"
            isError={errors.category && touched.category}
            value={values.category}
            errorMessage={errors.category}
            errorClassName="!relative bottom-0"
            id="category"
            name="category"
          />

          <SelectBox
            handleBlur={handleBlur}
            handleChange={handleChange}
            options={colors}
            label="Colors"
            isError={errors.color && touched.color}
            value={[...values.color]}
            errorMessage={errors.color}
            errorClassName="!relative bottom-0"
            id="color"
            name="color"
            isMultiple={true}
          />

          <SelectBox
            handleBlur={handleBlur}
            handleChange={handleChange}
            options={TAGS}
            label="Tags"
            isError={errors.tags && touched.tags}
            value={values.tags}
            errorMessage={errors.tags}
            errorClassName="!relative bottom-0"
            id="tags"
            name="tags"
          />

          <InputField
            id="quantity"
            label="quantity"
            variant="outlined"
            name="quantity"
            type="number"
            isError={errors.quantity && touched.quantity}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.quantity}
            errorMessage={errors.quantity}
            errorClassName="!relative bottom-0"
            wrapperClassName="col-span-2"
          />

          <InputField
            id="description"
            label="description"
            variant="outlined"
            name="description"
            type="description"
            isError={errors.description && touched.description}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.description}
            errorMessage={errors.description}
            errorClassName="!relative bottom-0"
            isMultiline={true}
            minRows={3}
            maxRows={4}
            wrapperClassName="col-span-2"
          />

          <div className="col-span-2 relative">
            {values?.images.length < 1 && (
              <div
                className={`border w-full min-h-32 p-3 rounded-md flex justify-center items-center ${
                  errors.images && touched.images
                    ? 'border-error-100'
                    : 'border-gray-500/50'
                }`}
              >
                <Dropzone onDrop={handleImageDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section className="w-full h-full">
                      <div className="w-full h-full" {...getRootProps()}>
                        <input className="w-full h-full" {...getInputProps()} />
                        <p className="text-center cursor-pointer">
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            )}

            {values?.images && (
              <div className="border w-full min-h-[167px] rounded-md gap-3 p-2 grid grid-cols-5 justify-start items-center border-gray-500/50">
                {values?.images?.map(({ url, public_id }, index) => (
                  <div key={public_id} className="relative">
                    <img
                      src={url || ''}
                      className="aspect-square w-full rounded-md"
                    />

                    <Button
                      onClick={() => handleDeleteImages(index)}
                      className="!absolute top-1 right-1 !min-w-0 !p-1 !bg-white/40 !rounded-full !text-black"
                    >
                      <CloseIcon className="!w-4 !h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {imageLoading && (
              <div className="absolute top-0 left-0 w-full col-span-5 flex justify-center items-center h-full backdrop-blur-sm rounded-md overflow-hidden">
                <Spinner />
              </div>
            )}

            {errors.images && touched.images && (
              <p
                className={`!my-1 text-end text-xs font-medium text-error-100`}
              >
                {errors.images}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading || imageLoading}
            className="!w-full flex gap-4 col-span-2 disabled:!cursor-not-allowed !py-3 !font-public-sans !text-base !font-semibold !leading-140 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
          >
            <p>Add Product</p>
            {isLoading && <Spinner className="!w-4 !h-4 !border-[3px]" />}
          </Button>
        </fieldset>
      </form>
    </Layout>
  );
};

export const getServerSideProps = IsAuthenticated;

export default memo(Addproduct);
