import React from 'react';
import { substores } from '../constants';
import styles from '../style';

const SubStoreCard = ({ substore }) => {
  const { name, description, category, rating, productsCount, featured, url, logo } = substore;

  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-lightGray relative">
      {featured && (
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Store Image */}
      <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-white flex items-center justify-center overflow-hidden">
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-contain"
          />
        ) : (
          <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        )}
      </div>

      {/* Store Info */}
      <div className="text-center">
        <h3 className="font-bold text-[17px] text-darkGray mb-2">{name}</h3>
        <p className="text-[13px] text-primary font-medium mb-2">{category}</p>
        <p className="text-gray-500 text-[13px] mb-4">{description}</p>

        {/* Rating */}
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center gap-1">
            <span className="text-primary text-[14px]">★</span>
            <span className="text-[13px] font-semibold text-darkGray">{rating}</span>
          </div>
        </div>

        {/* Visit Store Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary text-white py-2 rounded-lg font-semibold text-[14px] hover:bg-secondary transition-all duration-300 block"
        >
          Visit Store
        </a>
      </div>
    </div>
  );
};

const SubStores = () => {
  const featuredSubstores = substores.filter(store => store.featured);

  return (
    <section id="substores" className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} bg-lightGray`}>
      <div className={`${styles.boxWidth}`}>
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-darkGray mb-3">
            Explore Our <span className="text-gradient">Substores</span>
          </h2>
          <p className="text-gray-500 text-[14px] sm:text-[15px] max-w-2xl mx-auto">
            Shop from our curated collection of trusted sellers and brands
          </p>
        </div>

        {/* Substores Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredSubstores.map((substore) => (
            <SubStoreCard key={substore.id} substore={substore} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SubStores;
