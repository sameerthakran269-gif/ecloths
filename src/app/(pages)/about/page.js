// app/about/page.tsx
'use client';

import Link from 'next/link';
import { Heart, Shield, Users, Award, Sparkles, Target } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '5K+', label: 'Designs Created' },
    { number: '50+', label: 'Artisans Partnered' },
    { number: '15+', label: 'Cities Served' },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion for Craftsmanship',
      description: 'We celebrate the rich heritage of Indian textiles and the skilled artisans who create them.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Every piece is meticulously checked to ensure premium quality and perfect finishing.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We strive to exceed expectations at every step.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional products and service consistently.'
    }
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Creative Director',
      image: '/team-priya.jpg',
      description: 'With over 15 years in the fashion industry, Priya brings traditional craftsmanship to contemporary designs.'
    },
    {
      name: 'Rahul Verma',
      role: 'Head of Operations',
      image: '/team-rahul.jpg',
      description: 'Rahul ensures seamless operations and maintains relationships with our artisan communities.'
    },
    {
      name: 'Anjali Patel',
      role: 'Lead Designer',
      image: '/team-anjali.jpg',
      description: 'Anjali blends traditional motifs with modern aesthetics to create stunning collections.'
    },
    {
      name: 'Sanjay Kumar',
      role: 'Customer Experience Manager',
      image: '/team-sanjay.jpg',
      description: 'Sanjay and his team ensure every customer has a memorable shopping experience.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Founded with a vision to revive traditional crafts' },
    { year: '2017', event: 'Launched first exclusive Banarasi silk collection' },
    { year: '2019', event: 'Expanded to pan-India delivery' },
    { year: '2021', event: 'Partnered with 50+ artisan communities' },
    { year: '2023', event: 'Reached 10,000+ happy customers' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Weaving traditions with contemporary elegance, Ethnic Elegance brings you 
              the finest collection of ethnic wear that celebrates India's rich cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To preserve and promote India's rich textile heritage while making it 
                accessible to the modern woman. We bridge the gap between traditional 
                craftsmanship and contemporary fashion.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <Target className="w-12 h-12 text-rose-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the most trusted destination for authentic ethnic wear worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-pink-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-700">
                <Sparkles className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Celebrating Indian Craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center text-rose-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The passionate individuals behind Ethnic Elegance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">👤</div>
                    <p className="text-gray-600 text-sm">Team Member</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Milestones in our growth story
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rose-200"></div>
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-rose-600 mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-rose-100 text-lg mb-8">
            Experience the perfect blend of tradition and modernity with our exclusive collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}