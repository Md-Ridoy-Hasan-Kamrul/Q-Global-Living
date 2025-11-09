export default function FinalCTASection() {
  return (
    <section className="bg-[#0A1931] text-white rounded-xl p-10 md:p-16 flex flex-col items-center text-center gap-6">
      <h2 className="text-3xl font-bold font-heading">
        Ready to Make Your Move Effortless?
      </h2>

      <p className="max-w-2xl">
        Let our experts handle the details so you can focus on the excitement of
        your new beginning in Côte d’Ivoire.
      </p>

      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
        <span className="truncate text-black/90">Request a Quote</span>
      </button>
    </section>
  );
}
