<section className="relative bg-[#17254e] overflow-hidden">
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
  <svg
    className="block w-full h-20"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
  >
    <path
      d="M0,30 C240,45 480,25 720,30 960,35 1200,45 1440,30 L1440,0 L0,0 Z"
      fill="white"
    />
  </svg>
</div>

{/* Floating abstract shapes */}

<div className="relative max-w-6xl mx-auto px-6 py-28 text-center text-white z-10">
  {/* Heading */}
  <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
    Why Choose WAARC
  </h2>
  <p className="mx-auto mt-4 max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
    Combining global expertise with local insights for trusted
    solutions.
  </p>

  {/* Cards */}
  <div className="mt-20 grid gap-10 md:grid-cols-3">
    {/* Card 1 */}
    <div className="relative group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-lg hover:scale-105 transform transition-all duration-400 flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-14 w-14 mb-3 rounded-full bg-indigo-500/20">
        <Globe className="h-7 w-7 text-indigo-400" />
      </div>
      <h4 className="text-xl font-medium mb-2">Global Perspective</h4>
      <p className="text-gray-300 text-sm leading-relaxed">
        International standards with deep local understanding.
      </p>
    </div>

    {/* Card 2 */}
    <div className="relative group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-lg hover:scale-105 transform transition-all duration-400 flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-14 w-14 mb-3 rounded-full bg-yellow-400/20">
        <Lightbulb className="h-7 w-7 text-yellow-400" />
      </div>
      <h4 className="text-xl font-medium mb-2">Research-Driven</h4>
      <p className="text-gray-300 text-sm leading-relaxed">
        Evidence-based insights for tangible impact.
      </p>
    </div>

    {/* Card 3 */}
    <div className="relative group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 shadow-lg hover:scale-105 transform transition-all duration-400 flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-14 w-14 mb-3 rounded-full bg-green-400/20">
        <Users className="h-7 w-7 text-green-400" />
      </div>
      <h4 className="text-xl font-medium mb-2">Trusted Partner</h4>
      <p className="text-gray-300 text-sm leading-relaxed">
        Long-term collaborations built on integrity.
      </p>
    </div>
  </div>
</div>
</section>