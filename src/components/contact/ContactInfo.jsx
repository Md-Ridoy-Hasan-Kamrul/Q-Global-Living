'use client';

import React from 'react';
import ComponentTitle from '@/components/shared/ComponentTitle';

const ContactInfo = React.memo(
  ({ title, subtitle, contactDetails, mapTitle }) => {
    return (
      <section className='w-full'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-12 lg:gap-16'>
          {/* Left Column - Contact Details */}
          <div className='flex flex-col md:col-span-2'>
            <ComponentTitle title={title} subtitle={subtitle} position={'text-left'} />

            {/* Contact Items */}
            <div className='mt-6 space-y-4 sm:mt-8 sm:space-y-6'>
              {contactDetails.map((detail, index) => (
                <React.Fragment key={index}>
                  <div className='flex items-start gap-3 sm:gap-4'>
                    <span className='material-symbols-outlined mt-0.5 text-[20px] text-[#D4AF37] sm:mt-1 sm:text-[24px]'>
                      {detail.icon}
                    </span>
                    <div className='flex-1'>
                      <p className='text-[14px] font-bold text-navy dark:text-[#FFFFF0] sm:text-[15px] md:text-base'>
                        {detail.title}
                      </p>
                      <p className='mt-1 text-[13px] text-navy/70 dark:text-[#FFFFF0]/70 sm:text-[14px] md:text-[15px]'>
                        {detail.content}
                      </p>
                    </div>
                  </div>
                  {index < contactDetails.length - 1 && (
                    <hr className='border-[#D4AF37]/30 dark:border-[#D4AF37]/20' />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <div  className='overflow-hidden rounded-xl md:col-span-3'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127116.53235688536!2d-4.089855589160175!3d5.334033300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5e4b343807%3A0x10a20a6723b7b8f!2sMarcory%2C%20Abidjan%2C%20C%C3%B4te%20d%27Ivoire!5e0!3m2!1sen!2sus!4v1700000000000'
              width='600'
              height='450'
              className='h-full min-h-[300px] w-full sm:min-h-[400px]'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title={mapTitle}
            />
          </div>
        </div>
      </section>
    );
  }
);

ContactInfo.displayName = 'ContactInfo';

export default ContactInfo;
