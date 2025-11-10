'use client';

import React, { useState } from 'react';
import { Upload } from 'lucide-react';

/**
 * Application Form Section
 * Partner application form with validation
 */
export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    projectNames: '',
    preferredPackage: 'premium'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.companyName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <section id="apply" className="max-w-4xl mx-auto lg:px-6 py-6 lg:py-16 scroll-mt-20">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-charcoal mb-1.5 lg:mb-4">
        Become a Q Homes Partner
      </h2>
      <p className="text-center text-charcoal-600 mb-6 lg:mb-12">
        Complete the form below to begin the verification process.
      </p>

      <form onSubmit={handleSubmit} className="bg-background-light rounded-xl p-6 md:p-8 border border-gray-200 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mb-3 lg:mb-6">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-cream/40 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-cream/40 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mb-3 lg:mb-6">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="marketing@example.com"
              required
              className="w-full px-4 py-3 bg-cream/40 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-cream/40 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
        </div>

        <div className="lg:mb-6 mb-3">
          <label className="block text-sm font-medium text-charcoal mb-2">
            Project Name(s)
          </label>
          <textarea
            name="projectNames"
            value={formData.projectNames}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 bg-cream/40 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        <div className="lg:mb-6 mb-4">
          <label className="block text-sm font-medium text-charcoal mb-3">
            Preferred Package
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['starter', 'featured', 'premium'].map((pkg) => (
              <button
                key={pkg}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, preferredPackage: pkg }))}
                className={`px-6 py-2 text-sm lg:text-lg lg:py-4 border-2 rounded-lg transition-all duration-200 ${
                  formData.preferredPackage === pkg
                    ? 'border-primary bg-primary/10 scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.preferredPackage === pkg 
                      ? 'border-primary' 
                      : 'border-gray-300'
                  }`}>
                    {formData.preferredPackage === pkg && (
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    )}
                  </div>
                  <span className="font-medium text-charcoal capitalize">{pkg}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-3 lg:mb-6">
          <label className="block text-sm font-medium text-charcoal mb-2">
            Upload Documents
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-charcoal font-medium mb-1 text-sm ">
              <span className="underline">Upload files</span> or drag and drop
            </p>
            <p className="text-sm text-charcoal-600">PDF, DOCX, PNG, JPG up to 10MB</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 lg:py-4 bg-primary hover:bg-primary-dark text-charcoal rounded-lg transition-all duration-200 font-semibold text-sm lg:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
}
