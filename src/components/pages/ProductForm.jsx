import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BiUpload } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import * as yup from 'yup';

import { getEditProduct } from '../../pages/api/products';

const ProductForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  const id = router.query.id?.toString();

  const {
    values,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
    errors,
    touched,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: '',
      imageUrl: '',
      price: '',
      category: '',
      quantity: '',
      description: '',
      images: images,
    },

    validationSchema: yup.object({
      title: yup.string().required('Required'),
      price: yup.string().required('Required'),
      category: yup.string().required('Required'),
      quantity: yup.string().required('Required'),
      description: yup.string().required('Required'),
      images: yup
        .array()
        .min(1, 'Drag at least one image')
        .max(5, 'Maximum 5 images can upload')
        .required('Image is required'),
    }),

    onSubmit: async (value) => {
      if (!id) {
        setIsLoading(true);
        addProductHandler(value)
          .then(() => {
            toast.success('Product added successfully');
            setIsLoading(false);
            resetForm();
            router.push('/products');
          })
          .catch(() => {
            setIsLoading(false);
            toast.error('Failed please try again');
          });
      } else {
        try {
          setIsLoading(true);
          const product = { ...value, _id: id };
          await postUpdateProduct(product);
          toast.success('Product updated successfully');
          router.push('/admin');
          resetForm();
        } catch (error) {
          if (error) {
            toast.error('Failed please try again');
          }
        } finally {
          setIsLoading(false);
        }
      }
    },
  });

  const getProductData = async () => {
    if (id) {
      const res = await getEditProduct(id);
      const { products } = res;
      setValues(products);
    }
  };

  useEffect(() => {
    if (id) {
      getProductData();
    }
  }, [id]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setImages((prev) => [
        ...prev,
        { path: URL.createObjectURL(file), file: file },
      ]);
    });
  }, []);

  useEffect(() => {
    setFieldValue('images', images);
  }, [images]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
    },
    maxFiles: 5,
  });

  return (
    <div className="max-w-5xl w-full !pb-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg !p-8 shadow-xl"
      >
        <h2 className="text-center text-2xl underline font-bold mb-3">
          {!id ? 'Add' : 'Edit'} Product
        </h2>

        <div className="grid grid-cols-2 gap-x-6">
          <h3 className="font-bold text-xl border-b-2 my-2 col-span-2">
            General Info
          </h3>

          <div className="w-full">
            <div className="!my-3 relative">
              <label htmlFor="title" className="text-base font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full rounded-md bg-gray-200 !py-3 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title && (
                <p className="!my-1 absolute -bottom-7 right-0 text-end text-sm font-semibold text-red-700">
                  {errors.title}
                </p>
              )}
            </div>

            <div className="!my-3 relative">
              <label htmlFor="price" className="text-base font-medium">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="w-full rounded-md bg-gray-200 !py-3 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.price && touched.price && (
                <p className="!my-1 absolute -bottom-7 right-0 text-end text-sm font-semibold text-red-700">
                  {errors.price}
                </p>
              )}
            </div>

            <div className="!my-3 relative">
              <label htmlFor="quantity" className="text-base font-medium">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                className="w-full rounded-md bg-gray-200 !py-3 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.quantity && touched.quantity && (
                <p className="!my-1 absolute -bottom-7 right-0 text-end text-sm font-semibold text-red-700">
                  {errors.quantity}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <div className="!my-3 relative">
              <label htmlFor="category" className="text-base font-medium">
                Category
              </label>
              <input
                type="text"
                id="category"
                className="w-full rounded-md bg-gray-200 !py-3 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.category}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.category && touched.category && (
                <p className="!my-1 absolute -bottom-7 right-0 text-end text-sm font-semibold text-red-700">
                  {errors.category}
                </p>
              )}
            </div>

            <div className="!my-3">
              <label htmlFor="desc" className="text-base font-medium">
                Description
              </label>
              <textarea
                id="description"
                className="min-h-[140px] w-full resize-none rounded-md bg-gray-200 !py-2 !px-3 text-base font-normal outline-none ring-gray-300 focus:ring-2"
                value={values?.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <h3 className="font-bold text-xl border-b-2 my-2 col-span-2">
            Social
          </h3>
          <div className="col-span-2 relative">
            <label htmlFor="images" className="text-base font-medium">
              Images
            </label>
            {errors.images && touched.images && (
              <p className="!my-1 absolute top-0 right-0 text-end text-sm font-semibold text-red-700">
                {errors.images}
              </p>
            )}
          </div>

          <div className="grid col-span-2 my-3 grid-cols-5 gap-6">
            {values.images.length > 0 &&
              values.images.map(({ path }, index) => (
                <div key={index} className="relative">
                  <img
                    className="w-full hover:opacity-75 rounded-lg h-40"
                    src={path}
                    alt={path}
                  />
                  <RiDeleteBin6Line
                    onClick={() => {
                      setImages(images.filter((_item, idx) => idx !== index));
                    }}
                    className="text-red-700 cursor-pointer absolute top-2 right-2"
                  />
                </div>
              ))}

            {values.images.length < 5 && (
              <div
                className={`${values.images.length === 4 ? 'col-span-1' : ''} ${
                  values.images.length === 3 ? 'col-span-2' : ''
                } ${values.images.length === 2 ? 'col-span-3' : ''} ${
                  values.images.length === 1 ? 'col-span-4' : ''
                } ${values.images.length === 0 ? 'col-span-5' : ''}`}
                {...getRootProps()}
              >
                <input {...getInputProps()} name="images" id="images" />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <div className="border-2 bg-gray-200 text-gray-600 border-black/30 text-base font-semibold cursor-pointer border-dashed h-40 w-full rounded-lg flex justify-center items-center">
                    <div className="flex justify-center flex-col items-center gap-3">
                      <BiUpload className="text-2xl" />{' '}
                      <p className="text-center">Upload product images</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="!mt-2 col-span-2 flex items-end justify-end">
            <button
              disabled={isLoading}
              type="submit"
              className="flex w-full !items-center justify-between rounded-lg bg-black !px-4 !py-2 text-base font-medium text-white disabled:cursor-not-allowed sm:w-auto"
            >
              <span>{id ? 'Update' : 'Add'} Product</span>
              {isLoading && (
                <span className="ml-2">
                  <Loader />
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
