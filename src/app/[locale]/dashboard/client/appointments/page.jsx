export const metadata = {
  title: 'Appointments - Client Dashboard',
  description: 'Manage your property viewing appointments',
};

import CountdownTimer from '../../../../../components/dashboard/client/CountdownTimer';
import RegistrationCard from '../../../../../components/dashboard/client/RegistrationCard';
import Image from 'next/image';


export default function Appointments() {
  return (
    <div className="space-y-6">
      {/* Hero / Webinar banner */}
      <div className="rounded-lg overflow-hidden px-0">
        <div
          className="w-full bg-center bg-cover rounded-lg"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,8,15,0.45), rgba(6,8,15,0.45)), url('https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1800&q=80')",
          }}
        >
          <div className=" px-4 py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">Exclusive Webinar: Investing in Abidjan Real Estate Market</h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl">Join our expert panel to uncover the lucrative opportunities in the thriving property market in Côte d&apos;Ivoire. Learn key strategies for successful investment and get your questions answered live.</p>

            <div className="mt-8">
              <button className="inline-flex items-center rounded-md bg-yellow-500 px-5 py-3 text-sm font-semibold text-[#0F1B2E] hover:bg-yellow-600">Confirm Your Spot</button>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className=" px-4">
        {/* use client countdown component */}
        <CountdownTimer targetDate="2025-12-31T12:00:00Z" />
      </div>
      {/* Event details + registration */}
      <section className=" grid grid-cols-1 md:grid-cols-3 gap-8 items-start px-4">
        <div className="md:col-span-2 bg-transparent">
          <h2 className="text-2xl font-bold text-[#D1A92B]">About The Event</h2>
          <p className="mt-4 text-slate-700">This exclusive webinar is designed for savvy investors looking to capitalize on the dynamic and rapidly growing real estate market in Abidjan. Whether you are a seasoned investor or new to the Ivorian market, our panel of experts will provide you with invaluable insights, data-driven analysis, and actionable strategies to maximize your returns and navigate the local landscape with confidence.</p>

          <div className="mt-6 border-t pt-6">
            <div className="grid grid-cols-2 gap-6 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <div className="text-[#D1A92B] mt-1">📅</div>
                <div>
                  <div className="text-xs text-slate-500">Date & Time</div>
                  <div className="font-medium text-slate-900">October 26, 2024 at 7:00 PM GMT</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#D1A92B] mt-1">📍</div>
                <div>
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="font-medium text-slate-900">Live on Zoom</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#D1A92B]">What You&apos;ll Learn</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#D1A92B] mt-1">✔️</span> Market analysis: Key growth drivers in Abidjan&apos;s property sector.</li>
              <li className="flex items-start gap-3"><span className="text-[#D1A92B] mt-1">✔️</span> Investment hotspots: Identifying the most promising neighborhoods.</li>
              <li className="flex items-start gap-3"><span className="text-[#D1A92B] mt-1">✔️</span> Legal framework: Navigating property acquisition and ownership laws.</li>
              <li className="flex items-start gap-3"><span className="text-[#D1A92B] mt-1">✔️</span> Financing options: Securing local and international funding.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-[#D1A92B]">Meet The Speakers</h3>
            <div className="mt-6 grid grid-cols-2 gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60" width={56} height={56} alt="Jean-Luc Bamba" unoptimized className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Jean-Luc Bamba</div>
                  <div className="text-sm text-slate-500">Real Estate Analyst</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1545996124-1f9c7b3c9b6b?auto=format&fit=crop&w=200&q=60" width={56} height={56} alt="Aminata Koné" unoptimized className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Aminata Koné</div>
                  <div className="text-sm text-slate-500">Investment Strategist</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24">
            <RegistrationCard />
          </div>
        </div>
      </section>
    </div>
  );
}


