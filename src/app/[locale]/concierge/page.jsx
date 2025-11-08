import { Check } from 'lucide-react';
import Image from 'next/image';

export async function generateMetadata() {
  return {
    title: 'Your Move, Simplified | Concierge Services | Q HOMES',
    description:
      "Comprehensive, end-to-end support for a seamless and stress-free relocation experience in Côte d'Ivoire.",
  };
}

export default function ConciergePage() {
  const packages = [
    {
      name: 'Essentials',
      description:
        'Ideal for the independent mover who needs a local expert to handle the key components.',
      features: [
        'Area orientation tour',
        'Home search assistance',
        'Lease negotiation',
      ],
      buttonText: 'Choose Plan',
      isPremium: false,
    },
    {
      name: 'Premium',
      description:
        'Our most popular package for a comprehensive, stress-free relocation from start to finish.',
      features: [
        'Everything in Essentials, plus:',
        'School search & enrollment',
        'Utility setup (water, electric, internet)',
        'Bank account opening assistance',
      ],
      buttonText: 'Choose Plan',
      isPremium: true,
    },
    {
      name: 'Bespoke',
      description:
        'A fully customized, white-glove service tailored to your exact requirements and preferences.',
      features: [
        'Everything in Premium, plus:',
        'Custom requests (e.g., pet relocation)',
        'Personal shopping & home styling',
        '24/7 dedicated concierge',
      ],
      buttonText: 'Choose Plan',
      isPremium: false,
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Initial Consultation',
      description:
        'We listen to your needs, preferences and timeline to understand your unique situation.',
    },
    {
      number: '2',
      title: 'Personalized Plan',
      description:
        'We create a tailored relocation strategy and property shortlist just for you.',
    },
    {
      number: '3',
      title: 'Seamless Execution',
      description:
        'We handle all the logistics, from viewings to paperwork and logistics.',
    },
    {
      number: '4',
      title: 'Welcome Home',
      description:
        'We ensure you are comfortably settled in and provide ongoing local support.',
    },
  ];

  const addOns = [
    { icon: '📦', label: 'Moving Logistics' },
    { icon: '🚗', label: 'Car Rental/Purchase' },
    { icon: '🗺️', label: 'Utility Setup' },
    { icon: '🌐', label: 'Language Classes' },
    { icon: '🚗', label: 'Car Import/Purchase' },
  ];

  return (
    <main className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8'>
      {/* Hero Section */}
      <section className='w-full mb-8'>
        <div
          className='flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center'
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.6) 0%, rgba(10, 25, 49, 0.8) 100%), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop")`,
          }}
          role='banner'
        >
          <div className='flex flex-col gap-4 max-w-3xl'>
            <h1 className='text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl'>
              Your Move, Simplified.
            </h1>
            <p className='text-gray-200 text-base font-normal leading-normal sm:text-lg mb-4'>
              Comprehensive, end-to-end support for a seamless and stress-free
              relocation experience in Côte d&apos;Ivoire.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center'>
              <button className='w-full sm:w-auto bg-primary hover:bg-primary-dark text-charcoal font-semibold px-6 md:px-8 py-3 rounded-lg transition-colors text-sm md:text-base'>
                Book a Consultation
              </button>
              <button className='w-full sm:w-auto bg-transparent border-2 border-primary hover:bg-primary/10 text-primary font-semibold px-6 md:px-8 py-3 rounded-lg transition-colors text-sm md:text-base'>
                Talk to a Concierge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Support Section */}
      <section className='py-12 md:py-16 lg:py-20 bg-cream/30 rounded-xl mb-8'>
        <div className='text-center mb-10 md:mb-12 px-4'>
          <h2 className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-3 leading-tight'>
            Personalized Support, Every Step of the Way
          </h2>
          <p className='text-sm sm:text-base md:text-base text-gray-600 max-w-3xl mx-auto'>
            Our dedicated team is here to manage the details, so you can focus
            on starting your new chapter.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6'>
          {/* Property Matchmaking */}
          <div className='text-center'>
            <div className='w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 md:mb-5 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-3xl sm:text-4xl'>🏠</span>
            </div>
            <h3 className='text-lg sm:text-xl md:text-[20px] font-bold text-charcoal mb-2 md:mb-3'>
              Property Matchmaking
            </h3>
            <p className='text-sm sm:text-[15px] text-gray-600 leading-relaxed'>
              Finding your perfect home based on your unique lifestyle and
              needs.
            </p>
          </div>

          {/* Relocation Planning */}
          <div className='text-center'>
            <div className='w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 md:mb-5 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-3xl sm:text-4xl'>📋</span>
            </div>
            <h3 className='text-lg sm:text-xl md:text-[20px] font-bold text-charcoal mb-2 md:mb-3'>
              Relocation Planning
            </h3>
            <p className='text-sm sm:text-[15px] text-gray-600 leading-relaxed'>
              Managing the logistics of your move from start to finish for a
              smooth transition.
            </p>
          </div>

          {/* Settling-In Services */}
          <div className='text-center'>
            <div className='w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 md:mb-5 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-3xl sm:text-4xl'>⭐</span>
            </div>
            <h3 className='text-lg sm:text-xl md:text-[20px] font-bold text-charcoal mb-2 md:mb-3'>
              Settling-In Services
            </h3>
            <p className='text-sm sm:text-[15px] text-gray-600 leading-relaxed'>
              Helping you feel at home with essential setup and local
              integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Concierge Packages Section */}
      <section className='py-12 md:py-16 lg:py-20 bg-white rounded-xl mb-8'>
        <div className='text-center mb-10 md:mb-12 px-4'>
          <h2 className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-3 leading-tight'>
            Our Concierge Packages
          </h2>
          <p className='text-sm sm:text-base md:text-base text-gray-600 max-w-3xl mx-auto'>
            Choose the level of support that&apos;s right for you. Each package
            is designed to provide peace of mind.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 px-4'>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 md:p-7 ${
                pkg.isPremium
                  ? 'bg-primary/5 border-2 border-primary shadow-xl'
                  : 'bg-cream/20 border border-gray-200'
              }`}
            >
              {pkg.isPremium && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full'>
                  <span className='text-xs font-bold text-charcoal uppercase tracking-wider'>
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className='text-xl sm:text-2xl md:text-[22px] font-bold text-primary mb-3'>
                {pkg.name}
              </h3>
              <p className='text-sm sm:text-[15px] text-gray-600 mb-6 min-h-[60px] md:min-h-20 leading-relaxed'>
                {pkg.description}
              </p>
              <ul className='space-y-3 mb-6 md:mb-8'>
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className='flex items-start gap-2.5 text-[14px] sm:text-[15px] text-gray-700'
                  >
                    <Check
                      className='w-5 h-5 text-primary shrink-0 mt-0.5'
                      strokeWidth={2.5}
                    />
                    <span className='leading-relaxed'>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full font-semibold px-6 py-3 rounded-lg transition-colors text-[15px] ${
                  pkg.isPremium
                    ? 'bg-primary hover:bg-primary-dark text-charcoal'
                    : 'bg-charcoal hover:bg-charcoal/90 text-white'
                }`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-12 md:py-16 lg:py-20 bg-cream/30 rounded-xl mb-8'>
        <div className='text-center mb-10 md:mb-12 px-4'>
          <h2 className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-3 leading-tight'>
            How It Works
          </h2>
          <p className='text-sm sm:text-base md:text-base text-gray-600 max-w-3xl mx-auto'>
            A simple, four-step process to get you settled into your new home
            with ease.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-6'>
          {steps.map((step, index) => (
            <div key={index} className='text-center'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] mx-auto mb-4 md:mb-5 bg-primary rounded-full flex items-center justify-center'>
                <span className='text-2xl sm:text-3xl md:text-[32px] font-bold text-charcoal'>
                  {step.number}
                </span>
              </div>
              <h3 className='text-lg sm:text-xl md:text-[20px] font-bold text-charcoal mb-2 md:mb-3'>
                {step.title}
              </h3>
              <p className='text-sm sm:text-[15px] text-gray-600 leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Concierge Add-Ons Section */}
      <section className='py-12 md:py-16 lg:py-20 bg-primary/90 rounded-xl mb-8'>
        <div className='text-center mb-8 md:mb-10 px-4'>
          <h2 className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-3 leading-tight'>
            Concierge Add-Ons
          </h2>
          <p className='text-sm sm:text-base md:text-base text-charcoal/80 max-w-3xl mx-auto'>
            Enhance your relocation with our à la carte services.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 px-6'>
          {addOns.map((addOn, index) => (
            <div key={index} className='text-center'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] mx-auto mb-3 md:mb-4 bg-charcoal/10 rounded-full flex items-center justify-center'>
                <span className='text-2xl sm:text-3xl md:text-[36px]'>
                  {addOn.icon}
                </span>
              </div>
              <p className='text-xs sm:text-sm md:text-[15px] font-semibold text-charcoal'>
                {addOn.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Make Your Move Section */}
      <section className='py-12 md:py-16 lg:py-20 bg-white rounded-xl mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center px-4'>
          {/* Image */}
          <div className='order-2 lg:order-1'>
            <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden shadow-lg'>
              <Image
                src='/placeholder-property.jpg'
                alt='Modern luxury home'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px'
              />
            </div>
          </div>

          {/* Form */}
          <div className='order-1 lg:order-2'>
            <h2 className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-4 leading-tight'>
              Ready to Make Your Move?
            </h2>
            <p className='text-sm sm:text-base md:text-[15px] text-gray-600 mb-6 md:mb-7 leading-relaxed'>
              Fill out the form to book a complimentary consultation with one of
              our relocation specialists. Let&apos;s discuss how we can make
              your move to Côte d&apos;Ivoire seamless and successful.
            </p>

            <form className='space-y-4'>
              <div>
                <label
                  htmlFor='fullName'
                  className='block text-[14px] font-medium text-charcoal mb-2'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[15px]'
                  placeholder='Enter your full name'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-[14px] font-medium text-charcoal mb-2'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[15px]'
                  placeholder='your@email.com'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-[14px] font-medium text-charcoal mb-2'
                >
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[15px]'
                  placeholder='+225 XX XX XX XX XX'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='moveDate'
                  className='block text-[14px] font-medium text-charcoal mb-2'
                >
                  Preferred Date & Time
                </label>
                <input
                  type='datetime-local'
                  id='moveDate'
                  name='moveDate'
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[15px]'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-[14px] font-medium text-charcoal mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-[15px]'
                  placeholder='Tell us about your relocation needs...'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full bg-primary hover:bg-primary-dark text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors text-[15px] mt-2'
              >
                Book My Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
