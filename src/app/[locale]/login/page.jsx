import { Suspense } from 'react';
import Image from 'next/image';
import SignInForm from '@/components/auth/SignInForm';

export const metadata = {
  title: "Sign In | Q Homes - Your Gateway to Côte d'Ivoire Real Estate",
  description:
    "Log in to your Q Homes account to access exclusive property listings, save favorites, and manage your real estate journey in Côte d'Ivoire.",
  keywords:
    "Q Homes login, sign in, Côte d'Ivoire real estate, property account",
  openGraph: {
    title: 'Sign In | Q Homes',
    description: 'Access your Q Homes account',
    type: 'website',
  },
};

const FormSkeleton = () => (
  <div className='flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-6 sm:p-8 shadow-2xl animate-pulse'>
    <div className='h-12 w-12 bg-charcoal-200 dark:bg-charcoal-700 rounded-full' />
    <div className='h-8 w-48 bg-charcoal-200 dark:bg-charcoal-700 rounded' />
    <div className='h-4 w-64 bg-charcoal-200 dark:bg-charcoal-700 rounded' />
    <div className='w-full space-y-4 mt-4'>
      <div className='h-12 w-full bg-charcoal-200 dark:bg-charcoal-700 rounded-lg' />
      <div className='h-12 w-full bg-charcoal-200 dark:bg-charcoal-700 rounded-lg' />
      <div className='h-12 w-full bg-charcoal-200 dark:bg-charcoal-700 rounded-lg' />
    </div>
  </div>
);

export default function LoginPage() {
  return (
    <main className='relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden'>
      <div
        className='absolute inset-0 z-0 h-full w-full bg-center bg-no-repeat bg-cover'
        role='img'
        aria-label="Luxurious home in Côte d'Ivoire"
      >
        <Image
          src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80'
          alt="Modern luxurious home in Côte d'Ivoire at dusk"
          fill
          priority
          quality={75}
          sizes='100vw'
          className='object-cover'
        />
        <div className='absolute inset-0 z-10 bg-charcoal-800/70 dark:bg-charcoal-900/80' />
      </div>

      <div className='relative z-10 flex h-full min-h-screen grow flex-col items-center justify-center p-4 sm:p-6 lg:p-8'>
        <div className='flex flex-col w-full max-w-md flex-1 items-center justify-center'>
          <Suspense fallback={<FormSkeleton />}>
            <SignInForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
