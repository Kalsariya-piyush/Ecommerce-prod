import { InputField } from '@/components/InputField';
import { SelectBox } from '@/components/SelectBox';
import { ERRORS, TAGS } from '@/constants';
import { GetAllBrands } from '@/functions/brands';
import { GetAllCategories } from '@/functions/categories';
import { GetAllColors } from '@/functions/colors';
import Layout from '@/layouts/Layout';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { memo, useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const Addproduct = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [color, setColor] = useState([]);
  // const [images, setImages] = useState([]);

  // console.log(color);
  // useEffect(() => {
  //   dispatch(getBrands());
  //   dispatch(getCategories());
  //   dispatch(getColors());
  // }, []);

  // const brandState = useSelector((state) => state.brand.brands);
  // const catState = useSelector((state) => state.pCategory.pCategories);
  // const colorState = useSelector((state) => state.color.colors);
  // const imgState = useSelector((state) => state.upload.images);
  // const newProduct = useSelector((state) => state.product);
  // const { isSuccess, isError, isLoading, createdProduct } = newProduct;

  // useEffect(() => {
  //   if (isSuccess && createdProduct) {
  //     toast.success('Product Added Successfullly!');
  //   }
  //   if (isError) {
  //     toast.error('Something Went Wrong!');
  //   }
  // }, [isSuccess, isError, isLoading]);
  // const coloropt = [];
  // colorState.forEach((i) => {
  //   coloropt.push({
  //     label: i.title,
  //     value: i._id,
  //   });
  // });
  // const img = [];
  // imgState.forEach((i) => {
  //   img.push({
  //     public_id: i.public_id,
  //     url: i.url,
  //   });
  // });

  // useEffect(() => {
  //   formik.values.color = color ? color : ' ';
  //   formik.values.images = img;
  // }, [color, img]);

  const [isLoading, setIsLoading] = useState(false);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
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
      },
      validationSchema: yup.object({
        title: yup.string().required('Title is Required'),
        description: yup.string().required('Description is Required'),
        price: yup.number().required('Price is Required'),
        brand: yup.string().required('Brand is Required'),
        category: yup.string().required('Category is Required'),
        tags: yup.string().required('Tag is Required'),
        color: yup
          .array()
          .min(1, 'Pick at least one color')
          .required('Color is Required'),
        quantity: yup.number().required('Quantity is Required'),
      }),
      onSubmit: (values) => {
        console.log('values > ', values);
      },
    });

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
            handleChange={handleChange}
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
            value={values.color}
            errorMessage={errors.color}
            errorClassName="!relative bottom-0"
            id="color"
            name="color"
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

          <div className="">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>

          <Button
            type="submit"
            className="!w-full col-span-2 !py-3 !font-public-sans !text-base !font-semibold !leading-140 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
          >
            Add Product
          </Button>
        </fieldset>
      </form>
    </Layout>
  );
};

export default memo(Addproduct);
