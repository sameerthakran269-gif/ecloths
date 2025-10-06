'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, ArrowLeft, Share2, Feather } from 'lucide-react';

export default function ChanderiCottonPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    color: [],
    weaveType: [],
    transparency: []
  });

  const heroSlides = [
    {
      image: '/chanderi-banner-1.jpg',
      title: 'Elegant Chanderi Cotton',
      subtitle: 'Light as Breeze, Rich in Heritage',
      description: 'Experience the sheer elegance of handwoven Chanderi cotton with golden transparency',
      buttonText: 'Explore Collection',
      bgGradient: 'from-sky-100 to-blue-50'
    },
    {
      image: '/chanderi-banner-2.jpg',
      title: 'Summer Special Collection',
      subtitle: 'Breathtakingly Light & Comfortable',
      description: 'Perfect for warm weather with its lightweight and airy texture',
      buttonText: 'Shop Summer Picks',
      bgGradient: 'from-emerald-100 to-green-50'
    }
  ];

  const chanderiTypes = [
    {
      name: 'Pure Cotton',
      image: '/chanderi-pure.jpg',
      link: '#pure',
      description: '100% cotton'
    },
    {
      name: 'Chanderi Silk',
      image: '/chanderi-silk.jpg',
      link: '#silk',
      description: 'Silk cotton blend'
    },
    {
      name: 'Zari Work',
      image: '/chanderi-zari.jpg',
      link: '#zari',
      description: 'With gold zari'
    },
    {
      name: 'Printed',
      image: '/chanderi-printed.jpg',
      link: '#printed',
      description: 'Traditional prints'
    }
  ];

  const weavePatterns = [
    {
      name: 'Butis',
      description: 'Small woven motifs'
    },
    {
      name: 'Buttas',
      description: 'Large woven designs'
    },
    {
      name: 'Jaal',
      description: 'Net-like patterns'
    },
    {
      name: 'Border',
      description: 'Traditional borders'
    }
  ];

  const chanderiProducts = [
    {
      id: 1,
      name: 'Pure Chanderi Cotton - Pastel Pink',
      price: '₹8,999',
      originalPrice: '₹11,999',
      image: '/chanderi-1.jpg',
      rating: 4.7,
      reviews: 89,
      fabric: 'Pure Cotton',
      occasion: 'Daywear',
      color: 'Pink',
      weaveType: 'Butis',
      transparency: 'Semi-Sheer',
      description: 'Soft pastel pink with traditional buti motifs and subtle sheen',
      isNew: true,
      isBestseller: true,
      features: ['Pure Cotton', 'Buti Motifs', 'Light Weight', 'Semi-Sheer'],
      craftsmanship: 'Handwoven in Chanderi, MP'
    },
    {
      id: 2,
      name: 'Chanderi Silk Cotton - Mint Green',
      price: '₹12,999',
      originalPrice: '₹16,999',
      image: '/chanderi-2.jpg',
      rating: 4.8,
      reviews: 67,
      fabric: 'Silk Cotton',
      occasion: 'Evening',
      color: 'Mint',
      weaveType: 'Buttas',
      transparency: 'Sheer',
      description: 'Mint green with large buttas and golden zari highlights',
      isNew: false,
      isBestseller: true,
      features: ['Silk Cotton', 'Buttas', 'Gold Zari', 'Sheer Texture'],
      craftsmanship: 'Silk-cotton blend for extra sheen'
    },
    {
      id: 3,
      name: 'Zari Chanderi - Peach Glory',
      price: '₹15,999',
      originalPrice: '₹19,999',
      image: '/chanderi-3.jpg',
      rating: 4.6,
      reviews: 78,
      fabric: 'Pure Cotton',
      occasion: 'Festive',
      color: 'Peach',
      weaveType: 'Jaal',
      transparency: 'Semi-Sheer',
      description: 'Peach colored with intricate jaal work and gold zari borders',
      isNew: true,
      isBestseller: false,
      features: ['Gold Zari', 'Jaal Work', 'Pure Cotton', 'Festive Wear'],
      craftsmanship: 'Intricate jaal patterns'
    },
    {
      id: 4,
      name: 'Chanderi Cotton - Sky Blue',
      price: '₹7,999',
      originalPrice: '₹9,999',
      image: '/chanderi-4.jpg',
      rating: 4.5,
      reviews: 56,
      fabric: 'Pure Cotton',
      occasion: 'Casual',
      color: 'Blue',
      weaveType: 'Butis',
      transparency: 'Opaque',
      description: 'Sky blue with scattered butis and comfortable wear',
      isNew: false,
      isBestseller: true,
      features: ['Everyday Wear', 'Butis', 'Comfortable', 'Lightweight'],
      craftsmanship: 'Perfect for daily wear'
    },
    {
      id: 5,
      name: 'Printed Chanderi - Lavender Dreams',
      price: '₹9,999',
      originalPrice: '₹12,999',
      image: '/chanderi-5.jpg',
      rating: 4.7,
      reviews: 45,
      fabric: 'Pure Cotton',
      occasion: 'Office',
      color: 'Lavender',
      weaveType: 'Printed',
      transparency: 'Opaque',
      description: 'Lavender with traditional block prints and minimal zari',
      isNew: true,
      isBestseller: false,
      features: ['Block Printed', 'Office Wear', 'Pure Cotton', 'Minimal Zari'],
      craftsmanship: 'Traditional block printing'
    },
    {
      id: 6,
      name: 'Chanderi Silk - Cream Elegance',
      price: '₹14,999',
      originalPrice: '₹18,999',
      image: '/chanderi-6.jpg',
      rating: 4.8,
      reviews: 92,
      fabric: 'Silk Cotton',
      occasion: 'Wedding',
      color: 'Cream',
      weaveType: 'Border',
      transparency: 'Sheer',
      description: 'Cream colored with elaborate border and traditional motifs',
      isNew: false,
      isBestseller: true,
      features: ['Silk Cotton', 'Elaborate Border', 'Sheer', 'Traditional'],
      craftsmanship: 'Special occasion wear'
    },
    {
      id: 7,
      name: 'Chanderi Cotton - Sunshine Yellow',
      price: '₹6,999',
      originalPrice: '₹8,999',
      image: '/chanderi-7.jpg',
      rating: 4.4,
      reviews: 34,
      fabric: 'Pure Cotton',
      occasion: 'Casual',
      color: 'Yellow',
      weaveType: 'Butis',
      transparency: 'Semi-Sheer',
      description: 'Vibrant yellow with small butis and comfortable drape',
      isNew: true,
      isBestseller: false,
      features: ['Vibrant Color', 'Butis', 'Comfortable', 'Summer Wear'],
      craftsmanship: 'Perfect for summer occasions'
    },
    {
      id: 8,
      name: 'Zari Chanderi - Rose Gold',
      price: '₹16,999',
      originalPrice: '₹21,999',
      image: '/chanderi-8.jpg',
      rating: 4.9,
      reviews: 78,
      fabric: 'Silk Cotton',
      occasion: 'Festive',
      color: 'Rose',
      weaveType: 'Buttas',
      transparency: 'Sheer',
      description: 'Rose gold with large buttas and extensive zari work',
      isNew: false,
      isBestseller: true,
      features: ['Rose Gold', 'Large Buttas', 'Extensive Zari', 'Festive'],
      craftsmanship: 'Heavy zari work for special occasions'
    }
  ];

  const filters = {
    priceRange: [
      'Under ₹5,000',
      '₹5,000 - ₹10,000',
      '₹10,000 - ₹15,000',
      'Above ₹15,000'
    ],
    color: ['Pink', 'Mint', 'Peach', 'Blue', 'Lavender', 'Cream', 'Yellow', 'Rose'],
    weaveType: ['Butis', 'Buttas', 'Jaal', 'Border', 'Printed'],
    transparency: ['Opaque', 'Semi-Sheer', 'Sheer']
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
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/sarees" className="text-gray-500 hover:text-sky-600 transition-colors duration-200">
              Sarees
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-sky-600 font-medium">Chanderi Cotton</span>
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
                  <div className="flex items-center mb-2">
                    <Feather className="w-8 h-8 text-sky-600 mr-3" />
                    <h1 className="text-4xl font-serif font-bold text-gray-900">
                      {slide.title}
                    </h1>
                  </div>
                  <h2 className="text-xl text-sky-600 font-medium mb-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {slide.description}
                  </p>
                  <Link
                    href="#products"
                    className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-200"
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

      {/* Chanderi Types Navigation */}
      <section className="py-8 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center text-gray-900 mb-8">
            Types of Chanderi
          </h2>
          <div className="flex justify-center space-x-8">
            {chanderiTypes.map((type, index) => (
              <Link
                key={index}
                href={type.link}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-sky-300 group-hover:to-blue-400 transition-all duration-200 shadow-lg">
                  <div className="text-3xl">🍃</div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-sky-600 transition-colors duration-200 block">
                  {type.name}
                </span>
                <span className="text-xs text-gray-500 mt-1 block">
                  {type.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Chanderi Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                The Delicate Art of Chanderi
              </h2>
              <p className="text-gray-600 mb-4">
                Chanderi sarees from the town of Chanderi in Madhya Pradesh are celebrated for their 
                lightweight texture, sheer quality, and glossy transparency. Woven from hand-spun cotton 
                and silk, these sarees are known for their fine count and luxurious feel.
              </p>
              <p className="text-gray-600 mb-6">
                What makes Chanderi unique is its characteristic golden transparency that comes from 
                the use of fine single yarn. The traditional motifs include nature-inspired designs, 
                peacocks, and geometric patterns woven with zari.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-sky-700 mb-3">Signature Weave Patterns</h4>
                <div className="grid grid-cols-2 gap-3">
                  {weavePatterns.map((pattern, index) => (
                    <div key={index} className="bg-sky-50 p-3 rounded-lg">
                      <h5 className="font-medium text-sky-800">{pattern.name}</h5>
                      <p className="text-xs text-sky-600">{pattern.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌾</div>
                <p className="text-sky-700 font-semibold">Geographical Indication Tag</p>
                <p className="text-sm text-sky-600">Authentic Chanderi from Madhya Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Why Choose Chanderi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-2xl">💨</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Light as Air</h3>
              <p className="text-sm text-gray-600">
                Extremely lightweight and comfortable for all-day wear, perfect for warm weather
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-2xl">✨</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Natural Sheen</h3>
              <p className="text-sm text-gray-600">
                Inherent glossy transparency that gives it a royal appearance without being heavy
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-2xl">🌿</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Breathable</h3>
              <p className="text-sm text-gray-600">
                Pure cotton weave allows skin to breathe, making it ideal for summer and humid climates
              </p>
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
                Chanderi Collection
              </h2>
              <p className="text-gray-600">
                {chanderiProducts.length} lightweight and elegant pieces
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-sky-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-sky-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
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
                          className="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
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
                          className="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Weave Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weave Type</h4>
                  <div className="space-y-2">
                    {filters.weaveType.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.weaveType.includes(type)}
                          onChange={() => toggleFilter('weaveType', type)}
                          className="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Transparency Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Transparency</h4>
                  <div className="space-y-2">
                    {filters.transparency.map((transparency) => (
                      <label key={transparency} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.transparency.includes(transparency)}
                          onChange={() => toggleFilter('transparency', transparency)}
                          className="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{transparency}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ priceRange: [], color: [], weaveType: [], transparency: [] })}
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
                  {chanderiProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-sky-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Summer Pick
                          </span>
                        )}
                        <div className="text-4xl">🍃</div>
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
                            <span key={index} className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs">
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
                          <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors duration-200 text-sm font-semibold">
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
                  {chanderiProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-sky-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Summer Pick
                          </span>
                        )}
                        <div className="text-4xl">🍃</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.features.map((feature, index) => (
                                <span key={index} className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-xs">
                                  {feature}
                                </span>
                              ))}
                            </div>

                            {/* Craftsmanship */}
                            <p className="text-sm text-sky-600 italic">
                              {product.craftsmanship}
                            </p>
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
                          <span className="text-sm text-gray-600">Weave: {product.weaveType}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Texture: {product.transparency}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                          <button className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors duration-200 font-semibold">
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

      {/* Care Instructions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Caring for Your Chanderi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💧</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gentle Hand Wash</h3>
              <p className="text-sm text-gray-600">Use mild detergent and cold water to preserve delicate weave</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌬️</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Air Dry in Shade</h3>
              <p className="text-sm text-gray-600">Avoid direct sunlight to prevent color fading</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🧵</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Low Iron Heat</h3>
              <p className="text-sm text-gray-600">Use low temperature iron to maintain fabric texture</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">📦</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Store Flat</h3>
              <p className="text-sm text-gray-600">Keep folded in cotton cloth to maintain shape</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Sarees */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/sarees"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Sarees
          </Link>
        </div>
      </section>
    </div>
  );
}