import React from 'react';
import { substores } from '../constants';

const SubStoreCard = ({ substore, index }) => {
  const { name, description, category, rating, productsCount, featured, url, logo, disabled } = substore;

  const borderColors = [
    'border-teal-200 hover:border-teal-400',
    'border-purple-200 hover:border-purple-400',
    'border-blue-200 hover:border-blue-400'
  ]

  const bgGradients = [
    'from-teal-50 to-cyan-50',
    'from-purple-50 to-pink-50',
    'from-blue-50 to-indigo-50'
  ]

  return (
    <div className={`group relative bg-gradient-to-br ${bgGradients[index % 3]} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-2 ${borderColors[index % 3]}`}>
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full rounded-tr-2xl"></div>

      {featured && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-tertiary text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-10">
          ⭐ Featured
        </div>
      )}

      {/* Store Logo */}
      <div className="relative w-28 h-28 mx-auto mb-6 bg-white rounded-2xl shadow-md flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform p-4">
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-contain"
          />
        ) : (
          <svg className="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        )}
      </div>

      {/* Store Info */}
      <div className="text-center relative z-10">
        <h3 className="font-poppins font-bold text-xl text-darkGray mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">{category}</span>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4 min-h-[3rem]">
          {description}
        </p>

        {/* Rating & Products */}
        <div className="flex items-center justify-center gap-4 mb-5 text-sm">
          <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-darkGray">{rating}</span>
          </div>
          <div className="bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <span className="font-semibold text-gray-700">{productsCount}+ Items</span>
          </div>
        </div>

        {/* Visit Store Button */}
        {disabled ? (
          <button
            disabled
            className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-not-allowed opacity-60"
          >
            Coming Soon
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </button>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn w-full bg-gradient-to-r from-primary to-tertiary text-white py-3 rounded-xl font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Visit Store
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const SubStores = () => {
  const featuredSubstores = substores.filter(store => store.featured);

  return (
    <section id="substores" className="py-20 px-6 sm:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-primary font-semibold text-sm">Our Clients</span>
          </div>

          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-darkGray mb-6">
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Leading E-Commerce Stores
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Seamlessly collect payments from multiple stores using Easypaisa & JazzCash. Our trusted clients rely on us for secure, hassle-free transactions.
          </p>
        </div>

        {/* Substores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSubstores.map((substore, index) => (
            <SubStoreCard key={substore.id} substore={substore} index={index} />
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default SubStores;
