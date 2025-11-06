import React from 'react';

const ProductCard = ({ product }) => {
  const { name, description, price, originalPrice, discount, rating, reviews, image, tags } = product;

  return (
    <div className="product-card bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-lightGray relative">
      {/* Coming Soon Badge */}
      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-[11px] font-semibold z-10">
        Coming Soon
      </div>

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          -{discount}%
        </div>
      )}

      {/* Product Image */}
      <div className="relative w-full h-48 mb-4 flex items-center justify-center bg-lightGray rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg text-darkGray line-clamp-1">
          {name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-primary text-sm">★</span>
            <span className="text-sm font-medium text-darkGray ml-1">{rating}</span>
          </div>
          <span className="text-xs text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Tags */}
        <div className="flex gap-1 flex-wrap">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-dimOrange text-primary px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl font-bold text-primary">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button - Disabled */}
        <button
          disabled
          className='w-full mt-4 py-3 rounded-lg font-semibold bg-gray-300 text-gray-500 cursor-not-allowed'
        >
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
