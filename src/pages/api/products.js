import { getCookie } from '@/constants';
import axios from 'axios';

// add products By admin
export const addProductHandler = async (data) => {
  const { title, imageUrl, description, price } = data;

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/add-product`,
    {
      title,
      imageUrl,
      description,
      price,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};

// get all products
export const getProductsHandler = async () => {
  // if (process.env.NEXT_PUBLIC_USER === 'ADMIN' && true) {
  //   const res = await axios.get(
  //     `${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/products`
  //   );
  //   return res.data;
  // }
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/products`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie()}`,
      },
      withCredentials: true,
    }
  );
  return res.data;
};

// get product by product id
export const getProductByIdHandler = async (productId) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/products/${productId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};

export const addToCart = async (productId) => {
  const body = { productId };

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/cart`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};

export const getEditProduct = async (productId) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/edit-product/${productId}?edit=true`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};

export const searchProducts = async (minPrice, maxPrice, title) => {
  const body = { minPrice, maxPrice, title };

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/products`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};

// edit product by admin
export const postUpdateProduct = async (product) => {
  const { imageUrl, price, description, title, _id } = product;
  const body = { id: _id, price, imageUrl, description, title };

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/update-product`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};

// delete product by admin
export const deleteProduct = async (productId) => {
  const body = { productId };

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/delete-product`,
    body,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie()}`,
      },
      withCredentials: true,
    }
  );

  return res.data;
};
