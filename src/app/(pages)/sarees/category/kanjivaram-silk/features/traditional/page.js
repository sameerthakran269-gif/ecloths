'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Share2 } from 'lucide-react';

export default function TraditionalKanjivaramPage() {
  const [wishlist, setWishlist] = useState([]);

  const traditionalProducts = [
    {
      id: 1,
      name: 'Traditional Red Kanjivaram',
      price: '₹34,999',
      originalPrice: '₹42,999',
      image: '/kanjivaram-traditional-1.jpg',
      rating: 4.9,
      reviews: 156,
      color: 'Red',
      description: 'Classic red with intricate temple border and gold zari work',
      features: ['Pure Silk', 'Gold Zari', 'Temple Border']
    },
    {
      id: 2,
      name: 'Green Traditional Kanjivaram',
      price: '₹28,999',
      originalPrice: '₹35,999',
      image: '/kanjivaram-traditional-2.jpg',
      rating: 4.8,
      reviews: 89,
      color: 'Green',
      description: 'Emerald green with traditional checks pattern',
      features: ['Pure Silk', 'Traditional Checks', 'Contrast Border']
    },
    {
      id: 3,
      name: 'Cream & Gold Kanjivaram',
      price: '₹35,999',
      originalPrice: '₹44,999',
      image: '/kanjivaram-traditional-3.jpg',
      rating: 4.9,
      reviews: 128,
      color: 'Cream',
      description: 'Elegant cream with extensive gold zari work',
      features: ['Heavy Zari', 'Traditional Motifs', 'Bridal']
    }
  ];

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/sarees" className="text-gray-500 hover:text-rose-600">
              Sarees
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <Link href="/sarees/category/kanjivaram-silk" className="text-gray-500 hover:text-rose-600">
              Kanjivaram Silk
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Traditional</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-100 to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Traditional Kanjivaram
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Timeless classics with traditional motifs, temple borders, and authentic gold zari work. 
              Each piece celebrates the rich heritage of Kanchipuram weaving.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🏛️</span>
              </div>
              <h3 className="font-semibold text-gray-900">Temple Borders</h3>
              <p className="text-sm text-gray-600 mt-1">Inspired by South Indian temple architecture</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="font-semibold text-gray-900">Gold Zari</h3>
              <p className="text-sm text-gray-600 mt-1">Authentic gold and silver thread work</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🧵</span>
              </div>
              <h3 className="font-semibold text-gray-900">Handwoven</h3>
              <p className="text-sm text-gray-600 mt-1">Crafted by master weavers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Traditional Collection
            </h2>
            <p className="text-gray-600">
              {traditionalProducts.length} exquisite traditional pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traditionalProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                  <div className="text-4xl">👘</div>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                      wishlist.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 hover:bg-white text-gray-600'
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id) ? 'fill-current' : ''
                      }`}
                    />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {product.name}
                    </h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">
                      Color: {product.color}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900">
                        {product.price}
                      </span>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 text-sm font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Features Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                What Makes Traditional Kanjivaram Special
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🏛️</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Temple Borders</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Intricate borders inspired by South Indian temple architecture with motifs of peacocks, elephants, and divine figures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✨</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Authentic Zari</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Real gold and silver zari work that maintains its shine for generations, woven using traditional techniques.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🎨</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Classic Colors</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Traditional color combinations like red-gold, green-yellow, and cream-maroon that never go out of style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-6xl">🪡</div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Kanjivaram */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/sarees/category/kanjivaram-silk"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Kanjivaram Collection
          </Link>
        </div>
      </section>
    </div>
  );
}