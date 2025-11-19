'use client';

import { memo, useState, useCallback } from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';

const EventRegistration = memo(({ translations }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log('Registration submitted:', formData);
      // Handle form submission
    },
    [formData]
  );

  return (
    <div className='bg-white/50 rounded-xl p-6 sm:p-8 border border-gray-200'>
      <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>
        {translations.title}
      </h2>
      <p className='text-gray-600 mb-6'>{translations.subtitle}</p>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='fullName'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            {translations.fullName}
          </label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder={translations.fullNamePlaceholder}
            required
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B325] focus:border-transparent outline-none transition-all'
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            {translations.email}
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder={translations.emailPlaceholder}
            required
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B325] focus:border-transparent outline-none transition-all'
          />
        </div>

        <div>
          <label
            htmlFor='phone'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            {translations.phone}
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder={translations.phonePlaceholder}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6B325] focus:border-transparent outline-none transition-all'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-[#E6B325] hover:bg-[#d4a420] text-[#0F1B2E] font-semibold px-6 py-4 rounded-lg text-sm lg:text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg'
        >
          {translations.submit}
        </button>
      </form>

      {/* Social Share */}
      <div className='mt-6 pt-6 border-t border-gray-200'>
        <p className='text-sm text-gray-600 text-center mb-3'>
          {translations.shareEvent}
        </p>
        <div className='flex justify-center gap-3'>
          <button
            className='p-2 rounded-lg bg-[#0077B5] hover:bg-[#006399] text-white transition-colors'
            aria-label='Share on LinkedIn'
          >
            <Linkedin className='h-5 w-5' />
          </button>
          <button
            className='p-2 rounded-lg bg-[#1877F2] hover:bg-[#0c63d4] text-white transition-colors'
            aria-label='Share on Facebook'
          >
            <Facebook className='h-5 w-5' />
          </button>
          <button
            className='p-2 rounded-lg bg-[#1DA1F2] hover:bg-[#0c8bd9] text-white transition-colors'
            aria-label='Share on Twitter'
          >
            <Twitter className='h-5 w-5' />
          </button>
        </div>
      </div>
    </div>
  );
});

EventRegistration.displayName = 'EventRegistration';

export default EventRegistration;
