'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, ArrowLeft, Share2, Crown } from 'lucide-react';

export default function BanarasiSilkPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    color: [],
    brocadeType: [],
    weight: []
  });

  const heroSlides = [
    {
      image: '/banarasi-banner-1.jpg',
      title: 'Royal Banarasi Silk',
      subtitle: 'Mughal Inspired Grandeur',
      description: 'Handcrafted with pure silk and real zari, embodying centuries of weaving heritage',
      buttonText: 'Explore Royal Collection',
      bgGradient: 'from-purple-100 to-indigo-50'
    },
    {
      image: '/banarasi-banner-2.jpg',
      title: 'Bridal Banarasi Special',
      subtitle: 'For Your Grand Day',
      description: 'Exquisite bridal sarees with intricate designs and luxurious fabrics',
      buttonText: 'Shop Bridal Collection',
      bgGradient: 'from-red-100 to-pink-50'
    }
  ];

  const banarasiTypes = [
    {
      name: 'Katan Silk',
      image: '/banarasi-katan.jpg',
      link: '#katan',
      description: 'Pure silk with zari'
    },
    {
      name: 'Organza',
      image: '/banarasi-organza.jpg',
      link: '#organza',
      description: 'Sheer and lightweight'
    },
    {
      name: 'Shattir',
      image: '/banarasi-shattir.jpg',
      link: '#shattir',
      description: 'Figured designs'
    },
    {
      name: 'Vaskat',
      image: '/banarasi-vaskat.jpg',
      link: '#vaskat',
      description: 'Cutwork elegance'
    }
  ];

  const brocadePatterns = [
    {
      name: 'Jangla',
      description: 'Floral and foliate patterns'
    },
    {
      name: 'Tanchoi',
      description: 'Chinese inspired motifs'
    },
    {
      name: 'Beldar',
      description: 'Vine and creeper designs'
    },
    {
      name: 'Butidar',
      description: 'Small scattered motifs'
    }
  ];

  const banarasiProducts = [
    {
      id: 1,
      name: 'Pure Katan Banarasi Silk - Red',
      price: '₹45,999',
      originalPrice: '₹58,999',
      image: '/banarasi-1.jpg',
      rating: 4.9,
      reviews: 203,
      fabric: 'Pure Katan Silk',
      occasion: 'Bridal',
      color: 'Red',
      brocadeType: 'Jangla',
      weight: 'Heavy',
      description: 'Traditional red Banarasi with intricate jangla patterns and gold zari work',
      isNew: true,
      isBestseller: true,
      features: ['Pure Katan Silk', 'Gold Zari', 'Jangla Pattern', 'Heavy Weight'],
      craftsmanship: 'Handwoven by master weavers from Varanasi'
    },
    {
      id: 2,
      name: 'Banarasi Silk - Emerald Green',
      price: '₹38,999',
      originalPrice: '₹49,999',
      image: '/banarasi-2.jpg',
      rating: 4.8,
      reviews: 156,
      fabric: 'Pure Silk',
      occasion: 'Wedding',
      color: 'Green',
      brocadeType: 'Tanchoi',
      weight: 'Medium',
      description: 'Emerald green with Tanchoi motifs and silver zari detailing',
      isNew: false,
      isBestseller: true,
      features: ['Tanchoi Motifs', 'Silver Zari', 'Pure Silk', 'Medium Weight'],
      craftsmanship: 'Inspired by Chinese weaving techniques'
    },
    {
      id: 3,
      name: 'Banarasi Silk - Royal Blue',
      price: '₹42,999',
      originalPrice: '₹54,999',
      image: '/banarasi-3.jpg',
      rating: 4.9,
      reviews: 178,
      fabric: 'Katan Silk',
      occasion: 'Festive',
      color: 'Blue',
      brocadeType: 'Beldar',
      weight: 'Heavy',
      description: 'Royal blue with beldar vine patterns and mixed zari work',
      isNew: true,
      isBestseller: false,
      features: ['Beldar Pattern', 'Mixed Zari', 'Katan Silk', 'Heavy Weight'],
      craftsmanship: 'Traditional vine and creeper designs'
    },
    {
      id: 4,
      name: 'Banarasi Organza - Pink & Gold',
      price: '₹35,999',
      originalPrice: '₹44,999',
      image: '/banarasi-4.jpg',
      rating: 4.7,
      reviews: 134,
      fabric: 'Organza',
      occasion: 'Party',
      color: 'Pink',
      brocadeType: 'Butidar',
      weight: 'Light',
      description: 'Sheer pink organza with scattered buti motifs and gold zari',
      isNew: false,
      isBestseller: true,
      features: ['Organza Fabric', 'Butidar Pattern', 'Gold Zari', 'Light Weight'],
      craftsmanship: 'Delicate sheer fabric with scattered motifs'
    },
    {
      id: 5,
      name: 'Banarasi Silk - Maroon Majesty',
      price: '₹48,999',
      originalPrice: '₹62,999',
      image: '/banarasi-5.jpg',
      rating: 4.9,
      reviews: 189,
      fabric: 'Pure Katan Silk',
      occasion: 'Bridal',
      color: 'Maroon',
      brocadeType: 'Jangla',
      weight: 'Heavy',
      description: 'Deep maroon with elaborate jangla patterns and extensive zari work',
      isNew: true,
      isBestseller: true,
      features: ['Elaborate Jangla', 'Extensive Zari', 'Pure Katan', 'Bridal Weight'],
      craftsmanship: 'Master weaver signature piece'
    },
    {
      id: 6,
      name: 'Banarasi Shattir - Purple Elegance',
      price: '₹39,999',
      originalPrice: '₹51,999',
      image: '/banarasi-6.jpg',
      rating: 4.8,
      reviews: 145,
      fabric: 'Shattir Silk',
      occasion: 'Traditional',
      color: 'Purple',
      brocadeType: 'Figured',
      weight: 'Medium',
      description: 'Regal purple with figured designs and traditional patterns',
      isNew: false,
      isBestseller: false,
      features: ['Shattir Weave', 'Figured Designs', 'Traditional', 'Medium Weight'],
      craftsmanship: 'Figured weaving technique special'
    },
    {
      id: 7,
      name: 'Banarasi Vaskat - Cream & Gold',
      price: '₹52,999',
      originalPrice: '₹67,999',
      image: '/banarasi-7.jpg',
      rating: 4.9,
      reviews: 167,
      fabric: 'Katan Silk',
      occasion: 'Royal',
      color: 'Cream',
      brocadeType: 'Cutwork',
      weight: 'Heavy',
      description: 'Cream base with intricate cutwork patterns and pure gold zari',
      isNew: true,
      isBestseller: true,
      features: ['Cutwork Art', 'Pure Gold Zari', 'Royal Collection', 'Heavy Weight'],
      craftsmanship: 'Cutwork technique with gold thread'
    },
    {
      id: 8,
      name: 'Banarasi Silk - Saffron Glory',
      price: '₹36,999',
      originalPrice: '₹46,999',
      image: '/banarasi-8.jpg',
      rating: 4.7,
      reviews: 123,
      fabric: 'Pure Silk',
      occasion: 'Festive',
      color: 'Orange',
      brocadeType: 'Beldar',
      weight: 'Medium',
      description: 'Vibrant saffron with beldar patterns and traditional motifs',
      isNew: false,
      isBestseller: true,
      features: ['Saffron Color', 'Beldar Pattern', 'Traditional', 'Festive Wear'],
      craftsmanship: 'Traditional Varanasi weaving'
    }
  ];

  const filters = {
    priceRange: [
      'Under ₹30,000',
      '₹30,000 - ₹45,000',
      '₹45,000 - ₹60,000',
      'Above ₹60,000'
    ],
    color: ['Red', 'Green', 'Blue', 'Pink', 'Maroon', 'Purple', 'Cream', 'Orange'],
    brocadeType: ['Jangla', 'Tanchoi', 'Beldar', 'Butidar', 'Cutwork', 'Figured'],
    weight: ['Light', 'Medium', 'Heavy', 'Bridal Weight']
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
            <Link href="/sarees" className="text-gray-500 hover:text-purple-600 transition-colors duration-200">
              Sarees
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-purple-600 font-medium">Banarasi Silk</span>
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
                    <Crown className="w-8 h-8 text-purple-600 mr-3" />
                    <h1 className="text-4xl font-serif font-bold text-gray-900">
                      {slide.title}
                    </h1>
                  </div>
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
      </section>

      {/* Banarasi Types Navigation */}
      <section className="py-8 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center text-gray-900 mb-8">
            Types of Banarasi Silk
          </h2>
          <div className="flex justify-center space-x-8">
            {banarasiTypes.map((type, index) => (
              <Link
                key={index}
                href={type.link}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-purple-300 group-hover:to-indigo-400 transition-all duration-200 shadow-lg">
                  <div className="text-3xl">👑</div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 block">
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

      {/* About Banarasi Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                The Royal Heritage of Banarasi
              </h2>
              <p className="text-gray-600 mb-4">
                Banarasi silk sarees from Varanasi are synonymous with luxury, tradition, and royal elegance. 
                With origins dating back to the Mughal era, these sarees are characterized by their intricate 
                brocade work, opulent designs, and use of real gold and silver zari.
              </p>
              <p className="text-gray-600 mb-6">
                Each Banarasi saree takes 15 days to 6 months to complete, depending on the complexity of 
                the design. The weaving involves three artisans working simultaneously on a single loom, 
                creating patterns that often depict floral motifs, foliates, and Mughal-inspired designs.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-purple-700 mb-3">Signature Brocade Patterns</h4>
                <div className="grid grid-cols-2 gap-3">
                  {brocadePatterns.map((pattern, index) => (
                    <div key={index} className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-medium text-purple-800">{pattern.name}</h5>
                      <p className="text-xs text-purple-600">{pattern.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <p className="text-purple-700 font-semibold">Geographical Indication Tag</p>
                <p className="text-sm text-purple-600">Authentic Banarasi from Varanasi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            The Art of Banarasi Weaving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-2xl">🕰️</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Time-Honored Techniques</h3>
              <p className="text-sm text-gray-600">
                Traditional handloom weaving techniques passed down through generations of master weavers
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-2xl">✨</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Zari Work</h3>
              <p className="text-sm text-gray-600">
                Use of authentic gold and silver threads for luxurious brocade patterns
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-2xl">🎨</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Intricate Motifs</h3>
              <p className="text-sm text-gray-600">
                Mughal-inspired designs featuring florals, paisleys, and architectural elements
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
                Royal Banarasi Collection
              </h2>
              <p className="text-gray-600">
                {banarasiProducts.length} exquisite pieces of woven heritage
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
                  Royal Filters
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brocade Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Brocade Type</h4>
                  <div className="space-y-2">
                    {filters.brocadeType.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.brocadeType.includes(type)}
                          onChange={() => toggleFilter('brocadeType', type)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Weight Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight</h4>
                  <div className="space-y-2">
                    {filters.weight.map((weight) => (
                      <label key={weight} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.weight.includes(weight)}
                          onChange={() => toggleFilter('weight', weight)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{weight}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ priceRange: [], color: [], brocadeType: [], weight: [] })}
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
                  {banarasiProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 right-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Royal Pick
                          </span>
                        )}
                        <div className="text-4xl">👑</div>
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
                            <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
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
                  {banarasiProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Royal Pick
                          </span>
                        )}
                        <div className="text-4xl">👑</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.features.map((feature, index) => (
                                <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                                  {feature}
                                </span>
                              ))}
                            </div>

                            {/* Craftsmanship */}
                            <p className="text-sm text-purple-600 italic">
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
                          <span className="text-sm text-gray-600">Brocade: {product.brocadeType}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Weight: {product.weight}</span>
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

      {/* Care Instructions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Preserving Your Banarasi Heritage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🧴</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dry Clean Only</h3>
              <p className="text-sm text-gray-600">Professional dry cleaning preserves zari and silk texture</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🧵</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Store Flat</h3>
              <p className="text-sm text-gray-600">Avoid hanging to prevent stretching of delicate zari work</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌫️</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Avoid Moisture</h3>
              <p className="text-sm text-gray-600">Keep in dry place to prevent tarnishing of zari</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">📜</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Muslin Wrap</h3>
              <p className="text-sm text-gray-600">Wrap in muslin cloth with neem leaves for protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Sarees */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/sarees"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Sarees
          </Link>
        </div>
      </section>
    </div>
  );
}