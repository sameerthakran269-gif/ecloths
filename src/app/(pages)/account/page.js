'use client';

import { useState } from 'react';
import { User, MapPin, Heart, ShoppingBag, Settings, LogOut, Edit2, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  const [userData, setUserData] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    address: '123 Fashion Street, Mumbai, Maharashtra - 400001'
  });

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      items: ['Banarasi Silk Saree', 'Matching Blouse Piece'],
      total: '₹8,499',
      status: 'Delivered'
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      items: ['Designer Anarkali Suit'],
      total: '₹5,999',
      status: 'Shipped'
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      items: ['Cotton Saree', 'Embroidered Blouse'],
      total: '₹3,299',
      status: 'Processing'
    }
  ];

  const wishlist = [
    {
      id: 1,
      name: 'Kanjivaram Silk Saree',
      price: '₹12,999',
      image: '/api/placeholder/80/100'
    },
    {
      id: 2,
      name: 'Designer Party Wear Suit',
      price: '₹7,499',
      image: '/api/placeholder/80/100'
    }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the data
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-serif font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600 mt-2">Manage your profile, orders, and preferences</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{userData.name}</h3>
                  <p className="text-sm text-gray-600">{userData.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'profile', name: 'Profile', icon: User },
                  { id: 'orders', name: 'My Orders', icon: ShoppingBag },
                  { id: 'wishlist', name: 'Wishlist', icon: Heart },
                  { id: 'addresses', name: 'Addresses', icon: MapPin },
                  { id: 'settings', name: 'Settings', icon: Settings }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-rose-50 text-rose-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </nav>

              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 mt-4">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Profile Information</h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center space-x-2 px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  >
                    <Edit2 size={16} />
                    <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={userData.name}
                          onChange={(e) => setUserData({...userData, name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900">{userData.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={userData.phone}
                          onChange={(e) => setUserData({...userData, phone: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Phone size={16} className="text-gray-400" />
                          <p className="text-gray-900">{userData.phone}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} className="text-gray-400" />
                      <p className="text-gray-900">{userData.email}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    {isEditing ? (
                      <textarea
                        value={userData.address}
                        onChange={(e) => setUserData({...userData, address: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{userData.address}</p>
                    )}
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveProfile}
                        className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">My Orders</h2>
                
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">Order {order.id}</h3>
                          <p className="text-sm text-gray-600">Placed on {order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-gray-700">{order.items.join(', ')}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{order.total}</span>
                        <button className="text-rose-600 hover:text-rose-700 font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">My Wishlist</h2>
                
                {wishlist.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wishlist.map((item) => (
                      <div key={item.id} className="flex space-x-4 border border-gray-200 rounded-lg p-4">
                        <div className="w-20 h-24 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-gray-500 text-xs">Image</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-rose-600 font-semibold mb-2">{item.price}</p>
                          <div className="flex space-x-2">
                            <button className="flex-1 bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors text-sm">
                              Add to Cart
                            </button>
                            <button className="p-2 text-gray-400 hover:text-rose-600 transition-colors">
                              <Heart size={16} fill="currentColor" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-600 mb-6">Start adding items you love!</p>
                    <Link
                      href="/sarees"
                      className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                    >
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Saved Addresses</h2>
                  <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
                    Add New Address
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-rose-200 rounded-lg p-4 bg-rose-50">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900">Primary Address</h3>
                      <span className="bg-rose-600 text-white px-2 py-1 rounded text-xs">Default</span>
                    </div>
                    <p className="text-gray-700 mb-4">{userData.address}</p>
                    <div className="flex space-x-2">
                      <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                        Edit
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:border-rose-300 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-3">Work Address</h3>
                    <p className="text-gray-700 mb-4">456 Business Avenue, Andheri East, Mumbai, Maharashtra - 400069</p>
                    <div className="flex space-x-2">
                      <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                        Set as Default
                      </button>
                      <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                        Edit
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded text-rose-600 focus:ring-rose-500" defaultChecked />
                        <span className="text-gray-700">Email notifications</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded text-rose-600 focus:ring-rose-500" defaultChecked />
                        <span className="text-gray-700">SMS notifications</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded text-rose-600 focus:ring-rose-500" />
                        <span className="text-gray-700">Promotional emails</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Security</h3>
                    <div className="space-y-4">
                      <button className="text-rose-600 hover:text-rose-700 font-medium">
                        Change Password
                      </button>
                      <div>
                        <button className="text-rose-600 hover:text-rose-700 font-medium">
                          Delete Account
                        </button>
                        <p className="text-sm text-gray-600 mt-1">Permanently delete your account and all data</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}