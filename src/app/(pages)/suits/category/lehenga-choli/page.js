'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function LehengaCholiPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    occasion: [],
    fabric: [],
    work: [],
    blouseStyle: []
  });

  const heroSlides = [
    {
      image: '/lehenga-banner-1.jpg',
      title: 'Lehenga Choli Collection',
      subtitle: 'Royal Bridal & Festive Wear',
      description: 'Discover our exquisite collection of traditional and contemporary lehenga cholis',
      buttonText: 'Shop Collection',
      bgGradient: 'from-rose-50 to-red-50'
    },
    {
      image: '/lehenga-banner-2.jpg',
      title: 'Bridal Lehenga Special',
      subtitle: 'Dream Wedding Attire',
      description: 'Magnificent bridal lehengas with intricate craftsmanship',
      buttonText: 'Bridal Collection',
      bgGradient: 'from-red-100 to-pink-50'
    },
    {
      image: '/lehenga-banner-3.jpg',
      title: 'Designer Lehengas',
      subtitle: 'Contemporary Meets Traditional',
      description: 'Latest designer lehenga trends for modern brides',
      buttonText: 'Designer Collection',
      bgGradient: 'from-pink-100 to-rose-100'
    }
  ];

  const lehengaProducts = [
    {
      id: 1,
      name: 'Royal Bridal Red Lehenga',
      price: '₹45,999',
      originalPrice: '₹59,999',
      image: '/lehenga-1.jpg',
      rating: 4.9,
      reviews: 234,
      fabric: 'Silk',
      occasion: 'Bridal',
      color: 'Red',
      work: 'Zari & Kundan',
      blouseStyle: 'Full Sleeve',
      description: 'Heavy bridal lehenga with kundan and zari work',
      isNew: true,
      isBestseller: true,
      features: ['Heavy Zari', 'Kundan Work', 'Bridal Wear', 'Custom Stitching']
    },
    {
      id: 2,
      name: 'Designer Pink Lehenga Set',
      price: '₹28,999',
      originalPrice: '₹38,999',
      image: '/lehenga-2.jpg',
      rating: 4.8,
      reviews: 167,
      fabric: 'Georgette',
      occasion: 'Reception',
      color: 'Pink',
      work: 'Stone & Sequins',
      blouseStyle: 'Backless',
      description: 'Designer lehenga with stone and sequin embellishments',
      isNew: false,
      isBestseller: true,
      features: ['Stone Work', 'Designer', 'Reception Wear', 'Light Weight']
    },
    {
      id: 3,
      name: 'Traditional Silk Lehenga',
      price: '₹32,999',
      originalPrice: '₹42,999',
      image: '/lehenga-3.jpg',
      rating: 4.7,
      reviews: 145,
      fabric: 'Banarasi Silk',
      occasion: 'Wedding',
      color: 'Maroon',
      work: 'Zardozi',
      blouseStyle: 'Jacket Style',
      description: 'Traditional Banarasi silk lehenga with zardozi work',
      isNew: true,
      isBestseller: false,
      features: ['Banarasi Silk', 'Zardozi', 'Traditional', 'Premium Quality']
    },
    {
      id: 4,
      name: 'Party Wear Lehenga',
      price: '₹18,999',
      originalPrice: '₹24,999',
      image: '/lehenga-4.jpg',
      rating: 4.6,
      reviews: 98,
      fabric: 'Net',
      occasion: 'Party',
      color: 'Royal Blue',
      work: 'Embroidery',
      blouseStyle: 'Crop Top',
      description: 'Elegant party wear lehenga with embroidery work',
      isNew: false,
      isBestseller: true,
      features: ['Net Fabric', 'Party Wear', 'Crop Top', 'Modern']
    },
    {
      id: 5,
      name: 'Heavy Kanjivaram Lehenga',
      price: '₹52,999',
      originalPrice: '₹68,999',
      image: '/lehenga-5.jpg',
      rating: 4.9,
      reviews: 189,
      fabric: 'Kanjivaram Silk',
      occasion: 'Bridal',
      color: 'Gold',
      work: 'Temple Border',
      blouseStyle: 'Full Sleeve',
      description: 'Luxurious Kanjivaram silk lehenga with temple border',
      isNew: true,
      isBestseller: true,
      features: ['Kanjivaram', 'Temple Border', 'Heavy', 'Luxury']
    },
    {
      id: 6,
      name: 'Festive Lehenga Choli',
      price: '₹14,999',
      originalPrice: '₹19,999',
      image: '/lehenga-6.jpg',
      rating: 4.5,
      reviews: 112,
      fabric: 'Cotton Silk',
      occasion: 'Festive',
      color: 'Green',
      work: 'Gota Patti',
      blouseStyle: 'Regular',
      description: 'Comfortable festive lehenga with gota patti work',
      isNew: true,
      isBestseller: false,
      features: ['Cotton Silk', 'Gota Patti', 'Festive', 'Comfortable']
    },
    {
      id: 7,
      name: 'Designer Cape Lehenga',
      price: '₹36,999',
      originalPrice: '₹47,999',
      image: '/lehenga-7.jpg',
      rating: 4.8,
      reviews: 134,
      fabric: 'Velvet',
      occasion: 'Reception',
      color: 'Black',
      work: 'Thread & Sequins',
      blouseStyle: 'Cape Style',
      description: 'Contemporary designer lehenga with cape style blouse',
      isNew: false,
      isBestseller: true,
      features: ['Cape Style', 'Velvet', 'Contemporary', 'Designer']
    },
    {
      id: 8,
      name: 'Traditional Gujarati Lehenga',
      price: '₹22,999',
      originalPrice: '₹29,999',
      image: '/lehenga-8.jpg',
      rating: 4.7,
      reviews: 89,
      fabric: 'Silk',
      occasion: 'Festive',
      color: 'Orange',
      work: 'Mirror Work',
      blouseStyle: 'Choli',
      description: 'Traditional Gujarati style lehenga with mirror work',
      isNew: false,
      isBestseller: false,
      features: ['Mirror Work', 'Gujarati Style', 'Traditional', 'Colorful']
    },
    {
      id: 9,
      name: 'Bridal Lehenga with Dupatta',
      price: '₹41,999',
      originalPrice: '₹54,999',
      image: '/lehenga-9.jpg',
      rating: 4.9,
      reviews: 178,
      fabric: 'Silk',
      occasion: 'Bridal',
      color: 'Wine Red',
      work: 'Resham & Stones',
      blouseStyle: 'Full Sleeve',
      description: 'Complete bridal lehenga set with heavy dupatta',
      isNew: true,
      isBestseller: true,
      features: ['Heavy Dupatta', 'Resham Work', 'Bridal Set', 'Complete']
    },
    {
      id: 10,
      name: 'Light Weight Lehenga',
      price: '₹12,999',
      originalPrice: '₹16,999',
      image: '/lehenga-10.jpg',
      rating: 4.4,
      reviews: 76,
      fabric: 'Chiffon',
      occasion: 'Sangeet',
      color: 'Pastel Pink',
      work: 'Embroidery',
      blouseStyle: 'Sleeveless',
      description: 'Light weight lehenga perfect for sangeet functions',
      isNew: true,
      isBestseller: false,
      features: ['Light Weight', 'Chiffon', 'Sangeet Wear', 'Comfortable']
    },
    {
      id: 11,
      name: 'Royal Navy Lehenga',
      price: '₹38,999',
      originalPrice: '₹49,999',
      image: '/lehenga-11.jpg',
      rating: 4.8,
      reviews: 156,
      fabric: 'Velvet',
      occasion: 'Reception',
      color: 'Navy Blue',
      work: 'Kundan & Pearls',
      blouseStyle: 'High Neck',
      description: 'Royal navy lehenga with kundan and pearl work',
      isNew: false,
      isBestseller: true,
      features: ['Kundan Work', 'Pearls', 'Royal Look', 'Elegant']
    },
    {
      id: 12,
      name: 'Contemporary Lehenga Set',
      price: '₹26,999',
      originalPrice: '₹34,999',
      image: '/lehenga-12.jpg',
      rating: 4.6,
      reviews: 98,
      fabric: 'Georgette',
      occasion: 'Cocktail',
      color: 'Silver',
      work: 'Sequin',
      blouseStyle: 'Off Shoulder',
      description: 'Contemporary lehenga for cocktail parties',
      isNew: true,
      isBestseller: false,
      features: ['Contemporary', 'Sequin', 'Cocktail', 'Modern']
    }
  ];

  const filters = {
    priceRange: [
      'Under ₹15,000',
      '₹15,000 - ₹30,000',
      '₹30,000 - ₹50,000',
      'Above ₹50,000'
    ],
    occasion: ['Bridal', 'Wedding', 'Reception', 'Sangeet', 'Festive', 'Party', 'Cocktail'],
    fabric: ['Silk', 'Georgette', 'Velvet', 'Net', 'Chiffon', 'Cotton Silk', 'Kanjivaram', 'Banarasi'],
    work: ['Zari', 'Kundan', 'Zardozi', 'Stone Work', 'Embroidery', 'Gota Patti', 'Mirror Work', 'Sequin'],
    blouseStyle: ['Full Sleeve', 'Sleeveless', 'Backless', 'Crop Top', 'Jacket Style', 'Cape Style', 'High Neck', 'Off Shoulder']
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

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-rose-600' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-600">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/suits" className="text-gray-500 hover:text-rose-600">
              Suits
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-rose-600 font-medium">Lehenga Choli</span>
          </nav>
        </div>
      </section>

      {/* Style Description */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              What is Lehenga Choli?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lehenga Choli is a traditional Indian outfit consisting of a flared skirt (lehenga), 
              a fitted blouse (choli), and a dupatta. Originating from royal courts, it has evolved 
              into the quintessential bridal and festive wear. Known for its intricate embroidery, 
              luxurious fabrics, and majestic appeal, lehenga choli remains the first choice for 
              weddings, festivals, and special celebrations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-rose-50 rounded-lg">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">👑</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Royal Heritage</h3>
                <p className="text-sm text-gray-600">Traditional attire with royal origins and modern adaptations</p>
              </div>
              <div className="text-center p-6 bg-rose-50 rounded-lg">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Intricate Craftsmanship</h3>
                <p className="text-sm text-gray-600">Handcrafted embroidery and detailed workmanship</p>
              </div>
              <div className="text-center p-6 bg-rose-50 rounded-lg">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💫</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Versatile Styles</h3>
                <p className="text-sm text-gray-600">From traditional bridal to contemporary party wear</p>
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
                Lehenga Choli Collection
              </h2>
              <p className="text-gray-600">
                Showing {lehengaProducts.length} exquisite lehenga sets
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
            <div className="lg:w-72 flex-shrink-0">
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
                          className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{work}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Blouse Style Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Blouse Style</h4>
                  <div className="space-y-2">
                    {filters.blouseStyle.map((style) => (
                      <label key={style} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.blouseStyle.includes(style)}
                          onChange={() => toggleFilter('blouseStyle', style)}
                          className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{style}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ 
                    priceRange: [], 
                    occasion: [], 
                    fabric: [], 
                    work: [],
                    blouseStyle: []
                  })}
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
                  {lehengaProducts.map((product) => (
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
                        <div className="text-4xl">👰</div>
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
                            <span key={index} className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded">
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
                  {lehengaProducts.map((product) => (
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
                        <div className="text-4xl">👰</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {product.features.map((feature, index) => (
                                <span key={index} className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded">
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

      {/* Wedding Functions Guide */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Lehenga for Every Wedding Function
            </h2>
            <p className="text-lg text-gray-600">
              Perfect lehenga choices for different wedding ceremonies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wedding Ceremony</h3>
              <p className="text-gray-600 mb-4">Traditional red/maroon lehengas with heavy embroidery</p>
              <span className="text-rose-600 font-semibold">₹35,000 - ₹80,000</span>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💃</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sangeet Night</h3>
              <p className="text-gray-600 mb-4">Light weight, comfortable lehengas for dancing</p>
              <span className="text-rose-600 font-semibold">₹15,000 - ₹35,000</span>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reception</h3>
              <p className="text-gray-600 mb-4">Elegant and sophisticated designer lehengas</p>
              <span className="text-rose-600 font-semibold">₹25,000 - ₹60,000</span>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cocktail Party</h3>
              <p className="text-gray-600 mb-4">Contemporary and trendy lehenga styles</p>
              <span className="text-rose-600 font-semibold">₹20,000 - ₹45,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Styling Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Lehenga Styling Guide
            </h2>
            <p className="text-lg text-gray-600">
              Expert tips to style your lehenga perfectly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jewelry Selection</h3>
              <p className="text-gray-600">Kundan or polki sets for traditional, minimal for contemporary</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Footwear</h3>
              <p className="text-gray-600">Heels for height, wedges for comfort during long functions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧣</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dupatta Draping</h3>
              <p className="text-gray-600">Experiment with different styles - Gujarati, Mughal, or modern</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Makeup & Hair</h3>
              <p className="text-gray-600">Bridal makeup with traditional hairstyles or open curls</p>
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
              Discover more traditional and contemporary outfits
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
              <span className="font-medium text-gray-700 group-hover:text-rose-600 transition-colors duration-200 block">
                Anarkali Suits
              </span>
            </Link>
            <Link
              href="/suits/sharara"
              className="text-center group p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✨</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-rose-600 transition-colors duration-200 block">
                Sharara Suits
              </span>
            </Link>
            <Link
              href="/suits/straight-cut"
              className="text-center group p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👔</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-rose-600 transition-colors duration-200 block">
                Straight Cut
              </span>
            </Link>
            <Link
              href="/suits/palazzo"
              className="text-center group p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👖</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-rose-600 transition-colors duration-200 block">
                Palazzo Suits
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            New Bridal Lehengas Every Week
          </h2>
          <p className="text-rose-100 text-lg mb-8">
            Subscribe to get notified about our latest bridal collections and exclusive wedding offers
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