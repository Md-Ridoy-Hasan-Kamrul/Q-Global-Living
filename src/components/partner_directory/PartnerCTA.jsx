export default function PartnerCTA() {
  return (
    <section className="my-16">
      <div className="bg-[#001f3f] dark:bg-[#001f3f]/80 text-white rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Become a Q Homes Partner
          </h2>
          <p className="text-lg text-white/80">
            Join our exclusive network of trusted professionals and connect with
            a dedicated audience of home buyers and sellers.
          </p>
        </div>
        <button className="flex-shrink-0 flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-black/70 text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
          <span>Join Our Network</span>
        </button>
      </div>
    </section>
  );
}
