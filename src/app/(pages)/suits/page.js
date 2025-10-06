'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function SuitsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    occasion: [],
    fabric: []
  });

  const heroSlides = [
    {
      image: '/suits-banner-1.jpg',
      title: 'Designer Suits Collection',
      subtitle: 'Contemporary Styles for the Modern Woman',
      description: 'Discover our premium collection of designer suits and lehengas',
      buttonText: 'Shop Now',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      image: '/suits-banner-2.jpg',
      title: 'Anarkali Special Edition',
      subtitle: 'Royal Elegance Redefined',
      description: 'Exquisite Anarkali suits for your special occasions',
      buttonText: 'Explore Anarkalis',
      bgGradient: 'from-purple-100 to-pink-50'
    },
    {
      image: '/suits-banner-3.jpg',
      title: 'Party Wear Collection',
      subtitle: 'Make a Statement Wherever You Go',
      description: 'Stunning party wear suits for evening events',
      buttonText: 'View Collection',
      bgGradient: 'from-amber-50 to-orange-50'
    }
  ];

  const suitTypes = [
    {
      name: 'Anarkali Suits',
      image: '/anarkali.jpg',
      link: '/suits/anarkali',
      description: 'Royal floor-length suits',
      slug:'/category/anarkali-suits'
    },
    {
      name: 'Straight Cut Suits',
      image: '/straight-cut.jpg',
      link: '/suits/straight-cut',
      description: 'Sleek and modern designs',
      slug:'/category/straight-cut-suits'
    },
    {
      name: 'Sharara Suits',
      image: '/sharara.jpg',
      link: '/suits/sharara',
      description: 'Traditional flared pants',
      slug:'/category/sharara-suits'
    },
    {
      name: 'Lehenga Choli',
      image: '/lehenga.jpg',
      link: '/suits/lehenga',
      description: 'Bridal and festive wear',
      slug:'/category/lehenga-choli'
    }
  ];

  const suitProducts = [
    {
      id: 1,
      name: 'Designer Anarkali Suit',
      price: '₹8,999',
      originalPrice: '₹12,999',
      image: '/suit-1.jpg',
      rating: 4.8,
      reviews: 156,
      type: 'Anarkali',
      fabric: 'Georgette',
      occasion: 'Wedding',
      color: 'Royal Blue',
      description: 'Heavy embroidery with stone work',
      isNew: true,
      isBestseller: true
    },
    {
      id: 2,
      name: 'Straight Cut Silk Suit',
      price: '₹5,999',
      originalPrice: '₹7,999',
      image: '/suit-2.jpg',
      rating: 4.6,
      reviews: 89,
      type: 'Straight Cut',
      fabric: 'Silk',
      occasion: 'Party',
      color: 'Maroon',
      description: 'Minimal embroidery with elegant border',
      isNew: false,
      isBestseller: false
    },
    {
      id: 3,
      name: 'Sharara Set with Dupatta',
      price: '₹11,999',
      originalPrice: '₹15,999',
      image: '/suit-3.jpg',
      rating: 4.9,
      reviews: 134,
      type: 'Sharara',
      fabric: 'Velvet',
      occasion: 'Festive',
      color: 'Emerald Green',
      description: 'Traditional work with modern silhouette',
      isNew: true,
      isBestseller: true
    },
    {
      id: 4,
      name: 'Bridal Lehenga Choli',
      price: '₹25,999',
      originalPrice: '₹34,999',
      image: '/suit-4.jpg',
      rating: 4.9,
      reviews: 278,
      type: 'Lehenga',
      fabric: 'Silk',
      occasion: 'Bridal',
      color: 'Red',
      description: 'Heavy zari work with intricate detailing',
      isNew: false,
      isBestseller: true
    },
    {
      id: 5,
      name: 'Palazzo Suit Set',
      price: '₹4,999',
      originalPrice: '₹6,999',
      image: '/suit-5.jpg',
      rating: 4.5,
      reviews: 67,
      type: 'Palazzo',
      fabric: 'Cotton',
      occasion: 'Casual',
      color: 'Pastel Pink',
      description: 'Comfortable daily wear with print',
      isNew: true,
      isBestseller: false
    },
    {
      id: 6,
      name: 'Crop Top with Skirt',
      price: '₹6,499',
      originalPrice: '₹8,999',
      image: '/suit-6.jpg',
      rating: 4.7,
      reviews: 98,
      type: 'Crop Top',
      fabric: 'Chiffon',
      occasion: 'Party',
      color: 'Black',
      description: 'Contemporary design with sequin work',
      isNew: false,
      isBestseller: false
    },
    {
      id: 7,
      name: 'Floor Length Anarkali',
      price: '₹7,999',
      originalPrice: '₹10,999',
      image: '/suit-7.jpg',
      rating: 4.8,
      reviews: 112,
      type: 'Anarkali',
      fabric: 'Net',
      occasion: 'Reception',
      color: 'Gold',
      description: 'Elegant net fabric with embroidery',
      isNew: true,
      isBestseller: true
    }
  ];

  const filters = {
    type: ['Anarkali', 'Straight Cut', 'Sharara', 'Lehenga', 'Palazzo', 'Crop Top'],
    priceRange: [
      'Under ₹3,000',
      '₹3,000 - ₹7,000',
      '₹7,000 - ₹15,000',
      'Above ₹15,000'
    ],
    occasion: ['Casual', 'Office', 'Party', 'Wedding', 'Bridal', 'Festive', 'Reception'],
    fabric: ['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Velvet', 'Net', 'Organza']
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

      {/* Suit Types Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Explore Suit Styles
            </h2>
            <p className="text-lg text-gray-600">
              Find your perfect style from our diverse collection
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {suitTypes.map((type, index) => (
              <Link
                key={index}
                href={`/suits/${type.slug}`}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-blue-200 group-hover:to-purple-300 transition-all duration-200">
                  <div className="text-2xl">👚</div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200 block">
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

      {/* Main Content */}
      <section id="products" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                Designer Suits Collection
              </h2>
              <p className="text-gray-600">
                Showing {suitProducts.length} products
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
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>

                {/* Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Suit Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
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

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ type: [], priceRange: [], occasion: [], fabric: [] })}
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
                  {suitProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
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
                        <div className="text-4xl">👚</div>
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
                  {suitProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
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
                        <div className="text-4xl">👚</div>
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
                          <span className="text-sm text-gray-600">Type: {product.type}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Fabric: {product.fabric}</span>
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

      {/* Style Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Styling Tips & Guide
            </h2>
            <p className="text-lg text-gray-600">
              How to choose the perfect suit for your occasion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Occasion Matching</h3>
              <p className="text-gray-600">Choose Anarkali for weddings, straight cut for office wear, and crop tops for parties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Color Selection</h3>
              <p className="text-gray-600">Bright colors for festivals, pastels for daytime, and dark shades for evening events</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📏</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect Fit</h3>
              <p className="text-gray-600">Check our size guide for the perfect fit. Custom tailoring available for all suits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            New Arrivals Every Week
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to get notified about our latest suit collections and exclusive offers
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