// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Mon to Fri from 9am to 6pm',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'support@ethnicelegance.com',
      description: 'Send us your queries anytime',
      link: 'mailto:support@ethnicelegance.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: '123 Fashion Street, Mumbai',
      description: 'Maharashtra 400001, India',
      link: 'https://maps.google.com'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      details: '+91 98765 43210',
      description: 'Quick responses via WhatsApp',
      link: 'https://wa.me/919876543210'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/ethnicelegance',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://facebook.com/ethnicelegance',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/ethnicelegance',
      color: 'hover:text-blue-400'
    }
  ];

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy for unused products with original tags attached.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping is available for delivery in 1-2 days.'
    },
    {
      question: 'Do you offer custom sizing?',
      answer: 'Yes, we provide custom tailoring services for most of our collections. Please contact us for details.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you find the perfect ethnic wear. Reach out to us with any questions or concerns.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Choose the most convenient way to reach out.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-200">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-200">
                        {method.title}
                      </h3>
                      <p className="text-gray-900 font-medium mt-1">{method.details}</p>
                      <p className="text-gray-500 text-sm mt-1">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-rose-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-900">11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-xl text-gray-600 ${social.color} transition-all duration-200 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="order">Order Support</option>
                      <option value="return">Returns & Exchange</option>
                      <option value="custom">Custom Order</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-rose-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-rose-700 disabled:bg-rose-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
                <div className="text-center mt-6">
                  <Link 
                    href="/faq" 
                    className="text-rose-600 hover:text-rose-700 font-semibold transition-colors duration-200"
                  >
                    View all FAQs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Visit Our Store
            </h2>
            <p className="text-lg text-gray-600">
              Come experience our collections in person at our flagship store
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-rose-100 to-pink-200 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-700">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-rose-600" />
              <p className="text-lg font-semibold mb-2">Store Location Map</p>
              <p className="text-gray-600">
                123 Fashion Street, Mumbai<br />
                Maharashtra 400001, India
              </p>
              <button className="mt-4 bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors duration-200">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}