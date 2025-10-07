'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Share2 } from 'lucide-react';

export default function TempleBorderKanjivaramPage() {
  const [wishlist, setWishlist] = useState([]);

  const templeBorderProducts = [
    {
      id: 1,
      name: 'Red Temple Border Kanjivaram',
      price: '₹36,999',
      originalPrice: '₹45,999',
      image: '/kanjivaram-temple-1.jpg',
      rating: 4.9,
      reviews: 203,
      color: 'Red',
      borderStyle: 'Traditional Temple',
      description: 'Grand red silk with elaborate temple border and gold zari',
      features: ['Heavy Temple Border', 'Gold Zari', 'Peacock Motifs'],
      isBestseller: true
    },
    {
      id: 2,
      name: 'Royal Blue Temple Border',
      price: '₹32,999',
      originalPrice: '₹39,999',
      image: '/kanjivaram-temple-2.jpg',
      rating: 4.8,
      reviews: 145,
      color: 'Blue',
      borderStyle: 'Elephant Temple',
      description: 'Deep blue with elephant motifs and intricate temple architecture',
      features: ['Elephant Motifs', 'Temple Architecture', 'Pure Silk'],
      isBestseller: true
    },
    {
      id: 3,
      name: 'Purple Temple Special',
      price: '₹38,999',
      originalPrice: '₹47,999',
      image: '/kanjivaram-temple-3.jpg',
      rating: 4.9,
      reviews: 178,
      color: 'Purple',
      borderStyle: 'Floral Temple',
      description: 'Regal purple with floral temple border and detailed zari work',
      features: ['Floral Temple', 'Heavy Zari', 'Bridal Collection'],
      isNew: true
    },
    {
      id: 4,
      name: 'Green Temple Border',
      price: '₹29,999',
      originalPrice: '₹36,999',
      image: '/kanjivaram-temple-4.jpg',
      rating: 4.7,
      reviews: 112,
      color: 'Green',
      borderStyle: 'Traditional Temple',
      description: 'Emerald green with classic temple border patterns',
      features: ['Classic Temple', 'Contrast Border', 'Traditional'],
      isNew: true
    }
  ];

  const templeMotifs = [
    {
      name: 'Peacock Motifs',
      description: 'Symbol of beauty and grace in temple architecture',
      icon: '🦚'
    },
    {
      name: 'Elephant Motifs',
      description: 'Representing strength and royal heritage',
      icon: '🐘'
    },
    {
      name: 'Floral Patterns',
      description: 'Intricate floral designs from temple walls',
      icon: '🌺'
    },
    {
      name: 'Divine Figures',
      description: 'Inspired by temple sculptures and deities',
      icon: '🙏'
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
            <span className="text-rose-600 font-medium">Temple Border</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Temple Border Kanjivaram
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Inspired by the magnificent architecture of South Indian temples. 
            Each border tells a story of divine craftsmanship and ancient heritage.
          </p>
        </div>
      </section>

      {/* Temple Motifs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Temple Border Motifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templeMotifs.map((motif, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{motif.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{motif.name}</h3>
                <p className="text-sm text-gray-600">{motif.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Temple Border Collection
            </h2>
            <p className="text-gray-600 text-lg">
              {templeBorderProducts.length} exquisite temple border pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {templeBorderProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center">
                  <div className="text-4xl">🏛️</div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    {product.isNew && (
                      <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        New
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Bestseller
                      </span>
                    )}
                  </div>

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
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                      {product.name}
                    </h3>
                    <button className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-2">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-3">
                    <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded">
                      {product.borderStyle}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-rose-100 text-rose-800 px-2 py-1 rounded text-xs"
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
                      {product.color}
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
                    <button className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors duration-200 text-sm font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Border Significance */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-rose-100 to-red-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-6xl">🛕</div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Significance of Temple Borders
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">📜</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Historical Heritage</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Designs inspired by ancient temple architecture dating back to Pallava and Chola dynasties.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">⚡</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Divine Connection</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Each motif carries spiritual significance and blessings from temple deities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🎨</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Artistic Excellence</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Requires master weavers with specialized skills in temple border patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions for Temple Borders */}
      <section className="py-12 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center text-gray-900 mb-8">
            Caring for Temple Border Sarees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🧼</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Dry Clean</h3>
              <p className="text-sm text-gray-600">Essential for preserving intricate zari work on temple borders</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📦</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flat Storage</h3>
              <p className="text-sm text-gray-600">Store flat to maintain border shape and prevent creases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Kanjivaram */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/sarees/category/kanjivaram-silk"
            className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Kanjivaram Collection
          </Link>
        </div>
      </section>
    </div>
  );
}