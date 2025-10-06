'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag, Heart, Truck, Shield, RefreshCw } from 'lucide-react';



export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Banarasi Silk Saree',
      price: 8499,
      originalPrice: 9999,
      size: 'Free Size',
      color: 'Red',
      image: '/api/placeholder/120/160',
      quantity: 1,
      category: 'sarees'
    },
    {
      id: '2',
      name: 'Designer Anarkali Suit',
      price: 5999,
      originalPrice: 6999,
      size: 'M',
      color: 'Pink',
      image: '/api/placeholder/120/160',
      quantity: 2,
      category: 'suits'
    },
    {
      id: '3',
      name: 'Cotton Printed Saree',
      price: 3299,
      size: 'Free Size',
      color: 'Blue',
      image: '/api/placeholder/120/160',
      quantity: 1,
      category: 'sarees'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const moveToWishlist = (item) => {
    // Here you would typically make an API call
    removeItem(item.id);
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = cartItems.reduce((total, item) => 
    total + ((item.originalPrice ? item.originalPrice - item.price : 0) * item.quantity), 0
  );
  const shipping = subtotal > 1999 ? 0 : 99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={48} className="text-rose-600" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to discover our beautiful collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sarees"
                className="inline-flex items-center px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-medium"
              >
                Explore Sarees
              </Link>
              <Link
                href="/suits"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Browse Suits
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-600 mt-2">{cartItems.length} items in your cart</p>
            </div>
            <Link
              href="/sarees"
              className="hidden sm:flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-medium"
            >
              <Plus size={16} />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Cart Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-600">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Product Image & Info */}
                      <div className="flex items-start space-x-4 md:flex-1 md:col-span-5">
                        <div className="w-20 h-24 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link 
                            href={`/${item.category}/${item.id}`}
                            className="font-medium text-gray-900 hover:text-rose-600 line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-sm text-gray-600">Color: {item.color}</span>
                            <span className="text-sm text-gray-600">Size: {item.size}</span>
                          </div>
                          <div className="flex items-center space-x-4 mt-3 md:hidden">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <div className="text-lg font-semibold text-gray-900">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price - Desktop */}
                      <div className="hidden md:flex md:col-span-2 justify-center">
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">₹{item.price.toLocaleString()}</div>
                          {item.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              ₹{item.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Quantity - Desktop */}
                      <div className="hidden md:flex md:col-span-3 justify-center">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-12 text-center font-medium border border-gray-300 rounded py-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Total - Desktop */}
                      <div className="hidden md:flex md:col-span-2 justify-center items-center space-x-4">
                        <div className="text-lg font-semibold text-gray-900">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => moveToWishlist(item)}
                            className="p-1 text-gray-400 hover:text-rose-600 transition-colors"
                            title="Move to Wishlist"
                          >
                            <Heart size={16} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-gray-400 hover:text-rose-600 transition-colors"
                            title="Remove Item"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Mobile Actions */}
                      <div className="flex justify-between items-center md:hidden">
                        <button
                          onClick={() => moveToWishlist(item)}
                          className="flex items-center space-x-1 text-gray-600 hover:text-rose-600 text-sm"
                        >
                          <Heart size={14} />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center space-x-1 text-gray-600 hover:text-rose-600 text-sm"
                        >
                          <X size={14} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <RefreshCw size={16} />
                    <span>All items in cart are reserved for 60 minutes</span>
                  </div>
                  <Link
                    href="/sarees"
                    className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-medium"
                  >
                    <Plus size={16} />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <Truck className="mx-auto text-rose-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders above ₹1999</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <Shield className="mx-auto text-rose-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% secure payment</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <RefreshCw className="mx-auto text-rose-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">Easy Returns</h3>
                <p className="text-sm text-gray-600">15-day return policy</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-serif font-bold text-gray-900">Order Summary</h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>

                {subtotal < 1999 && (
                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                    <p className="text-sm text-rose-700 text-center">
                      Add ₹{(1999 - subtotal).toLocaleString()} more for free shipping!
                    </p>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Inclusive of all taxes</p>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200">
                <Link
                  href="/checkout"
                  className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg hover:bg-rose-700 transition-colors font-semibold text-center block"
                >
                  Proceed to Checkout
                </Link>

                <div className="mt-4 text-center">
                  <Link
                    href="/wishlist"
                    className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 text-sm font-medium"
                  >
                    <Heart size={16} />
                    <span>View Wishlist</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Promo Code */}
            <div className="bg-white rounded-lg shadow-sm mt-6 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Apply Promo Code</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <button className="px-4 py-2 border border-rose-600 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors font-medium">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}