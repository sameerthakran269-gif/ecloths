'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, ArrowLeft, Share2, Check } from 'lucide-react';

export default function TraditionalKanjivaramPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    motif: [],
    borderStyle: [],
    zariType: []
  });

  const heroSlides = [
    {
      image: '/traditional-kanjivaram-banner-1.jpg',
      title: 'Traditional Kanjivaram',
      subtitle: 'Timeless Elegance & Heritage',
      description: 'Classic patterns passed down through generations of master weavers',
      buttonText: 'Explore Collection',
      bgGradient: 'from-amber-100 to-orange-50'
    },
    {
      image: '/traditional-kanjivaram-banner-2.jpg',
      title: 'Heritage Motifs',
      subtitle: 'Ancient Designs & Symbols',
      description: 'Featuring traditional peacock, temple, and floral motifs',
      buttonText: 'View Motifs',
      bgGradient: 'from-red-100 to-rose-50'
    }
  ];

  const traditionalFeatures = [
    {
      icon: '🦚',
      title: 'Peacock Motifs',
      description: 'Symbol of grace and beauty in traditional designs'
    },
    {
      icon: '🛕',
      title: 'Temple Borders',
      description: 'Inspired by South Indian temple architecture'
    },
    {
      icon: '🌺',
      title: 'Floral Patterns',
      description: 'Traditional mango and floral motifs'
    },
    {
      icon: '✨',
      title: 'Gold Zari',
      description: 'Authentic gold and silver thread work'
    }
  ];

  const traditionalProducts = [
    {
      id: 1,
      name: 'Traditional Red Kanjivaram - Peacock Design',
      price: '₹38,999',
      originalPrice: '₹46,999',
      image: '/traditional-kanjivaram-1.jpg',
      rating: 4.9,
      reviews: 203,
      fabric: 'Pure Mulberry Silk',
      occasion: 'Wedding',
      color: 'Deep Red',
      borderType: 'Broad Temple Border',
      zariType: 'Gold Zari',
      motif: 'Peacock & Floral',
      description: 'Classic deep red with elaborate peacock motifs and broad temple border in pure gold zari',
      isNew: false,
      isBestseller: true,
      features: ['Pure Silk', 'Gold Zari', 'Peacock Motif', 'Temple Border', 'Handwoven'],
      craftsmanship: 'Traditional interlocked weaving technique',
      weight: 'Heavy weight (650-750 grams)'
    },
    {
      id: 2,
      name: 'Traditional Green Kanjivaram - Check Pattern',
      price: '₹32,999',
      originalPrice: '₹39,999',
      image: '/traditional-kanjivaram-2.jpg',
      rating: 4.8,
      reviews: 156,
      fabric: 'Pure Mulberry Silk',
      occasion: 'Festive',
      color: 'Emerald Green',
      borderType: 'Traditional Border',
      zariType: 'Gold Zari',
      motif: 'Checks & Stripes',
      description: 'Vibrant emerald green with traditional check pattern and contrasting gold border',
      isNew: true,
      isBestseller: false,
      features: ['Pure Silk', 'Check Pattern', 'Gold Zari', 'Traditional'],
      craftsmanship: 'Classic check pattern weaving',
      weight: 'Medium weight (550-650 grams)'
    },
    {
      id: 3,
      name: 'Traditional Yellow Kanjivaram - Sun Temple',
      price: '₹41,999',
      originalPrice: '₹49,999',
      image: '/traditional-kanjivaram-3.jpg',
      rating: 4.9,
      reviews: 178,
      fabric: 'Pure Mulberry Silk',
      occasion: 'Bridal',
      color: 'Mustard Yellow',
      borderType: 'Temple Border',
      zariType: 'Heavy Gold Zari',
      motif: 'Temple & Floral',
      description: 'Rich mustard yellow with intricate temple border and heavy gold zari work',
      isNew: false,
      isBestseller: true,
      features: ['Pure Silk', 'Heavy Zari', 'Temple Border', 'Bridal'],
      craftsmanship: 'Traditional temple border technique',
      weight: 'Heavy weight (700-800 grams)'
    },
    {
      id: 4,
      name: 'Traditional Blue Kanjivaram - Rudraksha',
      price: '₹35,999',
      originalPrice: '₹42,999',
      image: '/traditional-kanjivaram-4.jpg',
      rating: 4.7,
      reviews: 134,
      fabric: 'Pure Mulberry Silk',
      occasion: 'Traditional',
      color: 'Royal Blue',
      borderType: 'Rudraksha Border',
      zariType: 'Silver Zari',
      motif: 'Rudraksha & Floral',
      description: 'Deep royal blue with traditional Rudraksha bead pattern border in silver zari',
      isNew: true,
      isBestseller: false,
      features: ['Pure Silk', 'Silver Zari', 'Rudraksha Border', 'Traditional'],
      craftsmanship: 'Rudraksha bead pattern weaving',
      weight: 'Medium weight (600-700 grams)'
    },
    {
      id: 5,
      name: 'Traditional Pink Kanjivaram - Mango Motif',
      price: '₹37,999',
      originalPrice: '₹45,999',
      image: '/traditional-kanjivaram-5.jpg',
      rating: 4.8,
      reviews: 167,
      fabric: 'Pure Mulberry Silk',
      occasion: 'Wedding',
      color: 'Magenta Pink',
      borderType: 'Traditional Border',
      zariType: 'Gold Zari',
      motif: 'Mango & Floral',
      description: 'Vibrant magenta pink with traditional mango motif and gold zari border',
      isNew: false,
      isBestseller: true,
      features: ['Pure Silk', 'Mango Motif', 'Gold Zari', 'Traditional Border'],
      craftsmanship: 'Traditional mango motif weaving',
      weight: 'Heavy weight (650-750 grams)'
    },
    {
      id: 6,
      name: 'Traditional Purple Kanjivaram - Lotus Design',
      price: '₹39,999',
      originalPrice: '₹47,999',
      image: '/traditional-kanjivaram-6.jpg',
      rating: 4.9,
      reviews: 189,
      fabric: 'Pure Mulberry Silk',
      occasion: 'Festive',
      color: 'Regal Purple',
      borderType: 'Broad Temple Border',
      zariType: 'Gold Zari',
      motif: 'Lotus & Floral',
      description: 'Rich regal purple with lotus motifs and elaborate temple border in gold zari',
      isNew: true,
      isBestseller: true,
      features: ['Pure Silk', 'Lotus Motif', 'Gold Zari', 'Temple Border'],
      craftsmanship: 'Traditional lotus motif weaving',
      weight: 'Heavy weight (680-780 grams)'
    }
  ];

  const filters = {
    priceRange: [
      'Under ₹30,000',
      '₹30,000 - ₹40,000',
      '₹40,000 - ₹50,000',
      'Above ₹50,000'
    ],
    motif: ['Peacock', 'Temple', 'Floral', 'Mango', 'Lotus', 'Rudraksha', 'Checks & Stripes'],
    borderStyle: ['Temple Border', 'Traditional Border', 'Rudraksha Border', 'Broad Border', 'Thin Border'],
    zariType: ['Gold Zari', 'Silver Zari', 'Heavy Gold Zari', 'Light Zari']
  };

  const weavingProcess = [
    {
      step: 1,
      title: 'Silk Preparation',
      description: 'Pure mulberry silk threads are carefully selected and dyed using natural colors',
      duration: '2-3 days'
    },
    {
      step: 2,
      title: 'Design Mapping',
      description: 'Traditional motifs are mapped on graph paper before weaving begins',
      duration: '3-4 days'
    },
    {
      step: 3,
      title: 'Weaving',
      description: 'Skilled artisans weave using traditional handlooms with interlocking technique',
      duration: '15-20 days'
    },
    {
      step: 4,
      title: 'Zari Work',
      description: 'Pure gold/silver zari is intricately woven into the fabric',
      duration: '5-7 days'
    },
    {
      step: 5,
      title: 'Quality Check',
      description: 'Each saree undergoes rigorous quality inspection before packaging',
      duration: '1 day'
    }
  ];

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
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/sarees" className="text-gray-500 hover:text-rose-600 transition-colors duration-200">
              Sarees
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/sarees/kanjivaram" className="text-gray-500 hover:text-rose-600 transition-colors duration-200">
              Kanjivaram
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Traditional</span>
          </div>
        </div>
      </div>

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
                  <h2 className="text-xl text-amber-600 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  <Link
                    href="#products"
                    className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
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

      {/* Traditional Features */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Characteristics of Traditional Kanjivaram
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {traditionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-amber-300 group-hover:to-orange-400 transition-all duration-300 shadow-lg">
                  <div className="text-3xl">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Weaving Process */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            The Traditional Weaving Process
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {weavingProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-200">
                    <span className="text-amber-700 font-bold">{process.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {process.description}
                    </p>
                    <span className="text-sm text-amber-600 font-medium">
                      Duration: {process.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧵</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Handwoven Excellence
                </h3>
                <p className="text-gray-600">
                  Each traditional Kanjivaram takes 3-4 weeks to complete
                </p>
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
                Traditional Collection
              </h2>
              <p className="text-gray-600">
                {traditionalProducts.length} authentic handwoven traditional pieces
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Motif Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Traditional Motifs</h4>
                  <div className="space-y-2">
                    {filters.motif.map((motif) => (
                      <label key={motif} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.motif.includes(motif)}
                          onChange={() => toggleFilter('motif', motif)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{motif}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Border Style Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Border Style</h4>
                  <div className="space-y-2">
                    {filters.borderStyle.map((border) => (
                      <label key={border} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.borderStyle.includes(border)}
                          onChange={() => toggleFilter('borderStyle', border)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{border}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Zari Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Zari Type</h4>
                  <div className="space-y-2">
                    {filters.zariType.map((zari) => (
                      <label key={zari} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.zariType.includes(zari)}
                          onChange={() => toggleFilter('zariType', zari)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{zari}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ priceRange: [], motif: [], borderStyle: [], zariType: [] })}
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
                  {traditionalProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                            <span key={index} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-amber-600 mr-1" />
                            <span>{product.craftsmanship}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-amber-600 mr-1" />
                            <span>{product.weight}</span>
                          </div>
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
                          <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 text-sm font-semibold">
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
                  {traditionalProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.features.map((feature, index) => (
                                <span key={index} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">
                                  {feature}
                                </span>
                              ))}
                            </div>

                            {/* Additional Info */}
                            <div className="space-y-1 mb-3">
                              <div className="flex items-center text-sm text-gray-600">
                                <Check className="w-4 h-4 text-amber-600 mr-1" />
                                <span>{product.craftsmanship}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Check className="w-4 h-4 text-amber-600 mr-1" />
                                <span>{product.weight}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="bg-white/80 hover:bg-white p-2 rounded-full">
                              <Share2 className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="bg-white/80 hover:bg-white p-2 rounded-full">
                              <Heart className="w-5 h-5 text-gray-600" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex items-center mr-6">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">Motif: {product.motif}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Zari: {product.zariType}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-semibold">
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

      {/* Traditional vs Modern Comparison */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Why Choose Traditional Kanjivaram?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-amber-800 mb-6 text-center">
                Traditional Kanjivaram
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Pure mulberry silk with real gold zari</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Traditional motifs and patterns</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Interlocked weaving technique</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Heavier weight and durability</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Passed down through generations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Increases in value over time</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-600 mb-6 text-center">
                Modern Variations
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-6 h-6 text-gray-400 mr-3 text-center">•</div>
                  <span className="text-gray-600">Mixed silk or artificial materials</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 text-gray-400 mr-3 text-center">•</div>
                  <span className="text-gray-600">Contemporary designs and patterns</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 text-gray-400 mr-3 text-center">•</div>
                  <span className="text-gray-600">Machine-assisted weaving</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 text-gray-400 mr-3 text-center">•</div>
                  <span className="text-gray-600">Lighter weight for comfort</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 text-gray-400 mr-3 text-center">•</div>
                  <span className="text-gray-600">Modern artistic interpretations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 text-gray-400 mr-3 text-center">•</div>
                  <span className="text-gray-600">Affordable pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link
              href="/sarees/kanjivaram"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Kanjivaram Collection
            </Link>
            <Link
              href="/sarees"
              className="inline-flex items-center text-gray-600 hover:text-gray-700 font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to All Sarees
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}