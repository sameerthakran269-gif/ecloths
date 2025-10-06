'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function StraightCutSuitsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    occasion: [],
    fabric: [],
    color: []
  });

  const heroSlides = [
    {
      image: '/straight-cut-banner-1.jpg',
      title: 'Straight Cut Suits Collection',
      subtitle: 'Sleek & Sophisticated Styles',
      description: 'Discover our premium collection of straight cut suits for modern women',
      buttonText: 'Shop Collection',
      bgGradient: 'from-blue-50 to-teal-50'
    },
    {
      image: '/straight-cut-banner-2.jpg',
      title: 'Office Wear Essentials',
      subtitle: 'Professional Elegance Redefined',
      description: 'Perfect straight cut suits for workplace and formal occasions',
      buttonText: 'Office Collection',
      bgGradient: 'from-teal-100 to-blue-50'
    },
    {
      image: '/straight-cut-banner-3.jpg',
      title: 'Contemporary Designs',
      subtitle: 'Modern Cuts for the Fashion Forward',
      description: 'Latest trends in straight cut suits with contemporary styling',
      buttonText: 'New Arrivals',
      bgGradient: 'from-cyan-50 to-blue-100'
    }
  ];

  const straightCutProducts = [
    {
      id: 1,
      name: 'Designer Straight Cut Silk Suit',
      price: '₹6,999',
      originalPrice: '₹9,999',
      image: '/straight-suit-1.jpg',
      rating: 4.7,
      reviews: 124,
      fabric: 'Pure Silk',
      occasion: 'Office',
      color: 'Navy Blue',
      description: 'Elegant straight cut with minimal embroidery',
      isNew: true,
      isBestseller: true,
      features: ['Pure Silk', 'Minimal Embroidery', 'Comfort Fit']
    },
    {
      id: 2,
      name: 'Cotton Straight Cut Suit',
      price: '₹3,999',
      originalPrice: '₹5,999',
      image: '/straight-suit-2.jpg',
      rating: 4.5,
      reviews: 89,
      fabric: 'Cotton',
      occasion: 'Casual',
      color: 'Pastel Pink',
      description: 'Comfortable daily wear straight cut suit',
      isNew: false,
      isBestseller: false,
      features: ['100% Cotton', 'Daily Wear', 'Easy Care']
    },
    {
      id: 3,
      name: 'Georgette Straight Cut Party Wear',
      price: '₹8,499',
      originalPrice: '₹11,999',
      image: '/straight-suit-3.jpg',
      rating: 4.8,
      reviews: 156,
      fabric: 'Georgette',
      occasion: 'Party',
      color: 'Emerald Green',
      description: 'Party wear straight cut with sequin work',
      isNew: true,
      isBestseller: true,
      features: ['Georgette', 'Sequin Work', 'Flowy Fabric']
    },
    {
      id: 4,
      name: 'Chiffon Straight Cut Suit Set',
      price: '₹5,499',
      originalPrice: '₹7,999',
      image: '/straight-suit-4.jpg',
      rating: 4.6,
      reviews: 78,
      fabric: 'Chiffon',
      occasion: 'Formal',
      color: 'Maroon',
      description: 'Elegant chiffon straight cut for formal events',
      isNew: false,
      isBestseller: true,
      features: ['Chiffon', 'Formal Wear', 'Light Weight']
    },
    {
      id: 5,
      name: 'Linen Straight Cut Summer Suit',
      price: '₹4,299',
      originalPrice: '₹6,499',
      image: '/straight-suit-5.jpg',
      rating: 4.4,
      reviews: 67,
      fabric: 'Linen',
      occasion: 'Casual',
      color: 'Beige',
      description: 'Breathable linen straight cut for summer',
      isNew: true,
      isBestseller: false,
      features: ['Pure Linen', 'Summer Wear', 'Breathable']
    },
    {
      id: 6,
      name: 'Designer Straight Cut with Jacket',
      price: '₹9,999',
      originalPrice: '₹13,999',
      image: '/straight-suit-6.jpg',
      rating: 4.9,
      reviews: 203,
      fabric: 'Silk',
      occasion: 'Wedding',
      color: 'Royal Blue',
      description: 'Designer straight cut suit with matching jacket',
      isNew: false,
      isBestseller: true,
      features: ['With Jacket', 'Heavy Work', 'Premium Quality']
    },
    {
      id: 7,
      name: 'Printed Straight Cut Suit',
      price: '₹3,499',
      originalPrice: '₹4,999',
      image: '/straight-suit-7.jpg',
      rating: 4.3,
      reviews: 45,
      fabric: 'Cotton',
      occasion: 'Casual',
      color: 'Multicolor',
      description: 'Printed straight cut for casual outings',
      isNew: true,
      isBestseller: false,
      features: ['Printed', 'Casual Wear', 'Wash & Wear']
    },
    {
      id: 8,
      name: 'Velvet Straight Cut Winter Suit',
      price: '₹7,999',
      originalPrice: '₹10,999',
      image: '/straight-suit-8.jpg',
      rating: 4.7,
      reviews: 112,
      fabric: 'Velvet',
      occasion: 'Party',
      color: 'Burgundy',
      description: 'Luxurious velvet straight cut for winter parties',
      isNew: false,
      isBestseller: true,
      features: ['Velvet', 'Winter Wear', 'Luxurious Feel']
    }
  ];

  const filters = {
    priceRange: [
      'Under ₹3,000',
      '₹3,000 - ₹5,000',
      '₹5,000 - ₹8,000',
      'Above ₹8,000'
    ],
    occasion: ['Casual', 'Office', 'Party', 'Formal', 'Wedding'],
    fabric: ['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Linen', 'Velvet', 'Net'],
    color: ['Navy Blue', 'Pastel Pink', 'Emerald Green', 'Maroon', 'Beige', 'Royal Blue', 'Burgundy', 'Black', 'White']
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
                  <h2 className="text-xl text-blue-600 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  <Link
                    href="#products"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
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

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/suits" className="text-gray-500 hover:text-blue-600">
              Suits
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-blue-600 font-medium">Straight Cut Suits</span>
          </nav>
        </div>
      </section>

      {/* Style Description */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              What are Straight Cut Suits?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Straight cut suits feature a sleek, vertical silhouette that flows straight down from 
              the bust to the hem. Known for their elegant and sophisticated appearance, these suits 
              are perfect for office wear, formal occasions, and everyday elegance. The clean lines 
              and timeless design make them a versatile addition to any wardrobe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💼</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Office Perfect</h3>
                <p className="text-sm text-gray-600">Professional and polished for workplace</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy to Style</h3>
                <p className="text-sm text-gray-600">Pairs well with various accessories</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">👗</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flattering Fit</h3>
                <p className="text-sm text-gray-600">Slimming silhouette for all body types</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section id="products" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                Straight Cut Suits Collection
              </h2>
              <p className="text-gray-600">
                Showing {straightCutProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
              <div className="bg-white rounded-lg p-6 sticky top-4 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>

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
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{occasion}</span>
                      </label>
                    ))}
                  </div>
                </div>

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
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{fabric}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Color</h4>
                  <div className="space-y-2">
                    {filters.color.map((color) => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.color.includes(color)}
                          onChange={() => toggleFilter('color', color)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ priceRange: [], occasion: [], fabric: [], color: [] })}
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
                  {straightCutProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.features.map((feature, index) => (
                            <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
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
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold">
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
                  {straightCutProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {product.features.map((feature, index) => (
                                <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
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
                          <span className="text-sm text-gray-600">Color: {product.color}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
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

      {/* Styling Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Styling Straight Cut Suits
            </h2>
            <p className="text-lg text-gray-600">
              Tips to rock your straight cut suit with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👔</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Elegance</h3>
              <p className="text-gray-600">Pair with minimal jewelry and closed-toe heels for a professional look</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Party Ready</h3>
              <p className="text-gray-600">Add statement jewelry and embellished clutch for evening events</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Footwear Guide</h3>
              <p className="text-gray-600">Heels for formal, wedges for daytime, and flats for casual outings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👜</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessories</h3>
              <p className="text-gray-600">Tote bags for work, clutch for parties, and sling bags for casual wear</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Explore Other Styles
            </h2>
            <p className="text-lg text-gray-600">
              Discover more suit styles from our collection
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/suits/anarkali"
              className="text-center group p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👑</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200 block">
                Anarkali Suits
              </span>
            </Link>
            <Link
              href="/suits/sharara"
              className="text-center group p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✨</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200 block">
                Sharara Suits
              </span>
            </Link>
            <Link
              href="/suits/lehenga"
              className="text-center group p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎀</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200 block">
                Lehenga Choli
              </span>
            </Link>
            <Link
              href="/suits/palazzo"
              className="text-center group p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👖</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200 block">
                Palazzo Suits
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            New Straight Cut Designs Weekly
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to get notified about our latest straight cut suit collections and exclusive offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
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