import React from 'react';

export default function HeroSection() {
  return (
    <div className='@container'>
      <div className='@[480px]:p-0'>
        <div
          className='flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-xl items-start justify-center text-center px-4 py-10 @[480px]:px-10 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.7), rgba(10, 25, 49, 0.4)), url('https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1920&q=80')`,
          }}
        >
          <div className='flex flex-col gap-4 max-w-3xl mx-auto'>
            <h1 className='text-white text-4xl @[480px]:text-6xl font-bold leading-tight tracking-tight font-heading'>
              Your Seamless Move to Côte d’Ivoire Starts Here.
            </h1>
            <h2 className='text-white/90 text-base @[480px]:text-lg font-normal leading-normal'>
              From visa assistance to settling in, our dedicated concierge team
              handles every detail, so you can feel at home from day one.
            </h2>
          </div>

          <button className='flex mx-auto min-w-[84px] max-w-[480px] h-12 @[480px]:h-14 items-center justify-center rounded-lg px-5 @[480px]:px-8 bg-accent text-primary text-sm @[480px]:text-base font-bold tracking-[0.015em] hover:opacity-90 transition-opacity'>
            <span className='truncate text-black'>
              Book a Free Consultation
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
