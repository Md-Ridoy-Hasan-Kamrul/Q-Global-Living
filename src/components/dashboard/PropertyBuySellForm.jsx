'use client';
import React, { useState } from 'react';

/**
 * Property Buy/Sell Form Component
 * Based on property_buy_sell database schema
 */
const PropertyBuySellForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    userId: '',
    propertyId: '',
    name: '',
    location: '',
    overview: '',
    features: '',
    pictures: '',
    paymentPlan: '',
    status: 'available',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {/* User ID */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          User ID <span className='text-red-400'>*</span>
        </label>
        <input
          type='text'
          name='userId'
          value={formData.userId}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent'
          placeholder='Enter user ID'
        />
      </div>

      {/* Property ID */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          Property ID <span className='text-red-400'>*</span>
        </label>
        <input
          type='text'
          name='propertyId'
          value={formData.propertyId}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent'
          placeholder='Enter property ID'
        />
      </div>

      {/* Name */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          Property Name <span className='text-red-400'>*</span>
        </label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent'
          placeholder='Enter property name'
        />
      </div>

      {/* Location */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          Location <span className='text-red-400'>*</span>
        </label>
        <input
          type='text'
          name='location'
          value={formData.location}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent'
          placeholder='Enter location'
        />
      </div>

      {/* Overview */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          Overview <span className='text-red-400'>*</span>
        </label>
        <textarea
          name='overview'
          value={formData.overview}
          onChange={handleChange}
          required
          rows={4}
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent resize-none'
          placeholder='Enter property overview'
        />
      </div>

      {/* Features */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          Features <span className='text-red-400'>*</span>
        </label>
        <textarea
          name='features'
          value={formData.features}
          onChange={handleChange}
          required
          rows={3}
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent resize-none'
          placeholder='Enter features (comma-separated)'
        />
      </div>

      {/* Pictures */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          Pictures URLs
        </label>
        <textarea
          name='pictures'
          value={formData.pictures}
          onChange={handleChange}
          rows={2}
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent resize-none'
          placeholder='Enter picture URLs (comma-separated)'
        />
      </div>

      {/* Payment Plan */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          Payment Plan <span className='text-red-400'>*</span>
        </label>
        <textarea
          name='paymentPlan'
          value={formData.paymentPlan}
          onChange={handleChange}
          required
          rows={3}
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent resize-none'
          placeholder='Enter payment plan details'
        />
      </div>

      {/* Status */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          Status <span className='text-red-400'>*</span>
        </label>
        <select
          name='status'
          value={formData.status}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent'
        >
          <option value='available' className='bg-gray-800'>
            Available
          </option>
          <option value='sold' className='bg-gray-800'>
            Sold
          </option>
          <option value='pending' className='bg-gray-800'>
            Pending
          </option>
        </select>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-end gap-3 pt-4'>
        <button
          type='button'
          onClick={onCancel}
          className='px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='px-6 py-2 bg-[#E6B325] hover:bg-[#d4a520] text-black font-semibold rounded-lg transition-colors'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PropertyBuySellForm;
