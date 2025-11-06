import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../constants';
import styles from '../style';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-darkGray mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-[15px] hover:bg-secondary transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < selectedQuantity; i++) {
      onAddToCart(product);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className={`${styles.paddingX} py-4 bg-lightGray`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex items-center gap-2 text-[13px] text-gray-600">
            <span onClick={() => navigate('/')} className="cursor-pointer hover:text-primary">Home</span>
            <span>/</span>
            <span onClick={() => navigate('/shop')} className="cursor-pointer hover:text-primary">Shop</span>
            <span>/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-lightGray rounded-2xl p-12 flex items-center justify-center h-[500px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-64 h-64 object-contain"
                />
              </div>
              {product.discount > 0 && (
                <div className="absolute top-6 right-6 bg-primary text-white px-4 py-2 rounded-full text-lg font-bold">
                  -{product.discount}% OFF
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-[13px] text-primary font-semibold bg-dimOrange px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-darkGray mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < Math.floor(product.rating) ? 'text-primary' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-[16px] font-semibold text-darkGray">{product.rating}</span>
                <span className="text-gray-500 text-[14px]">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="text-green-600 font-semibold text-[15px]">✓ In Stock</span>
                ) : (
                  <span className="text-red-600 font-semibold text-[15px]">✗ Out of Stock</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex gap-2 mb-8">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[13px] bg-lightGray text-darkGray px-3 py-1.5 rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="text-darkGray font-semibold mb-3 block text-[15px]">Quantity:</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                    className="w-10 h-10 bg-lightGray rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all"
                  >
                    -
                  </button>
                  <span className="text-xl font-bold text-darkGray w-12 text-center">{selectedQuantity}</span>
                  <button
                    onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                    className="w-10 h-10 bg-lightGray rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 rounded-lg font-bold text-[15px] transition-all ${
                    product.inStock
                      ? 'bg-primary text-white hover:bg-secondary shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Add to Cart
                </button>
                <button
                  disabled={!product.inStock}
                  className={`flex-1 py-3 rounded-lg font-bold text-[15px] transition-all ${
                    product.inStock
                      ? 'border-2 border-primary text-primary hover:bg-dimOrange'
                      : 'border-2 border-gray-300 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Buy Now
                </button>
              </div>

              {/* Seller Info */}
              <div className="mt-8 p-5 bg-lightGray rounded-lg">
                <h3 className="font-semibold text-[15px] text-darkGray mb-2">Sold By:</h3>
                <p className="text-primary font-bold text-[17px]">{product.substore}</p>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-12">
            <div className="border-b border-gray-200 mb-6">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-3 px-2 font-semibold text-[15px] transition-all ${
                    activeTab === 'description'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-3 px-2 font-semibold text-[15px] transition-all ${
                    activeTab === 'reviews'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  Reviews ({product.reviews})
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-3 px-2 font-semibold text-[15px] transition-all ${
                    activeTab === 'shipping'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  Shipping Info
                </button>
              </div>
            </div>

            <div className="py-4">
              {activeTab === 'description' && (
                <div className="text-gray-600 text-[15px] leading-relaxed">
                  <p className="mb-4">{product.description}</p>
                  <p>This high-quality {product.category.toLowerCase()} product is carefully selected from our trusted seller {product.substore}. With a rating of {product.rating} stars from {product.reviews} verified customers, you can shop with confidence.</p>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  <div className="bg-lightGray p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-[14px]">
                        JD
                      </div>
                      <div>
                        <h4 className="font-semibold text-[15px] text-darkGray">John Doe</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-primary text-[14px]">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-[14px]">Excellent product! Exactly as described and shipped quickly.</p>
                  </div>
                </div>
              )}
              {activeTab === 'shipping' && (
                <div className="text-gray-600 text-[15px] leading-relaxed">
                  <ul className="space-y-2">
                    <li>• Free shipping on orders over $50</li>
                    <li>• Standard delivery: 5-7 business days</li>
                    <li>• Express delivery: 2-3 business days</li>
                    <li>• 30-day return policy</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-darkGray mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    onClick={() => navigate(`/product/${relatedProduct.id}`)}
                    className="bg-white border border-lightGray rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all"
                  >
                    <div className="bg-lightGray rounded-lg p-4 mb-3 h-32 flex items-center justify-center">
                      <img src={relatedProduct.image} alt={relatedProduct.name} className="w-20 h-20 object-contain" />
                    </div>
                    <h3 className="font-semibold text-[15px] text-darkGray mb-2 line-clamp-1">{relatedProduct.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[17px] font-bold text-primary">${relatedProduct.price}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-[13px] text-gray-400 line-through">${relatedProduct.originalPrice}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
