'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Share2 } from 'lucide-react';

export default function TempleBorderKanjivaramPage() {
  const [wishlist, setWishlist] = useState([]);

  const templeBorderProducts = [
    {
      id: 1,
      name: 'Royal Red Temple Border',
      price: '₹39,999',
      originalPrice: '₹48,999',
      image: '/temple-border-1.jpg',
      rating: 4.9,
      reviews: 203,
      color: 'Deep Red',
      description: 'Magnificent deep red with elaborate temple border and gold zari',
      features: ['Heavy Temple Border', 'Pure Silk', 'Gold Zari'],
      borderType: 'Gopuram Border'
    },
    {
      id: 2,
      name: 'Emerald Temple Kanjivaram',
      price: '₹32,999',
      originalPrice: '₹39,999',
      image: '/temple-border-2.jpg',
      rating: 4.8,
      reviews: 134,
      color: 'Emerald Green',
      description: 'Vibrant green with intricate temple architecture motifs',
      features: ['Temple Architecture', 'Contrast Pallu', 'Pure Silk'],
      borderType: 'Pillar Border'
    },
    {
      id: 3,
      name: 'Navy Blue Temple Design',
      price: '₹36,999',
      originalPrice: '₹44,999',
      image: '/temple-border-3.jpg',
      rating: 4.9,
      reviews: 178,
      color: 'Navy Blue',
      description: 'Rich navy blue with golden temple borders and divine motifs',
      features: ['Divine Motifs', 'Heavy Zari', 'Bridal Collection'],
      borderType: 'Divine Figure Border'
    },
    {
      id: 4,
      name: 'Maroon Temple Special',
      price: '₹41,999',
      originalPrice: '₹51,999',
      image: '/temple-border-4.jpg',
      rating: 5.0,
      reviews: 95,
      color: 'Royal Maroon',
      description: 'Regal maroon with extensive temple border work',
      features: ['Extra Wide Border', 'Antique Zari', 'Pure Silk'],
      borderType: 'Gopuram Border'
    },
    {
      id: 5,
      name: 'Saffron Temple Kanjivaram',
      price: '₹29,999',
      originalPrice: '₹36,999',
      image: '/temple-border-5.jpg',
      rating: 4.7,
      reviews: 112,
      color: 'Saffron',
      description: 'Traditional saffron with temple pillar borders',
      features: ['Temple Pillars', 'Traditional Colors', 'Festival Wear'],
      borderType: 'Pillar Border'
    },
    {
      id: 6,
      name: 'Purple Temple Elegance',
      price: '₹37,999',
      originalPrice: '₹45,999',
      image: '/temple-border-6.jpg',
      rating: 4.8,
      reviews: 156,
      color: 'Royal Purple',
      description: 'Luxurious purple with intricate temple carvings border',
      features: ['Temple Carvings', 'Heavy Silk', 'Wedding Collection'],
      borderType: 'Sculpture Border'
    }
  ];

  const borderTypes = [
    {
      type: 'Gopuram Border',
      description: 'Inspired by temple tower architecture with intricate gopuram designs',
      icon: '🏛️'
    },
    {
      type: 'Pillar Border',
      description: 'Features traditional temple pillars with carved motifs',
      icon: '🪨'
    },
    {
      type: 'Divine Figure Border',
      description: 'Borders adorned with gods, goddesses, and celestial beings',
      icon: '🙏'
    },
    {
      type: 'Sculpture Border',
      description: 'Intricate temple sculpture and carving patterns',
      icon: '🗿'
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
      <section className="bg-gradient-to-r from-amber-100 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Temple Border Kanjivaram
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exquisite sarees featuring intricate temple borders inspired by South Indian temple architecture. 
              Each border tells a story of divine craftsmanship and cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Border Types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Types of Temple Borders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the different styles of temple borders, each with unique symbolism and craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {borderTypes.map((border, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{border.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {border.type}
                </h3>
                <p className="text-sm text-gray-600">
                  {border.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Temple Border Collection
            </h2>
            <p className="text-gray-600">
              {templeBorderProducts.length} magnificent temple border pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templeBorderProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                  <div className="text-4xl">🛕</div>
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
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {product.borderType}
                    </span>
                  </div>
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

      {/* Temple Border Significance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-6xl">🏛️</div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                The Significance of Temple Borders
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🕌</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Architectural Inspiration</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Borders inspired by Dravidian temple architecture featuring gopurams, pillars, and intricate carvings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🙏</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Divine Symbolism</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Motifs of gods, goddesses, and celestial beings that carry spiritual significance and blessings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">⚡</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Technical Mastery</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Requires exceptional weaving skill to create symmetrical temple patterns with perfect precision.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🎭</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Cultural Heritage</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Each design preserves centuries-old traditions and stories from South Indian temple culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Caring for Temple Border Kanjivarams
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🧼</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dry Clean Only</h3>
              <p className="text-sm text-gray-600">Preserve the intricate zari work with professional dry cleaning</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📦</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proper Storage</h3>
              <p className="text-sm text-gray-600">Store in muslin cloth to protect temple borders from damage</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Handle with Care</h3>
              <p className="text-sm text-gray-600">Avoid sharp objects that can snag the delicate temple motifs</p>
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