'use client';
import React, { useState } from 'react';

/**
 * Property Developer Form Component
 * Based on property_development database schema
 */
const PropertyDeveloperForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    partnerId: '',
    premium: false,
    location: '',
    overview: '',
    features: '',
    pictures: '',
    paymentPlan: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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

      {/* Partner ID */}
      <div>
        <label className='block text-white text-sm font-medium mb-2'>
          Partner ID <span className='text-red-400'>*</span>
        </label>
        <input
          type='text'
          name='partnerId'
          value={formData.partnerId}
          onChange={handleChange}
          required
          className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent'
          placeholder='Enter partner ID'
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

      {/* Premium */}
      <div className='flex items-center'>
        <input
          type='checkbox'
          name='premium'
          checked={formData.premium}
          onChange={handleChange}
          className='w-5 h-5 text-[#E6B325] bg-white/10 border-white/20 rounded focus:ring-[#E6B325] focus:ring-2'
        />
        <label className='ml-3 text-white text-sm font-medium'>
          Premium Listing
        </label>
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

export default PropertyDeveloperForm;
