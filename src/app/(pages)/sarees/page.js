'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function SareesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    fabric: [],
    priceRange: [],
    occasion: []
  });

  const heroSlides = [
    {
      image: '/saree-banner-1.jpg',
      title: 'Exquisite Silk Sarees',
      subtitle: 'Traditional Weaves, Modern Elegance',
      description: 'Discover our premium collection of handwoven silk sarees',
      buttonText: 'Shop Now',
      bgGradient: 'from-rose-100 to-pink-50'
    },
    {
      image: '/saree-banner-2.jpg',
      title: 'Festive Collection 2024',
      subtitle: 'Celebrate in Style & Tradition',
      description: 'Special occasion sarees for your memorable moments',
      buttonText: 'Explore Collection',
      bgGradient: 'from-purple-100 to-pink-50'
    }
  ];

  const sareeTypes = [
    {
      name: 'Kanjivaram Silk',
      image: '/kanjivaram.jpg',
      link: '/sarees/kanjivaram',
      description: 'Traditional South Indian silk',
      slug:'/category/kanjivaram-silk'
    },
    {
      name: 'Banarasi Silk',
      image: '/banarasi.jpg',
      link: '/sarees/banarasi',
      description: 'Royal Mughal inspired weaves',
      slug:'/category/banarasi-silk'
    },
    {
      name: 'Chanderi Cotton',
      image: '/chanderi.jpg',
      link: '/sarees/chanderi',
      description: 'Lightweight and elegant',
      slug:'/category/chanderi-cotton'
    },
    {
      name: 'Tussar Silk',
      image: '/tussar.jpg',
      link: '/sarees/tussar',
      description: 'Rich texture and natural sheen',
      slug:'/category/tussar-silk'
    }
  ];

  const sareeProducts = [
    {
      id: 1,
      name: 'Pure Kanjivaram Silk Saree',
      price: '₹24,999',
      originalPrice: '₹32,999',
      image: '/saree-1.jpg',
      rating: 4.9,
      reviews: 89,
      fabric: 'Silk',
      occasion: 'Wedding',
      color: 'Red',
      description: 'Traditional temple border with zari work',
      isNew: true,
      isBestseller: true
    },
    {
      id: 2,
      name: 'Banarasi Silk Saree',
      price: '₹18,999',
      originalPrice: '₹25,999',
      image: '/saree-2.jpg',
      rating: 4.8,
      reviews: 124,
      fabric: 'Silk',
      occasion: 'Bridal',
      color: 'Maroon',
      description: 'Intricate brocade work with gold zari',
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: 'Chanderi Cotton Saree',
      price: '₹6,999',
      originalPrice: '₹8,999',
      image: '/saree-3.jpg',
      rating: 4.7,
      reviews: 67,
      fabric: 'Cotton',
      occasion: 'Casual',
      color: 'Pastel Green',
      description: 'Lightweight with subtle shimmer',
      isNew: true,
      isBestseller: false
    },
    {
      id: 4,
      name: 'Tussar Silk Saree',
      price: '₹12,999',
      originalPrice: '₹16,999',
      image: '/saree-4.jpg',
      rating: 4.6,
      reviews: 93,
      fabric: 'Tussar Silk',
      occasion: 'Party',
      color: 'Gold',
      description: 'Natural golden texture with embroidery',
      isNew: false,
      isBestseller: false
    },
    {
      id: 5,
      name: 'Organza Saree',
      price: '₹8,999',
      originalPrice: '₹11,999',
      image: '/saree-5.jpg',
      rating: 4.5,
      reviews: 78,
      fabric: 'Organza',
      occasion: 'Evening',
      color: 'Blue',
      description: 'Sheer elegance with sequin work',
      isNew: true,
      isBestseller: false
    },
    {
      id: 6,
      name: 'Paithani Silk Saree',
      price: '₹21,999',
      originalPrice: '₹28,999',
      image: '/saree-6.jpg',
      rating: 4.9,
      reviews: 112,
      fabric: 'Silk',
      occasion: 'Traditional',
      color: 'Purple',
      description: 'Maharashtrian peacock motif',
      isNew: false,
      isBestseller: true
    },
    {
      id: 7,
      name: 'Georgette Saree',
      price: '₹5,999',
      originalPrice: '₹7,999',
      image: '/saree-7.jpg',
      rating: 4.4,
      reviews: 56,
      fabric: 'Georgette',
      occasion: 'Office',
      color: 'Black',
      description: 'Printed with floral patterns',
      isNew: false,
      isBestseller: false
    },
    {
      id: 8,
      name: 'Sambalpuri Silk Saree',
      price: '₹14,999',
      originalPrice: '₹19,999',
      image: '/saree-8.jpg',
      rating: 4.7,
      reviews: 84,
      fabric: 'Silk',
      occasion: 'Festive',
      color: 'Orange',
      description: 'Traditional ikat weaving technique',
      isNew: true,
      isBestseller: false
    }
  ];

  const filters = {
    fabric: ['Silk', 'Cotton', 'Georgette', 'Organza', 'Tussar Silk'],
    priceRange: [
      'Under ₹5,000',
      '₹5,000 - ₹10,000',
      '₹10,000 - ₹20,000',
      'Above ₹20,000'
    ],
    occasion: ['Casual', 'Office', 'Party', 'Wedding', 'Bridal', 'Festive', 'Traditional']
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="relative h-[400px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-r ${slide.bgGradient} flex items-center`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl text-rose-600 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  <Link
                    href="#products"
                    className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-200"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Saree Types Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {sareeTypes.map((type, index) => (
              <Link
                key={index}
                href={`/sarees/${type.slug}`}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-rose-200 group-hover:to-pink-300 transition-all duration-200">
                  <div className="text-2xl">👗</div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-rose-600 transition-colors duration-200">
                  {type.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="products" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                Saree Collection
              </h2>
              <p className="text-gray-600">
                Showing {sareeProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-rose-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-rose-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>

                {/* Fabric Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Fabric</h4>
                  <div className="space-y-2">
                    {filters.fabric.map((fabric) => (
                      <label key={fabric} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.fabric.includes(fabric)}
                          onChange={() => toggleFilter('fabric', fabric)}
                          className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{fabric}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {filters.priceRange.map((range) => (
                      <label key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.priceRange.includes(range)}
                          onChange={() => toggleFilter('priceRange', range)}
                          className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Occasion Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Occasion</h4>
                  <div className="space-y-2">
                    {filters.occasion.map((occasion) => (
                      <label key={occasion} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.occasion.includes(occasion)}
                          onChange={() => toggleFilter('occasion', occasion)}
                          className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{occasion}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ fabric: [], priceRange: [], occasion: [] })}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sareeProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">👗</div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <div className="flex items-center mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-gray-900">{product.price}</span>
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
              ) : (
                /* List View */
                <div className="space-y-6">
                  {sareeProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">👗</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                          </div>
                          <button className="bg-white/80 hover:bg-white p-2 rounded-full">
                            <Heart className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex items-center mr-6">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">Fabric: {product.fabric}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Occasion: {product.occasion}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                          <button className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-200 font-semibold">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Stay Updated with New Arrivals
          </h2>
          <p className="text-rose-100 text-lg mb-8">
            Get notified about our latest saree collections and exclusive offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}