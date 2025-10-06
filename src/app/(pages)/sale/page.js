'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Star, Heart, Truck, Shield, Clock, Tag } from 'lucide-react';

export default function SalePage() {
  const [sortBy, setSortBy] = useState('popular');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const saleProducts = [
    {
      id: 1,
      name: 'Kanjivaram Silk Saree',
      price: '₹12,999',
      originalPrice: '₹16,999',
      discount: '23% off',
      image: '/product-1.jpg',
      rating: 4.8,
      reviews: 124,
      isNew: true,
      category: 'sarees',
      tags: ['Bestseller', 'Limited Stock'],
      colors: ['#dc2626', '#000000', '#f59e0b']
    },
    {
      id: 2,
      name: 'Banarasi Silk Saree',
      price: '₹9,999',
      originalPrice: '₹13,999',
      discount: '28% off',
      image: '/product-2.jpg',
      rating: 4.9,
      reviews: 89,
      isNew: false,
      category: 'sarees',
      tags: ['Handwoven'],
      colors: ['#7c3aed', '#000000', '#dc2626']
    },
    {
      id: 3,
      name: 'Designer Anarkali Suit',
      price: '₹6,999',
      originalPrice: '₹8,999',
      discount: '22% off',
      image: '/product-3.jpg',
      rating: 4.7,
      reviews: 67,
      isNew: true,
      category: 'suits',
      tags: ['New Arrival'],
      colors: ['#ec4899', '#3b82f6', '#000000']
    },
    {
      id: 4,
      name: 'Party Wear Lehenga',
      price: '₹15,999',
      originalPrice: '₹19,999',
      discount: '20% off',
      image: '/product-4.jpg',
      rating: 4.9,
      reviews: 156,
      isNew: false,
      category: 'lehengas',
      tags: ['Bestseller'],
      colors: ['#000000', '#dc2626', '#f59e0b']
    },
    {
      id: 5,
      name: 'Chanderi Cotton Saree',
      price: '₹4,999',
      originalPrice: '₹6,999',
      discount: '28% off',
      image: '/product-5.jpg',
      rating: 4.6,
      reviews: 78,
      isNew: true,
      category: 'sarees',
      tags: ['Lightweight'],
      colors: ['#10b981', '#ffffff', '#f59e0b']
    },
    {
      id: 6,
      name: 'Designer Lehenga Choli',
      price: '₹18,999',
      originalPrice: '₹24,999',
      discount: '24% off',
      image: '/product-6.jpg',
      rating: 4.8,
      reviews: 203,
      isNew: false,
      category: 'lehengas',
      tags: ['Heavy Work'],
      colors: ['#7c3aed', '#dc2626', '#000000']
    },
    {
      id: 7,
      name: 'Printed Palazzo Suit',
      price: '₹3,999',
      originalPrice: '₹5,999',
      discount: '33% off',
      image: '/product-7.jpg',
      rating: 4.5,
      reviews: 45,
      isNew: true,
      category: 'suits',
      tags: ['Casual Wear'],
      colors: ['#3b82f6', '#ec4899', '#10b981']
    },
    {
      id: 8,
      name: 'Silk Blend Saree',
      price: '₹7,999',
      originalPrice: '₹11,999',
      discount: '33% off',
      image: '/product-8.jpg',
      rating: 4.7,
      reviews: 92,
      isNew: false,
      category: 'sarees',
      tags: ['Everyday Wear'],
      colors: ['#f59e0b', '#000000', '#dc2626']
    }
  ];

  const categories = [
    { id: 'sarees', name: 'Sarees', count: 12 },
    { id: 'suits', name: 'Suits', count: 8 },
    { id: 'lehengas', name: 'Lehengas', count: 6 },
    { id: 'kurtas', name: 'Kurtas', count: 4 }
  ];

  const filters = {
    discount: [
      { id: '40', name: '40% and above' },
      { id: '30', name: '30% and above' },
      { id: '20', name: '20% and above' },
      { id: '10', name: '10% and above' }
    ],
    price: [
      { id: '0-5000', name: 'Under ₹5000' },
      { id: '5000-10000', name: '₹5000 - ₹10000' },
      { id: '10000-20000', name: '₹10000 - ₹20000' },
      { id: '20000', name: 'Above ₹20000' }
    ]
  };

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredProducts = saleProducts.filter(product => {
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(product.category);
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return parseInt(b.discount) - parseInt(a.discount);
      default:
        return b.reviews - a.reviews;
    }
  });

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Free Shipping',
      description: 'On orders above ₹1999'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Easy Returns',
      description: '15 days return policy'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Limited Time',
      description: 'Sale ends in 3 days'
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: 'Best Prices',
      description: 'Guaranteed best deals'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sale Header */}
      <section className="bg-gradient-to-r from-rose-600 via-red-500 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Sale ends in 3 days</span>
          </div>
          <h1 className="text-5xl font-serif font-bold mb-4">
            Festive Special Sale
          </h1>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Up to 50% off on premium collections. Don't miss out on these exclusive deals!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-lg font-semibold">Up to 50% Off</span>
            <span className="bg-white/20 px-4 py-2 rounded-lg font-semibold">Free Shipping</span>
            <span className="bg-white/20 px-4 py-2 rounded-lg font-semibold">Easy Returns</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-rose-600 mb-2">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => toggleCategory(category.id)}
                          className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          {category.name} ({category.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Discount Range */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Discount</h3>
                  <div className="space-y-2">
                    {filters.discount.map(range => (
                      <label key={range.id} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{range.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Price</h3>
                  <div className="space-y-2">
                    {filters.price.map(range => (
                      <label key={range.id} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{range.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort and Results */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <p className="text-gray-600">
                  Showing {sortedProducts.length} of {saleProducts.length} products
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option value="popular">Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                    <option value="discount">Discount %</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-64 bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center">
                      {/* Discount Badge */}
                      <div className="absolute top-3 left-3 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {product.discount}
                      </div>

                      {/* New Badge */}
                      {product.isNew && (
                        <span className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          New
                        </span>
                      )}

                      {/* Wishlist Button */}
                      <button className="absolute top-12 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>

                      {/* Product Image Placeholder */}
                      <div className="text-center">
                        <div className="text-4xl mb-2">👗</div>
                        <p className="text-gray-500 text-sm">Product Image</p>
                      </div>

                      {/* Color Options */}
                      <div className="absolute bottom-3 left-3 flex gap-1">
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Product Name */}
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-gray-900">
                            {product.price}
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                        <button className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors duration-200 text-sm font-semibold">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              {sortedProducts.length > 0 && (
                <div className="text-center mt-12">
                  <button className="border border-rose-600 text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-600 hover:text-white transition-colors duration-200">
                    Load More Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Additional 10% Off on Orders Above ₹5000
          </h2>
          <p className="text-amber-100 text-lg mb-6">
            Use code: <span className="font-mono font-bold">FESTIVE10</span>
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Shop All Products
          </Link>
        </div>
      </section>
    </div>
  );
}