'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, ArrowLeft, Share2 } from 'lucide-react';

export default function KanjivaramSilkPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    color: [],
    borderType: []
  });

  const heroSlides = [
    {
      image: '/kanjivaram-banner-1.jpg',
      title: 'Authentic Kanjivaram Silk',
      subtitle: 'The Pride of South India',
      description: 'Handwoven with pure silk and gold zari, each piece tells a story',
      buttonText: 'Explore Collection',
      bgGradient: 'from-amber-100 to-orange-50'
    },
    {
      image: '/kanjivaram-banner-2.jpg',
      title: 'Temple Border Special',
      subtitle: 'Traditional Motifs & Patterns',
      description: 'Inspired by ancient temple architecture and art',
      buttonText: 'Shop Temple Borders',
      bgGradient: 'from-red-100 to-rose-50'
    }
  ];

  const kanjivaramTypes = [
    {
      name: 'Traditional',
      image: '/kanjivaram-traditional.jpg',
      link: '#traditional',
      description: 'Classic patterns and borders',
      slug:'/traditional'
    },
    {
      name: 'Temple Border',
      image: '/kanjivaram-temple.jpg',
      link: '#temple',
      description: 'Inspired by temple architecture',
      slug:'/temple-border'
    },
    {
      name: 'Contemporary',
      image: '/kanjivaram-contemporary.jpg',
      link: '#contemporary',
      description: 'Modern designs',
      slug:'/contemporary'
    },
    {
      name: 'Bridal Special',
      image: '/kanjivaram-bridal.jpg',
      link: '#bridal',
      description: 'Grand wedding collection',
      slug:'/bridal-special'
    }
  ];

  const kanjivaramProducts = [
    {
      id: 1,
      name: 'Pure Kanjivaram Silk Saree - Red',
      price: '₹34,999',
      originalPrice: '₹42,999',
      image: '/kanjivaram-1.jpg',
      rating: 4.9,
      reviews: 156,
      fabric: 'Pure Silk',
      occasion: 'Wedding',
      color: 'Red',
      borderType: 'Temple Border',
      description: 'Traditional red Kanjivaram with intricate temple border and gold zari work',
      isNew: true,
      isBestseller: true,
      features: ['Pure Silk', 'Gold Zari', 'Temple Border', 'Handwoven']
    },
    {
      id: 2,
      name: 'Kanjivaram Silk - Green & Gold',
      price: '₹28,999',
      originalPrice: '₹35,999',
      image: '/kanjivaram-2.jpg',
      rating: 4.8,
      reviews: 89,
      fabric: 'Pure Silk',
      occasion: 'Festive',
      color: 'Green',
      borderType: 'Traditional Border',
      description: 'Emerald green with contrasting gold border and traditional motifs',
      isNew: false,
      isBestseller: true,
      features: ['Pure Silk', 'Contrast Border', 'Traditional Motifs']
    },
    {
      id: 3,
      name: 'Kanjivaram Silk - Mustard Yellow',
      price: '₹31,999',
      originalPrice: '₹38,999',
      image: '/kanjivaram-3.jpg',
      rating: 4.7,
      reviews: 67,
      fabric: 'Pure Silk',
      occasion: 'Bridal',
      color: 'Yellow',
      borderType: 'Temple Border',
      description: 'Vibrant yellow with elaborate temple border and peacock motifs',
      isNew: true,
      isBestseller: false,
      features: ['Pure Silk', 'Peacock Motifs', 'Heavy Zari']
    },
    {
      id: 4,
      name: 'Kanjivaram Silk - Royal Blue',
      price: '₹26,999',
      originalPrice: '₹32,999',
      image: '/kanjivaram-4.jpg',
      rating: 4.9,
      reviews: 112,
      fabric: 'Pure Silk',
      occasion: 'Traditional',
      color: 'Blue',
      borderType: 'Contemporary Border',
      description: 'Deep blue with modern border design and traditional body',
      isNew: false,
      isBestseller: true,
      features: ['Pure Silk', 'Modern Design', 'Light Weight']
    },
    {
      id: 5,
      name: 'Kanjivaram Silk - Magenta',
      price: '₹29,999',
      originalPrice: '₹36,999',
      image: '/kanjivaram-5.jpg',
      rating: 4.6,
      reviews: 78,
      fabric: 'Pure Silk',
      occasion: 'Wedding',
      color: 'Pink',
      borderType: 'Traditional Border',
      description: 'Rich magenta with traditional checks pattern and broad border',
      isNew: true,
      isBestseller: false,
      features: ['Checks Pattern', 'Broad Border', 'Pure Silk']
    },
    {
      id: 6,
      name: 'Kanjivaram Silk - Purple Elegance',
      price: '₹32,999',
      originalPrice: '₹39,999',
      image: '/kanjivaram-6.jpg',
      rating: 4.8,
      reviews: 94,
      fabric: 'Pure Silk',
      occasion: 'Festive',
      color: 'Purple',
      borderType: 'Temple Border',
      description: 'Regal purple with intricate temple border and floral motifs',
      isNew: false,
      isBestseller: true,
      features: ['Floral Motifs', 'Temple Border', 'Heavy Silk']
    },
    {
      id: 7,
      name: 'Kanjivaram Silk - Coral Orange',
      price: '₹27,999',
      originalPrice: '₹33,999',
      image: '/kanjivaram-7.jpg',
      rating: 4.7,
      reviews: 63,
      fabric: 'Pure Silk',
      occasion: 'Traditional',
      color: 'Orange',
      borderType: 'Contemporary Border',
      description: 'Vibrant coral orange with modern geometric patterns',
      isNew: true,
      isBestseller: false,
      features: ['Geometric Patterns', 'Contemporary', 'Pure Silk']
    },
    {
      id: 8,
      name: 'Kanjivaram Silk - Cream & Gold',
      price: '₹35,999',
      originalPrice: '₹44,999',
      image: '/kanjivaram-8.jpg',
      rating: 4.9,
      reviews: 128,
      fabric: 'Pure Silk',
      occasion: 'Bridal',
      color: 'Cream',
      borderType: 'Traditional Border',
      description: 'Elegant cream with extensive gold zari work and traditional motifs',
      isNew: false,
      isBestseller: true,
      features: ['Heavy Zari', 'Traditional', 'Bridal Collection']
    }
  ];

  const filters = {
    priceRange: [
      'Under ₹25,000',
      '₹25,000 - ₹35,000',
      '₹35,000 - ₹50,000',
      'Above ₹50,000'
    ],
    color: ['Red', 'Green', 'Yellow', 'Blue', 'Pink', 'Purple', 'Orange', 'Cream'],
    borderType: ['Temple Border', 'Traditional Border', 'Contemporary Border', 'No Border']
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
            <Link href="/sarees" className="text-gray-500 hover:text-rose-600 transition-colors duration-200">
              Sarees
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-rose-600 font-medium">Kanjivaram Silk</span>
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

      {/* Kanjivaram Types Navigation */}
      <section className="py-8 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center text-gray-900 mb-8">
            Explore Kanjivaram Types
          </h2>
          <div className="flex justify-center space-x-8">
            {kanjivaramTypes.map((type, index) => (
              <Link
                key={index}
                href={`/sarees/category/kanjivaram-silk/features${type.slug}`}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-amber-300 group-hover:to-orange-400 transition-all duration-200 shadow-lg">
                  <div className="text-3xl">🧵</div>
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

      {/* About Kanjivaram Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                The Art of Kanjivaram
              </h2>
              <p className="text-gray-600 mb-4">
                Kanjivaram silk sarees, originating from Kanchipuram in Tamil Nadu, are renowned worldwide 
                for their rich texture, durability, and vibrant colors. Woven from pure mulberry silk and 
                real gold/silver zari, each saree is a masterpiece that takes 15-20 days to complete.
              </p>
              <p className="text-gray-600 mb-6">
                What sets Kanjivaram apart is its unique weaving technique where the body and border are 
                woven separately and then interlocked together. This creates a strong, durable saree that 
                can last for generations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-700 mb-2">Pure Silk</h4>
                  <p className="text-sm text-gray-600">Made from highest quality mulberry silk</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-700 mb-2">Gold Zari</h4>
                  <p className="text-sm text-gray-600">Authentic gold/silver thread work</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-700 mb-2">Handwoven</h4>
                  <p className="text-sm text-gray-600">Crafted by skilled artisans</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-700 mb-2">Traditional</h4>
                  <p className="text-sm text-gray-600">Ancient weaving techniques</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-6xl">🎨</div>
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
                Kanjivaram Collection
              </h2>
              <p className="text-gray-600">
                {kanjivaramProducts.length} exquisite handwoven pieces
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

                {/* Border Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Border Type</h4>
                  <div className="space-y-2">
                    {filters.borderType.map((border) => (
                      <label key={border} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.borderType.includes(border)}
                          onChange={() => toggleFilter('borderType', border)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{border}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ priceRange: [], color: [], borderType: [] })}
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
                  {kanjivaramProducts.map((product) => (
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
                  {kanjivaramProducts.map((product) => (
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
                          <span className="text-sm text-gray-600">Color: {product.color}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Border: {product.borderType}</span>
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
            Caring for Your Kanjivaram
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🧼</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dry Clean Only</h3>
              <p className="text-sm text-gray-600">Always dry clean to preserve silk texture and zari work</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">📦</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proper Storage</h3>
              <p className="text-sm text-gray-600">Store in muslin cloth, avoid plastic covers</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">☀️</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Avoid Direct Sunlight</h3>
              <p className="text-sm text-gray-600">Keep away from direct sunlight to prevent color fading</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🛍️</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Regular Airing</h3>
              <p className="text-sm text-gray-600">Air your saree periodically to maintain freshness</p>
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