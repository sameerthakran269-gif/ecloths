'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Share2 } from 'lucide-react';

export default function ContemporaryKanjivaramPage() {
  const [wishlist, setWishlist] = useState([]);

  const contemporaryProducts = [
    {
      id: 1,
      name: 'Pastel Pink Modern Kanjivaram',
      price: '₹24,999',
      originalPrice: '₹31,999',
      image: '/contemporary-1.jpg',
      rating: 4.7,
      reviews: 89,
      color: 'Blush Pink',
      description: 'Soft pastel pink with minimalist geometric patterns and subtle zari',
      features: ['Pastel Shades', 'Geometric Patterns', 'Lightweight'],
      style: 'Minimalist'
    },
    {
      id: 2,
      name: 'Navy & Silver Contemporary',
      price: '₹27,999',
      originalPrice: '₹34,999',
      image: '/contemporary-2.jpg',
      rating: 4.8,
      reviews: 112,
      color: 'Navy Blue',
      description: 'Deep navy with silver zari and abstract art-inspired motifs',
      features: ['Silver Zari', 'Abstract Art', 'Contemporary Borders'],
      style: 'Abstract'
    },
    {
      id: 3,
      name: 'Dusty Rose Fusion',
      price: '₹22,999',
      originalPrice: '₹28,999',
      image: '/contemporary-3.jpg',
      rating: 4.6,
      reviews: 78,
      color: 'Dusty Rose',
      description: 'Muted rose with fusion patterns blending traditional and modern elements',
      features: ['Fusion Design', 'Muted Colors', 'Office Wear'],
      style: 'Fusion'
    },
    {
      id: 4,
      name: 'Teal Ombre Kanjivaram',
      price: '₹29,999',
      originalPrice: '₹36,999',
      image: '/contemporary-4.jpg',
      rating: 4.9,
      reviews: 134,
      color: 'Teal Ombre',
      description: 'Stunning teal ombre effect with contemporary floral motifs',
      features: ['Ombre Effect', 'Floral Motifs', 'Gradient Dye'],
      style: 'Ombre'
    },
    {
      id: 5,
      name: 'Charcoal Grey Modern',
      price: '₹25,999',
      originalPrice: '₹32,999',
      image: '/contemporary-5.jpg',
      rating: 4.7,
      reviews: 95,
      color: 'Charcoal Grey',
      description: 'Sophisticated charcoal grey with metallic silver accents',
      features: ['Metallic Accents', 'Modern Palette', 'Evening Wear'],
      style: 'Modern'
    },
    {
      id: 6,
      name: 'Lavender Geometric',
      price: '₹23,999',
      originalPrice: '₹29,999',
      image: '/contemporary-6.jpg',
      rating: 4.8,
      reviews: 101,
      color: 'Lavender',
      description: 'Soft lavender with bold geometric patterns and copper zari',
      features: ['Geometric Art', 'Copper Zari', 'Contemporary'],
      style: 'Geometric'
    },
    {
      id: 7,
      name: 'Mint Green Minimalist',
      price: '₹21,999',
      originalPrice: '₹27,999',
      image: '/contemporary-7.jpg',
      rating: 4.5,
      reviews: 67,
      color: 'Mint Green',
      description: 'Fresh mint green with clean lines and minimal zari work',
      features: ['Minimalist', 'Clean Lines', 'Day Wear'],
      style: 'Minimalist'
    },
    {
      id: 8,
      name: 'Burgundy Art Deco',
      price: '₹31,999',
      originalPrice: '₹39,999',
      image: '/contemporary-8.jpg',
      rating: 4.9,
      reviews: 156,
      color: 'Burgundy',
      description: 'Rich burgundy with Art Deco patterns and rose gold zari',
      features: ['Art Deco', 'Rose Gold Zari', 'Luxury'],
      style: 'Art Deco'
    },
    {
      id: 9,
      name: 'Mustard Yellow Contemporary',
      price: '₹26,999',
      originalPrice: '₹33,999',
      image: '/contemporary-9.jpg',
      rating: 4.7,
      reviews: 88,
      color: 'Mustard Yellow',
      description: 'Vibrant mustard yellow with asymmetric borders and modern motifs',
      features: ['Asymmetric', 'Bold Colors', 'Fashion Forward'],
      style: 'Asymmetric'
    }
  ];

  const contemporaryStyles = [
    {
      style: 'Minimalist',
      description: 'Clean lines, subtle patterns, and understated elegance',
      icon: '⚪'
    },
    {
      style: 'Geometric',
      description: 'Bold geometric patterns and modern artistic expressions',
      icon: '🔷'
    },
    {
      style: 'Fusion',
      description: 'Blending traditional motifs with contemporary design elements',
      icon: '🔄'
    },
    {
      style: 'Ombre',
      description: 'Gradual color transitions and modern dye techniques',
      icon: '🌈'
    },
    {
      style: 'Art Deco',
      description: 'Inspired by 1920s Art Deco architecture and patterns',
      icon: '🏢'
    },
    {
      style: 'Asymmetric',
      description: 'Uneven borders and unconventional pattern placements',
      icon: '⚡'
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
            <span className="text-rose-600 font-medium">Contemporary</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Contemporary Kanjivaram
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Where tradition meets modernity. Fresh color palettes, innovative patterns, 
              and contemporary designs that redefine Kanjivaram for the modern woman.
            </p>
          </div>
        </div>
      </section>

      {/* Style Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Contemporary Styles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore modern interpretations of the classic Kanjivaram
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contemporaryStyles.map((style, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors">
                  <span className="text-2xl">{style.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {style.style}
                </h3>
                <p className="text-sm text-gray-600">
                  {style.description}
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
              Contemporary Collection
            </h2>
            <p className="text-gray-600">
              {contemporaryProducts.length} modern and innovative pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contemporaryProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
                  <div className="text-4xl">🎨</div>
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
                    <span className="bg-cyan-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {product.style}
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
                        className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs"
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
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200 text-sm font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contemporary Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                The Modern Kanjivaram Revolution
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🎯</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Modern Color Palettes</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Pastels, muted tones, and contemporary color combinations for everyday wear.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">📐</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Innovative Patterns</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Geometric designs, abstract art, and minimalist motifs for the fashion-forward.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">⚖️</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Lightweight & Comfortable</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Lighter weaves and comfortable drapes perfect for modern lifestyles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🔄</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Versatile Styling</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      From office wear to casual outings and cocktail parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-6xl">🌟</div>
            </div>
          </div>
        </div>
      </section>

      {/* Styling Tips */}
      <section className="py-12 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Modern Styling Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How to wear contemporary Kanjivarams for different occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Office Wear</h3>
              <p className="text-sm text-gray-600">
                Pair pastel Kanjivarams with tailored blouses and minimal jewelry for professional elegance
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Casual Outings</h3>
              <p className="text-sm text-gray-600">
                Style with crop tops or t-shirts for a fusion look perfect for brunches and shopping
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Evening Events</h3>
              <p className="text-sm text-gray-600">
                Choose bold geometric patterns with statement jewelry for cocktail parties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Kanjivaram */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/sarees/category/kanjivaram-silk"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Kanjivaram Collection
          </Link>
        </div>
      </section>
    </div>
  );
}