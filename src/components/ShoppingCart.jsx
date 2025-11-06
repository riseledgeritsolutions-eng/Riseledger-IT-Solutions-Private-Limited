import React from 'react';
import { useNavigate } from 'react-router-dom';
import { close } from '../assets';

const ShoppingCart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const navigate = useNavigate();
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const calculateItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-lightGray">
          <h2 className="text-2xl font-bold text-darkGray">
            Shopping Cart ({calculateItemsCount()})
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-lightGray rounded-full transition-all">
            <img src={close} alt="Close" className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-darkGray mb-2">Your cart is empty</h3>
              <p className="text-gray-500">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-lightGray rounded-lg">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-darkGray text-sm mb-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold text-lg mb-2">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-white rounded border border-gray-300 hover:border-primary transition-all"
                      >
                        -
                      </button>
                      <span className="font-semibold text-darkGray">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-white rounded border border-gray-300 hover:border-primary transition-all"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto text-red-500 text-sm font-medium hover:text-red-700 transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-lightGray p-6 space-y-4">
            {/* Total */}
            <div className="flex justify-between items-center text-lg">
              <span className="font-semibold text-darkGray">Total:</span>
              <span className="font-bold text-2xl text-primary">${calculateTotal()}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                navigate('/checkout');
                onClose();
              }}
              className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 shadow-md"
            >
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <button
              onClick={onClose}
              className="w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-dimOrange transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
