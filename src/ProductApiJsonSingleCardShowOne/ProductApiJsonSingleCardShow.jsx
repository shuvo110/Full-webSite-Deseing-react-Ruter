import React from 'react';
import { Link } from 'react-router-dom';

const ProductApiJsonSingleCardShow = ({ cardSingle }) => {
  const { image, title, description, price, id } = cardSingle;

  // নিরাপদভাবে slice ব্যবহার করা
  const truncatedTitle = title ? title.slice(0, 20) : 'No Title';
  const truncatedDescription = description ? description.slice(0, 150) : 'No Description';

  return (
    <div>
      <div className="border p-3 md:p-5 hover:border-black">
        <img
          src={image} alt={title || 'Product Image'} className="w-[180px] h-[230px] m-auto bg-slate-400 p-1 rounded-lg"
        />
        <div className="mt-4">
          <h1>
            <span className="text-lg font-bold font-serif text-green-500">Title : </span>
            <span className="text-base">{truncatedTitle}...</span>
          </h1>
          <h2 className="my-3">
            <span className="text-lg font-bold font-serif text-red-500">Des : </span>
            <span className="text-neutral-500 italic">{truncatedDescription}....</span>
          </h2>
          <p>
            <span className="text-lg font-bold font-serif text-green-500">Price : </span>
            <span className="bg-slate-400 px-2 rounded-md">{price} $</span>
          </p>
        </div>
        <div className="bg-red-400 rounded-lg py-1 text-center mt-5 font-mono">
          <Link to={`/Product/${id}`}>
            <button>Product Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductApiJsonSingleCardShow;
