'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function ShararaSuitsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    occasion: [],
    fabric: [],
    work: []
  });

  const heroSlides = [
    {
      image: '/sharara-banner-1.jpg',
      title: 'Sharara Suits Collection',
      subtitle: 'Traditional Elegance with Flared Grace',
      description: 'Discover our exquisite collection of sharara suits for festive occasions',
      buttonText: 'Shop Collection',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      image: '/sharara-banner-2.jpg',
      title: 'Bridal Sharara Sets',
      subtitle: 'Royal Wedding Attire',
      description: 'Magnificent bridal sharara sets with intricate embroidery',
      buttonText: 'Bridal Collection',
      bgGradient: 'from-pink-100 to-rose-50'
    },
    {
      image: '/sharara-banner-3.jpg',
      title: 'Festive Special Edition',
      subtitle: 'Celebrate in Style',
      description: 'Stunning sharara suits for festivals and celebrations',
      buttonText: 'Festive Collection',
      bgGradient: 'from-rose-100 to-purple-100'
    }
  ];

  const shararaProducts = [
    {
      id: 1,
      name: 'Heavy Embroidered Bridal Sharara',
      price: '₹18,999',
      originalPrice: '₹24,999',
      image: '/sharara-1.jpg',
      rating: 4.9,
      reviews: 189,
      fabric: 'Velvet',
      occasion: 'Bridal',
      color: 'Red',
      work: 'Zari & Zardozi',
      description: 'Exquisite bridal sharara with heavy zari work',
      isNew: true,
      isBestseller: true,
      features: ['Heavy Zari Work', 'Velvet Fabric', 'Bridal Wear', 'Customizable']
    },
    {
      id: 2,
      name: 'Net Sharara with Stone Work',
      price: '₹12,499',
      originalPrice: '₹16,999',
      image: '/sharara-2.jpg',
      rating: 4.8,
      reviews: 134,
      fabric: 'Net',
      occasion: 'Wedding',
      color: 'Pink',
      work: 'Stone & Sequins',
      description: 'Elegant net sharara with stone and sequin embellishments',
      isNew: false,
      isBestseller: true,
      features: ['Stone Work', 'Net Fabric', 'Party Wear', 'Flowy']
    },
    {
      id: 3,
      name: 'Silk Sharara Set for Festivals',
      price: '₹9,999',
      originalPrice: '₹13,999',
      image: '/sharara-3.jpg',
      rating: 4.7,
      reviews: 98,
      fabric: 'Silk',
      occasion: 'Festive',
      color: 'Green',
      work: 'Embroidery',
      description: 'Traditional silk sharara perfect for festive occasions',
      isNew: true,
      isBestseller: false,
      features: ['Pure Silk', 'Festive Wear', 'Traditional', 'Comfort Fit']
    },
    {
      id: 4,
      name: 'Designer Georgette Sharara',
      price: '₹8,499',
      originalPrice: '₹11,999',
      image: '/sharara-4.jpg',
      rating: 4.6,
      reviews: 76,
      fabric: 'Georgette',
      occasion: 'Reception',
      color: 'Royal Blue',
      work: 'Resham',
      description: 'Designer georgette sharara with resham embroidery',
      isNew: false,
      isBestseller: true,
      features: ['Georgette', 'Resham Work', 'Designer', 'Light Weight']
    },
    {
      id: 5,
      name: 'Luxury Banarasi Sharara Set',
      price: '₹22,999',
      originalPrice: '₹29,999',
      image: '/sharara-5.jpg',
      rating: 4.9,
      reviews: 156,
      fabric: 'Banarasi Silk',
      occasion: 'Bridal',
      color: 'Maroon',
      work: 'Banarasi Weave',
      description: 'Luxurious Banarasi silk sharara with traditional weave',
      isNew: true,
      isBestseller: true,
      features: ['Banarasi Silk', 'Traditional Weave', 'Luxury', 'Heavy']
    },
    {
      id: 6,
      name: 'Casual Cotton Sharara',
      price: '₹4,999',
      originalPrice: '₹6,999',
      image: '/sharara-6.jpg',
      rating: 4.4,
      reviews: 67,
      fabric: 'Cotton',
      occasion: 'Casual',
      color: 'Yellow',
      work: 'Print',
      description: 'Comfortable cotton sharara for casual gatherings',
      isNew: true,
      isBestseller: false,
      features: ['Cotton', 'Printed', 'Casual Wear', 'Comfortable']
    },
    {
      id: 7,
      name: 'Party Wear Sharara with Jacket',
      price: '₹14,999',
      originalPrice: '₹19,999',
      image: '/sharara-7.jpg',
      rating: 4.8,
      reviews: 112,
      fabric: 'Chiffon',
      occasion: 'Party',
      color: 'Black',
      work: 'Sequin',
      description: 'Stylish party wear sharara with matching jacket',
      isNew: false,
      isBestseller: true,
      features: ['With Jacket', 'Sequin Work', 'Party Wear', 'Modern']
    },
    {
      id: 8,
      name: 'Traditional Gota Patti Sharara',
      price: '₹11,499',
      originalPrice: '₹15,999',
      image: '/sharara-8.jpg',
      rating: 4.7,
      reviews: 89,
      fabric: 'Silk',
      occasion: 'Festive',
      color: 'Orange',
      work: 'Gota Patti',
      description: 'Traditional gota patti work sharara for festivals',
      isNew: false,
      isBestseller: false,
      features: ['Gota Patti', 'Traditional', 'Festive', 'Rajasthani Style']
    },
    {
      id: 9,
      name: 'Designer Organza Sharara',
      price: '₹16,999',
      originalPrice: '₹21,999',
      image: '/sharara-9.jpg',
      rating: 4.8,
      reviews: 145,
      fabric: 'Organza',
      occasion: 'Reception',
      color: 'Gold',
      work: 'Thread Work',
      description: 'Luxurious organza sharara with intricate thread work',
      isNew: true,
      isBestseller: true,
      features: ['Organza', 'Thread Work', 'Luxury', 'Sheer']
    },
    {
      id: 10,
      name: 'Embroidered Sharara with Dupatta',
      price: '₹7,999',
      originalPrice: '₹10,999',
      image: '/sharara-10.jpg',
      rating: 4.5,
      reviews: 78,
      fabric: 'Georgette',
      occasion: 'Party',
      color: 'Purple',
      work: 'Embroidery',
      description: 'Beautiful embroidered sharara with flowing dupatta',
      isNew: false,
      isBestseller: false,
      features: ['Embroidered', 'Georgette', 'Party Wear', 'Complete Set']
    }
  ];

  const filters = {
    priceRange: [
      'Under ₹5,000',
      '₹5,000 - ₹10,000',
      '₹10,000 - ₹20,000',
      'Above ₹20,000'
    ],
    occasion: ['Casual', 'Festive', 'Party', 'Wedding', 'Bridal', 'Reception'],
    fabric: ['Velvet', 'Silk', 'Georgette', 'Chiffon', 'Cotton', 'Net', 'Organza', 'Banarasi Silk'],
    work: ['Zari & Zardozi', 'Stone Work', 'Embroidery', 'Sequin', 'Gota Patti', 'Resham', 'Print', 'Thread Work']
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
                  <h2 className="text-xl text-purple-600 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  <Link
                    href="#products"
                    className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
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
                index === currentSlide ? 'bg-purple-600' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-purple-600">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/suits" className="text-gray-500 hover:text-purple-600">
              Suits
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-purple-600 font-medium">Sharara Suits</span>
          </nav>
        </div>
      </section>

      {/* Style Description */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              What are Sharara Suits?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sharara suits feature flared pants that are wide at the bottom, creating a beautiful 
              silhouette when you walk. Originating from Mughal era fashion, shararas are known for 
              their royal and elegant appearance. They typically consist of a kurta, flared sharara 
              pants, and a dupatta, making them perfect for weddings, festivals, and special occasions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">👑</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Royal Heritage</h3>
                <p className="text-sm text-gray-600">Traditional Mughal era design with modern elegance</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💃</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dramatic Flare</h3>
                <p className="text-sm text-gray-600">Flared pants create beautiful movement and grace</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Versatile Style</h3>
                <p className="text-sm text-gray-600">Perfect for weddings, festivals and special events</p>
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
                Sharara Suits Collection
              </h2>
              <p className="text-gray-600">
                Showing {shararaProducts.length} exquisite sharara sets
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{fabric}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Work Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Embroidery Work</h4>
                  <div className="space-y-2">
                    {filters.work.map((work) => (
                      <label key={work} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.work.includes(work)}
                          onChange={() => toggleFilter('work', work)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{work}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ priceRange: [], occasion: [], fabric: [], work: [] })}
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
                  {shararaProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">👘</div>
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
                            <span key={index} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
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
                          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-semibold">
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
                  {shararaProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">👘</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {product.features.map((feature, index) => (
                                <span key={index} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
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
                          <span className="text-sm text-gray-600">Work: {product.work}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
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
              Styling Sharara Suits
            </h2>
            <p className="text-lg text-gray-600">
              Tips to carry your sharara with elegance and grace
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jewelry Selection</h3>
              <p className="text-gray-600">Pair with statement necklaces and jhumkas for traditional look</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Footwear Guide</h3>
              <p className="text-gray-600">Heels or wedges to complement the flared silhouette</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧣</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dupatta Draping</h3>
              <p className="text-gray-600">Experiment with different dupatta styles for varied looks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Makeup & Hair</h3>
              <p className="text-gray-600">Bold makeup and open hair or traditional braids</p>
            </div>
          </div>
        </div>
      </section>

      {/* Occasion Guide */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Sharara for Every Occasion
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect sharara for your special moments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bridal Sharara</h3>
              <p className="text-gray-600 mb-4">Heavy embroidered shararas in red, maroon with zari work</p>
              <span className="text-purple-600 font-semibold">₹15,000 - ₹50,000</span>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Festive Sharara</h3>
              <p className="text-gray-600 mb-4">Bright colors with gota patti or embroidery for festivals</p>
              <span className="text-purple-600 font-semibold">₹8,000 - ₹20,000</span>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Party Wear</h3>
              <p className="text-gray-600 mb-4">Contemporary designs with sequins and modern cuts</p>
              <span className="text-purple-600 font-semibold">₹10,000 - ₹25,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Explore Other Styles
            </h2>
            <p className="text-lg text-gray-600">
              Discover more traditional suit styles from our collection
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/suits/anarkali"
              className="text-center group p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👑</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 block">
                Anarkali Suits
              </span>
            </Link>
            <Link
              href="/suits/straight-cut"
              className="text-center group p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👔</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 block">
                Straight Cut
              </span>
            </Link>
            <Link
              href="/suits/lehenga"
              className="text-center group p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎀</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 block">
                Lehenga Choli
              </span>
            </Link>
            <Link
              href="/suits/palazzo"
              className="text-center group p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👖</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 block">
                Palazzo Suits
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            New Sharara Designs Weekly
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Subscribe to get notified about our latest sharara collections and exclusive bridal offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
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