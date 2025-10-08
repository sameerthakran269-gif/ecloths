'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Share2, Crown, Sparkles } from 'lucide-react';

export default function BridalKanjivaramPage() {
  const [wishlist, setWishlist] = useState([]);

  const bridalProducts = [
    {
      id: 1,
      name: 'Royal Bridal Red Kanjivaram',
      price: '₹89,999',
      originalPrice: '₹1,09,999',
      image: '/bridal-1.jpg',
      rating: 5.0,
      reviews: 234,
      color: 'Bridal Red',
      description: 'Magnificent bridal red with extensive gold zari work and traditional motifs',
      features: ['Heavy Zari', 'Bridal Special', 'Pure Silk', 'Customizable'],
      weight: '850 grams',
      zari: '24K Gold'
    },
    {
      id: 2,
      name: 'Regal Maroon Wedding Saree',
      price: '₹78,999',
      originalPrice: '₹95,999',
      image: '/bridal-2.jpg',
      rating: 4.9,
      reviews: 189,
      color: 'Royal Maroon',
      description: 'Opulent maroon with temple borders and intricate pallu design',
      features: ['Temple Border', 'Heavy Pallu', 'Bridal Collection', 'Made to Order'],
      weight: '920 grams',
      zari: '22K Gold'
    },
    {
      id: 3,
      name: 'Sunset Orange Bridal Kanjivaram',
      price: '₹82,999',
      originalPrice: '₹99,999',
      image: '/bridal-3.jpg',
      rating: 4.9,
      reviews: 156,
      color: 'Sunset Orange',
      description: 'Vibrant orange with contrasting borders and elaborate zari patterns',
      features: ['Contrast Border', 'Elaborate Pallu', 'Heavy Silk', 'Bridal'],
      weight: '880 grams',
      zari: '24K Gold'
    },
    {
      id: 4,
      name: 'Emerald Green Wedding Special',
      price: '₹95,999',
      originalPrice: '₹1,15,999',
      image: '/bridal-4.jpg',
      rating: 5.0,
      reviews: 267,
      color: 'Emerald Green',
      description: 'Luxurious emerald green with gold motifs and traditional checks',
      features: ['Traditional Checks', 'Gold Motifs', 'Premium Silk', 'Bridal Exclusive'],
      weight: '950 grams',
      zari: '24K Gold'
    },
    {
      id: 5,
      name: 'Ruby Red Heavy Kanjivaram',
      price: '₹1,05,999',
      originalPrice: '₹1,28,999',
      image: '/bridal-5.jpg',
      rating: 5.0,
      reviews: 312,
      color: 'Ruby Red',
      description: 'Deep ruby red with the heaviest zari work and divine motifs',
      features: ['Heaviest Zari', 'Divine Motifs', 'Premium Collection', 'Custom Blouse'],
      weight: '1100 grams',
      zari: '24K Gold'
    },
    {
      id: 6,
      name: 'Gold & Crimson Bridal Masterpiece',
      price: '₹1,25,999',
      originalPrice: '₹1,49,999',
      image: '/bridal-6.jpg',
      rating: 5.0,
      reviews: 178,
      color: 'Crimson & Gold',
      description: 'Exclusive bridal piece with gold woven into crimson background',
      features: ['Gold Woven', 'Master Weaver', 'Limited Edition', 'Heirloom Piece'],
      weight: '1200 grams',
      zari: '24K Gold'
    }
  ];

  const bridalFeatures = [
    {
      feature: 'Customization',
      description: 'Personalize borders, colors, and motifs for your special day',
      icon: '🎨'
    },
    {
      feature: 'Heavy Zari',
      description: 'Extensive gold and silver zari work for maximum opulence',
      icon: '✨'
    },
    {
      feature: 'Premium Silk',
      description: 'Finest quality silk sourced from traditional weavers',
      icon: '🪡'
    },
    {
      feature: 'Heirloom Quality',
      description: 'Crafted to be treasured and passed through generations',
      icon: '🏺'
    },
    {
      feature: 'Made to Order',
      description: 'Handcrafted specifically for your wedding requirements',
      icon: '✂️'
    },
    {
      feature: 'Certified Authentic',
      description: 'Comes with authenticity certificate and quality guarantee',
      icon: '📜'
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
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/sarees" className="text-gray-600 hover:text-rose-600">
              Sarees
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <Link href="/sarees/category/kanjivaram-silk" className="text-gray-600 hover:text-rose-600">
              Kanjivaram Silk
            </Link>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <span className="text-rose-600 font-semibold">Bridal Special</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-100 to-pink-100 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gold-pattern.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Crown className="w-12 h-12 text-rose-600" fill="currentColor" />
            </div>
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              Bridal Kanjivaram
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Timeless heirlooms for your special day. Each piece tells a story of love, 
              tradition, and unparalleled craftsmanship.
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
                <span>24K Gold Zari</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
                <span>Custom Designs</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
                <span>Heirloom Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Our Bridal Collection
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every bridal Kanjivaram is crafted with love, tradition, and exceptional attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bridalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group border border-rose-100"
              >
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-4">
                  {feature.feature}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Bridal Collection
            </h2>
            <p className="text-gray-600 text-lg">
              {bridalProducts.length} exquisite pieces for the perfect bridal look
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {bridalProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group border border-rose-100"
              >
                <div className="relative h-80 bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                  <div className="text-5xl">👑</div>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-200 ${
                      wishlist.includes(product.id)
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-white/90 hover:bg-white text-gray-600 shadow-md'
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        wishlist.includes(product.id) ? 'fill-current' : ''
                      }`}
                    />
                  </button>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Bridal Exclusive
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {product.zari}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-900 text-xl">
                      {product.name}
                    </h3>
                    <button className="text-gray-400 hover:text-rose-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-amber-400 fill-current" />
                        <span className="ml-1 text-sm font-semibold text-gray-700">
                          {product.rating}
                        </span>
                        <span className="ml-1 text-sm text-gray-500">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        • {product.weight}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      <span className="ml-2 text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-rose-700 hover:to-pink-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Custom Bridal Experience
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Create your dream bridal Kanjivaram with our personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-rose-600">
                1
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">Consultation</h3>
              <p className="text-gray-600 text-sm">
                Personalized meeting to understand your vision and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-rose-600">
                2
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">Design</h3>
              <p className="text-gray-600 text-sm">
                Create custom designs with our master weavers and designers
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-rose-600">
                3
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">Weaving</h3>
              <p className="text-gray-600 text-sm">
                Handwoven by skilled artisans with premium materials
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-rose-600">
                4
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">Delivery</h3>
              <p className="text-gray-600 text-sm">
                Perfect fitting and final touches for your special day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Brides Love Our Kanjivarams
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                "My bridal Kanjivaram was absolutely stunning! The customization process was seamless, and the final product exceeded all my expectations."
              </p>
              <p className="font-semibold text-gray-900">- Priya S.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                "The quality and craftsmanship were exceptional. I felt like a queen on my wedding day. Worth every penny!"
              </p>
              <p className="font-semibold text-gray-900">- Ananya R.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                "From design consultation to final delivery, the entire experience was premium. My Kanjivaram is now a family heirloom."
              </p>
              <p className="font-semibold text-gray-900">- Meera K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready to Find Your Dream Bridal Kanjivaram?
          </h2>
          <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a personalized consultation with our bridal experts and create a masterpiece for your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-50 transition-colors duration-200">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-rose-600 transition-colors duration-200">
              View Lookbook
            </button>
          </div>
        </div>
      </section>

      {/* Back to Kanjivaram */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/sarees/category/kanjivaram-silk"
            className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold text-lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Kanjivaram Collection
          </Link>
        </div>
      </section>
    </div>
  );
}