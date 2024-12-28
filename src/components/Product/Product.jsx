import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductApiJsonSingleCardShow from '../../ProductApiJsonSingleCardShowOne/ProductApiJsonSingleCardShow';

const Product = () => {
  const productApiJsonReceves = useLoaderData();

  // যদি productApiJsonReceves একটি অবজেক্ট হয়, Object.values ব্যবহার করে অ্যারে আকারে রূপান্তর করবো
  const products = Array.isArray(productApiJsonReceves)
    ? productApiJsonReceves
    : Object.values(productApiJsonReceves);

  return (
    <div className="px-2 z-0">
      <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold my-2 lg:my-4 underline underline-offset-8 underline-red">
        <span className="text-2xl md:text-5xl text-green-500">B</span>est Product
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          products.map((cardSingle, index) => (
            <ProductApiJsonSingleCardShow
              key={cardSingle.id || index} // id ব্যবহার করা, যদি না থাকে তবে index ব্যবহার করা
              cardSingle={cardSingle}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Product;
