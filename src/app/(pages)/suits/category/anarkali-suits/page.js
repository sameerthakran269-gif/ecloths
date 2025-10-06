'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function AnarkaliSuitsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    occasion: [],
    fabric: [],
    length: [],
    work: []
  });

  const heroSlides = [
    {
      image: '/anarkali-banner-1.jpg',
      title: 'Anarkali Suits Collection',
      subtitle: 'Royal Flared Elegance',
      description: 'Discover our exquisite collection of traditional and contemporary Anarkali suits',
      buttonText: 'Shop Collection',
      bgGradient: 'from-purple-50 to-blue-50'
    },
    {
      image: '/anarkali-banner-2.jpg',
      title: 'Floor Length Anarkalis',
      subtitle: 'Regal & Majestic',
      description: 'Stunning floor-length Anarkalis for weddings and special occasions',
      buttonText: 'Floor Length',
      bgGradient: 'from-blue-100 to-purple-100'
    },
    {
      image: '/anarkali-banner-3.jpg',
      title: 'Designer Anarkalis',
      subtitle: 'Contemporary Styles',
      description: 'Modern Anarkali designs with traditional craftsmanship',
      buttonText: 'Designer Collection',
      bgGradient: 'from-indigo-100 to-purple-50'
    }
  ];

  const anarkaliProducts = [
    {
      id: 1,
      name: 'Heavy Embroidered Anarkali',
      price: '₹15,999',
      originalPrice: '₹21,999',
      image: '/anarkali-1.jpg',
      rating: 4.9,
      reviews: 189,
      fabric: 'Net',
      occasion: 'Wedding',
      color: 'Royal Blue',
      length: 'Floor Length',
      work: 'Zari & Sequins',
      description: 'Heavy embroidered Anarkali with zari and sequin work',
      isNew: true,
      isBestseller: true,
      features: ['Heavy Embroidery', 'Floor Length', 'Net Fabric', 'Party Wear']
    },
    {
      id: 2,
      name: 'Chiffon Anarkali Suit',
      price: '₹8,499',
      originalPrice: '₹11,999',
      image: '/anarkali-2.jpg',
      rating: 4.7,
      reviews: 134,
      fabric: 'Chiffon',
      occasion: 'Party',
      color: 'Pink',
      length: 'Calf Length',
      work: 'Embroidery',
      description: 'Elegant chiffon Anarkali with delicate embroidery',
      isNew: false,
      isBestseller: true,
      features: ['Chiffon', 'Flowy', 'Party Wear', 'Light Weight']
    },
    {
      id: 3,
      name: 'Silk Anarkali with Jacket',
      price: '₹12,999',
      originalPrice: '₹16,999',
      image: '/anarkali-3.jpg',
      rating: 4.8,
      reviews: 156,
      fabric: 'Silk',
      occasion: 'Reception',
      color: 'Maroon',
      length: 'Floor Length',
      work: 'Zardozi',
      description: 'Luxurious silk Anarkali with jacket and zardozi work',
      isNew: true,
      isBestseller: false,
      features: ['Pure Silk', 'With Jacket', 'Zardozi', 'Luxury']
    },
    {
      id: 4,
      name: 'Georgette Anarkali Set',
      price: '₹6,999',
      originalPrice: '₹9,999',
      image: '/anarkali-4.jpg',
      rating: 4.6,
      reviews: 98,
      fabric: 'Georgette',
      occasion: 'Festive',
      color: 'Green',
      length: 'Ankle Length',
      work: 'Stone Work',
      description: 'Beautiful georgette Anarkali with stone embellishments',
      isNew: false,
      isBestseller: true,
      features: ['Georgette', 'Stone Work', 'Festive Wear', 'Comfortable']
    },
    {
      id: 5,
      name: 'Designer Printed Anarkali',
      price: '₹5,499',
      originalPrice: '₹7,999',
      image: '/anarkali-5.jpg',
      rating: 4.5,
      reviews: 87,
      fabric: 'Cotton',
      occasion: 'Casual',
      color: 'Yellow',
      length: 'Knee Length',
      work: 'Print',
      description: 'Designer printed Anarkali for casual occasions',
      isNew: true,
      isBestseller: false,
      features: ['Printed', 'Cotton', 'Casual Wear', 'Summer']
    },
    {
      id: 6,
      name: 'Velvet Anarkali Suit',
      price: '₹11,999',
      originalPrice: '₹15,999',
      image: '/anarkali-6.jpg',
      rating: 4.7,
      reviews: 112,
      fabric: 'Velvet',
      occasion: 'Party',
      color: 'Burgundy',
      length: 'Floor Length',
      work: 'Embroidery',
      description: 'Luxurious velvet Anarkali for winter parties',
      isNew: false,
      isBestseller: true,
      features: ['Velvet', 'Winter Wear', 'Elegant', 'Rich Look']
    },
    {
      id: 7,
      name: 'Net Anarkali with Dupatta',
      price: '₹9,999',
      originalPrice: '₹13,999',
      image: '/anarkali-7.jpg',
      rating: 4.8,
      reviews: 145,
      fabric: 'Net',
      occasion: 'Reception',
      color: 'Gold',
      length: 'Floor Length',
      work: 'Sequins',
      description: 'Stunning net Anarkali with heavy sequin work',
      isNew: true,
      isBestseller: true,
      features: ['Net', 'Sequin Work', 'Reception Wear', 'Heavy']
    },
    {
      id: 8,
      name: 'Cotton Silk Anarkali',
      price: '₹7,499',
      originalPrice: '₹10,999',
      image: '/anarkali-8.jpg',
      rating: 4.6,
      reviews: 78,
      fabric: 'Cotton Silk',
      occasion: 'Festive',
      color: 'Orange',
      length: 'Ankle Length',
      work: 'Gota Patti',
      description: 'Traditional cotton silk Anarkali with gota patti work',
      isNew: false,
      isBestseller: false,
      features: ['Cotton Silk', 'Gota Patti', 'Traditional', 'Comfortable']
    },
    {
      id: 9,
      name: 'Designer Cape Anarkali',
      price: '₹14,999',
      originalPrice: '₹19,999',
      image: '/anarkali-9.jpg',
      rating: 4.9,
      reviews: 167,
      fabric: 'Georgette',
      occasion: 'Wedding',
      color: 'Red',
      length: 'Floor Length',
      work: 'Kundan',
      description: 'Designer Anarkali with cape style and kundan work',
      isNew: true,
      isBestseller: true,
      features: ['Cape Style', 'Kundan Work', 'Designer', 'Bridal']
    },
    {
      id: 10,
      name: 'Light Weight Anarkali',
      price: '₹4,999',
      originalPrice: '₹6,999',
      image: '/anarkali-10.jpg',
      rating: 4.4,
      reviews: 65,
      fabric: 'Chiffon',
      occasion: 'Casual',
      color: 'Pastel Blue',
      length: 'Calf Length',
      work: 'Embroidery',
      description: 'Light weight Anarkali for daily wear and casual outings',
      isNew: true,
      isBestseller: false,
      features: ['Light Weight', 'Chiffon', 'Daily Wear', 'Comfortable']
    },
    {
      id: 11,
      name: 'Heavy Banarasi Anarkali',
      price: '₹18,999',
      originalPrice: '₹24,999',
      image: '/anarkali-11.jpg',
      rating: 4.9,
      reviews: 198,
      fabric: 'Banarasi Silk',
      occasion: 'Bridal',
      color: 'Wine Red',
      length: 'Floor Length',
      work: 'Banarasi Weave',
      description: 'Heavy Banarasi silk Anarkali with traditional weave',
      isNew: false,
      isBestseller: true,
      features: ['Banarasi Silk', 'Traditional', 'Heavy', 'Bridal Wear']
    },
    {
      id: 12,
      name: 'Printed Cotton Anarkali',
      price: '₹3,999',
      originalPrice: '₹5,999',
      image: '/anarkali-12.jpg',
      rating: 4.3,
      reviews: 56,
      fabric: 'Cotton',
      occasion: 'Casual',
      color: 'White',
      length: 'Knee Length',
      work: 'Print',
      description: 'Comfortable printed cotton Anarkali for summer',
      isNew: true,
      isBestseller: false,
      features: ['Cotton', 'Printed', 'Summer Wear', 'Affordable']
    }
  ];

  const filters = {
    priceRange: [
      'Under ₹5,000',
      '₹5,000 - ₹10,000',
      '₹10,000 - ₹15,000',
      'Above ₹15,000'
    ],
    occasion: ['Casual', 'Festive', 'Party', 'Wedding', 'Bridal', 'Reception', 'Office'],
    fabric: ['Net', 'Chiffon', 'Silk', 'Georgette', 'Cotton', 'Velvet', 'Cotton Silk', 'Banarasi Silk'],
    length: ['Knee Length', 'Calf Length', 'Ankle Length', 'Floor Length'],
    work: ['Embroidery', 'Zari', 'Stone Work', 'Sequin', 'Kundan', 'Zardozi', 'Gota Patti', 'Print']
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
            <span className="text-purple-600 font-medium">Anarkali Suits</span>
          </nav>
        </div>
      </section>

      {/* Style Description */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              What are Anarkali Suits?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Anarkali suits are characterized by their long, flowy frock-style kurta that fits 
              closely from the bust line and flares out from the waist down. Named after the 
              legendary court dancer Anarkali from the Mughal era, these suits exude royal 
              elegance and grace. Perfect for weddings, parties, and festive occasions, Anarkalis 
              create a stunning silhouette that combines traditional charm with contemporary style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">👑</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mughal Heritage</h3>
                <p className="text-sm text-gray-600">Royal attire with historical significance and elegance</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💃</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flattering Silhouette</h3>
                <p className="text-sm text-gray-600">Creates beautiful hourglass figure for all body types</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Versatile Styles</h3>
                <p className="text-sm text-gray-600">From floor-length royal to contemporary short styles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Length Guide */}
      <section className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Anarkali Length Guide
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect length for your occasion and comfort
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Floor Length</h3>
              <p className="text-gray-600 mb-4">Touches the floor, perfect for weddings and formal events</p>
              <span className="text-purple-600 font-semibold">Most Formal</span>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ankle Length</h3>
              <p className="text-gray-600 mb-4">Ends at ankles, ideal for parties and festive occasions</p>
              <span className="text-purple-600 font-semibold">Semi-Formal</span>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Calf Length</h3>
              <p className="text-gray-600 mb-4">Ends at mid-calf, comfortable for daily wear and casual events</p>
              <span className="text-purple-600 font-semibold">Casual</span>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Knee Length</h3>
              <p className="text-gray-600 mb-4">Ends at knees, modern and trendy for contemporary looks</p>
              <span className="text-purple-600 font-semibold">Contemporary</span>
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
                Anarkali Suits Collection
              </h2>
              <p className="text-gray-600">
                Showing {anarkaliProducts.length} beautiful Anarkali suits
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

                {/* Length Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Length</h4>
                  <div className="space-y-2">
                    {filters.length.map((length) => (
                      <label key={length} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.length.includes(length)}
                          onChange={() => toggleFilter('length', length)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{length}</span>
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
                  onClick={() => setSelectedFilters({ 
                    priceRange: [], 
                    occasion: [], 
                    fabric: [], 
                    length: [],
                    work: []
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
                  {anarkaliProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center">
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
                  {anarkaliProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center">
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
                          <span className="text-sm text-gray-600">Length: {product.length}</span>
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
              Anarkali Styling Guide
            </h2>
            <p className="text-lg text-gray-600">
              Expert tips to carry your Anarkali with grace and elegance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessories</h3>
              <p className="text-gray-600">Statement necklaces and jhumkas complement the neckline</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Footwear</h3>
              <p className="text-gray-600">Heels for floor-length, flats or wedges for shorter lengths</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👜</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bags</h3>
              <p className="text-gray-600">Clutch or potli bags that match the embroidery work</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Makeup</h3>
              <p className="text-gray-600">Bold lips and dramatic eyes to match the royal look</p>
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
              href="/suits/lehenga"
              className="text-center group p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👰</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 block">
                Lehenga Choli
              </span>
            </Link>
            <Link
              href="/suits/sharara"
              className="text-center group p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✨</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 block">
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
              <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 block">
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
              <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 block">
                Palazzo Suits
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            New Anarkali Designs Weekly
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Subscribe to get notified about our latest Anarkali collections and exclusive offers
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