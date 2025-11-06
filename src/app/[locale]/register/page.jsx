import { Suspense } from 'react';
import Image from 'next/image';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata = {
  title: "Register | Q Homes - Your Gateway to Côte d'Ivoire Real Estate",
  description: "Create a Q Homes account to save listings, manage visits, and access personalized services in Côte d'Ivoire.",
  keywords: 'Q Homes register, sign up, Côte d\'Ivoire real estate, create account',
  openGraph: {
    title: 'Register | Q Homes',
    description: 'Create your Q Homes account',
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

export default function RegisterPage() {
  return (
    <main className='relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden'>
      <div
        className='absolute inset-0 z-0 h-full w-full bg-center bg-no-repeat bg-cover'
        role="img"
        aria-label="Luxurious home in Côte d'Ivoire"
      >
        <Image
          src='https://lh3.googleusercontent.com/aida-public/AB6AXuB2RYaCRA7poFljSM_JwoPSJlEEqOxYDqB8cHJL_NxZrZilTRqZO8b15yOJyq5E_l8dmrXMDspudSzvzSRMQof-5lf4bGPZrUj9fCXQnxdPp91ZOlFDHMLU2O_Nu58LvAjEqZo1fpskQ6Fcbfmol8D6e5PIkDtF5XD0eSdK2QNudYh7sKJ1u_6qnnqAyhYrzegFUpWbyi-nLjZVBzB7-jPfR-tNRBdzx7sDMY7fq6Kxx9ucGDkFBd9ex00Hmg3yuMJXP91EQM2iKrc'
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
            <RegisterForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
