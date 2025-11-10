'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className='flex flex-col gap-10 px-4'>
      <h2 className='text-3xl font-bold font-heading text-center'>
        What Our Clients Say
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Testimonial 1 */}
        <div className='flex flex-col gap-4 p-8 rounded-xl bg-[#E0E0D8] dark:bg-[#182742]'>
          <p className='italic'>
            The concierge service from Q Homes was a lifesaver. They handled
            everything from our visas to finding the perfect school for our
            kids. We felt at home in Abidjan from the moment we landed.
          </p>
          <div className='flex items-center gap-4 mt-2'>
            <Image
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
              alt='Photo of a satisfied client, The Dubois Family'
              width={48}
              height={48}
              className='h-12 w-12 rounded-full object-cover'
            />
            <div>
              <h4 className='font-bold'>The Dubois Family</h4>
              <p className='text-sm text-text-light/80 dark:text-text-dark/80'>
                Relocated from Paris
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className='flex flex-col gap-4 p-8 rounded-xl bg-[#E0E0D8] dark:bg-[#182742]'>
          <p className='italic'>
            As a corporation moving key personnel, we needed a reliable partner.
            Q Homes corporate package was flawless. Their professionalism and
            local knowledge are unmatched.
          </p>
          <div className='flex items-center gap-4 mt-2'>
            <Image
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
              alt='Photo of a satisfied client, Amina Diallo'
              width={48}
              height={48}
              className='h-12 w-12 rounded-full object-cover'
            />
            <div>
              <h4 className='font-bold'>Amina Diallo</h4>
              <p className='text-sm text-text-light/80 dark:text-text-dark/80'>
                HR Manager, Tech Solutions Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
