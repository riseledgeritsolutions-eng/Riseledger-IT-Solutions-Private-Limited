import React from 'react';
import { products } from '../constants';
import ProductCard from './ProductCard';
import styles from '../style';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section id="shop" className={`${styles.paddingY} ${styles.flexCenter} bg-white`}>
      <div className={`${styles.boxWidth}`}>
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-darkGray mb-3">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto">
            Discover our handpicked selection of the best products from our substores
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center mt-10">
          <div className='relative inline-block'>
            <button
              disabled
              className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold text-[15px] cursor-not-allowed shadow-md"
            >
              View All Products
            </button>
            <span className='absolute -top-2 -right-2 bg-primary text-white text-[11px] px-2 py-0.5 rounded-full font-semibold'>
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
