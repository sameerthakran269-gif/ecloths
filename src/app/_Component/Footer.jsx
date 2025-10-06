// components/Footer.tsx
'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'Sarees', href: '/sarees' },
      { name: 'Designer Suits', href: '/suits' },
      { name: 'Lehengas', href: '/lehengas' },
      { name: 'Accessories', href: '/accessories' },
      { name: 'New Arrivals', href: '/new-arrivals' },
      { name: 'Sale', href: '/sale' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Store Locator', href: '/stores' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    customer: [
      { name: 'Shipping Policy', href: '/shipping' },
      { name: 'Return Policy', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Track Order', href: '/track-order' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Refund Policy', href: '/refunds' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: <Youtube className="w-5 h-5" />,
    },
  ];

  const paymentMethods = [
    'Visa',
    'Mastercard',
    'American Express',
    'PayPal',
    'Razorpay',
    'UPI',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-serif font-bold text-white">
              Ethnic Elegance
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Discover the perfect blend of traditional craftsmanship and contemporary 
              designs. We bring you exquisite ethnic wear that celebrates your unique style.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-rose-600 p-2 rounded-lg transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              {footerLinks.customer.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-rose-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-rose-400" />
                <span className="text-gray-300">support@ethnicelegance.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-rose-400 mt-1" />
                <span className="text-gray-300">
                  123 Fashion Street,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-center">We Accept</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Ethnic Elegance. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="text-gray-300 text-sm">
              Made with ❤️ in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}