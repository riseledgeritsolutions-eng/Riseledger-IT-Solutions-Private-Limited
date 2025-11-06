import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products, categories } from '../constants';
import ProductCard from '../components/ProductCard';
import styles from '../style';

const Shop = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
      default:
        return b.featured - a.featured;
    }
  });

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-orange-gradient text-white">
        <div className={`${styles.paddingX} py-12`}>
          <div className={`${styles.boxWidth} mx-auto text-center`}>
            <h1 className="text-3xl font-bold mb-3">Shop All Products</h1>
            <p className="text-[15px] opacity-90">Discover amazing products from trusted sellers</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className={`${styles.paddingX} py-8 bg-lightGray`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary text-[15px]"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary bg-white text-darkGray text-[14px] font-medium cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
                <h2 className="text-[18px] font-bold text-darkGray mb-6">Categories</h2>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left px-4 py-2.5 rounded-lg font-medium text-[14px] transition-all ${
                      selectedCategory === 'All'
                        ? 'bg-primary text-white'
                        : 'bg-lightGray text-darkGray hover:bg-dimOrange'
                    }`}
                  >
                    All Products ({products.length})
                  </button>
                  {categories.map((category) => {
                    const count = products.filter(p => p.category === category.name).length;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg font-medium text-[14px] transition-all ${
                          selectedCategory === category.name
                            ? 'bg-primary text-white'
                            : 'bg-lightGray text-darkGray hover:bg-dimOrange'
                        }`}
                      >
                        {category.name} ({count})
                      </button>
                    );
                  })}
                </div>

                {/* Filters Info */}
                <div className="mt-8 p-4 bg-dimOrange rounded-lg">
                  <h3 className="font-semibold text-[15px] text-darkGray mb-2">Free Shipping</h3>
                  <p className="text-[13px] text-gray-600">On all orders over $50</p>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-darkGray">
                  {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                  <span className="text-gray-500 font-normal text-[15px] ml-2">
                    ({sortedProducts.length} items)
                  </span>
                </h2>
              </div>

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <div key={product.id} onClick={() => handleProductClick(product.id)}>
                      <ProductCard
                        product={product}
                        onAddToCart={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-darkGray mb-2">No products found</h3>
                  <p className="text-gray-500 text-[14px]">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
