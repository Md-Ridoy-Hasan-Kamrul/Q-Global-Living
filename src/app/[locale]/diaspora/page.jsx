import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <section className='w-full mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8 lg:space-y-16' aria-labelledby='hero-title'>
        <div
          className='flex sm:min-h-[480px] flex-col gap-5 md:gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-2xl items-center justify-center p-6 md:p-8 lg:p-10 text-center'
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.95) 0%, rgba(10, 25, 49, 0.85) 100%), url("/map.jpg")`,
          }}
          role='banner'
        >
          <div className='flex flex-col gap-4 md:gap-5  w-full'>
            <h1
              id='hero-title'
              className='text-white lg:text-5xl text-2xl sm:text-3xl font-black leading-tight tracking-[-0.033em]'
            >
              Your Bridge to Homeownership from Abroad — <span className='text-primary'>Coming Soon</span>
            </h1>
            <p className='text-gray-200 text-[15px] sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto'>
                Access verified listings, secure escrow, and tailored financing. Your journey home begins here.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center mt-2'>
              <Link href={'#'}
                className='w-full sm:w-auto bg-primary hover:bg-primary-dark text-charcoal font-semibold px-6 md:px-8 lg:px-10 py-3 md:py-3.5 rounded-lg transition-all duration-200 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                aria-label='Book a consultation with our concierge team'
              >
                Join Diaspora Hub Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default page;