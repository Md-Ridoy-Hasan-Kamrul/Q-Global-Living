import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";

export default function MainContent({ learnData, speakers }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 py-5">
      {/* Left Column */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        {/* About */}
        <section>
          <h2 className="text-primary text-[22px] font-bold pb-3 pt-5">
            About The Event
          </h2>
          <p className="text-text-light dark:text-text-dark/90 text-base leading-relaxed">
            This exclusive webinar is designed for savvy investors looking to
            capitalize on Abidjan,s dynamic property market.
          </p>
        </section>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-solid border-black/10 dark:border-white/10">
            <div className="flex items-start gap-3 py-4 pr-2 border-b border-solid border-black/10 dark:border-white/10 sm:border-b-0">
              <FaRegCalendarAlt className="material-symbols-outlined text-primary mt-1" />
              <div className="flex flex-col gap-1">
                <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">
                  Date &amp; Time
                </p>
                <p className="text-text-light dark:text-text-dark text-sm font-semibold leading-normal">
                  October 26, 2024 at 7:00 PM GMT
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 py-4 sm:pl-2">
              <CiVideoOn className="material-symbols-outlined text-primary mt-1" />
              <div className="flex flex-col gap-1">
                <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">
                  Location
                </p>
                <p className="text-text-light dark:text-text-dark text-sm font-semibold leading-normal">
                  Live on Zoom
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-primary text-[22px] font-bold pb-3 pt-5">
            What You,ll Learn
          </h2>
          <ul className="space-y-3">
            {learnData.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-text-light dark:text-text-dark/90">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Speakers */}
        <section>
          <h2 className="text-primary text-[22px] font-bold pb-3 pt-5">
            Meet The Speakers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {speakers.map((sp, i) => (
              <div key={i} className="flex items-center gap-4">
                <Image
                  src={sp.img}
                  alt={sp.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-text-light dark:text-text-dark">
                    {sp.name}
                  </p>
                  <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                    {sp.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column - Registration Form */}
      <div className="lg:col-span-1" id="register">
        <div className="sticky top-10 bg-white dark:bg-background-dark/50 p-6 rounded-lg shadow-lg border border-black/5 dark:border-white/10">
          <h3 className="text-xl font-bold text-center mb-1 text-text-light dark:text-text-dark">
            Save Your Seat
          </h3>
          <p className="text-sm text-center text-text-light/70 dark:text-text-dark/70 mb-6">
            Register for free to get the access link.
          </p>
          <form className="space-y-4">
            <div>
              <label
                className="text-sm font-medium text-text-light dark:text-text-dark/90"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                className="mt-2 px-2 py-1 block w-full h-10 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-background-dark dark:text-text-dark placeholder:text-gray-400 dark:placeholder:text-gray-500"
                id="full-name"
                placeholder="Enter your full name"
                type="text"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-text-light dark:text-text-dark/90"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="mt-2 px-2 py-1 block w-full h-10 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-background-dark dark:text-text-dark placeholder:text-gray-400 dark:placeholder:text-gray-500"
                id="email"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-text-light dark:text-text-dark/90"
                htmlFor="phone"
              >
                Phone Number
                <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <input
                className="mt-2 px-2 py-1 block w-full h-10 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-background-dark dark:text-text-dark placeholder:text-gray-400 dark:placeholder:text-gray-500"
                id="phone"
                placeholder="+1 (555) 123-4567"
                type="tel"
              />
            </div>
            <button
              className="w-full flex items-center justify-center rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105"
              type="submit"
            >
              Register Now
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-text-light/70 dark:text-text-dark/70 mb-2">
              Share this exclusive event:
            </p>
            <div className="flex justify-center items-center gap-4">
              {/* Facebook */}
              <a
                className="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.336 8.905H4.002v-8.59h2.671v8.59zM17.638 2H6.362A4.362 4.362 0 002 6.362v11.276A4.362 4.362 0 006.362 22h11.276A4.362 4.362 0 0022 17.638V6.362A4.362 4.362 0 0017.638 2z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              {/* Facebook alternative / LinkedIn */}
              <a
                className="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              {/* Twitter */}
              <a
                className="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
