"use client";

import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="flex flex-col gap-10 px-4">
      <h2 className="text-3xl font-bold font-heading text-center">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="flex flex-col gap-4 p-8 rounded-xl bg-[#E0E0D8] dark:bg-[#182742]">
          <p className="italic">
            The concierge service from Q Homes was a lifesaver. They handled
            everything from our visas to finding the perfect school for our
            kids. We felt at home in Abidjan from the moment we landed.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPiPIlQL_B47AWYgOXNzaDV4DCkbnVsVK82djBYkMmpgMd_BabomDFq-Bk1YedbCBUj2tsZj4C_BN7XRnct0l-3cpVuCWah20YXfA1geOoJ8dwQCMJufEqUkoEyacs7ipqAZEdEUSS12s5DepU0S6bLpFibCWN4s3W467PNylJXB1bQximOnNInjg0bYzFb1R6RSvliXZqo36f8Ufp5-hD0BIwBXcJ3bkd7TKYY_4YihUqspLMpA0hTSx9_W-Jyff0_2AWaCqX9Uk"
              alt="Photo of a satisfied client, The Dubois Family"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold">The Dubois Family</h4>
              <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                Relocated from Paris
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col gap-4 p-8 rounded-xl bg-[#E0E0D8] dark:bg-[#182742]">
          <p className="italic">
            As a corporation moving key personnel, we needed a reliable partner.
            Q Homes corporate package was flawless. Their professionalism and
            local knowledge are unmatched.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83mHg4jqcxyyYnrTVuMukV5F4DD13tGXIhPfvdUvLExFk4ix6vzJWCnVuHu4VD71q0f8T-AEPF7ft9jvGuZtPz76UowOyh94sCejA7l_ZMC6IUAkJeKmm1kAtthu5P76zMi2beDF0yCwqdCrkeet8gbgwtQiA19sk-HEtTLmA4ZPXc0iYnJei3l0NngK8Q_M5gT-SAltG_WbDRFmRntGk7Fnj6a-jreZXWtmkxtLZjROo1wq6L9ikioo_Oe8r24rebPn7uEan2DA"
              alt="Photo of a satisfied client, Amina Diallo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold">Amina Diallo</h4>
              <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                HR Manager, Tech Solutions Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
