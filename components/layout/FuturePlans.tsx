export default function FuturePlans() {
  return (
    <section className="bg-white pt-8 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="text-sm font-semibold text-[#f4b740]">Future Plans</span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1e2a4a] md:text-4xl">
            Advancing Research and Innovation
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Focused on expanding interdisciplinary research, capacity-building initiatives, and policy-oriented consulting.
          </p>
        </div>

        <div className="flex min-h-70 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center">
          <div className="animate-fade-in-up-plans">
            <div className="relative mx-auto mb-6 h-20 w-20">
              <span className="absolute inset-0 animate-spin-slow-18 rounded-full border border-dashed border-[#1e2a4a]/30" />
              <span className="absolute inset-3 animate-spin-reverse-12 rounded-full border border-[#f4b740]/40" />
              <span className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-[#1e2a4a]" />
              <span className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-[#f4b740]" />
              <span className="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#1e2a4a]" />
              <span className="absolute inset-6 rounded-full bg-linear-to-br from-[#1e2a4a] to-[#f4b740] shadow-md" />
            </div>

            <h3 className="text-2xl font-bold text-[#1e2a4a]">Coming Soon</h3>
            <p className="mt-3 max-w-md text-gray-600">
              Our future research plans and strategic initiatives are currently under development. Stay tuned for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
