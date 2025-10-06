'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Truck, Shield, Heart } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/hero-saree.jpg',
      title: 'Elegant Silk Sarees',
      subtitle: 'Traditional Beauty Meets Modern Elegance',
      description: 'Discover our exclusive collection of handwoven silk sarees',
      buttonText: 'Shop Sarees',
      buttonLink: '/sarees',
      bgGradient: 'from-rose-100 to-pink-50'
    },
    {
      image: '/hero-suits.jpg',
      title: 'Designer Suits Collection',
      subtitle: 'Contemporary Styles for the Modern Woman',
      description: 'Explore our latest designer suits and lehengas',
      buttonText: 'Shop Suits',
      buttonLink: '/suits',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      image: '/hero-sale.jpg',
      title: 'Festive Special Sale',
      subtitle: 'Up to 50% Off on Premium Collections',
      description: 'Celebrate the season with our exclusive discounts',
      buttonText: 'Shop Sale',
      buttonLink: '/sale',
      bgGradient: 'from-amber-50 to-orange-50'
    }
  ];

  const categories = [
    {
      name: 'Silk Sarees',
      image: '/silk-sarees.jpg',
      link: '/sarees/silk',
      description: 'Luxurious handwoven silk'
    },
    {
      name: 'Banarasi Sarees',
      image: '/banarasi-sarees.jpg',
      link: '/sarees/banarasi',
      description: 'Traditional craftsmanship'
    },
    {
      name: 'Designer Suits',
      image: '/designer-suits.jpg',
      link: '/suits/designer',
      description: 'Contemporary designs'
    },
    {
      name: 'Anarkali Suits',
      image: '/anarkali-suits.jpg',
      link: '/suits/anarkali',
      description: 'Royal elegance'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Kanjivaram Silk Saree',
      price: '₹12,999',
      originalPrice: '₹16,999',
      image: '/product-1.jpg',
      rating: 4.8,
      reviews: 124,
      isNew: true
    },
    {
      id: 2,
      name: 'Banarasi Silk Saree',
      price: '₹9,999',
      originalPrice: '₹13,999',
      image: '/product-2.jpg',
      rating: 4.9,
      reviews: 89,
      isNew: false
    },
    {
      id: 3,
      name: 'Designer Anarkali Suit',
      price: '₹6,999',
      originalPrice: '₹8,999',
      image: '/product-3.jpg',
      rating: 4.7,
      reviews: 67,
      isNew: true
    },
    {
      id: 4,
      name: 'Party Wear Lehenga',
      price: '₹15,999',
      originalPrice: '₹19,999',
      image: '/product-4.jpg',
      rating: 4.9,
      reviews: 156,
      isNew: false
    }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Free Shipping',
      description: 'Free delivery on orders above ₹1999'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payment',
      description: '100% secure and encrypted payments'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Premium quality guaranteed'
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

  return (
    <>
      {/* Hero Carousel Section */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-r ${slide.bgGradient} flex items-center`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="w-1/2 space-y-6">
                  <h1 className="text-5xl font-serif font-bold text-gray-900">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl text-rose-600 font-medium">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.buttonLink}
                    className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-200"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">🛍️</div>
                      <p>Product Image</p>
                    </div>
                  </div>
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

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-rose-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Shop By Category
            </h2>
            <p className="text-lg text-gray-600">
              Discover our exquisite collection of traditional and contemporary wear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-80 bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">👗</div>
                    <p className="text-gray-600">Category Image</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked collection of our most loved designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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
                  <div className="text-4xl">🛍️</div>
                  <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {product.rating} ({product.reviews})
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

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-rose-100 text-lg mb-8">
            Subscribe to get notified about our latest collections and exclusive offers
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
    </>
  );
}