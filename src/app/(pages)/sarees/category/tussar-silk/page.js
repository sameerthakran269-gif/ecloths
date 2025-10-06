'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, ArrowLeft, Share2, Sun } from 'lucide-react';

export default function TussarSilkPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    color: [],
    texture: [],
    origin: []
  });

  const heroSlides = [
    {
      image: '/tussar-banner-1.jpg',
      title: 'Natural Tussar Silk',
      subtitle: 'The Gold of the East',
      description: 'Experience the rich texture and natural golden sheen of wild silk',
      buttonText: 'Explore Collection',
      bgGradient: 'from-amber-100 to-yellow-50'
    },
    {
      image: '/tussar-banner-2.jpg',
      title: 'Tribal Art Collection',
      subtitle: 'Ethnic Weaves, Modern Appeal',
      description: 'Traditional tribal motifs woven into contemporary designs',
      buttonText: 'Shop Tribal Art',
      bgGradient: 'from-orange-100 to-amber-50'
    }
  ];

  const tussarTypes = [
    {
      name: 'Raw Tussar',
      image: '/tussar-raw.jpg',
      link: '#raw',
      description: 'Natural texture'
    },
    {
      name: 'Printed Tussar',
      image: '/tussar-printed.jpg',
      link: '#printed',
      description: 'Block prints'
    },
    {
      name: 'Embroidered',
      image: '/tussar-embroidered.jpg',
      link: '#embroidered',
      description: 'Hand embroidery'
    },
    {
      name: 'Zari Tussar',
      image: '/tussar-zari.jpg',
      link: '#zari',
      description: 'Gold zari work'
    }
  ];

  const tribalOrigins = [
    {
      name: 'Bhagalpur',
      description: 'Bihar origin'
    },
    {
      name: 'Chhattisgarh',
      description: 'Tribal weaves'
    },
    {
      name: 'Jharkhand',
      description: 'Traditional motifs'
    },
    {
      name: 'West Bengal',
      description: 'Baluchari style'
    }
  ];

  const tussarProducts = [
    {
      id: 1,
      name: 'Pure Bhagalpur Tussar - Natural Gold',
      price: '₹14,999',
      originalPrice: '₹18,999',
      image: '/tussar-1.jpg',
      rating: 4.8,
      reviews: 134,
      fabric: 'Pure Tussar Silk',
      occasion: 'Festive',
      color: 'Natural Gold',
      texture: 'Raw Texture',
      origin: 'Bhagalpur',
      description: 'Natural golden tussar with raw texture and tribal motifs',
      isNew: true,
      isBestseller: true,
      features: ['Pure Tussar', 'Natural Gold', 'Raw Texture', 'Tribal Motifs'],
      craftsmanship: 'Handwoven in Bhagalpur, Bihar'
    },
    {
      id: 2,
      name: 'Tussar Silk - Terracotta Red',
      price: '₹16,999',
      originalPrice: '₹21,999',
      image: '/tussar-2.jpg',
      rating: 4.7,
      reviews: 89,
      fabric: 'Tussar Silk',
      occasion: 'Wedding',
      color: 'Terracotta',
      texture: 'Smooth',
      origin: 'Chhattisgarh',
      description: 'Terracotta red with tribal embroidery and natural sheen',
      isNew: false,
      isBestseller: true,
      features: ['Tribal Embroidery', 'Natural Sheen', 'Tussar Silk', 'Ethnic'],
      craftsmanship: 'Tribal art from Chhattisgarh'
    },
    {
      id: 3,
      name: 'Printed Tussar - Earth Brown',
      price: '₹12,999',
      originalPrice: '₹15,999',
      image: '/tussar-3.jpg',
      rating: 4.6,
      reviews: 67,
      fabric: 'Tussar Silk',
      occasion: 'Casual',
      color: 'Brown',
      texture: 'Textured',
      origin: 'Jharkhand',
      description: 'Earth brown with traditional block prints and coarse texture',
      isNew: true,
      isBestseller: false,
      features: ['Block Printed', 'Coarse Texture', 'Traditional', 'Light Weight'],
      craftsmanship: 'Traditional block printing techniques'
    },
    {
      id: 4,
      name: 'Zari Tussar - Mustard Yellow',
      price: '₹18,999',
      originalPrice: '₹23,999',
      image: '/tussar-4.jpg',
      rating: 4.9,
      reviews: 156,
      fabric: 'Tussar Silk',
      occasion: 'Festive',
      color: 'Mustard',
      texture: 'Smooth',
      origin: 'Bhagalpur',
      description: 'Mustard yellow with gold zari work and intricate borders',
      isNew: false,
      isBestseller: true,
      features: ['Gold Zari', 'Intricate Borders', 'Festive Wear', 'Smooth Texture'],
      craftsmanship: 'Fine zari work on tussar base'
    },
    {
      id: 5,
      name: 'Baluchari Tussar - Deep Green',
      price: '₹21,999',
      originalPrice: '₹27,999',
      image: '/tussar-5.jpg',
      rating: 4.8,
      reviews: 112,
      fabric: 'Tussar Silk',
      occasion: 'Traditional',
      color: 'Green',
      texture: 'Raw Texture',
      origin: 'West Bengal',
      description: 'Deep green Baluchari style with mythological motifs',
      isNew: true,
      isBestseller: false,
      features: ['Baluchari Style', 'Mythological Motifs', 'Raw Tussar', 'Traditional'],
      craftsmanship: 'Baluchari weaving technique'
    },
    {
      id: 6,
      name: 'Embroidered Tussar - Copper Orange',
      price: '₹15,999',
      originalPrice: '₹19,999',
      image: '/tussar-6.jpg',
      rating: 4.7,
      reviews: 78,
      fabric: 'Tussar Silk',
      occasion: 'Party',
      color: 'Orange',
      texture: 'Textured',
      origin: 'Jharkhand',
      description: 'Copper orange with hand embroidery and tribal patterns',
      isNew: false,
      isBestseller: true,
      features: ['Hand Embroidery', 'Tribal Patterns', 'Copper Shine', 'Textured'],
      craftsmanship: 'Hand embroidered by tribal artisans'
    },
    {
      id: 7,
      name: 'Raw Tussar - Natural Beige',
      price: '₹11,999',
      originalPrice: '₹14,999',
      image: '/tussar-7.jpg',
      rating: 4.5,
      reviews: 45,
      fabric: 'Raw Tussar',
      occasion: 'Casual',
      color: 'Beige',
      texture: 'Raw Texture',
      origin: 'Chhattisgarh',
      description: 'Natural beige with raw texture and minimal tribal motifs',
      isNew: true,
      isBestseller: false,
      features: ['Raw Tussar', 'Natural Beige', 'Minimal Design', 'Everyday Wear'],
      craftsmanship: 'Minimalist tribal design'
    },
    {
      id: 8,
      name: 'Tussar Silk - Royal Purple',
      price: '₹19,999',
      originalPrice: '₹24,999',
      image: '/tussar-8.jpg',
      rating: 4.9,
      reviews: 134,
      fabric: 'Tussar Silk',
      occasion: 'Bridal',
      color: 'Purple',
      texture: 'Smooth',
      origin: 'Bhagalpur',
      description: 'Royal purple with extensive zari work and traditional borders',
      isNew: false,
      isBestseller: true,
      features: ['Extensive Zari', 'Royal Purple', 'Bridal Collection', 'Smooth'],
      craftsmanship: 'Bhagalpur master weaver special'
    }
  ];

  const filters = {
    priceRange: [
      'Under ₹10,000',
      '₹10,000 - ₹15,000',
      '₹15,000 - ₹20,000',
      'Above ₹20,000'
    ],
    color: ['Natural Gold', 'Terracotta', 'Brown', 'Mustard', 'Green', 'Orange', 'Beige', 'Purple'],
    texture: ['Raw Texture', 'Smooth', 'Textured', 'Coarse'],
    origin: ['Bhagalpur', 'Chhattisgarh', 'Jharkhand', 'West Bengal']
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
            <Link href="/sarees" className="text-gray-500 hover:text-amber-600 transition-colors duration-200">
              Sarees
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-amber-600 font-medium">Tussar Silk</span>
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
                    <Sun className="w-8 h-8 text-amber-600 mr-3" />
                    <h1 className="text-4xl font-serif font-bold text-gray-900">
                      {slide.title}
                    </h1>
                  </div>
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

      {/* Tussar Types Navigation */}
      <section className="py-8 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center text-gray-900 mb-8">
            Varieties of Tussar Silk
          </h2>
          <div className="flex justify-center space-x-8">
            {tussarTypes.map((type, index) => (
              <Link
                key={index}
                href={type.link}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-amber-300 group-hover:to-orange-400 transition-all duration-200 shadow-lg">
                  <div className="text-3xl">🦋</div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-amber-600 transition-colors duration-200 block">
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

      {/* About Tussar Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                The Wild Silk Wonder
              </h2>
              <p className="text-gray-600 mb-4">
                Tussar silk, also known as 'Kosa silk', is a wild silk variety produced from 
                silkworms that feed on oak and other forest trees. Unlike cultivated silk, 
                Tussar has a unique coarse texture, natural golden hue, and distinctive sheen 
                that sets it apart.
              </p>
              <p className="text-gray-600 mb-6">
                Known as the 'gold of the east', Tussar silk is prized for its rich texture, 
                durability, and eco-friendly production. Each piece carries the imprint of 
                tribal artistry and traditional weaving techniques passed down through generations.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-amber-700 mb-3">Tribal Origins</h4>
                <div className="grid grid-cols-2 gap-3">
                  {tribalOrigins.map((origin, index) => (
                    <div key={index} className="bg-amber-50 p-3 rounded-lg">
                      <h5 className="font-medium text-amber-800">{origin.name}</h5>
                      <p className="text-xs text-amber-600">{origin.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌳</div>
                <p className="text-amber-700 font-semibold">Wild & Sustainable</p>
                <p className="text-sm text-amber-600">Eco-friendly silk from forest-fed silkworms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Why Tussar Silk is Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-2xl">🌟</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Natural Golden Sheen</h3>
              <p className="text-sm text-gray-600">
                Inherent golden hue that comes from wild silkworms, no artificial dyes needed
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-2xl">🌿</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">
                Sustainable production from forest-fed silkworms, minimal environmental impact
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="text-2xl">💪</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Durable & Strong</h3>
              <p className="text-sm text-gray-600">
                Coarser texture makes it more durable than regular silk, lasts for years
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
                Tussar Silk Collection
              </h2>
              <p className="text-gray-600">
                {tussarProducts.length} pieces of wild silk elegance
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
                  Wild Silk Filters
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Texture Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Texture</h4>
                  <div className="space-y-2">
                    {filters.texture.map((texture) => (
                      <label key={texture} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.texture.includes(texture)}
                          onChange={() => toggleFilter('texture', texture)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{texture}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Origin Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Origin</h4>
                  <div className="space-y-2">
                    {filters.origin.map((origin) => (
                      <label key={origin} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.origin.includes(origin)}
                          onChange={() => toggleFilter('origin', origin)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{origin}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ priceRange: [], color: [], texture: [], origin: [] })}
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
                  {tussarProducts.map((product) => (
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
                          <span className="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Wild Pick
                          </span>
                        )}
                        <div className="text-4xl">🦋</div>
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
                  {tussarProducts.map((product) => (
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
                          <span className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Wild Pick
                          </span>
                        )}
                        <div className="text-4xl">🦋</div>
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

                            {/* Craftsmanship */}
                            <p className="text-sm text-amber-600 italic">
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
                          <span className="text-sm text-gray-600">Texture: {product.texture}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Origin: {product.origin}</span>
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

      {/* Care Instructions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Caring for Your Tussar Silk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🧼</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dry Clean Preferred</h3>
              <p className="text-sm text-gray-600">Professional cleaning preserves natural texture and sheen</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌬️</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Store in Breathable Fabric</h3>
              <p className="text-sm text-gray-600">Use cotton or muslin covers to maintain fabric health</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔥</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Low Iron Temperature</h3>
              <p className="text-sm text-gray-600">Iron on low heat while slightly damp for best results</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🧴</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Avoid Strong Detergents</h3>
              <p className="text-sm text-gray-600">Use mild cleaners to protect natural fibers and colors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Sarees */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/sarees"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Sarees
          </Link>
        </div>
      </section>
    </div>
  );
}